export default class gotService {
    constructor() {
        this._apiURL = "https://www.anapioficeandfire.com/api";
    }

    getResourse = async (url) => {
        const res = await fetch(this._apiURL + url);

        if(!res.ok) {
            throw new Error(res.status);  
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResourse("/characters?page=11&pageSize=10");
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const char = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(char);
    }

    getAllBooks = async () => {
        const res = await this.getResourse("/books");
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResourse(`/books/${id}`);
        return this._transformBook(book);
    }

    getAllHouses = async () => {
        const res = await this.getResourse("/houses");
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(house);
    }

    _transformCharacter(char) {
        const re = "https://www.anapioficeandfire.com/api/characters/";
        return {
            name: char.name === "" ? "no data" : char.name,
            gender: char.gender === "" ? "no data" : char.gender,
            born: char.born === "" ? "no data" : char.born,
            died: char.died === "" ? "no data" : char.died,
            culture: char.culture === "" ? "no data" : char.culture,
            id: char.url.replace(re, "")
        }
    }

    _transformHouse(house) {
        const re = "https://www.anapioficeandfire.com/api/houses/";
        return {
            name: house.name === "" ? "no data" : house.name,
            region: house.region === "" ? "no data" : house.region,
            words: house.words === "" ? "no data" : house.words,
            titles: house.titles[0] === "" ? "no data" : house.titles,
            overlord: house.overlord === "" ? "no data" : house.overlord,
            ancestralWeapons: house.ancestralWeapons[0] === "" ? "no data" : house.ancestralWeapons,
            id: house.url.replace(re, "")
        }
    }

    _transformBook(book) {
        const re = "https://www.anapioficeandfire.com/api/books/";
        return {
            name: book.name === "" ? "no data" : book.name,
            numberOfPages: book.numberOfPages === "" ? "no data" : book.numberOfPages,
            publisher: book.publisher === "" ? "no data" : book.publisher,
            released: book.released === "" ? "no data" : book.released,
            id: book.url.replace(re, "")
        }
    }
}

