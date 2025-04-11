
import { useState} from 'react';



export default function Form() {
    const [ingredient, setIngredient] = useState([]);

    function handelSubmit(e) { 
        e.preventDefault();
        setIngredient([...ingredient, e.target.ingredient.value]);
        e.target.ingredient.value = "";

    }
    return (
        <>
            <form  onSubmit={handelSubmit}  className="add-form">
                <input className="form-input"
                type="text" 
                name="ingredient" 
                aria-label="add-ingredient"
                placeholder="e.g oregano" />
                <button name="submit" className="btn" type="submit" value="Add Ingredient">+ Add Ingredient</button>
                <button onClick={() => setIngredient([])} className='btn'>Clear List</button>
            </form>
            <ul>
                {ingredient.map((ingredient, index) => {
                return ingredient &&<li key={index}>{ingredient}</li>
                }
            )}
            </ul>
        </>
    );
}