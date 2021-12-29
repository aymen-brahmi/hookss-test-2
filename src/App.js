
import './App.css';
import Navi from './components/Navi';
import Filter from './components/Filter';
import Add from './components/Add';
import {movies} from './components/movies';
import {useState} from 'react';
import MovieList from './components/MovieList';


function App() {
  const [films,SetFilms] = useState(movies)


  return (
    <div className="App">
     <Navi/>
     <Filter/>
     <Add/>
     <MovieList films={films} />
    </div>
  );
}

export default App;
