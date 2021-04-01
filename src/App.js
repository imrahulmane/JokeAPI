import './App.css';
import React, { useEffect, useState } from 'react';
import Jokes from './Jokes/Jokes'

function App() {

  const [jokeBefore, setJoke] = useState('');
  const [category, setCategory]= useState('coding');

  const string = `https://v2.jokeapi.dev/joke/${category}/Any?type=twoepart`;

  useEffect( () => {
    getJokes();
  }, [category]);

  const getJokes = async () => {
    const result = await fetch(string);
    const receivedJoke = await result.json()
    console.log(receivedJoke.delivery);
    
    if (receivedJoke.delivery === undefined) {
      setJoke(receivedJoke.joke)
      console.log(receivedJoke.joke);
    } else {
      setJoke(receivedJoke.delivery);
    }
    setCategory(category);
    console.log(string);

    
  }

  const changeCategoryHandler = (event) => {
    const RecievdCategory = event.target.value;
    setCategory(RecievdCategory);
    console.log(RecievdCategory);
  }

  return (
    <div className="App">
      <div className="joke">
        <Jokes joke={jokeBefore} click={changeCategoryHandler}> </Jokes>
      </div>
    </div>
  );
}

export default App;
