export default function SectionSeparator({ mini }) {
  return (
    <hr className={`border-accent-2 ${mini ? "mt-14 mb-16" : "mt-28 mb-24"}`} />
  );
}
