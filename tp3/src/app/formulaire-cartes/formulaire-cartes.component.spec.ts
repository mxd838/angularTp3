import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCartesComponent } from './formulaire-cartes.component';

describe('FormulaireCartesComponent', () => {
  let component: FormulaireCartesComponent;
  let fixture: ComponentFixture<FormulaireCartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCartesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
