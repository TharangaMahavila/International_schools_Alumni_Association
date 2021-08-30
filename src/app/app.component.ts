import { Component } from '@angular/core';
import {ConfigService} from "./service/config.service";
import {LoaderService} from "./service/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Student-Registration-FrontEnd';

  constructor(public loaderService: LoaderService) {
  }
}
