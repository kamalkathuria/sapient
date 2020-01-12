import React from 'react';
import '../CSS/Species.css';


class species extends React.Component {

    state = {
        isChecked: true,
        checkedFilter: [],
        species:['Human','Alien','Humanoid']
    }
    filteredSpecies = (e) => {
        var checkBoxes = document.querySelectorAll(".checkbox-value");
        var checkboxArr = Array.from(checkBoxes);
        const selectedValues = checkboxArr.reduce((acc, checkbox) => {
            if(checkbox.checked){
                acc.push(checkbox.value);
            }
            return acc;
        }, []);
        console.log(selectedValues);
        this.props.filteredSpecies('species='+selectedValues);
    }

    // filterItems= (e) => {
    //     console.log(e.target.value);
    //     const filteredSpecies = this.props.characters.filter(character => {
    //         return character.species === e.target.value
    //     });
    //     console.log(filteredSpecies);
    // }
    render() {
        const species = this.state.species.map(sp => {
            return (
                <div className='checkbox-inline'>
                    <input type="checkbox" className="checkbox-value" value={sp} onClick={this.filteredSpecies} />
                    <label>{sp}</label>
                </div>
            )
        })
        return <ul>{species}</ul>
    }
}

export default species;