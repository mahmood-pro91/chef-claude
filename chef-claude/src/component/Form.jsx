
import { useState} from 'react';

import Recipe from './Recipe';
import Aigenerate from './Aigenerate';

export default function Form() {
    const [ingredient, setIngredient] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);

    function handelSubmit(e) { 
        setIngredient(pre => [...pre, e.get('ingredient')]);
    }
    function handelRecipe() { 
        setRecipeShown(!recipeShown);
    }
    return (
        <>
            <form  action={handelSubmit}  className="add-form">
                <input className="form-input"
                type="text" 
                name="ingredient" 
                aria-label="add-ingredient"
                placeholder="e.g oregano" />
                <button name="submit" className="btn" type="submit" value="Add Ingredient">+ Add Ingredient</button>
                <button onClick={() => setIngredient([])} className='btn'>Clear List</button>
            </form>
            <Aigenerate ingredients={ingredient} 
               handelRecipe={handelRecipe}
            />

            <Recipe recipeShown={recipeShown} />
                            


        </>
        
    );
}