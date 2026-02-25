type SectionTitleProps = {
  overline: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ overline, title, subtitle }: SectionTitleProps) {
  return (
    <header className="section-header">
      <p className="section-overline">{overline}</p>
      <h2>{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  );
}
