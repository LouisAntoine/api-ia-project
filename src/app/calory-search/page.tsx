'use client'

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { getRecipesForCalory } from '../services/search.service';
import { Recipe } from "../interfaces/recipe.enum";

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([] as Recipe[]);
  const [isResult, setIsResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  var recipes: Recipe[] = [];

  var count = 0;

  const highCalory = async () => {
    await handleSearch('haut apport calorique');
  }

  const midCalory = async () => {
    await handleSearch('moyen apport calorique');
  }

  const lowCalory = async () => {
    await handleSearch('faible apport calorique');
  }

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    await getRecipesForCalory(query).then(results => {
      setIsLoading(false);
      if (results.length === 0) {
        setIsResult(false);
        return;
      }
      setResults(results);
      setIsResult(true);
    });
  };

  return (
    <div className="search-wrap">
      <div className="container text-center mt-20 search-content h-screen flex flex-col">
        <h1 className="text-4xl font-bold mb-6">Recherche de Recettes</h1>
        <div className="flex flex-col gap-5 w-1/2 mx-auto">
          <button onClick={highCalory} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Apport calorique élevé
          </button>
          <button onClick={midCalory} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Apport calorique moyen
          </button>
          <button onClick={lowCalory} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Apport calorique faible
          </button>
        </div>

        {isLoading && <p>Vos recettes sont en préparation...</p>}
        {!isResult ? <p>Aucune recette trouvée</p> :
          <div className="pt-6 pb-6">
            {results.map(recipe => (
              <div key={recipe.id}>
                <Link href={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                  {recipe.title}
                </Link>
              </div>
            ))}
          </div>
        }


        <Link href="/" className="text-blue-500 hover:underline text-lg font-bold mt-auto">
          Retour à l'accueil
        </Link>
      </div>
    </div >
  );
}
