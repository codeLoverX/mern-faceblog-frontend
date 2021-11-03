import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'
export default function F404() {
    return (
        <>
            <div className="body">
                <div className="mars" />
                <img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" />
                <img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" />
                <p className="title">Oh no!!</p>
                <p className="subtitle">
                    You’re either misspelling the URL <br /> or requesting a page that's no longer here.
                </p>
                <div align="center">
                    <Link to= "/">Back to previous page </Link>
                </div>
                <img src="https://assets.codepen.io/1538474/astronaut.svg" alt="None" className="astronaut" />
                <img src="https://assets.codepen.io/1538474/spaceship.svg" alt="None" className="spaceship" />
            </div>

        </>
    );
}
