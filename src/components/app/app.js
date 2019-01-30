import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';

import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from "../pages/characterPage/characterPage";
import BooksPage from "../pages/booksPage/booksPage";
import HousesPage from "../pages/housesPage/housesPage";
import gotService from "../../services/gotService";

export default class App extends Component {

    gotService = new gotService();

    state = {
        showChar: false,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onToggle = () => {
        this.setState(({showChar}) => {
            return {
                showChar: !showChar,
            }
        });
    }


    render() {

        const {showChar} = this.state;

        const randomChar = showChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage error={"409"}/>
        }

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
                        <Button 
                            color="secondary"
                            className="float-left"
                            style={{ margin: "15px" }}
                            onClick={this.onToggle}
                            >{showChar ?  "Hide character" : "Show character"}</Button>
                    </Row>
                    <CharacterPage />
                    <BooksPage />
                    <HousesPage />

                </Container>
            </>
        );
    }
};

