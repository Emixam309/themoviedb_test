import FilmCard from "./FilmCard";
import "../components/FilmCard"
import {useEffect, Fragment} from "react";

function PopularFilms({films, filmId, updateFilmId, setLoadedPopularFilms}) {
    useEffect(() => {
        setTimeout(() => setLoadedPopularFilms())
    }, [])
    const items = films.slice(0, 5)
    return (
        <>
            <h2 className="sectionTitle">Films Populaires</h2>
            <div className="card-container">
                {items.map(item => (
                    <Fragment key={'popular-' + item.id}>
                        <FilmCard
                            title={item.title}
                            release_date={new Date(item.release_date).toLocaleDateString('fr')}
                            poster_path={item.poster_path}
                            Id={item.id}
                            filmId={filmId}
                            updateFilmId={updateFilmId}
                        />
                    </Fragment>
                ))}
            </div>
        </>

    );
}

export default PopularFilms;