import React, {useState, useEffect, useCallback} from "react";
import './css/App.css';
import Header from "./components/Header";
import FilmOverview from "./components/FilmOverview";
import SearchFilms from "./components/SearchFilms";
import APIUtils from "./APIUtils";
import PopularFilms from "./components/PopularFilms";


function App() {
    const [search, updateSearch] = useState("")
    const [filmId, updateFilmId] = useState("")
    const [loadPopularFilms, setLoadPopularFilms] = useState(false)

    const setLoadedPopularFilms = useCallback(() => {
        updateFilmId(films[0].id)
        setLoadPopularFilms(true)
    })

    const [error, setError] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetchPopularFilms()
    }, [])

    function fetchPopularFilms() {
        APIUtils.getPopularFilms()
            .then(
                (result) => {
                    setIsLoaded(true)
                    setFilms(result.results)
                    setError(result.status_message)
                }
            )
    }

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement…</div>;
    } else {
        return (
            <>
                <Header updateSearch={updateSearch}/>
                <div className="container">
                    {loadPopularFilms && <FilmOverview filmId={filmId} updateFilmId={updateFilmId} films={films}/>}
                    <SearchFilms search={search} filmId={filmId} updateFilmId={updateFilmId} />
                    <PopularFilms films={films} filmId={filmId} updateFilmId={updateFilmId} setLoadedPopularFilms={setLoadedPopularFilms} />
                </div>
            </>
        );
    }
}

export default App;
