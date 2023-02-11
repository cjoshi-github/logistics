import {Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: MenuItem[] = [];
  username: string = "Chirag Joshi"

  ngOnInit() {
    this.items = [
      {
        label: 'Packing List',
        icon: 'pi pi-fw pi-cart-plus',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink: "/packing"
          },
          {
            separator: true,
          },
          {
            label: 'Assign Oracle',
            icon: 'pi pi-fw pi-file-edit',
            routerLink: "/oracle"
          },
        ],
      },
      {
        label: 'Invoice',
        icon: 'pi pi-fw pi-link',
        items: [
          {
            label: 'Create',
            icon: 'pi pi-fw pi-plus',
            routerLink: "/invoice"
          },
        ]
      },

      {
        label: 'Arrange Shipment',
        icon: 'pi pi-fw pi-truck',
        routerLink: "/shipment"
      },

      {
        label: 'Shipment Status',
        icon: 'pi pi-fw pi-flag',
      },

      {
        label: 'Receipt Confirmation',
        icon: 'pi pi-fw pi-thumbs-up',
      },
      {
        label: 'Reports',
        icon: 'pi pi-fw pi-chart-bar',
      },
    ];
  }
}
