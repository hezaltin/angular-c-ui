
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ClarityModule } from '@clr/angular';
import { AnalyticsComponent } from './analytics.component';


describe('AnalyticsComponent', () => {

    let expectedMsg: string = 'This is a Clarity seed application. This is the default page that loads for the application.';

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AnalyticsComponent
            ],
            imports: [
                ClarityModule.forRoot()
            ]
        });

        fixture = TestBed.createComponent(AnalyticsComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;

    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create the home page', async(() => {
        expect(compiled).toBeTruthy();
    }));

    it(`should display: "${expectedMsg}"`, async(() => {
        expect(compiled.querySelector("p").textContent).toMatch(expectedMsg);
    }));


});
