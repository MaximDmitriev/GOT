import React from 'react';
import CharacterPage from "./characterPage";
import {shallow} from "enzyme";

describe("Testing <CharacterPage />", () => {
    const charPage = shallow(<CharacterPage />);

    it("CharacterPage have rendered", () => {
        expect(charPage).toMatchSnapshot();
    });

    it("CharacterPage state 'selectedChar' is empty", () => {
        expect(charPage.state().selectedChar).toBeNil();
    });

    it("CharacterPage state 'error' is false", () => {
        expect(charPage.state().error).toBeFalse();
    });

    it("Testing componentDidCatch", () => {
        charPage.instance().componentDidCatch();
        expect(charPage.state().error).toBeTrue();
    });

    it("Testing onItemSelected()" , () => {
        const id = "3sf3";
        charPage.instance().onItemSelected(id);
        expect(charPage.state().selectedChar).toBe("3sf3");
    });
});