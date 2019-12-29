import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'


@Injectable()

export class ApiService {

    constructor(public _http : HttpClient){}

    endpoint = 'convert';
    access_key = '85c61290c0dbc9b80672c75a70febbe7';


    baseUrl: string ='http://data.fixer.io/api/'

    getConversionRate(currency:string){
        console.log(this.baseUrl + '/2013-03-16?access_key=' + this.access_key + '&symbols=' + currency + '&format=1')

        return this._http.get(this.baseUrl + '/2013-03-16?access_key=' + this.access_key + '&symbols=' + currency + '&format=1')
        
        //http:data.fixer.io/api/2013-03-16?access_key=85c61290c0dbc9b80672c75a70febbe7&symbols=USD,AUD,CAD,PLN,MXN&format=1
        
    }
}