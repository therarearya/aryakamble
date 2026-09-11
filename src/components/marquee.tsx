export function Marquee({ words }: { words: string[] }) {
  const line = [...words, ...words];
  return (
    <div className="blush-wash overflow-hidden border-y border-border py-10">
      <div className="marquee-track">
        {line.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="display flex items-center whitespace-nowrap px-8 text-5xl text-foreground sm:text-7xl"
          >
            {w}
            <span className="px-8 text-3xl text-coral sm:text-5xl">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
