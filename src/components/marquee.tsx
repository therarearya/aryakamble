export function Marquee({ words }: { words: string[] }) {
  const line = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-oxblood bg-oxblood py-7 text-accent-foreground">
      <div className="marquee-track">
        {line.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="display flex items-center whitespace-nowrap px-6 text-4xl text-accent-foreground sm:text-6xl"
          >
            {w}
            <span className="px-6 text-olive">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
