import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirUsuarioComponent } from './exibir-usuario.component';

describe('ExibirUsuarioComponent', () => {
  let component: ExibirUsuarioComponent;
  let fixture: ComponentFixture<ExibirUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibirUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibirUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
