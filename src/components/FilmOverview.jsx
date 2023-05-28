import React, { useEffect } from "react";
import "../css/FilmOverview.css";
import { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function FilmOverview({ selectedFilm }) {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if (selectedFilm.id) {
            setIsLoaded(true)
        }
    }, [selectedFilm])

    if (!isLoaded) {
        return (<div>Chargement...</div>)
    } else {
        var divStyle = {
            backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),' +
                'url(https://image.tmdb.org/t/p/original' + selectedFilm.backdrop_path + ')'
        };
        const note = Math.round(selectedFilm.vote_average * 10)
        return (
            <div id="overviewCard" className="overviewCard" style={divStyle}>
                <div className="poster">
                    <img className="poster-img" src={"https://image.tmdb.org/t/p/w400" + selectedFilm.poster_path}
                        alt={selectedFilm.title} />
                </div>
                <div className="overview-body">
                    <h1>{selectedFilm.title} <span
                        className="year">({new Date(selectedFilm.release_date).getFullYear()})</span>
                    </h1>
                    <p>{new Date(selectedFilm.release_date).toLocaleDateString('fr') + " · " +
                        selectedFilm?.genres?.map(genre => " " + genre.name) + " · " +
                        timeConvert(selectedFilm.runtime)}</p>
                    <div className="note">
                        <div style={{height: 80, width: 80}}>
                            <CircularProgressbar value={note} text={`${note}%`} />
                        </div>
                        <b>Note des utilisateurs</b>
                    </div>
                    <h3>Synopsis</h3>
                    <p>{selectedFilm.overview}</p>
                </div>
            </div>
        );
    }


    function timeConvert(n) {
        var hours = (n / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "m";
    }
}


export default FilmOverview;