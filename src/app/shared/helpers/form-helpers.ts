import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export function markAsTouchedAllFormInputs(form: FormGroup): void {
  if (form.invalid) {
    for (const inputName in form.controls) {
      form.get(inputName).markAsTouched();
    }
  }
}
