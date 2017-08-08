import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const api = 'https://reactnd-books-api.udacity.com';

@Injectable()

export class BooksDao {

	opt: RequestOptions = new RequestOptions();
	headers: Headers = new Headers();

	constructor( private http: Http ) {

		this.headers.append( 'Accept', 'application/json' );
		this.headers.append( 'Content-Type', 'application/json' );
		this.headers.append( 'Authorization', localStorage.token = Math.random().toString( 36 ).substr( -8 ) );

		this.opt.headers = this.headers;

	}

	search( query: string, maxResults: number = 20 ): Observable<any> {

		return this.http.post( `${api}/search`, JSON.stringify( { query, maxResults } ), this.opt )
			.map( res => res.json );

	}

}
