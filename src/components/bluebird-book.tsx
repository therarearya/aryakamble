import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import type { GalleryItem } from "@/lib/case-studies";

const PAGE_WIDTH = 4.05;
const PAGE_HEIGHT = 5.72;
const LEAF_COUNT = 12;
const PAGE_SEGMENTS = 28;
const COVER_DEPTH = 0.105;
const PAPER_STEP = 0.025;

function createPageGeometry() {
  const geometry = new THREE.PlaneGeometry(PAGE_WIDTH, PAGE_HEIGHT, PAGE_SEGMENTS, 1);
  geometry.translate(PAGE_WIDTH / 2, 0, 0);
  return geometry;
}

function prepareTexture(texture: THREE.Texture) {
  const prepared = texture.clone();
  prepared.colorSpace = THREE.SRGBColorSpace;
  prepared.anisotropy = 8;
  prepared.needsUpdate = true;
  return prepared;
}

function useTurnProgress(target: number, reducedMotion: boolean) {
  const progress = useRef(target);
  const velocity = useRef(0);
  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    if (reducedMotion) {
      progress.current = target;
      velocity.current = 0;
      return;
    }
    const distance = target - progress.current;
    velocity.current += distance * 38 * delta;
    velocity.current *= Math.exp(-10 * delta);
    progress.current = THREE.MathUtils.clamp(progress.current + velocity.current * delta, 0, 1);
    if (Math.abs(distance) < 0.0002 && Math.abs(velocity.current) < 0.0002) {
      progress.current = target;
      velocity.current = 0;
    }
  });
  return progress;
}

function CurvedLeaf({
  index,
  turn,
  front,
  back,
  reducedMotion,
}: {
  index: number;
  turn: number;
  front: THREE.Texture;
  back: THREE.Texture;
  reducedMotion: boolean;
}) {
  const geometry = useMemo(createPageGeometry, []);
  const original = useMemo(
    () => Float32Array.from(geometry.getAttribute("position").array as ArrayLike<number>),
    [geometry],
  );
  const target = index < turn ? 1 : 0;
  const progress = useTurnProgress(target, reducedMotion);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame(() => {
    const position = geometry.getAttribute("position") as THREE.BufferAttribute;
    const eased = THREE.MathUtils.smoothstep(progress.current, 0, 1);
    const lift = Math.sin(eased * Math.PI);
    const restingZ = THREE.MathUtils.lerp(
      (LEAF_COUNT - index) * PAPER_STEP,
      index * PAPER_STEP,
      eased,
    );

    for (let vertex = 0; vertex < position.count; vertex += 1) {
      const offset = vertex * 3;
      const x = original[offset] ?? 0;
      const y = original[offset + 1] ?? 0;
      const ratio = x / PAGE_WIDTH;
      const curl = Math.sin(ratio * Math.PI) * lift;
      const angle = -Math.PI * eased + curl * 0.34;
      const foldedX = Math.cos(angle) * x;
      const foldedZ = -Math.sin(angle) * x + curl * 0.38 + restingZ;
      const edgeTuck = Math.sin(ratio * Math.PI * 2) * lift * 0.025;
      position.setXYZ(vertex, foldedX, y + edgeTuck, foldedZ);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <group>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          map={front}
          side={THREE.FrontSide}
          roughness={0.76}
          metalness={0}
          polygonOffset
          polygonOffsetFactor={-1}
        />
      </mesh>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          map={back}
          side={THREE.BackSide}
          roughness={0.78}
          metalness={0}
          polygonOffset
          polygonOffsetFactor={-1}
        />
      </mesh>
    </group>
  );
}

function CoverLeaf({
  index,
  turn,
  front,
  back,
  reducedMotion,
}: {
  index: number;
  turn: number;
  front: THREE.Texture;
  back: THREE.Texture;
  reducedMotion: boolean;
}) {
  const hinge = useRef<THREE.Group>(null);
  const target = index < turn ? 1 : 0;
  const progress = useTurnProgress(target, reducedMotion);
  const edgeMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#172955", roughness: 0.64 }),
    [],
  );
  const frontMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ map: front, roughness: 0.7 }),
    [front],
  );
  const backMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ map: back, roughness: 0.72 }),
    [back],
  );
  const materials = useMemo(
    () => [edgeMaterial, edgeMaterial, edgeMaterial, edgeMaterial, frontMaterial, backMaterial],
    [backMaterial, edgeMaterial, frontMaterial],
  );

  useEffect(
    () => () => {
      edgeMaterial.dispose();
      frontMaterial.dispose();
      backMaterial.dispose();
    },
    [backMaterial, edgeMaterial, frontMaterial],
  );

  useFrame(() => {
    if (!hinge.current) return;
    hinge.current.rotation.y = -Math.PI * THREE.MathUtils.smoothstep(progress.current, 0, 1);
    hinge.current.position.z = THREE.MathUtils.lerp(
      (LEAF_COUNT - index) * PAPER_STEP,
      index * PAPER_STEP,
      progress.current,
    );
  });

  return (
    <group ref={hinge}>
      <mesh
        position={[PAGE_WIDTH / 2, 0, 0]}
        material={materials}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[PAGE_WIDTH, PAGE_HEIGHT, COVER_DEPTH]} />
      </mesh>
    </group>
  );
}

