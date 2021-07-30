export default class Fetch{
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
        this.getAllCharacters = this.getAllCharacters.bind(this);
        this.getAllBooks = this.getAllBooks.bind(this);
        this.getAllHouses = this.getAllHouses.bind(this);
        this.getCharacter = this.getCharacter.bind(this);
        this.getBook = this.getBook.bind(this);
        this.getHouse = this.getHouse.bind(this);
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllBooks() {
        return this.getResource(`/books/`);
    }

    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }

    async getAllCharacters() {
        const randomNumber = Math.floor(Math.random() * 213);
        const result = await this.getResource(`/characters?page=${randomNumber}`);
        return result.map(this._transformCharacter);
    }

    async getCharacter(id) {
       const result = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(result);
    }

    getAllHouses() {
        return this.getResource(`/houses/`);
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }

    _transformCharacter(char) {
        return {
            url: char.url,
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        };
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        };
    }
}