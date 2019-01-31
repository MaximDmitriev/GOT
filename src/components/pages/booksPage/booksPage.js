import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import {withRouter} from "react-router-dom";


import ItemList from '../../itemList/itemList';
import ErrorMessage from "../../errorMessage/errorMessage";
import gotService from "../../../services/gotService";

class BooksPage extends Component {

    gotService = new gotService();

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }


    // onItemSelected = (id) => {
    //     this.setState({
    //         selectedBook: id
    //     })
    // }


    render() {

        if (this.state.error) {
            return <ErrorMessage error={"410"}/>
        }

        return(

                <Row>
                    <Col md={{size: 3, offset: 3}}>
                        <ItemList
                            onItemSelected={(itemId) => {
                                this.props.history.push(itemId);
                            }}
                            getData={this.gotService.getAllBooks}
                            renderItem={(item) => `${item.name}`}
                            />
                    </Col>
                </Row>

        )
    }
}

export default withRouter(BooksPage);