export default class gotService {
    constructor() {
        this._apiURL = "https://www.anapioficeandfire.com/api";
    }

    async getResourse(url) {
        const res = await fetch(this._apiURL + url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status} `);
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResourse("/characters");
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const char = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(char);
    }

    async getAllBooks() {
        const res = await this.getResourse("/characters");
        return res.map(this._transformBook);
    }

    async getBook(id) {
        const book = await this.getResourse(`/characters/${id}`);
        return this._transformBook(book);
    }

    async getAllHouses() {
        const res = await this.getResourse("/characters");
        return res.map(this._transformHouse);
    }

    async getHouse(id) {
        const house = await this.getResourse(`/characters/${id}`);
        return this._transformHouse(house);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlords: house.overlords,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}

