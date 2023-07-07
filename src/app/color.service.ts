import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class ColorStateService {
    private _color = new BehaviorSubject<string>("#FFFFFF")
    private _colorList = ['orangered', 'red', 'green', 'blue', '#452']

    constructor(private httpClient: HttpClient) { }

    get color$() {
        return this._color.asObservable();
    }

    updateColor() {
        // this.updateColorTest();
        this.updateColorFromRest();
    }

    private updateColorTest() {
        let val = this._colorList.length;
        let index = Math.floor(Math.random() * val)

        while (this._colorList[index] === this._color.getValue()) {
            index = Math.floor(Math.random() * val)
        }
        console.log(index, this._colorList[index]);

        this._color.next(this._colorList[index])
    }

    private updateColorFromRest() {
        let url = environment.baseUrl;
        this.httpClient.get(`${url}/color`)
            .subscribe({
                next: (data: any) => {
                    // console.log(data);
                    this._color.next(data.color);
                },
                error: (error) => console.error(error)
            });
    }
}