function PageEdges({ turn }: { turn: number }) {
  const rightThickness = Math.max(0, LEAF_COUNT - turn - 1) * PAPER_STEP;
  const leftThickness = Math.max(0, turn - 1) * PAPER_STEP;
  return (
    <>
      {rightThickness > 0 && (
        <mesh position={[PAGE_WIDTH / 2, 0, -0.02]} receiveShadow castShadow>
          <boxGeometry args={[PAGE_WIDTH - 0.08, PAGE_HEIGHT - 0.08, rightThickness + 0.07]} />
          <meshStandardMaterial color="#eee9de" roughness={0.92} />
        </mesh>
      )}
      {leftThickness > 0 && (
        <mesh position={[-PAGE_WIDTH / 2, 0, -0.02]} receiveShadow castShadow>
          <boxGeometry args={[PAGE_WIDTH - 0.08, PAGE_HEIGHT - 0.08, leftThickness + 0.07]} />
          <meshStandardMaterial color="#eee9de" roughness={0.92} />
        </mesh>
      )}
      <mesh position={[0, 0, -0.08]} castShadow>
        <boxGeometry args={[0.15, PAGE_HEIGHT + 0.08, 0.22]} />
        <meshStandardMaterial color="#142652" roughness={0.68} />
      </mesh>
    </>
  );
}

function BookModel({
  pageUrls,
  turn,
  reducedMotion,
}: {
  pageUrls: string[];
  turn: number;
  reducedMotion: boolean;
}) {
  const loaded = useLoader(THREE.TextureLoader, pageUrls);
  const textures = useMemo(
    () => loaded.map((texture) => prepareTexture(texture)),
    [loaded],
  );
  const { viewport } = useThree();
  const scale = Math.min(1, viewport.width / 9.2);

  useEffect(() => () => textures.forEach((texture) => texture.dispose()), [textures]);

  return (
    <group scale={scale} rotation={[-0.08, 0, 0]} position={[0, -0.12, 0]}>
      <PageEdges turn={turn} />
      {Array.from({ length: LEAF_COUNT }, (_, index) => {
        const front = textures[index * 2];
        const back = textures[index * 2 + 1];
        if (!front || !back) return null;
        if (index === 0 || index === LEAF_COUNT - 1) {
          return (
            <CoverLeaf
              key={index}
              index={index}
              turn={turn}
              front={front}
              back={back}
              reducedMotion={reducedMotion}
            />
          );
        }
        return (
          <CurvedLeaf
            key={index}
            index={index}
            turn={turn}
            front={front}
            back={back}
            reducedMotion={reducedMotion}
          />
        );
      })}
    </group>
  );
}

