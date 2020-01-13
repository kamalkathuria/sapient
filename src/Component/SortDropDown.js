import React from 'react';

class SortDropDown extends React.Component {
    onSort = (e) => {
        const characters = this.props.characters;
        characters.sort(function (a, b) {
            if (e.target.value === 'desc') {
                return b.id - a.id;
            } else {
                return a.id - b.id;
            }
        });
        this.props.onSort(characters);
    }

    render() {
        return (
            <>
                <div className='main'>
                    <label className='main'>Sort by ID</label>
                    <select onChange={this.onSort}>
                        <option value='aesc'>Ascending order</option>
                        <option value='desc'>Descending order</option>
                    </select>
                </div>
            </>

        )
    }
}

export default SortDropDown;