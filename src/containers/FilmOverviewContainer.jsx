import { connect } from "react-redux";
import { compose } from "redux";

import FilmOverview from "../components/FilmOverview";

import { getFilmAction } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
})

const mapStateToProps = state => ({
    selectedFilm: state.filmReducer.selectedFilm
})

const PopularFilmsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(FilmOverview)

export default PopularFilmsContainer;