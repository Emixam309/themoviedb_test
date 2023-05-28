import { connect } from "react-redux";
import { compose } from "redux";

import Header from "../components/Header";

import { getListFilmsAction } from "../redux/actions";

const mapDispatchToProps = dispatch => ({
    getListFilms: (query) => dispatch(getListFilmsAction(query)),
})

const mapStateToProps = state => ({

})

const HeaderContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Header)

export default HeaderContainer;