import React from "react";
import FilmCard from "./FilmCard";
import "../components/FilmCard"
import APIUtils from "../APIUtils";

class PopularFilms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        APIUtils.getPopularFilms()
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

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            const list = items.slice(0, 5)
            return (
                <>
                    <h2 className="sectionTitle">Films Populaires</h2>
                    <div className="popular">
                        {list.map(item => (
                            <div key={'popular-' + item.id}>
                                <FilmCard
                                    title={item.title}
                                    release_date={new Date(item.release_date).toLocaleDateString('fr')}
                                    poster_path={item.poster_path}
                                    Id={item.id}
                                    /*updateFilmId={this.props.updateFilmId}*/
                                />
                            </div>
                        ))}
                    </div>
                </>

            );
        }
    }
}

export default PopularFilms;