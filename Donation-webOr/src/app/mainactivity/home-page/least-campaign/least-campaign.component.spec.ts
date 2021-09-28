import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastCampaignComponent } from './least-campaign.component';

describe('LeastCampaignComponent', () => {
  let component: LeastCampaignComponent;
  let fixture: ComponentFixture<LeastCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeastCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeastCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
