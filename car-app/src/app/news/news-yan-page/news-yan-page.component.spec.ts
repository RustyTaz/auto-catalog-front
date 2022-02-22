import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsYanPageComponent } from './news-yan-page.component';

describe('NewsYanPageComponent', () => {
  let component: NewsYanPageComponent;
  let fixture: ComponentFixture<NewsYanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsYanPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsYanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
