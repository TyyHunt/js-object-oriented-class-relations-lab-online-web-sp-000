let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  };
};

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  };
};

class Trip {
  constructor(passengerId, driverId) {
    this.passengerId = passengerId
    this.driverId = driverId
    this.id = ++tripId
  };
};
