import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';

export default class App extends Component {

    state = {
        showChar: false
    }

    onToggle = () => {
        this.setState(({showChar}) => {
            return {
                showChar: !showChar
            }
        });
    }


    render(){

        const {showChar} = this.state;

        const randomChar = showChar ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                <Button 
                    color="outline-secondary"
                    className="float-left"
                    style={{ marginBottom: "15px" }}
                    onClick={this.onToggle}
                    >{showChar ?  "Hide character" : "Show character"}</Button>
                </Container>
            </>
        );
    }
};