function BookScene({
  pageUrls,
  turn,
  reducedMotion,
}: {
  pageUrls: string[];
  turn: number;
  reducedMotion: boolean;
}) {
  return (
    <>
      <ambientLight intensity={0.72} />
      <directionalLight
        position={[-3, 6, 8]}
        intensity={2.4}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-7}
        shadow-camera-right={7}
        shadow-camera-top={7}
        shadow-camera-bottom={-7}
      />
      <pointLight position={[5, -3, 5]} intensity={0.8} color="#f2a590" />
      <Suspense fallback={null}>
        <BookModel pageUrls={pageUrls} turn={turn} reducedMotion={reducedMotion} />
        <Environment resolution={64}>
          <Lightformer intensity={2.2} position={[0, 5, 5]} scale={[8, 5, 1]} />
          <Lightformer
            intensity={1.2}
            color="#f3c8b9"
            position={[-5, 1, 2]}
            rotation-y={Math.PI / 2}
            scale={[7, 3, 1]}
          />
        </Environment>
      </Suspense>
      <mesh position={[0, 0, -0.48]} receiveShadow>
        <planeGeometry args={[28, 18]} />
        <meshStandardMaterial color="#d7c9b7" roughness={0.98} />
      </mesh>
    </>
  );
}

function pageStatus(turn: number) {
  if (turn === 0) return "Front cover";
  if (turn === LEAF_COUNT) return "Back cover";
  const left = turn * 2;
  return `Pages ${left}–${left + 1}`;
}

export function BluebirdBook({ items }: { items: GalleryItem[] }) {
  const [turn, setTurn] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const pageUrls = useMemo(() => items.map((item) => item.src), [items]);
  const previous = useCallback(() => setTurn((value) => Math.max(0, value - 1)), []);
  const next = useCallback(() => setTurn((value) => Math.min(LEAF_COUNT, value + 1)), []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, previous]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (start === null) return;
    const distance = event.clientX - start;
    if (Math.abs(distance) > 42) {
      if (distance < 0) next();
      else previous();
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX - bounds.left < bounds.width / 2) previous();
    else next();
  };

  return (
    <div className="book-stage overflow-hidden border border-border bg-foreground text-background">
      <div className="flex items-center justify-between border-b border-background/20 px-4 py-3 sm:px-6">
        <span className="text-[10px] uppercase tracking-[0.18em] text-background/70">
          Blue Bird Industries · Company profile
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em]" aria-live="polite">
          {pageStatus(turn)}
        </span>
      </div>

      <div
        className="relative aspect-[4/5] touch-pan-y cursor-grab sm:aspect-[16/10]"
        onPointerDownCapture={onPointerDown}
        onPointerUpCapture={onPointerUp}
        onPointerCancelCapture={() => {
          pointerStart.current = null;
        }}
        role="group"
        aria-label="Interactive 3D company profile. Click or swipe to turn pages."
      >
        <Canvas
          shadows="basic"
          dpr={[1, 1.6]}
          camera={{ position: [0, 0.45, 11], fov: 45 }}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={["#d7c9b7"]} />
          <BookScene pageUrls={pageUrls} turn={turn} reducedMotion={reducedMotion} />
        </Canvas>
        <div className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-[9px] uppercase tracking-[0.16em] text-foreground/60 sm:bottom-5">
          Swipe or tap a side to turn
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-background/20 px-4 py-4 sm:px-6">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={previous}
          disabled={turn === 0}
          aria-label="Previous page"
          title="Previous page"
          className="border-background/35 bg-transparent text-background shadow-none hover:bg-background hover:text-foreground"
        >
          <ChevronLeft aria-hidden="true" />
        </Button>
        <div className="flex items-center gap-3" aria-hidden="true">
          {Array.from({ length: LEAF_COUNT + 1 }, (_, index) => (
            <span
              key={index}
              className={`block h-px transition-all duration-300 ${
                index === turn ? "w-5 bg-coral" : "w-2 bg-background/35"
              }`}
            />
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={next}
          disabled={turn === LEAF_COUNT}
          aria-label="Next page"
          title="Next page"
          className="border-background/35 bg-transparent text-background shadow-none hover:bg-background hover:text-foreground"
        >
          <ChevronRight aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}