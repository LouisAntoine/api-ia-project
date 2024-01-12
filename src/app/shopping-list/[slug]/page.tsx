'use client';

import '@/app/globals.css';
import { useState, useEffect } from 'react';

export default function ShoppingList({ params }: { params: { slug: string } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [shoppingList, setShoppingList] = useState('');

  var slug = params.slug;
  var title = decodeURI(slug as string);
  title = title?.replace(/-/g, ' ').toLowerCase();

  var count = 0;

  useEffect(() => {
    if (count > 0) return;
    const fetchData = async () => {
      if (!title) return;
      try {
        const response = await fetch("/api/shopping-list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: title,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const dataContent = data.content;

        setIsLoading(false);
        setShoppingList(dataContent);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
    count++;
  }, [title]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className='container text-center mt-20'>
      <div className='text-left mb-5'>
        <button onClick={handleGoBack} className="text-blue-500 hover:underline">
          Retour à la page précédente
        </button>
      </div>

      <div className='flex flex-row justify-between mb-5'>
        <div className='flex gap-2'>
          <button
            onClick={() => navigator.clipboard.writeText(shoppingList)}
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
            Copier dans le presse-papier
          </button>
          <button
            onClick={() => window.open(`mailto:?subject=Liste de courses pour ${title}&body=${shoppingList}`)}
            className='bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>
            Envoyer par mail
          </button>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)}
            className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'>
            Facebook
          </button>
          <button
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${window.location.href}`)}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Twitter
          </button>
          <button
            onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`)}
            className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded'>
            LinkedIn
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-6">Liste de courses pour {title}</h1>

      <div className="text-left mt-4">
        {isLoading ? <p>Vos ingrédients sont en préparation...</p> : <h2 className="text-2xl font-bold mb-2">Ingrédients :</h2>}

        <pre className='custom-pre'>{shoppingList}</pre>

      </div>
    </div>
  );
}
