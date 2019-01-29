import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';

import gotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

const CharDetailsWrap = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    min-height: 272px;
    .char-details h4 {
        margin-bottom: 20px;
        text-align: center;
    }
    .select-error {
        color: #fff;
        text-align: center;
        font-size: 26px;
    }
`;

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null,
        loading: false,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        this.charUpdate();
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId){
            this.setState({
                loading: true
            });
            this.charUpdate();
        }
    }

    charUpdate = () => {
        const {charId} = this.props;

        if(!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({
                    char: char,
                    loading: false
                });
            });
    }

    render() {

        const {char, loading, error} = this.state;

        if(!char) {
            return <span>Select character</span>
        }

        const content = error ? <ErrorMessage error={"409"}/> :
                        loading ? <Spinner /> : <View char={char} />
        return (

            <CharDetailsWrap className="rounded">
                {content}
            </CharDetailsWrap>

        );
    }
}

const View = ({char}) => {

    const {name, gender, born, died, culture} = char;

    return(
        <>
            <h4>{name}</h4>
            <ListGroup flush>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}