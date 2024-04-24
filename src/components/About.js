import React from "react";
import Links from "./Links"; 

function About({ user }) {
    const { bio, links } = user || {};
    const { github, linkedin } = links || {};

    return (
        <div id="about">
            <h2>About Me {user?.name}</h2>
            {bio && <p>{bio}</p>}
            <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
            {github && linkedin && <Links github={github} linkedin={linkedin} />} 
        </div>
    );
}

export default About;

