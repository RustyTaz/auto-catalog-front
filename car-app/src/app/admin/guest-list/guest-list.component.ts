import {Component, OnInit} from '@angular/core';
import {Guest} from "../../domain/guest";
import {AdminWorkService} from "../../services/admin-work.service";

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.less']
})


export class GuestListComponent implements OnInit {

  guests: Guest[] = [];

  constructor(private adminWorkService: AdminWorkService) {
  }

  columns = [
    {
      columnDef: 'surname',
      header: 'Фамилия',
      cell: (element: Guest) => `${element.surname}`,
    },
    {
      columnDef: 'name',
      header: 'Имя',
      cell: (element: Guest) => `${element.name}`,
    },
    {
      columnDef: 'phone',
      header: 'Телефон',
      cell: (element: Guest) => `${element.phone}`,
    },
    {
      columnDef: 'email',
      header: 'Почта',
      cell: (element: Guest) => `${element.email}`,
    },
  ];
  displayedColumns = this.columns.map(c => c.columnDef);

  ngOnInit(): void {
    this.adminWorkService.getGuests().subscribe(data => {
      this.guests = data;
      console.log(data)
    });
  }

}
