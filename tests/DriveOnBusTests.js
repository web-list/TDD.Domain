import assert from 'assert';
import { pay, drive, enter, openDoors, clean } from '../src/bus';

function doNotPay(bus) {

}

function rub(volume) {
    return volume;
}

suite('When I drive on bus', function() {
    let passenger = {};
    setup(function() {
        clean();
    });

    suite("Doors will be opened to me", function() {
        test('When I payed', function() {
            enter();
            pay(passenger, rub(20));

            let isDoorsOpened = openDoors();

            assert.equal(true, isDoorsOpened);
        });

        test('If I payed 10 rub and I am an adult', function() {
            let adult = {age: "adult"};
            enter(adult);
            pay(adult, rub(10));

            let isDoorsOpened = openDoors(adult);

            assert.equal(true, isDoorsOpened);
        });
    });
    
    suite("Doors WON'T be opened to me", function() {
        test("When I didn't pay", function() {
            enter();
            doNotPay();

            let isDoorsOpened = openDoors();

            assert.equal(false, isDoorsOpened);
        });

        test('I payed only 10 rub (not full price) and I am not an adult', function() {
            let man = {};
            enter(man);
            pay(man, rub(10));

            let isDoorsOpened = openDoors(man);

            assert.equal(false, isDoorsOpened);
        });

        test('If I payed just 5 rub (not full price) and I am an adult', function() {
            let adult = {age: "adult"};
            enter(adult);
            pay(adult, rub(5));

            let isDoorsOpened = openDoors(adult);

            assert.equal(false, isDoorsOpened);
        });
    });
    
    suite('And pay for it', function() {
        test('At the end of trip I left bus on Theater stop', function() {
            pay(passenger);

            let stopWhereILeftBus = drive();

            assert.equal("Theater", stopWhereILeftBus);
        });
    });
});