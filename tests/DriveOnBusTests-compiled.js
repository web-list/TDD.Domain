'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _bus = require('../src/bus');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doNotPay(bus) {}

function rub(volume) {
    return volume;
}

suite('When I drive on bus', function () {
    var passenger = {};
    setup(function () {
        (0, _bus.clean)();
    });

    suite("Doors will be opened to me", function () {
        test('When I payed', function () {
            (0, _bus.enter)();
            (0, _bus.pay)(passenger, rub(20));

            var isDoorsOpened = (0, _bus.openDoors)();

            _assert2.default.equal(true, isDoorsOpened);
        });

        test('If I payed 10 rub and I am an adult', function () {
            var adult = { age: "adult" };
            (0, _bus.enter)(adult);
            (0, _bus.pay)(adult, rub(10));

            var isDoorsOpened = (0, _bus.openDoors)(adult);

            _assert2.default.equal(true, isDoorsOpened);
        });
    });

    suite("Doors WON'T be opened to me", function () {
        test("When I didn't pay", function () {
            (0, _bus.enter)();
            doNotPay();

            var isDoorsOpened = (0, _bus.openDoors)();

            _assert2.default.equal(false, isDoorsOpened);
        });

        test('I payed only 10 rub (not full price) and I am not an adult', function () {
            var man = {};
            (0, _bus.enter)(man);
            (0, _bus.pay)(man, rub(10));

            var isDoorsOpened = (0, _bus.openDoors)(man);

            _assert2.default.equal(false, isDoorsOpened);
        });

        test('If I payed just 5 rub (not full price) and I am an adult', function () {
            var adult = { age: "adult" };
            (0, _bus.enter)(adult);
            (0, _bus.pay)(adult, rub(5));

            var isDoorsOpened = (0, _bus.openDoors)(adult);

            _assert2.default.equal(false, isDoorsOpened);
        });
    });

    suite('And pay for it', function () {
        test('At the end of trip I left bus on Theater stop', function () {
            (0, _bus.pay)(passenger);

            var stopWhereILeftBus = (0, _bus.drive)();

            _assert2.default.equal("Theater", stopWhereILeftBus);
        });
    });
});

//# sourceMappingURL=DriveOnBusTests-compiled.js.map