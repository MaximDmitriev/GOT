export default class gotService {
    constructor() {
        this._apiURL = "https://www.anapioficeandfire.com/api";
    }

    async getResourse(url) {
        const res = await fetch(this._apiURL + url);

        if(!res.ok) {
            throw new Error(res.status);  
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResourse("/characters?page=7&pageSize=10");
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
            name: char.name === "" ? "no data" : char.name,
            gender: char.gender === "" ? "no data" : char.gender,
            born: char.born === "" ? "no data" : char.born,
            died: char.died === "" ? "no data" : char.died,
            culture: char.culture === "" ? "no data" : char.culture,
            id: char.url.slice(-2)
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

