'use strict'

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  constructor() {

  }

  getCodeBooking() {
    let text: string = '';
    let possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    for (let i: number = 0; i < 8; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  getDowBooking() {
    let arr: string[] = [];
    let possible2: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
    let a = Math.round(Math.random() * (possible2.length - 1));
    return possible2[Math.round(Math.random() * (possible2.length - 1))]
  }
}

let firstBooking = new Reservation;

for (let i: number = 0; i < 10; i++) {
console.log(`Booking# ${firstBooking.getCodeBooking()} for ${firstBooking.getDowBooking()}`);
}
