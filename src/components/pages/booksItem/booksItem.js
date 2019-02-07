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
        box-shadow: none !important;
    }
`

export default class BooksItem extends Component {
    gotService = new gotService();

    state = {
        numbers: 11
    }

    check = () => {
        this.gotService.getAllBooks()
        .then((res) => {
            this.setState({
                numbers: +res[0].id + +res.length
            }) 
        });
    }

    onNext = () => {
        let count = parseInt(this.props.booksId) + 1;

        if (count > this.state.numbers) count = 12;

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
                    <Field field="numberOfPages" label="Number of pages"/>
                    <Field field="released" label="Released"/>
                </ItemDetails>
                
                <BtnWrp>
                    <Link to={`${this.onPrev()}`}>
                        <Button color="secondary">
                            {this.props.booksId < 2 ? "No books" : "Prev"}
                        </Button>
                    </Link>    
                    <Link to="/books/">
                        <Button color="secondary">
                            Back to List
                        </Button>
                    </Link>
                    <Link to={`${this.onNext()}`}>
                        <Button color="secondary" onClick={this.check}>
                            {this.props.booksId > this.state.numbers ? "No books" : "Next"}
                        </Button>
                    </Link>
                </BtnWrp>
            </>
        )
    }
}