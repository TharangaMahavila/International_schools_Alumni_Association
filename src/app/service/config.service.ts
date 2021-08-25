import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  BASE_URL = 'http://localhost:8080';

  constructor() { }
}
