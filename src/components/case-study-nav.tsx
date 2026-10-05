import { useEffect, useState } from "react";

export type CaseStudyNavItem = {
  id: string;
  num: string;
  label: string;
};

export function CaseStudyNav({ items }: { items: CaseStudyNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -64%", threshold: [0, 0.15, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Case study sections" className="case-nav">
      <div className="case-nav-track">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "location" : undefined}
            className="case-nav-link"
          >
            <span>{item.num}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}