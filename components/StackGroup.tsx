export type StackItem = {
  name: string;
  icon: string;
  alt?: string;
};

type StackGroupProps = {
  category: string;
  items: StackItem[];
};

export function StackGroup({ category, items }: StackGroupProps) {
  return (
    <article className="stack-card">
      <h3>{category}</h3>
      <ul className="stack-icon-grid">
        {items.map((item) => (
          <li className="stack-item" key={item.name}>
            <img
              className="stack-icon"
              src={item.icon}
              alt={item.alt ?? item.name}
              loading="lazy"
              width={36}
              height={36}
            />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
