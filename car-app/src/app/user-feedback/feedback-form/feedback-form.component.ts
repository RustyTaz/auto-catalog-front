import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Guest} from "../../domain/guest";
import {HttpService} from "../../services/http.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.less'],
  providers: [HttpService, MatSnackBar]
})
export class FeedbackFormComponent implements OnInit {

  guest: Guest = new Guest();
  feedbackForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<FeedbackFormComponent>, private fb: FormBuilder,
              public snackBar: MatSnackBar, private httpService: HttpService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.feedbackForm = this.fb.group({
      lastname: ['',
        [
          Validators.required,
          Validators.pattern(/^[А-ЯЁ][а-яё]{2,14}$/),
        ]
      ],
      firstname: ['',
        [
          Validators.required,
          Validators.pattern(/^[А-ЯЁ][А-Яа-яё ]{1,14}$/),
        ]
      ],
      phone: ['',
        [
          Validators.required,
          Validators.pattern(/^\+7\d{10}$/),
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z]+[\w.]+@[a-z]{4,6}\.[a-z]{2,3}/),
        ]
      ],
    })
  }

  get _lastname() {
    return this.feedbackForm.get('lastname');
  }
  get _firstname() {
    return this.feedbackForm.get('firstname');
  }
  get _phone() {
    return this.feedbackForm.get('phone');
  }
  get _email() {
    return this.feedbackForm.get('email');
  }

  onSave() {
    if(this.feedbackForm.valid) {
      this.httpService.createGuest(this.guest).subscribe();
      this.feedbackForm.reset();
      this.snackBar.open("Спасибо за обратную связь", "×", {
        verticalPosition: "top",
        horizontalPosition: "center",
      });
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
