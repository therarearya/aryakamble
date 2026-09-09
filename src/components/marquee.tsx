export function Marquee({ words }: { words: string[] }) {
  const line = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-border py-5">
      <div className="marquee-track">
        {line.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="display flex items-center whitespace-nowrap px-6 text-2xl text-foreground/85 sm:text-4xl"
          >
            {w}
            <span className="px-6 text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
