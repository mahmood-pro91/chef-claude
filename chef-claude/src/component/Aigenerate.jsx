





export default function Aigenerate(props) {
    console.log(props.ingredients);
    let ingredient = props.ingredients;
    let handelRecipe = props.handelRecipe;
    //const {ingredient, handelRecipe} = props;
    return (
        <>
            
                {ingredient.length >0 ? <section>
                <h2>Ingredients on hand : </h2>
                <ul>
                    {ingredient.map((ingredient, index) => {    
                    return ingredient &&<li key={index}>{ingredient}</li>
                        }
                    )}
                </ul> 
            </section> :null}
            {ingredient.length >3 && 
            <div className="get-recipe-container">
                <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={handelRecipe} >Get a recipe</button>
                </div>}
        </>
    );
}