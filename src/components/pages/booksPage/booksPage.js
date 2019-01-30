import React, {Component} from 'react';

import ItemList from '../../itemList/itemList';
import ItemDetails, {Field} from "../../itemDetails/itemDetails";
import ErrorMessage from "../../errorMessage/errorMessage";
import gotService from "../../../services/gotService";
import RowBlock from "../../rowBlock/rowBlock";

export default class BooksPage extends Component {

    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }


    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }


    render() {

        if (this.state.error) {
            return <ErrorMessage error={"410"}/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={(item) => `${item.name}`}
                />
        )

        const bookDetails =(
            <ItemDetails 
                listName="Book"
                itemId={this.state.selectedBook}
                getItem={this.gotService.getBook}>
                <Field field="publisher" label="Publisher"/>
                <Field field="numberOfPages" label="NumberOfPages"/>
                <Field field="released" label="Released"/>
            </ItemDetails>
        )

        return(
            <RowBlock 
                left={itemList}
                right={bookDetails} />
        )
    }
}