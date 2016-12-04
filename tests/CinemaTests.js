import assert from 'assert';
import {Cinema} from '../src/cinema';

suite("cinema tests", function () {

    suite("customer ask cashier some tickets to film", function () {

        let cinema;

        setup(function () {
            cinema = new Cinema({
                availableFilms: ["Iron Man", "Interstellar"],
                capacity: 295,
                prices: [100, 120],
            });
        });

        suite("customer ask tickets to any film", function () {

            test("when customer ask one ticket then customer get one ticket", function () {
                let count = 1;
                let tickets = cinema.askTickets(count);
                assert.equal(tickets.length, 1);
            });

            test("when customer ask 5 tickets then customer get 5 tickets", function () {
                let count = 5;
                let tickets = cinema.askTickets(count);
                assert.equal(tickets.length, 5);
            });
        });

        suite("customer ask tickets to available films", function () {
            test("when customer ask tickets to Iron Man then all getting tickets to Iron Man", function () {
                let count = 3;
                let film = "Iron Man";
                let tickets = cinema.askTickets(count, film);
                let films = [];

                for (let i in tickets) {
                    if (films.indexOf(tickets[i].film) == -1) films.push(tickets[i].film);
                }

                assert.equal(films.length, 1);
                assert.equal(films[0], film);
                assert.equal(tickets.length, count);
            });

            suite("required count more cinema capacity", function () {

                cinema = new Cinema({
                    availableFilms: ["Iron Man", "Interstellar"],
                    capacity: 150,
                    prices: [100, 120],
                });

                test("customer ask 300 tickets then customer get count of cinema capacity tickets", function () {

                    let count = 300;
                    let film = "Iron Man";
                    let tickets = cinema.askTickets(count, film);
                    assert.equal(tickets.length, cinema.capacity);

                });
            });

        });

        suite("unavailable films", function () {
            test("when customer ask tickets to unavailable film Snowden then count of getting tickets is 0", function () {
                let count = 5;
                let film = "Snowden";
                let tickets = cinema.askTickets(count, film);
                assert.equal(tickets.length, 0);
            });
        });

        suite("common prices", function () {
            test("price of 4 tickets is 400 rub", function () {
                let count = 4;
                let tickets = cinema.askTickets(count);

                let sum = 0;
                for (let i in tickets) {
                    sum += tickets[i].price;
                }

                assert.equal(sum, 400);
            });

            test("price of 10 tickets to Interstellar is 1200 rub", function () {
                let count = 10;
                let film = "Interstellar";
                let tickets = cinema.askTickets(count, film);

                let sum = 0;
                for (let i in tickets) {
                    sum += tickets[i].price;
                }

                assert.equal(sum, 1200);
            });
        });

        suite("has discount", function () {

            suite("make 10-percent discount for buying all tickets", function () {

                test("when customer ask count of cinema capacity tickets then total price has 10-percent discount", function() {
                    let count = cinema.capacity;
                    let film = "Iron Man";
                    let tickets = cinema.askTickets(count, film);
                    let price = cinema.getPrice(film);

                    let sum = 0;
                    for (let i in tickets) {
                        sum += tickets[i].price;
                    }

                    assert.equal(sum, count * price * (100 - 10) / 100);
                });

            });
        });

        teardown(function () {

        });

    });

});