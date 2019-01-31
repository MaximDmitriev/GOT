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
        return this._replaceEmpty(this._transformCharacter(char));
    }

    getAllBooks = async () => {
        const res = await this.getResourse("/books");
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResourse(`/books/${id}`);
        return this._replaceEmpty(this._transformBook(book));
    }

    getAllHouses = async () => {
        const res = await this.getResourse("/houses");
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResourse(`/houses/${id}`);
        return this._replaceEmpty(this._transformHouse(house));
    }

    _replaceEmpty(obj) {
        for (let i in obj) {
            if (obj[i] === "" || obj[i][0] === "") obj[i] = "no data";
        }
        return obj;
    }

    _transformCharacter(char) {
        const re = "https://www.anapioficeandfire.com/api/characters/";
        return  {
                name: char.name,
                gender: char.gender,
                born: char.born,
                died: char.died,
                culture: char.culture,
                id: char.url.replace(re, "")
            }
    }

    _transformHouse(house) {
        const re = "https://www.anapioficeandfire.com/api/houses/";
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles.join(", "),
            overlord: house.overlord.replace(re, ""),
            ancestralWeapons: house.ancestralWeapons,
            id: house.url.replace(re, "")
        }
    }

    _transformBook(book) {
        const re = "https://www.anapioficeandfire.com/api/books/";
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released,
            id: book.url.replace(re, "")
        }
    }
}

