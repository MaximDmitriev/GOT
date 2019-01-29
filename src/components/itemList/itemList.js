import React, {Component} from 'react';
import { ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

import gotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

const ListGroup = styled.ul`
    cursor: pointer;
    min-height: 200px;
    min-width: 540px;
    background-color: #fff;
`

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
                
            })
        }
    
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    renderItem(dataArr) {
 
        return dataArr.map((item) => {

            const id = item.id;

            return(
                <ListGroupItem 
                    cursor="pointer"
                    key={id}
                    onClick={() => this.props.onCharSelected(id)}>
                    {item.name}
                </ListGroupItem> 
            )
        })
    }

    render() {

        const {charList, error} = this.state;

        const content = error ? <ErrorMessage error={"409"}/> :
                        charList ? this.renderItem(charList) : <Spinner />

        return (
            <ListGroup className="list-group">
                {content}
            </ListGroup>
        );
    }
}