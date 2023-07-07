import { Component, ElementRef, OnInit } from '@angular/core';
import { ColorStateService } from "./color.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myApp';
  backgroundColor = this.colorStateService.color$;

  constructor(private colorStateService: ColorStateService, private elRef: ElementRef) { }

  ngOnInit(): void {
    setInterval(() => {
      this.colorStateService.updateColor();
    }, 2000)
  }
}
