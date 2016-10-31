export class Cinema {
    constructor(data) {
        this._data = data;
    }

    askTickets(count, film) {
        let tickets = [];
        for (let i=0; i++<count;) {
            tickets.push(new Ticket({
                film: film
            }));
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
}