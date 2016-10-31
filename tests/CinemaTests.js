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

        teardown(function(){

        });

    });

});