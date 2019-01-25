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

    getAllCharacters() {
        return this.getResourse("/characters");
    }

    getCharacter(id) {
        return this.getResourse(`/characters/${id}`);
    }

    getAllBooks() {
        return this.getResourse("/books");
    }

    getBook(id) {
        return this.getResourse(`/books/${id}`);
    }

    getAllHouses() {
        return this.getResourse("/houses");
    }

    getHouse(id) {
        return this.getResourse(`/houses/${id}`);
    }
}

