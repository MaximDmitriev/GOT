import React from 'react';
import img404 from "./img404.jpg";
import styled from "styled-components";

const ErrMsg = styled.div`
    width: 100%
    h2{
        font-size: 18px;
    }
    img{
        width: 100%;
    }
`

const ErrorMessage = () => {
    return (
        <ErrMsg>
            <h2>Error! Nothing found</h2>
            <img src={img404} alt="error 404"></img>
        </ErrMsg>
    )

}

export default ErrorMessage;