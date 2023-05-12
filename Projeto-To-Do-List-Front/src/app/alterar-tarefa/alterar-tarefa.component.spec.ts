import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarTarefaComponent } from './alterar-tarefa.component';

describe('AlterarTarefaComponent', () => {
  let component: AlterarTarefaComponent;
  let fixture: ComponentFixture<AlterarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarTarefaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
