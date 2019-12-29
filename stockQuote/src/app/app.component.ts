import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'stockQuote';

  constructor(private apiService: ApiService){}

  getQuote(currency:string){
    console.log(currency)
    this.apiService.getConversionRate(currency).subscribe(
      (response : AppComponent) => {
       console.log(response)
       
      })
  }
}
