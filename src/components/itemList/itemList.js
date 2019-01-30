import React, {Component} from 'react';
import { ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

const ListGroup = styled.ul`
    cursor: pointer;
    min-height: 200px;
    min-width: 540px;
    background-color: #fff;
`

export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false
    }

    componentDidMount() {

        const {getData} = this.props;
        
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
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

            const label = this.props.renderItem(item);

            return(
                <ListGroupItem 
                    cursor="pointer"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </ListGroupItem> 
            )
        })
    }

    render() {

        const {itemList, error} = this.state;

        const content = error ? <ErrorMessage error={"409"}/> :
                        itemList ? this.renderItem(itemList) : <Spinner />

        return (
            <ListGroup className="list-group">
                {content}
            </ListGroup>
        );
    }
}