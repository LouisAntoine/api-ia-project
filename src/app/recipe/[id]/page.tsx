'use client';

import '@/app/globals.css';
import { Recipe } from '@/app/interfaces/recipe.enum';
import recipes from '@/app/data/recipes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/authContext';
import styles from '@/app/styles/recipe.module.css';
import { addToFavorites, removeFromFavorites } from '@/app/services/favorites.service';
import { useRouter } from 'next/navigation';


export default function Recipe({ params }: { params: { id: string } }) {
  const router = useRouter();
  const id = parseInt(params.id);
  const recipe = recipes.find(recipe => recipe.id === id);

  const [recipeComments, setRecipeComments] = useState<string[]>([]);
  const [recipeRating, setRecipeRating] = useState(Number);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [recommandations, setRecommandations] = useState([] as Recipe[]);
  const [isAlreadyInFavorites, setIsAlreadyInFavorites] = useState(false);
  const [isResult, setIsResult] = useState(true);

  var count = 0;

  const { loggedIn } = useAuth();

  const title = recipe?.title.replace(/[\s_]+/g, '-').toLowerCase();
  const img = "/assets/img/" + recipe?.image

  useEffect(() => {
    if (!recipe) return;
    if (!recipe.ratings) return;
    const averageRating = calculateAverageRating();
    setRecipeRating(averageRating);
    setRecipeComments(recipe.ratings.map(recipeRating => recipeRating.comment))
  }, [recipe]);

  const handleRate = async () => {
    const newAverageRating = calculateAverageRating(true);
    setRecipeRating(newAverageRating);
    setRecipeComments([...recipeComments, comment]);
  };

  const calculateAverageRating = (isFromNewComment = false) => {
    const totalRating = recipe?.ratings?.reduce((total, rating) => total + rating.rating, 0);

    if (isFromNewComment) {
      return totalRating
        ? (totalRating + rating) / ((recipe?.ratings?.length ?? 0) + 1)
        : rating / 1;
    }

    return (totalRating ? totalRating / (recipe?.ratings?.length ?? 0) : 0);
  };

  useEffect(() => {
    if (count > 0) return;
    const fetchData = async () => {
      if (!title) return;
      try {
        const response = await fetch("/api/recommandations", {
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
        const dataContent = JSON.parse(data.content);

        setIsLoading(false);

        const index = dataContent.results.findIndex((recipe: Recipe) => recipe.id === id);
        dataContent.results.splice(index, 1);

        if (dataContent.results.length === 0) {
          setIsResult(false);
          return;
        }

        setRecommandations(dataContent.results);
        setIsResult(true);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
    count++;
  }, [title]);


  const checkIfAlreadyInFavorites = () => {
    if (!loggedIn) return;
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user) return;

    setIsAlreadyInFavorites(user.favorites.some((favorite: Recipe) => favorite.id === recipe?.id));
  }

  useEffect(() => {
    checkIfAlreadyInFavorites();
  }, []);

  const handleFavorites = async () => {
    if (!recipe) return;
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user) return;

    if (isAlreadyInFavorites) {
      removeFromFavorites(user.id, recipe.id);
      setIsAlreadyInFavorites(false);
    } else {
      addToFavorites(user.id, recipe.id);
      setIsAlreadyInFavorites(true);
    }
  }

  const handleLogin = () => {
    router.push('/login');
  }

  const handleLogout = () => {
    router.push('/logout');
  }


  return (
    <div className='container text-center mt-20'>
      <div className="flex justify-between row-auto mb-10" >
        <Link href='/search' className="text-blue-500 hover:underline">
          Retour à la page précédente
        </Link>
        {loggedIn ?
          <div className="flex gap-3">
            <button onClick={handleFavorites} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-auto">
              {isAlreadyInFavorites ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-auto">
              Se déconnecter
            </button>
          </div>

          :
          <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-auto">
            Se connecter
          </button>
        }
      </div>


      <h1 className="text-4xl font-bold mb-6">{recipe?.title}</h1>
      <h5>Temps de préparation: {recipe?.time} minutes</h5>
      {recipeRating ? <h5>Note moyenne : {recipeRating.toFixed(1)}/5</h5> : null}

      <img src={img} alt={recipe?.title} className="w-1/2 mx-auto my-5" />

      <div className="text-left mt-4">
        <h2 className="text-2xl font-bold mb-2">Description :</h2>
        <p>{recipe?.description}</p>
      </div>
      <div className="text-left mt-4">
        <h2 className="text-2xl font-bold mb-2">Ingrédients :</h2>
        <ul className="list-disc list-inside">
          {recipe?.ingredients?.map(ingredient => (
            <li key={ingredient}>{ingredient.charAt(0).toUpperCase()}{ingredient.slice(1)}</li>
          ))}
        </ul>
      </div>

      <div className="text-left mt-4">
        <h2 className="text-2xl font-bold mb-2">Instructions :</h2>
        <ol className="list-decimal list-inside">
          {recipe?.steps?.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="text-left mt-4">
        <h2 className="text-2xl font-bold mb-2">Recommandation de recettes similaires :</h2>
        {isLoading ? <p>Vos recommandations sont en préparation...</p> :
          isResult ?
            <div className="pt-2">
              {recommandations.map(recipe => (
                <div key={recipe.id}>
                  <Link href={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                    {recipe.title}
                  </Link>
                </div>
              ))}
            </div>
            : <p>Aucune recette trouvée</p>
        }
      </div>

      {(recipeComments.length > 0) ?
        <div className="text-left pt-10">
          <h2 className="text-2xl font-bold mb-2">Commentaires :</h2>
          <ol className="list-disc list-inside">
            {recipeComments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ol>
        </div>
        : null}

      <div className="pt-5">
        <Link href={`/accompaniement/${title}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Générer une liste d'accompagnements pensées par nos chefs
        </Link>
      </div>

      <div className="pt-5">
        <Link href={`/shopping-list/${title}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Générer une liste de courses pour réaliser cette recette
        </Link>
      </div>

      <div className="mt-10">
        <div className={styles.ratingForm}>
          <p>Notez cette recette :</p>
          <input type="number" min={0} max={5} value={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
          <p>Commentaire :</p>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
          <button onClick={handleRate}>Noter</button>
        </div>
      </div>
    </div>
  );
}