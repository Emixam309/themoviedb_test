import { connect } from "react-redux";
import { compose } from "redux";

import FilmCard from "../components/FilmCard";

import { getFilmAction } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
    getFilm: film => dispatch(getFilmAction(film))
})

const mapStateToProps = state => ({
    selectedFilm: state.filmReducer.selectedFilm
})

const FilmCardContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(FilmCard)

export default FilmCardContainer;