import React from 'react';
import App from "./app";
import {shallow} from "enzyme";

describe("Testing <App />", () => {
    const app = shallow(<App />);

    it("App have rendered", () => {
        expect(app).toMatchSnapshot();
    });

    it("app state 'showChar' is false", () => {
        expect(app.state().showChar).toBeFalse();
    });
    
    it("app state 'error' is false", () => {
        expect(app.state().error).toBeFalse();
    });
});