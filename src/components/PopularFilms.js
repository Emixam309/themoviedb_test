import FilmCard from "./FilmCard";
import "../components/FilmCard"
import {useEffect} from "react";

function PopularFilms({films, filmId, updateFilmId, setLoadedPopularFilms}) {
    useEffect(() => {
        setTimeout(() => setLoadedPopularFilms(),1000)
    }, [])
    const items = films.slice(0, 5)
    return (
        <>
            <h2 className="sectionTitle">Films Populaires</h2>
            <div className="card-container">
                {items.map(item => (
                    <div key={'popular-' + item.id}>
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

export default PopularFilms;