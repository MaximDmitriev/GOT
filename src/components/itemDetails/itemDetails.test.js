import React from 'react';
import ItemDetails from "./itemDetails";
import {shallow} from "enzyme";
import gotService from "../../services/gotService";

describe("Testing <ItemDetails />", () => {
    const items = shallow(<ItemDetails item="book" />);
    const getData = new gotService();

    describe("Testing Shapshots & state",() => {

        it("ItemDetails have rendered", () => {
            expect(items).toMatchSnapshot();
        });
    
        it("ItemDetails state 'item' is empty", () => {
            expect(items.state().item).toBeNil();
        });
    
        it("ItemDetails state 'loading' is false", () => {
            expect(items.state().loading).toBeFalse();
        });
    
        it("ItemDetails state 'error' is false", () => {
            expect(items.state().error).toBeFalse();
        });

        it("ItemDetails props 'item' is string", () => {
            expect(items.instance().props.item).toBeString();
        });
    });

    describe("Handlers tests", () => {
        it("Testing itemUpdate", () => {
            items.instance().itemUpdate();
            expect(items.state().loading).toBeFalse();
        });
        
        it("Testing itemUpdate async", () => {
            const id = 4;
            items.instance().itemUpdate(getData.getAllBooks(id)
            .then(res => expect(items.state().item).toBe(res)));     
        });

        it("Testing componentDidCatch", () => {
            items.instance().componentDidCatch();
            expect(items.state().error).toBeTrue();
        });
    });

});
