'use client';

import '@/app/globals.css';
import { useState, useEffect } from 'react';

export default function Accompaniement({ params }: { params: { slug: string } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [accompaniement, setAccompaniement] = useState([] as string[]);

  var slug = params.slug;
  var title = decodeURI(slug as string);
  title = title?.replace(/-/g, ' ').toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      if (!title) return;
      try {
        const response = await fetch("/api/accompaniement", {
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
        setAccompaniement(dataContent);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
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

      <h1 className="text-4xl font-bold mb-6">Accompagnements pour {title}</h1>

      <div className="text-left mt-4">
        {isLoading ? <p>Vos accompagnements sont en préparation...</p> : <h2 className="text-2xl font-bold mb-2">Idées d'accompagnements pour votre recette :</h2>}

        <pre className='custom-pre'>{accompaniement}</pre>
      </div>
    </div>
  );
}
