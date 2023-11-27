export default function SectionSeparator({ mini }) {
  return <hr className={`border-accent-2 ${mini ? "my-16" : "mt-28 mb-24"}`} />;
}
