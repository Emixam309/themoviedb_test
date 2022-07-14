import './css/App.css';
import Header from "./components/Header";
import FilmOverview from "./components/FilmOverview";
import PopularFilms from "./components/PopularFilms";
import SearchFilms from "./components/SearchFilms";
import {useState} from "react";


function App() {
    const [search, updateSearch] = useState([])
    const [filmId, updateFilmId] = useState()

    return (
        <>
            <Header updateSearch={updateSearch}/>
            <div className="container">
                <FilmOverview filmId="453395"/>
                <SearchFilms search={search} updateFilmId={updateFilmId}/>
                <PopularFilms updateFilmId={updateFilmId}/>
            </div>
        </>
    );


}

export default App;
