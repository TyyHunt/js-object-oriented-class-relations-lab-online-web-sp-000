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

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId = this.id;
      }.bind(this)
    );
  };

  passengers() {
    return store.passengers.filter(
      function(passenger) {
        return passenger.driverId = this.id;
      }.bind(this)
    );
  };

};

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  };

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId = this.id;
      }.bind(this)
    );
  };

  drivers() {
    return store.drivers.filter(
      function(driver) {
        return driver.passengerId = this.id;
      }.bind(this)
    );
  };

};

class Trip {
  constructor(driver, passenger) {
    this.passengerId = passenger.id;
    this.driverId = driver.id;
    this.id = ++tripId;

    store.trips.push(this);
  };

  passengers() {
    return store.passengers.filter(
      function(passenger) {
        return passenger.tripId = this.id;
      }.bind(this)
    );
  };

  drivers() {
    return store.drivers.filter(
      function(driver) {
        return driver.tripId = this.id;
      }.bind(this)
    );
  };

};
