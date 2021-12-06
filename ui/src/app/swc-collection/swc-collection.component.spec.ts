import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwcCollectionComponent } from './swc-collection.component';

describe('SwcCollectionComponent', () => {
  let component: SwcCollectionComponent;
  let fixture: ComponentFixture<SwcCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwcCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwcCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
