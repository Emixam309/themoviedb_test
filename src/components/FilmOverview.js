import React from "react";
import APIUtils from "../APIUtils";
import "../css/FilmOverview.css";
import "../css/circle.css";

class FilmOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        APIUtils.getFilm(this.props.filmId)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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

    timeConvert(n) {
        var hours = (n / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "m";
    }

    render() {

        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            var divStyle = {
                backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),' +
                    'url(https://image.tmdb.org/t/p/original' + items.backdrop_path + ')'
            };
            return (
                <div className="overviewCard" style={divStyle}>
                    <div className="poster">
                        <img className="poster-img" src={"https://image.tmdb.org/t/p/w400" + items.poster_path}
                             alt={items.title}/>
                    </div>
                    <div className="overview-body">
                        <h1>{items.title} <span className="year">({new Date(items.release_date).getFullYear()})</span>
                        </h1>
                        <p>{new Date(items.release_date).toLocaleDateString('fr') + " · " +
                            items.genres.map(genre => genre.name) + " · " +
                            this.timeConvert(items.runtime)}</p>
                        <div className="note">
                            <div className={"c100 p" + items.vote_average * 10 + " small green"}>
                                <span>{items.vote_average * 10}%</span>
                                <div className="slice">
                                    <div className="bar"></div>
                                    <div className="fill"></div>
                                </div>
                            </div>
                            <b>Note des utilisateurs</b>
                        </div>
                        <h3>Synopsis</h3>
                        <p>{items.overview}</p>
                    </div>

                </div>
            );
        }
    }
}

export default FilmOverview;