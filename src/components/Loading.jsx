import ClipLoader from 'react-spinners/ClipLoader';

export default function Loading({ children: title = 'Carregando' }) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div>
        <ClipLoader size={150}></ClipLoader>
      </div>
      <h3>{title}</h3>
    </div>
  );
}
