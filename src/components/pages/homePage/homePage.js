import React from 'react';
import styled from "styled-components";

const HomePage = styled.div`
    width: 45%;
    margin: 40px auto;
    padding: 20px;
    /* height: 100vh; */
    background-color: #fff;
    h2{
        text-align: center;
        margin-bottom: 20px;
    }
    p{
        text-align: justify;
    }
`


const Home = () => {
    return(
        <HomePage className="rounded">
            <h2>Welcome to Game of Thrones DB App</h2>
            <p>This App is the source for quantified and structured data from the universe of Ice and Fire 
            (and the HBO series Game of Thrones). It gives you access to data about all the Books,
             Characters and Houses.</p>
             <p>To start chose link to characters, books or houses from top of the screen.
             You can also see more details about some characters by clicking "Show character" button.</p>
        </HomePage>
    )
}

export default Home;
