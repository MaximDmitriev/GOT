import React from 'react';
import HousesPage from "./housesPage";
import {shallow} from "enzyme";

describe("Testing <HousesPage />", () => {
    const house = shallow(<HousesPage />);

    it("HousesPage have rendered", () => {
        expect(house).toMatchSnapshot();
    });
    
    it("HousesPage state 'selectedHouse' is empty", () => {
        expect(house.state().selectedHouse).toBeNil();
    });

    it("HousesPage state 'error' is false", () => {
        expect(house.state().error).toBeFalse();
    });

    it("Testing onItemSelected()" , () => {
        const id = 3;
        house.instance().onItemSelected(id);
        expect(house.state().selectedHouse).toBe(3);
    });
});