import React from 'react';
import API from '../API/rickmorty';
import '../CSS/App.css';
import SearchBar from './SearchBar';
import CharacterList from './CharacterList';
import Sort from './SortDropDown';
import Species from './Species';


class App extends React.Component {

    state = {
        characters: [],
        displayedCharacters: [],
        prevSearchTerm: '',
        species: []
    };

    componentDidMount() {
        this.fetchCharacters();
    }

    //Fetching characters on load of page
    fetchCharacters = async (filters) => {
        const response = await fetch(API.characterFetch + filters);
        const data = await response.json();
        this.setState({ characters: data.results, displayedCharacters: data.results });
        this.getSpecies();
    };

    //Searching of character
    onSearch = async (term) => {
        if (term) {
            const res = await fetch(API.searchCharacter + term);
            const data = await res.json();
            if (res) {
                this.setState({ displayedCharacters: data.results, prevSearchTerm: term });
            } else { alert('There is no data to display'); }
        }
        else { this.setState({ displayedCharacters: this.state.characters }) }
    }

    //Sort according to ID
    onSort = (sortedCharacters) => {
        this.setState({ displayedCharacters: sortedCharacters });
    };

    //Getting all the species. Since there is a bug in the API, instead of pulling all the characters, it only picks the first 20
    getSpecies = () => {
        let species = this.state.characters.map(characters => {
            return characters.species
        });
        const filteredSpecies = species.filter((el, index) => species.indexOf(el) === index);
        this.setState({ species: filteredSpecies });
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h2>Selected Filters</h2>
                </div>
                <div className='col-5'>
                    <p>Filter</p>
                    <Species
                        species={this.state.species}
                        characters={this.state.displayedCharacters}
                        filteredSpecies={this.fetchCharacters}

                    />
                </div>
                <div className='col-7'>
                    <SearchBar
                        onSearch={this.onSearch}
                    />
                    <Sort
                        characters={this.state.displayedCharacters}
                        onSort={this.onSort}
                    />
                </div>
                <CharacterList
                    list={this.state.displayedCharacters}
                />

            </div>
        )
    }
}
export default App;