import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';

import gotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

const RandomCharWrap = styled.div`
    min-height: 284px;
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
    .term {
        font-weight: bold;
    }
`
export default class RandomChar extends Component {

    constructor(){
        super();
        this.updateChar();
    }

    gotService = new gotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    onCharLoaded = (char) => {
        this.setState({
            char: char,
            loading: false
        });
        
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }
    
    updateChar() {
        // const id = Math.floor(Math.random() * 140 + 25);
        const id = -1;
        this.gotService.getCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onError);        
    }

    render() {

        const {char, loading, error} = this.state;

        const content = loading ? <Spinner /> : 
            error ? <ErrorMessage /> : <View char={char}/>;

        return (
            <RandomCharWrap className="rounded">
                {content}
            </RandomCharWrap>
        );
    }
}

const View = ({char}) => {

    const {name ,gender, born, died, culture} = char;

    return(
        <>
            <h4>Random Character: {name}</h4>
            <ListGroup flush>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
} 

