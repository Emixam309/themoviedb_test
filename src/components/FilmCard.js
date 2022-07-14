import '../css/FilmCard.css'

//Carte des films populaires et de la recherche. Contient le titre l'affiche et la date de sortie
function FilmCard({title, release_date, poster_path, Id, updateFilmId}) {
    return (
        <div className="card" onClick={() => updateFilmId(Id)}>
                <img className="card-image" src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title}/>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <time className="card-date">{release_date}</time>
                </div>
        </div>
    )
}

export default FilmCard