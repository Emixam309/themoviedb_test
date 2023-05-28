import { connect } from "react-redux";
import { compose } from "redux";

import SearchFilms from "../components/SearchFilms";

import { getListFilmsAction } from "../redux/actions";

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({
    searchedFilms: state.filmReducer.searchedFilms
})

const SearchFilmContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SearchFilms)

export default SearchFilmContainer;