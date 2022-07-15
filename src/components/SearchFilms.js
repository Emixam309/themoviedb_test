import {useEffect, useState} from "react";
import FilmCard from "./FilmCard";
import APIUtils from "../APIUtils";
import "../components/FilmCard"

function SearchFilms({search, filmId, updateFilmId}) {
    const [error, setError] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() =>{
        fetchListFilms()
    }, [search])

    if (search.length === 0) {
    } else if (error) {
        return <div>Erreur : {error}</div>;
    } else if (!isLoaded) {
        return <div>Chargement…</div>;
    } else {
        const list = items.slice(0, 10)
        return (
            <>
                <h2 className="sectionTitle">Recherche</h2>
                <div className="card-container">
                    {list.map(item => (
                        <div key={'search-' + item.id}>
                            <FilmCard
                                title={item.title}
                                release_date={new Date(item.release_date).toLocaleDateString('fr')}
                                poster_path={item.poster_path}
                                Id={item.id}
                                filmId={filmId}
                                updateFilmId={updateFilmId}
                            />
                        </div>
                    ))}
                </div>
            </>

        );
    }

    function fetchListFilms() {
        APIUtils.getListFilms(search)
            .then(
                (result) => {
                    setIsLoaded(true)
                    setItems(result.results)
                    setError(result.status_message)
                }
            )
    }
}

export default SearchFilms;