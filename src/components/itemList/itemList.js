import React, {Component} from 'react';
import { ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const ListGroup = styled.ul`
    cursor: pointer;
`
export default class ItemList extends Component {

    render() {
        return (
            <ListGroup className="list-group">
                <ListGroupItem cursor="pointer">
                    John Snow
                </ListGroupItem>
                <ListGroupItem>
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem>
                    Geremy
                </ListGroupItem>
            </ListGroup>
        );
    }
}