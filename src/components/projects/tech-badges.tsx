export default function TechBadges({stack}: {stack: string[]}) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {stack.map((t) => (
        <span
          key={t}
          className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
