export class Consignee {
  $key: string;
  consigneeName: string;
  addressLine1?: string;
  addressLine2?: string;
  countryName: string;
  vatNo: string;
  contactPerson: string;
  contactNo: string;

  constructor(
    consigneeName: string,
    addressLine1: string,
    addressLine2: string,
    countryName: string,
    vatNo: string,
    contactPerson: string,
    contactNo: string
  ) { }
}
