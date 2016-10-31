import assert from 'assert';
import {Cinema} from '../src/cinema';

suite("cinema tests", function() {

    suite("customer ask cashier some tickets to film", function() {

        let cinema;

        setup(function() {
            cinema = new Cinema({
                availableFilms: ["Iron Man", "Interstellar"],
                capacity: 295,
            });
        });

        suite("parameter film is not important", function() {
            test("customer ask one ticket", function() {
                let count = 1;
                let tickets = cinema.askTickets(count);
                assert.equal(tickets.length, 1);
            });

            test("customer ask 5 tickets", function() {
                let count = 5;
                let tickets = cinema.askTickets(count);
                assert.equal(tickets.length, 5);
            });
        });

        suite("available films", function() {
            test("customer ask tickets to Iron Man", function() {
                let count = 3;
                let film = "Iron Man";
                let tickets = cinema.askTickets(count, film);

                for (let i in tickets) {
                    assert.equal(tickets[i].film, film);
                }
            });

            test("customer ask tickets to Interstellar", function() {
                let count = 2;
                let film = "Interstellar";
                let tickets = cinema.askTickets(count, film);

                for (let i in tickets) {
                    assert.equal(tickets[i].film, film);
                }
            });

            suite("required count more cinema capacity", function() {
                test("customer ask 300 tickets - more then cinema capacity", function() {

                    let count = 300;
                    let film = "Iron Man";
                    let tickets = cinema.askTickets(count, film);
                    assert.equal(tickets.length, cinema.capacity);

                });
            });

        });

        suite("unavailable films", function() {
            test("customer ask tickets to unavailable film Snowden", function() {
                let count = 5;
                let film = "Snowden";
                let tickets = cinema.askTickets(count, film);
                assert.equal(tickets.length, 0);
            });
        });

        test("price of 4 tickets is 400 rub", function() {
            let count = 4;
            let tickets = cinema.askTickets(count);

            let sum = 0;
            for (let i in tickets) {
                sum += tickets[i].price;
            }

            assert.equal(sum, 400);
        });

        teardown(function(){

        });

    });

});