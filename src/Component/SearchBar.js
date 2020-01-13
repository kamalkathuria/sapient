import React from 'react';
import '../CSS/SearchBar.css';

class SearchBar extends React.Component {

    state={
        term:''
    }

    onInputChange = (event) => {
        this.setState({term:event.target.value});
    };

    onSearch = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.term);
        
    }

    render() {
        return (
            <div className='main'>
                <div className="searchbar"> 
                    <form onSubmit={this.onSearch} className="ui form">
                        <label>Character Search</label>
                        <div className="field">
                            <input type="text" 
                            value={this.state.term}
                            placeholder="Enter name of your favorite character"
                            onChange={this.onInputChange}/>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default SearchBar;