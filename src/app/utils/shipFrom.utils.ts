export interface Address {
  key?: String;
  name: String;
  addressLine1: String;
  addressLine2: String;
  location: String;
  countryName: String;
  vatNo: String;
  contactPerson: String;
  contactNo: String;
}

export class Shipper {
shipFrom: Address[];

  selectedCity?: Address;

  constructor() {
    this.shipFrom = [
      {
        name: 'Apparel FZCO',
        addressLine1: 'Zebel Ali,',
        addressLine2: 'South Zone',
        location: 'FZCO',
        countryName: 'UAE',
        vatNo: '00015498',
        contactPerson: 'Nabeel',
        contactNo: '+971123456',
      },
      {
        name: 'Apparel LLC',
        addressLine1: 'Dubai,',
        addressLine2: 'Dubai',
        location: 'DIP',
        countryName: 'UAE',
        vatNo: '7895465',
        contactPerson: 'Vinod',
        contactNo: '+97456789',
      },
      {
        name: 'Apparel International LLC',
        addressLine1: 'Dubai,',
        addressLine2: 'Dubai',
        location: 'DIP',
        countryName: 'Oman',
        vatNo: '7895465',
        contactPerson: 'Abhijit',
        contactNo: '+97456789',
      },
      {
        name: 'R&B Fashion LLC',
        addressLine1: 'Dubai,',
        addressLine2: 'Dubai',
        location: 'DIP',
        countryName: 'Oman',
        vatNo: '7895465',
        contactPerson: 'Alagation',
        contactNo: '+97456789',
      },
    ];
  }

  getShipFrom(): any {
    return this.shipFrom;
  }
}
