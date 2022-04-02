import React, { useState } from 'react';
import Axios from "axios";

function Api() {
    const YOUR_APP_ID = "17d531d8";
    const YOUR_APP_KEY = "4250479211cf86c75ca61a0789ddd4f4";
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

    const getRecipeInfo = async () => {
        var result = await Axios.get(url);
        setRecipes(result.data.hits);
        console.log(result.data.hits);
    };

    const onSubmit = (e) => {
        e.preventDefault(); //this will prevent page from reloading.
        getRecipeInfo();
    };

    return(
       <form class="search" onSubmit={onSubmit}>
       <input
          type="text"
          placeholder="What´s left in my fridge?"
          autoComplete="Off"
          className="app__input"
          value={query}
          onChange={(e) => {setQuery(e.target.value);
        <input type = "submit"
               value = "Get Recipe"
               className = "app__submit" />
          }}
        />
      </form>
      
    )
};
export default Api;