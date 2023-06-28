import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {
    const filmnodes = films.map((film) => {
        return (<Film key = {film.id} name = {film.name} url = {film.url}> </Film>)})
    
    return (
    <>
    {filmnodes}
    {/* {props.films[0].name} */}
    {/* {films[0].name} */}
    </>
    )
    
    }

    export default FilmList;
