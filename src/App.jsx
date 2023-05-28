
import './css/App.css';

import HeaderContainer from "./containers/HeaderContainer";
import FilmOverviewContainer from "./containers/FilmOverviewContainer";
import SearchFilmContainer from "./containers/SearchFilmsContainer";
import PopularFilmsContainer from "./containers/PopularFilmsContainer";


function App() {
    return (
        <>
            <HeaderContainer />
            <div className="container">
                <FilmOverviewContainer />
                <SearchFilmContainer />
                <PopularFilmsContainer />
            </div>
        </>
    );
}

export default App;
