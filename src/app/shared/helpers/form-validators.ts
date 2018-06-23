import { ValidatorFn, AbstractControl } from '@angular/forms';



export function emailValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const name = control.value;
    const yes = nameRe.test(name);
    return yes ? null : {'emailFormat': {name}};
  };
}

export function uppercaseValidator(reg: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const password = control.value;
    const hasUppercaseLetters = reg.test(password);
    return hasUppercaseLetters ? null : {'uppercaseLetters': {password}};
  };
}

export function numbersValidator(reg: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const password = control.value;
    const hasNumbers = reg.test(password);
    return hasNumbers ? null : {'numbers': {password}};
  };
}
