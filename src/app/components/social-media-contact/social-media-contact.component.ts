import { Component, Input, OnInit } from '@angular/core';
import { contactList } from 'src/app/data/socialContactList';

@Component({
  selector: 'app-social-media-contact',
  templateUrl: './social-media-contact.component.html',
  styleUrls: ['./social-media-contact.component.css']
})
export class SocialMediaContactComponent{
  @Input() link: string = '';

  constructor() {}
}
