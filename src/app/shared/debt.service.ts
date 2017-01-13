import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Debt} from './debt.model';

const baseURL:string = 'http://localhost:3000/api';

@Injectable()
export class DebtService {
  http:Http;
  constructor(http:Http) {
    this.http = http;
  }

  getOwedToMe(id:string): Observable<Debt[]>{
    // console.log("In getArticles");
    console.log(id);
    return this.http.get(baseURL+'/mydebts/to/'+id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response){
    let body = res.json();
    console.log("in extractData");
    console.log(body);
    return body || { };
  }

  private handleError(error: Response | any){
    let errMsg: string;
    if(error instanceof Response){
      const body = error.json() || '';
      const err = body.err || JSON.stringify(body);
      errMsg=`${error.status} - ${error.statusText} || ''} ${err}`;

    }
    else{
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
