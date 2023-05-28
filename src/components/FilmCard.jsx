import '../css/FilmCard.css'
import FilmOverview from "./FilmOverview";

//Carte des films populaires et de la recherche. Contient le titre l'affiche et la date de sortie
function FilmCard({ film, getFilm, selectedFilm }) {
    const { id, title, release_date, poster_path } = film;
    function isSelected() {
        if (id !== selectedFilm.id) {
            return "card"
        } else {
            return "card card-selected"
        }
    }

    function handleClick() {
        getFilm(film)
        document.getElementById("overviewCard").scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className={isSelected()} onClick={() => handleClick()}>
            <img className="card-image" src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title}/>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <time className="card-date">{new Date(release_date).toLocaleDateString('fr')}</time>
            </div>
        </div>
    )
}

export default FilmCard