'use client'

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { getRecipeById, getRecipesFromOpenAI } from '../services/search.service';
import { Recipe } from "../interfaces/recipe.enum";
import { useAuth } from '../authContext';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([] as Recipe[]);
  const [isResult, setIsResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFavorites, setHasFavorites] = useState(false);
  const [favorites, setFavorites] = useState([] as Recipe[]);
  const [isSeasonnalSearch, setIsSeasonnalSearch] = useState(false);

  const { loggedIn } = useAuth();
  const recognition = new webkitSpeechRecognition();
  var recipes: Recipe[] = [];

  var count = 0;

  useEffect(() => {
    if (count > 0) return;
    const user = loggedIn ? JSON.parse(localStorage.getItem('user') || '{}') : null;
    console.log(user);
    if (user) {
      for (let i = 0; i < user.favorites.length; i++) {
        getRecipeById(user.favorites[i].id).then(recipe => {
          if (!recipe) return;
          recipes.push(recipe);
          setFavorites(recipes);
        });
      }
    }
    count++;
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      setHasFavorites(true);
    }
  }, [favorites]);


  const handleSearch = async () => {
    setIsLoading(true);
    await getRecipesFromOpenAI(query, isSeasonnalSearch).then(results => {
      setIsLoading(false);
      if (results.length === 0) {
        setIsResult(false);
        return;
      }
      setResults(results);
      setIsResult(true);
    });
  };

  recognition.onresult = function (event: SpeechRecognitionEvent) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    setQuery(transcript);
  }

  const reset = () => {
    setQuery('');
  }

  return (
    <div className="search-wrap">
      <div className="container text-center mt-20 search-content h-screen flex flex-col">
        <h1 className="text-4xl font-bold mb-6">Recherche de Recettes</h1>
        <div className='flex flex-col mb-3'>
          <div>
            Recherche vocale :
          </div>
          <div className='flex flex-row gap-5 my-2 justify-center'>
            <button onClick={() => recognition.start()} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Parler
            </button>
            <button onClick={() => recognition.stop()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Stop
            </button>
            <button onClick={reset} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Reset
            </button>
          </div>
          <div>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Entrez vos ingrédients..."
              className="border p-2 mb-1"
            />
            <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Rechercher
            </button>
          </div>
          <div>
            <input
              type="checkbox"
              id="isSeasonnalSearch"
              name="isSeasonnalSearch"
              onChange={e => setIsSeasonnalSearch(e.target.checked)}
              className="mx-2" />
            <label htmlFor="isSeasonnalSearch">Rechercher une recette de saison</label>
          </div>
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

        {hasFavorites ?
          <h2 className="text-2xl font-bold mb-2">Vos recettes favorites :</h2>
          : null
        }
        {hasFavorites ?
          <div className="pt-6 pb-6">
            {favorites.map(recipe => (
              <div key={recipe.id}>
                <Link href={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                  {recipe.title}
                </Link>
              </div>
            ))}
          </div>
          :
          loggedIn ? <p>Vous n'avez pas de recettes favorites</p> : null
        }

        <Link href="/" className="text-blue-500 hover:underline text-lg font-bold mt-auto">
          Retour à l'accueil
        </Link>
      </div>
    </div >
  );
}
