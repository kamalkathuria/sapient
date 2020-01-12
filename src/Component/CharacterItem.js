import React from 'react';
import '../CSS/CharterItem.css';

const CharacterItem = ({ character }) => {
    return (
        <div className="col-6 col-sm-3 backcolor card-deck">
            <div className='card'>
                <div className="image">
                    <img alt={character.name} src={character.image} />
                </div>
                <div className="card-back-color">
                    <h5 className="card-title">{character.name}</h5>
                    <div className="meta">
                        <span className="header">Created on : {character.created.substring(0, 10)}</span>
                        <span className="floated">{character.id}</span>
                    </div>
                </div>
                <div className="card-back-color">
                    <table>
                        <tbody>
                            <tr>
                                <td>Status</td>
                                <td>{character.status}</td>
                            </tr>
                            <tr>
                                <td>Species</td>
                                <td>{character.species}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{character.gender}</td>
                            </tr>
                            <tr>
                                <td>Origin</td>
                                <td>{character.origin.name}</td>
                            </tr>
                            <tr>
                                <td>Last Location</td>
                                <td>{character.location.name}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;