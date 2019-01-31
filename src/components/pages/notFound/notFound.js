import React from 'react';
import styled from "styled-components";
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

import img408 from "./img408.jpg";

const Wrapper = styled.div`
    width: 600px;
    background-color: #fff;
    margin: 40px auto;
    text-align: center;
    img{
        margin-top: 20px;
        width: 100%;
    }
    button{
        margin: 30px auto;
    }
`

const NotFound = () => {
    return(
        <Wrapper className="rounded">
            <h1>This Page Not Found</h1>
            <img src={img408} alt={"Link not found"}></img>
            <Button color="secondary" size="lg">
                <Link to="/">Back to Home page</Link>
            </Button>
        </Wrapper>
        
    )
}

export default NotFound;