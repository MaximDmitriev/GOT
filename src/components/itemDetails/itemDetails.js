import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';

import gotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

const ItemDetailsWrap = styled.div`
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

const SpanSelect = styled.span`
    font-size: 26px;
    background-color: #fff;
    padding: 0 20px;
`

const Field = ({item, field, label}) => {

    return(
        <ListGroupItem className="d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}
export {Field}
export default class ItemDetails extends Component {

    gotService = new gotService();

    state = {
        item: null,
        loading: false,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        this.itemUpdate();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId){
            this.setState({
                loading: true
            });
            this.itemUpdate();
        }
    }

    itemUpdate = () => {
        const {itemId, getItem} = this.props;

        if(!itemId) {
            return;
        }

        getItem(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    loading: false
                });
            });
    }

    render() {

        const {item, loading, error} = this.state;

        if(!item) {
            return <SpanSelect className="rounded">Choose {this.props.listName} from list</SpanSelect>
        }

        const itemFields = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {item})
        });

        const content = error ? <ErrorMessage error={"409"}/> :
                        loading ? <Spinner /> : <View item={item} lists={itemFields} />
        
        return (
            
            <ItemDetailsWrap className="rounded">
                {content}
            </ItemDetailsWrap>

        );
    }
}

const View = ({item, lists}) => {

    const {name} = item;

    return(
        <>
            <h4>{name}</h4>
            <ListGroup flush>
               {lists}
            </ListGroup>
        </>
    )
}