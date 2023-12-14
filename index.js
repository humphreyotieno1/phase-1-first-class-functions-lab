const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const dArray = ['Antonia', 'Nuru', 'Hum', 'Nobert'];
const myFirstDrivers = selectingDrivers[0](dArray);
const myLastDrivers = selectingDrivers[1](dArray);
console.log(myFirstDrivers);
console.log(myLastDrivers);

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
}