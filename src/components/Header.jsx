import '../css/header.css'
import "../css/SearchBar.css"

function Header({getListFilms}) {
    return (
        <header>
            <form onSubmit={(e) => {
                e.preventDefault()
                getListFilms(e.target['search-data'].value)
            }} className="search">
                <div className="search-bar">
                    <input name="search-data" type="text" placeholder="Rechercher un film"/>
                    <button type="submit" className="searchButton">
                        Rechercher
                    </button>
                </div>
            </form>
        </header>
    );
}

export default Header;