import React from 'react';
import '../CSS/Species.css';


class species extends React.Component {

    state = {
        species: ['Human', 'Alien', 'Humanoid']
    }

    //Filtering species basis the checkbox
    filteredSpecies = (e) => {
        var checkBoxes = document.querySelectorAll(".checkbox-value");
        var checkboxArr = Array.from(checkBoxes);
        const selectedValues = checkboxArr.reduce((acc, checkbox) => {
            if (checkbox.checked) {
                acc.push(checkbox.value);
            }
            return acc;
        }, []);
        this.props.filteredSpecies('species=' + selectedValues);
    }

    render() {
        const species = this.state.species.map((sp ,index) => {
            return (
                <div className='checkbox-inline' key={index}>
                    <input type="checkbox" className="checkbox-value"  value={sp} onClick={this.filteredSpecies} />
                    <label>{sp}</label>
                </div>
            )
        })
        return <ul className='checkbox-inline'>{species}</ul>
    }
}

export default species;