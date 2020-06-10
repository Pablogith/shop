import {Component, Input, OnInit} from '@angular/core';
import {IReview} from "../reviews/reviews.component";
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() review: IReview;

  constructor(private ngbRatingConfig: NgbRatingConfig) {
    this.ngbRatingConfig.readonly = true;
    this.ngbRatingConfig.max = 5;
  }

  ngOnInit(): void {}
}
