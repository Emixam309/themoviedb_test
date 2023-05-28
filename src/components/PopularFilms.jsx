import FilmCardContainer from "../containers/FilmCardContainer";
import { useEffect } from "react";

function PopularFilms({ getPopularFilms, getFilm, popularFilms }) {
    useEffect(() => {
        getPopularFilms()
    }, [getPopularFilms])

    useEffect(() => {
        getFilm(popularFilms?.[0])
    }, [popularFilms])

    const films = popularFilms?.slice(0, 5)
    return (
        <>
            <h2 className="sectionTitle">Films Populaires</h2>
            <div className="card-container">
                {films?.map(film => (
                    <div key={'popular-' + film.id}>
                        <FilmCardContainer film={film} />
                    </div>
                ))}
            </div>
        </>

    );
}

export default PopularFilms;