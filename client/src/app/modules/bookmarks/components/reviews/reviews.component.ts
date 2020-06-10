import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../../../core/http/comments/comments.service";
import {ActivatedRoute} from "@angular/router";
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

  reviews: IReview[] = [];
  productId: string;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.productId;

      this.apiService.getProduct(this.productId, 'sth').subscribe(
        result => {
          const comments: any[] = result.data.comments;
          comments.forEach(comment => {
            this.commentsService.getComment(comment).subscribe(
              result => {
                this.reviews.push(result.data);
              },
              error => {
                console.log(error);
              }
            );
          });
        },
        error => {
          console.log(error);
        }
      );
    });
  }
}
