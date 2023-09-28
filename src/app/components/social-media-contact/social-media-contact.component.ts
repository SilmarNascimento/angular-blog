import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-media-contact',
  templateUrl: './social-media-contact.component.html',
  styleUrls: ['./social-media-contact.component.css']
})
export class SocialMediaContactComponent {
  @Input() link: string = '';
  @Input() media: string = '';
  constructor() {}
}
