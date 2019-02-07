import React from 'react';
import BooksPage from "./booksPage";
import {shallow} from "enzyme";

describe("Testing <BooksPage />", () => {
    const booksPage = shallow(<BooksPage />);

    it("BooksPage have rendered", () => {
        expect(booksPage).toMatchSnapshot();
    });
    
    it("BooksPage state 'error' is false", () => {
        expect(booksPage.state().error).toBeFalsy();
    });

    it("Testing componentDidCatch", () => {
        booksPage.instance().componentDidCatch();
        expect(booksPage.state().error).toBeTrue();
    });
});