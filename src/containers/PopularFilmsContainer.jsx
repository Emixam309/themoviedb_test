import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import PopularFilms from "../components/PopularFilms";

import { getFilmAction, getPopularFilmsAction} from '../redux/actions';

const PopularFilmsContainer = (props) => {
    return (
        <PopularFilms {...props}/>
    )
}

const mapDispatchToProps = dispatch => ({
    getPopularFilms: () => dispatch(getPopularFilmsAction()),
    getFilm: film => dispatch(getFilmAction(film))
})

const mapStateToProps = state => ({
    popularFilms: state.filmReducer.popularFilms.results,
    selectedFilm: state.filmReducer.selectedFilm
})

const PopularFilmsContainerv2 = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(PopularFilmsContainer)

export default PopularFilmsContainerv2;