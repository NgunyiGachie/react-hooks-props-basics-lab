import React from "react";

function Home(props) {
    return (
        <div id="home">
            {props.name ? (
                <h1 style={{ color: props.color }}>
                    {props.name} is a Web Developer from {props.city}
                </h1>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default Home;

