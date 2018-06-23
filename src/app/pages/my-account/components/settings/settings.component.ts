import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';

import { AccountService } from '../../../../modules/account/services/account/account.service';
import { ModalWindowService } from '../../../../core/modal-window/modal-window/modal-window.service';

import { emailValidator } from '../../../../shared/helpers/form-validators';
import { markAsTouchedAllFormInputs } from '../../../../shared/helpers/form-helpers';
import { UserModel } from '../../../../modules/user/models/user/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  form: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private modalWindowService: ModalWindowService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, emailValidator(/\S+@\S+\.\S+/)]],
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z][A-Za-z ]*$')]]
    });

    const user = this.accountService.user;

    this.updateFormValues(user);
  }

  update() {
    markAsTouchedAllFormInputs(this.form);

    const form = this.form;

    if (form.invalid || form.disabled || this.isSubmitted) {
      return;
    }

    this.isSubmitted = true;

    this.accountService
      .updateUser(this.form.value)
      .pipe(
        tap(() => {
          this.isSubmitted = false;
          this.modalWindowService.moveAfterSaveUserSuccess();

          setTimeout(() => {
            this.modalWindowService.moveAfterSaveUserSuccess();
          }, 2000);
        }),
        catchError((error) => {
          this.isSubmitted = false;
          this.modalWindowService.moveAfterSaveUserError();

          setTimeout(() => {
            this.modalWindowService.moveAfterSaveUserError();
          }, 2000);

          return error;
        })
      )
      .subscribe();
  }

  private updateFormValues = (user: UserModel) => {
    const form = this.form;

    form.controls.email.setValue(user.email);
    form.controls.name.setValue(user.name);
  }
}
