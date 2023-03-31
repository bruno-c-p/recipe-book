import {useEffect, useState} from "react";

import { collection, getDocs } from "firebase/firestore";
import {database} from "../../firebase/config.js";

import RecipeList from "../../components/RecipeList/RecipeList.jsx";

import './Home.css';

export default function Home() {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);
        const recipesRef = collection(database, "recipes");
        getDocs(recipesRef).then((querySnapshot) => {
            const recipes = [];
            querySnapshot.forEach((doc) => {
                recipes.push({ ...doc.data(), id: doc.id });
            });
            setData(recipes);
            setIsPending(false);
        }).catch((error) => {
            setError(error.message);
            setIsPending(false);
        });
    }, []);

    return (
        <div className="home">
            { error && <p className="error">{ error }</p> }
            { isPending && <p className="loading">Loading...</p> }
            { data && <RecipeList recipes={data} /> }
        </div>
    );
}