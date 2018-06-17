import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingLoadingComponent } from './setting-loading.component';

describe('SettingLoadingComponent', () => {
  let component: SettingLoadingComponent;
  let fixture: ComponentFixture<SettingLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
