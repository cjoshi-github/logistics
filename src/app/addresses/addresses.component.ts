import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from '../models/address.model';
import { AddressService } from '../shared/address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent {
  public shipper: Address  = new Address();

  constructor(private service: AddressService){
    service.getAll().subscribe()
  }
  create(form: NgForm){
    this.service.create(form.value)
  }
}