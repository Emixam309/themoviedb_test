import { useEffect, useState } from "react";
import FilmCardContainer from "../containers/FilmCardContainer";
import "../components/FilmCard"

function SearchFilms({ searchedFilms }) {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (searchedFilms?.results) setIsLoaded(true)
    },[searchedFilms])

    if (!isLoaded) {

    } else {
        const list = searchedFilms?.results?.slice(0, 10)
        return (
            <>
                <h2 className="sectionTitle">Recherche</h2>
                <div className="card-container">
                    {list?.map(film => (
                        <div key={'search-' + film.id}>
                            <FilmCardContainer film={film} />
                        </div>
                    ))}
                </div>
            </>

        );
    }
}

export default SearchFilms;