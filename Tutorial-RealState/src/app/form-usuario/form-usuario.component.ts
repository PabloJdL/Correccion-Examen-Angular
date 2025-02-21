import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent {
  checboxChecked: boolean = true;

  applyForm = new FormGroup({
      userName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
      email: new FormControl(''),
      terms: new FormControl('')
    });

    constructor() {}

    camposRellenos(): boolean {
      if (this.applyForm.value.userName &&
          this.applyForm.value.lastName &&
          this.applyForm.value.age &&
          this.applyForm.value.email &&
          this.applyForm.value.terms) {

        return true;

      } else {
        alert("Debes rellenar todos los campos")
        return false;

      }
    }

    validarEdad(): boolean {
      if(this.applyForm.value.age) {
        if(parseInt(this.applyForm.value.age) >= 17) {
          return true;
        
        } else {
          alert("Debes ser mayor de 16 años");
        }
      }

      return false;
    }

    activarBoton() {
      if (this.applyForm.value.terms) {
        this.checboxChecked = true;

      } else {
        this.checboxChecked = false;

      }
    }

    submitApplication() {
      if (this.camposRellenos() && this.validarEdad()){
        alert("Bienvenido " + this.applyForm.value.userName + " " + this.applyForm.value.lastName);

      }
    }
}
