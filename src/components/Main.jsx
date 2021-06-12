export default function Main({ children }) {
  return (
    <div
      className=" mx-auto  h-screen  p-4
      bg-gradient-to-b from-indigo-100 via-indigo-400 to-indigo-700 "
    >
      {children}
    </div>
  );
}
