import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Hangman from './components/Hangman';
import Word from './components/Word';
import Footer from './components/Footer';

function App() {

  const [word, setWord] = useState("movie")
  const [description, setDescription] = useState("No Description")
  const [solvedChars, setSolvedChars] = useState([])
  const [remainingChars, setRemainingChars] = useState(word)
  const [tries, setTries] = useState(0)
  const [isGameEnd, setIsGameEnd] = useState(false)
  const [movies, setMovies] = useState([])

  function handleClick(event) {
    const choosen = event.target.value.toLowerCase()
    if(!remainingChars.includes(choosen)) {
      setTries(prevTries => prevTries + 1)
    } else {
      setSolvedChars(prevSolvedChars => [...prevSolvedChars, remainingChars.indexOf(choosen)])
      setRemainingChars(prevWord => prevWord.replace(choosen, " "))
    }
  }

  useEffect(() => {
    if(tries >= 6 || word.length === solvedChars.length) setIsGameEnd(true)
  }, [tries, solvedChars.length, word.length])


  useEffect(() => {
    retrieveMovies()
  }, [])

  useEffect(() => {
        const movie = movies[Math.floor(Math.random() * movies.length)]
        const title = movie ? movie.title.replaceAll(" ", '').toLowerCase() : 'movie'
        setWord(title)
        setRemainingChars(title)
        setDescription(movie ? movie.description : "No Description")
  }, [movies])


  async function retrieveMovies() {
    const API_KEY = process.env.REACT_APP_API_KEY
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${1 + Math.floor(Math.random() * 500)}&sort_by=popularity.desc&api_key=${API_KEY}`;
    try {
      const response = await fetch(url)
      const data = await response.json()
      const results = data.results
      const movies = results.filter(
        movie => movie.title.match(/^[a-zA-Z]+$/)
      ).map(movie => ({title: movie.title, description: movie.overview}))
      setMovies(movies)
    } catch(error) {
      console.log(error)
    }
  }



  return (
    <div className="App">
      <div>
        <Hangman tries = {tries}/>
        <Board 
          handleClick = {handleClick}
          isGameEnd = {isGameEnd}
        /> 
      </div>
      <Word 
        word = {word} 
        solvedChars = {solvedChars}
      />
      <Footer description={description}/>
      {isGameEnd && <p className='result'>{tries >= 6 ? "You Lose" : "You Win"}</p>}
    </div>
  );
}

export default App;
