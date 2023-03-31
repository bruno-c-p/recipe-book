import { Link } from 'react-router-dom'

import {useTheme} from "../../hooks/useTheme.jsx";

import { doc, deleteDoc } from "firebase/firestore";
import { database } from "../../firebase/config.js";

import Trashcan from '../../assets/trashcan.svg';
import './RecipeList.css'

export default function RecipeList({ recipes }) {
    const { mode } = useTheme();

    if (recipes.length === 0) return (
        <div className="error">No recipes to load...</div>
    )

    const handleClick = async (id) => {
        try {
            await deleteDoc(doc(database, "recipes", id));
        } catch (error) {
            console.error("Error removing document: ", error);
        }
    }

    return (
        <div className="recipe-list">
            {recipes?.map(recipe => (
                <div className={`card ${mode}`} key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                    <img
                        className="delete"
                        src={Trashcan}
                        alt="Delete recipe"
                        onClick={() => handleClick(recipe.id)}
                    />
                </div>
            ))}
        </div>
    )
}