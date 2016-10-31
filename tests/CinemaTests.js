import assert from 'assert';
import {Cinema} from '../src/cinema';

suite("cinema tests", function() {

    suite("customer ask cashier some tickets to film", function() {

        let cinema;

        setup(function() {
            cinema = new Cinema({});
        });

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

        test("customer ask tickets to Iron Man", function() {
            let count = 3;
            let film = "Iron Man";
            let tickets = cinema.askTickets(count, film);

            for (let i in tickets) {
                assert.equal(tickets[i].film, film);
            }
        });

        teardown(function(){

        });

    });

});