import { Component, Input, OnInit } from '@angular/core';
import { contactList } from 'src/app/data/socialContactList';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit{
  @Input() contacts: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.contacts = contactList;
  }
}
