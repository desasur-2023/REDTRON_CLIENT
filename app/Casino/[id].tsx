import { useRouter } from 'next/router';

const CasinoPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Casino {id}</h1>
      {/* Resto del contenido de la página del casino */}
    </div>
  );
};

export default CasinoPage;