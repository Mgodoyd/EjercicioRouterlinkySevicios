import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoArchivosComponent } from './nuevo-archivos.component';

describe('NuevoArchivosComponent', () => {
  let component: NuevoArchivosComponent;
  let fixture: ComponentFixture<NuevoArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoArchivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
