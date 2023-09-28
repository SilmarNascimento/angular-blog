import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { imagesArray } from '../../data/carouselImages'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  timerSubs!: Subscription;
  images: string[] = [];
  private _indexActiveImage: number = 0;

  ngOnInit(): void {
    this.initiateTimer();
    this.images = imagesArray
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  get indexActiveImage() {
    return this._indexActiveImage;
  }
  set indexActiveImage(value: number) {
    this._indexActiveImage = value < this.images.length ? value : 0;
  }

  initiateTimer(): void {
    this.timerSubs = timer(5000).subscribe(() => this.activateImage(this.indexActiveImage +1))
  }

  stopTimer():void {
    this.timerSubs?.unsubscribe();
  }

  activateImage(index: number): void {
    this.indexActiveImage = index;
    this.initiateTimer();
  }
}
