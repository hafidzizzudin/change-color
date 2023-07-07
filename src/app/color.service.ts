import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ColorStateService {
    private _color = new BehaviorSubject<string>("#FFFFFF")
    private _colorList = ['orangered', 'red', 'green', 'blue', '#452']

    get color$() {
        return this._color.asObservable();
    }

    updateColor() {
        let index = this.getRandom(this._colorList.length)
        while (this._colorList[index] === this._color.getValue()) {
            index = this.getRandom(this._colorList.length)
        }
        console.log(index, this._colorList[index]);
        this._color.next(this._colorList[index]);
    }

    private getRandom(val: number): number {
        return Math.floor(Math.random() * val)
    }
}