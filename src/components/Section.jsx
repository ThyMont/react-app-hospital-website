export default function Section({ children, backgroundColor = 'bg-blue-200' }) {
  return (
    <div className={`${backgroundColor} mx-auto p-5 space-y-2`}>{children}</div>
  );
}
