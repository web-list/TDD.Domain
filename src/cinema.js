export class Cinema {
    constructor(data) {
        this._data = data;
    }

    get availableFilms() {
        return this._data.availableFilms;
    }

    get capacity() {
        return this._data.capacity;
    }

    askTickets(count, film) {
        let tickets = [];

        if (!film) film = this.availableFilms[0];
        if (count > this.capacity) count = this.capacity;

        if (this.availableFilms.indexOf(film) != -1) {
            for (let i=0; i++<count;) {
                tickets.push(new Ticket({
                    film: film,
                    price: 100
                }));
            }
        }

        return tickets;
    }
}

export class Ticket {
    constructor(data) {
        this._data = data;
    }

    get film() {
        return this._data.film;
    }

    get price() {
        return this._data.price;
    }
}