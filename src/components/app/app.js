import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from "styled-components";

import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from "../errorMessage/errorMessage";
import CharacterPage from "../pages/characterPage/characterPage";
import BooksPage from "../pages/booksPage/booksPage";
import HousesPage from "../pages/housesPage/housesPage";
import NotFound from "../pages/notFound/notFound";
import HomePage from "../pages/homePage/homePage";
import BooksItem from "../pages/booksItem/booksItem";
import gotService from "../../services/gotService";
import imgGot from "./got.jpeg";

const AppWrap = styled.div`
    overflow-x: hidden;
    background: url(${imgGot}) center center no-repeat;
    background-size: cover;
    font-size: 16px;
    height: 100vh;
`

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
            <Router>
                <AppWrap> 
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
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/characters/" exact component={CharacterPage}/>
                            <Route path="/houses/" exact component={HousesPage}/>
                            <Route path="/books/" exact component={BooksPage}/>
                            <Route path="/books/:id" exact render={
                                ({match}) => {

                                    const {id} = match.params;
                                    const check = parseInt(id);

                                    if (Number.isNaN(check) || check < 1 || check > 12) {
                                        return <NotFound />
                                    }
                                    return(
                                        <BooksItem booksId={id}/>
                                    )
                                }
                            }/>
                            <Route component={NotFound} />
                       </Switch>
                    </Container>
                </AppWrap>
            </Router>
        );
    }
};

