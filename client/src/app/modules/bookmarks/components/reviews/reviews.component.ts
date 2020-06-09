import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../core/http/api/api.service";

export interface IReview {
  author: string;
  createdAt: Date;
  content: string;
  rating: number;
}

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: IReview[] = [
    {
      author: 'me',
      createdAt: new Date(),
      content: 'my comment my comment my commentvmy commentmy commentmy commentmy commentmy commentmy' +
        ' commentmy commentmy commentmy commentmy comment',
      rating: 4
    },
    {
      author: 'me',
      createdAt: new Date(),
      content: 'my comment my comment my commentvmy commentmy commentmy commentmy commentmy commentmy' +
        ' commentmy commentmy commentmy commentmy comment',
      rating: 3
    },
    {
      author: 'me',
      createdAt: new Date(),
      content: 'my comment my comment my commentvmy commentmy commentmy commentmy commentmy commentmy' +
        ' commentmy commentmy commentmy commentmy comment',
      rating: 1
    }
  ];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
