import React, {Component} from 'react';
import styled from "styled-components";
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

import gotService from "../../../services/gotService";
import ItemDetails, {Field} from "../../itemDetails/itemDetails";


const BtnWrp = styled.div`
    display: flex;
    margin: 20px auto;
    width: 540px;
    justify-content: space-between;
    button{
        min-width: 95px;
    }
`

export default class BooksItem extends Component {
    gotService = new gotService();

    onNext = () => {
        let count = parseInt(this.props.booksId) + 1;

        if (count > 11) count = 12;

        const url = "/books/" + count.toString();
        return url;
    }

    onPrev = () => {
        let count = parseInt(this.props.booksId) - 1;
        
        if (count < 1) count = 1;

        const url = "/books/" + count.toString();
        return url; 
    }
    
    render() {

        return(
            <>
                <ItemDetails 
                    listName="Book"
                    itemId={this.props.booksId}
                    getItem={this.gotService.getBook}>
                    <Field field="publisher" label="Publisher"/>
                    <Field field="numberOfPages" label="NumberOfPages"/>
                    <Field field="released" label="Released"/>
                </ItemDetails>
                
                <BtnWrp>
                    <Button color="secondary">
                        <Link to={`${this.onPrev()}`}>{this.props.booksId < 2 ? "No books" : "Prev"}</Link>    
                    </Button>
                    <Button color="secondary">
                        <Link to="/books/">
                            Back to List
                        </Link>
                    </Button>
                    <Button color="secondary">
                        <Link to={`${this.onNext()}`}>{this.props.booksId > 11 ? "No books" : "Next"}</Link>
                    </Button>
                </BtnWrp>
            </>
        )
    }
}