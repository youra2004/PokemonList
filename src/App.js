import classes from "./App.module.css";
import { useEffect, useState } from "react";

// let pokemonRenderList = [];
function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonRenderList, setPokemonRenderList] = useState([]);
  // const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const loadAPI = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=784"
      );
      const data = await response.json();

      const pokemon = data.results;

      setPokemonList(pokemon);
    };

    loadAPI();
  }, []);

  const searchHandler = (event) => {
    // pokemonRenderList = [];
    // console.log(event.target.value);
    // pokemonList.forEach((pok) => {
    //   if (pok.name.includes(event.target.value)) {
    //     console.log("work");
    //     pokemonRenderList.push(pok);
    //   }
    // });
    // if (event.target.value.length !== 0) {
    //   setIsSearch(true);
    // } else {
    //   setIsSearch(false);
    // }
    // console.log(pokemonRenderList);
    setPokemonRenderList(
      pokemonList.map((pok) => {
        if (pok) {
          if (pok) {
            if (pok.name.includes(event.target.value)) {
              // console.log(pok);
              return pok;
            }
          }
        }
      })
    );
  };
  // pokemonRenderList = isSearch ? pokemonRenderList : pokemonList;
  // console.log(pokemonRenderList);
  return (
    <div className={classes.app}>
      <div className={classes.search}>
        <input onChange={searchHandler} />
      </div>
      <div className={classes.pokemons}>
        {pokemonRenderList.length !== 0
          ? pokemonRenderList.map((pok) => {
              // console.log("work");
              if (pok) {
                return (
                  <div className={classes.pokemon} key={pok.name}>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.url.slice(
                        34,
                        pok.url.lastIndexOf("/")
                      )}.png`}
                    />
                    <div>
                      <p>{pok.name}</p>
                    </div>
                  </div>
                );
              }
            })
          : pokemonList.map((pok) => {
              // console.log("work");
              if (pok) {
                return (
                  <div className={classes.pokemon} key={pok.name}>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok.url.slice(
                        34,
                        pok.url.lastIndexOf("/")
                      )}.png`}
                    />
                    <div>
                      <p>{pok.name}</p>
                    </div>
                  </div>
                );
              }
            })}
      </div>
    </div>
  );
}

export default App;
