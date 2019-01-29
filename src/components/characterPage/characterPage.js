import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';

import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import ErrorMessage from "../errorMessage/errorMessage";

export default class characterPage extends Component {

    state = {
        selectedChar: 130,
        error: false
    }

    componentDidCatch() {
        // console.log("err");
        this.setState({
            error: true
        })
    }


    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }


    render() {

        if (this.state.error) {
            return <ErrorMessage error={"410"}/>
        }

        return(
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
        )
    }
}