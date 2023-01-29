export class Shipper {
  $key: string;
  shipperName: string;
  addressLine1?: string;
  addressLine2?: string;
  countryName: string;
  vatNo: string;
  contactPerson: string;
  contactNo: string;

  constructor(
    shipperName: string,
    addressLine1: string,
    addressLine2: string,
    countryName: string,
    vatNo: string,
    contactPerson: string,
    contactNo: string
  ) { }
}
