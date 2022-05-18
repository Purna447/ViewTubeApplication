// validateForm() {
//     this.unavailabilityForm = this.formBuilder.group({
//       'startDate': [''],
//       'endDate': [''],
//       'unavailabilityReason': ['']
//     });

import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

//   }
export function StartDateValidate():ValidatorFn
{
   return(control: AbstractControl): ValidationErrors | null =>{
       let date=new Date();
       let givenDate=new Date(control.value)
       console.log(date);
       console.log(givenDate);
      if(givenDate>=date)
      {
          console.log("ok");
          return null;
      }
      else{
          console.log("wrong");
        return {strtdt:{value:control.value}}
      }

     
   };
}
// export function EndDateValidate():ValidatorFn
// {
//     return(control:AbstractControl):ValidationErrors | null=>{
//     let strtDate=new Date(control.value)
//     if(endDate>)

//     return {ed:{value:control.value}}
//     }
// }