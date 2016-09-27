import {Component} from "@angular/core";
import * as geolocation from "nativescript-geolocation";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    ngOnInit() {
        console.log("Geolocation enabled: " + geolocation.isEnabled());
    }

    public onTap() {
        this.counter--;
    }
}
