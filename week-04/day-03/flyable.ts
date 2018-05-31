'use strict';

import { Bird } from './zoo' as 'bob';

interface Flyable {
  land(),
  fly(),
  takeOff(), 
};

abstract class Vehicle {

}

class Helicopter extends Vehicle implements Flyable {

}

class Bird extends bob implements Flyable {

}
