export class Cinema {
    constructor(data) {
        this._data = data;
    }

    askTickets(count) {
        let tickets = [];
        for (let i=0; i++<count;) {
            tickets.push(new Ticket());
        }

        return tickets;
    }
}

export class Ticket {
    constructor(data) {
        this._data = data;
    }

    get film() {
        return "Iron Man";
    }
}