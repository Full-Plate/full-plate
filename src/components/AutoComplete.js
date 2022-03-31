import axios from "axios";
import { useEffect, useState } from "react";

function IngredientSelector(props){
    const name =props.auto;
    const YOUR_APP_ID = "17d531d8";
    const YOUR_APP_KEY = "4250479211cf86c75ca61a0789ddd4f4";
    const [ingredients, setIngredients] = useState([]);
    const [text, settext] = useState('');
    const [suggestions, setSuggestions] = useState([])


    useEffect(() => {
    const loadIngredients = async()=>{
        const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
        console.log(response.data)
        setIngredients(response.data.data)
        }
        loadIngredients()

 }, [])
    const onSuggestHandler = (text)=> {
        setText(text);
        setSuggestions([]);
    }

    const onChangeHandler = (text) => {
        let matches =[]
        if(text.length>0) {
        matches = ingredients.filter(ing=> {
            const regex = new RegExp(`${text}`, "gi");
            return ingredients.match(regex)
        })
    }
    console.log('')
    setSuggestions(matches)
    settext(text)
}

 return (
     <div className ="loadIngredients">
         <input type="text"
         onChange={e => onChangeHandler(e.target.value)}
         value={text}
         onBlur={()=> {
             setTimeout(() => {
                 setSuggestions([])
                }, 100);
         }
        }
         />
         {suggestions && suggestions.map((suggestion,i) =>
         <div  key={i} onClick= {() => onSuggestHandler(suggest.ingredient)} >
               {suggestion.ingredient}</div>
         )}
     </div>

 );}

export default IngredientSelector;