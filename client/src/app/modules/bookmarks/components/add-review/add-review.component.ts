import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../../../../core/http/comments/comments.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private ngbRatingConfig: NgbRatingConfig,
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService) {
    this.ngbRatingConfig.max = 5;
    this.ngbRatingConfig.readonly = false;
  }

  productId: string;
  currentRate: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.productId;
    });
  }

  commentForm: FormGroup = new FormGroup({
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200)
      ]),
      rating: new FormControl('', [
        Validators.required
      ]),
  });

  addComment(): void {
    const comment: object = {
      author: this.author.value,
      content: this.content.value,
      rating: this.rating.value,
      productId: this.productId
    }

    this.commentsService.addComment(this.productId, {comment}).subscribe(
      result => {
        window.location.reload();
        this.snackBar.open('Comment added', '', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['snackBar--success']
        });
      },
      error => {
        console.log(error);
        this.snackBar.open('Something went wrong', '', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['snackBar--failed']
        });
      }
    )
  }

  get author(): AbstractControl {
    return this.commentForm.get('author');
  }

  get content(): AbstractControl {
    return this.commentForm.get('content');
  }

  get rating(): AbstractControl {
    return this.commentForm.get('rating');
  }
}
