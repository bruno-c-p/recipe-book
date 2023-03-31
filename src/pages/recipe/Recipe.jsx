import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {useTheme} from "../../hooks/useTheme.jsx";

import { doc, getDoc } from "firebase/firestore";
import { database } from "../../firebase/config.js";

import './Recipe.css';

export default function Recipe() {
    const { mode } = useTheme();
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);
        const recipeRef = doc(database, "recipes", id);
        getDoc(recipeRef).then((doc) => {
            if (doc.exists()) {
                setData(doc.data());
                setIsPending(false);
            } else {
                setError("Could not find that recipe!");
                setIsPending(false);
            }
        }).catch((error) => {
            setError(error.message);
            setIsPending(false);
        });
    }, [id]);

    return (
        <div className={`recipe ${mode}`}>
            { error && <p className="error">{ error }</p> }
            { isPending && <p className="loading">Loading...</p> }
            { data && (
                <>
                    <h2 className="page-title">{data.title}</h2>
                    <p>Takes {data.cookingTime} to cook.</p>
                    <ul>
                        {data.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                    </ul>
                    <p className="method">{data.method}</p>
                </>
            )}
        </div>
    );
}