import React from 'react';
import CharacterItem from './CharacterItem';
import '../CSS/CharacterList.css';

const CharacterList = (props) => {
    if(props.list){
        const renderedList = props.list.map((character) => {
            return <CharacterItem 
            key= {character.id}
            character = {character}/>
        })
        return <div className="row back">{renderedList}</div>
    }
    else {
        return <div>No Search Result found</div>
    }
}


export default CharacterList;