import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-wrap">
      <div className='container text-center mt-20 home-content'>
        <h1 className="text-4xl font-bold mb-6">Bienvenue sur CuisineConnect</h1>
        <p className="text-lg text-gray-600 mb-10">
          Explorez et découvrez de délicieuses recettes pour chaque occasion.
        </p>
        <div className="flex flex-col gap-5 w-1/2 mx-auto">
          <Link href="/search" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Recherche de recettes
          </Link>
          <Link href="/calory-search" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Recherche de recettes par apport calorique
          </Link>
        </div>
      </div>
    </div>
  );
}
