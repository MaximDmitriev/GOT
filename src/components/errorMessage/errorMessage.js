import React from 'react';
import styled from "styled-components";

import img404 from "./img404.jpg";
import img408 from "./img408.jpg";
import img410 from "./img410.jpg";

const ErrMsg = styled.div`
    width: 100%
    h2{
        font-size: 18px;
    }
    img{
        width: 100%;
    }
`

const ErrorMessage = ({error}) => {

    const errMsgs = [{
            img: img404,
            msg: "Nothing found",
            err: "404"
        },
        {
            img: img408,
            msg: "Request Timeout",
            err: "408"
        },
        {
            img: img410,
            msg: "Nothing found",
            err: "410"
        }
    ];

    const index = errMsgs.findIndex(item => item.err === error);

    let img = img404,
        msg = "Something goes wrong",
        err = error;

    if (index !== -1) {
        img = errMsgs[index].img;
        msg = errMsgs[index].msg;
        err = errMsgs[index].err;
        }

    return (
        <ErrMsg>
            <h2>Error! {msg}</h2>
            <img src={img} alt={`error ${err}`}></img>
        </ErrMsg>
    )
}

export default ErrorMessage;