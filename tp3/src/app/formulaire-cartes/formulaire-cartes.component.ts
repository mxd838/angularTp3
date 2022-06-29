import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-cartes',
  templateUrl: './formulaire-cartes.component.html',
  styleUrls: ['./formulaire-cartes.component.css'],
})
export class FormulaireCartesComponent implements OnInit {
  users: any[] = [
    {
      nom: 'Graham',
      prenom: 'Bret',
      email: 'Sincere@april.biz',
      entreprise: 'Kulas Light',
      telephone: '000102030405',
    },
  ];

  submitted: boolean = false;

  user: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    entreprise: ['', [Validators.required, Validators.minLength(2)]],
    telephone: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  private addUser(): void {
    this.users.push(this.user.value);
    this.user.reset();
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.user.valid) {
      this.addUser();
    } else {
      console.log('Formulaire invalide');
    }
  }
}
