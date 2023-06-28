import React from 'react';


const Film = ({name, url}) => {
    return (
        <>
        <a href={url}> <h3>{name} </h3> </a>
        </>
    );
};

export default Film;