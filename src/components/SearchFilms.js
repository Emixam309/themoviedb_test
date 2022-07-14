import React from "react";
import FilmCard from "./FilmCard";
import APIUtils from "../APIUtils";
import "../components/FilmCard"

class SearchFilms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        APIUtils.getListFilms(this.props.search)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidUpdate(prevProps) {
        if (this.props.search !== prevProps.search) {
            APIUtils.getListFilms(this.props.search)
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            items: result.results
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
    }


    render() {
        const {error, isLoaded, items} = this.state;
    if (this.props.search.length === 0) {
    } else if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            const list = items.slice(0, 10)
            return (
                <>
                    <h2 className="sectionTitle">Recherche</h2>
                    <div className="popular">
                        {list.map(item => (
                            <div key={'search-' + item.id}>
                                <FilmCard
                                    title={item.title}
                                    release_date={new Date(item.release_date).toLocaleDateString('fr')}
                                    poster_path={item.poster_path}
                                    Id={item.id}
                                    updateFilmId={this.props.updateFilmId}
                                />
                            </div>
                        ))}
                    </div>
                </>

            );
        }
    }
}

export default SearchFilms;