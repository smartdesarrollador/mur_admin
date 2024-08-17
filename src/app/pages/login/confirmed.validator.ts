/* 11.- LOGIN_REGISTER_BASICO-V1-P2 */
import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (FormGroup: FormGroup) => {
    const control = FormGroup.controls[controlName];
    const matchingControl = FormGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
/* /11.- LOGIN_REGISTER_BASICO-V1-P2 */
