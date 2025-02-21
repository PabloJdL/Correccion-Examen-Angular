import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent {
  checboxChecked: boolean = true;

  applyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      userName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(17)]],
      email: ['', [Validators.required, Validators.email]],
      terms: ['', [Validators.requiredTrue]]
    })
  }

  onSubmit() {
    if (this.applyForm.valid) {
      console.log('Formulario válido: ', this.applyForm.value);
      alert('Bienvenido ' + this.applyForm.get('userName')?.value);
    
    } else {
      console.log('Formulario invalido')
      alert('Formulario invalido')
    }

  }
}
