import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachProductDialogComponent } from './each-product-dialog.component';

describe('EachProductDialogComponent', () => {
  let component: EachProductDialogComponent;
  let fixture: ComponentFixture<EachProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachProductDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
