let payed = 0;
let hasDiscount = false;
const rideCost = 20;
const discountCost = 10;

export function pay(passenger, paymentAmount) {
    hasDiscount = passenger.age == "adult";
    payed = paymentAmount;
}

export function drive() {
    return "Theater";
}

export function enter() {

}

export function openDoors() {
    if (hasDiscount) {
        return payed >= discountCost;
    }
    else {
        return payed >= rideCost;
    }
    return false;
}

export function clean() {
    payed = 0;
    hasDiscount = false;
}