import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aplicacion-form',
  templateUrl: './aplicacion-form.component.html'
})
export class AplicacionFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      descripcion: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      const payload = {
        descripcion: this.form.value.descripcion,
        usuariocreacion: 'admin'
      };
      this.http.post('http://localhost:3000/aplicacion', payload).subscribe(() => {
        this.router.navigate(['/aplicaciones']);
      });
    }
  }
}