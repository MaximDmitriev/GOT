import React, {Component} from 'react';

import ItemList from '../../itemList/itemList';
import ItemDetails, {Field} from "../../itemDetails/itemDetails";
import ErrorMessage from "../../errorMessage/errorMessage";
import gotService from "../../../services/gotService";
import RowBlock from "../../rowBlock/rowBlock";

export default class CharacterPage extends Component {

    gotService = new gotService();

    state = {
        selectedChar: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }


    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }


    render() {

        if (this.state.error) {
            return <ErrorMessage error={"410"}/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={(item) => `${item.name}`}
                />
        )

        const charDetails =(
            <ItemDetails 
                listName="Character"
                itemId={this.state.selectedChar}
                getItem={this.gotService.getCharacter}>
                <Field field="gender" label="Gender"/>
                <Field field="born" label="Born"/>
                <Field field="died" label="Died"/>
                <Field field="culture" label="Culture"/>
            </ItemDetails>
        )

        return(
            <RowBlock 
                left={itemList}
                right={charDetails} />
        )
    }
}