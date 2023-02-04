export class Address {
    constructor(
      public id: string,
      public name: string,
      public addressLine1: string,
      public addressLine2: string,
      public countryName: string,
      public location: string,
      public vatNo: string,
      public contactPerson: string,
      public contactNo: string,
    ) {}
  }