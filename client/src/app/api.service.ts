import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	//public baseURL = "http://www.omdbapi.com/?apikey=d77eb704&"
	public baseURL = 'http://www.localhost:3000/';
	constructor(private http: HttpClient) {}

	getAllExhibition() {
		return new Promise(async (resolve, reject) => {
			try {
				await this.http.get(this.baseURL + 'ShowAllexeb').subscribe((data) => {
					resolve(data);
				});
			} catch (err) {
				console.log(err);
			}
		});
	}

	getCounter() {
		return new Promise(async (resolve, reject) => {
			try {
				await this.http.get(this.baseURL + 'getCounter').subscribe((data) => {
					resolve(data);
				});
			} catch (err) {
				console.log(err);
			}
		});
	}

	updateCounter(counter: Number) {
		return new Promise(async (resolve, reject) => {
			console.log(counter);
			try {
				await this.http.get(this.baseURL + 'updateCounter?' + 'counter=' + counter).subscribe((data) => {
					resolve(data);
				});
			} catch (err) {
				console.log(err);
			}
		});
	}

	//http://localhost:3000/updateCounter?counter=1

	// addCategory(obj) {
	// 	return new Promise(async (resolve, reject) => {
	// 		console.log('Send category to server', obj);

	// 		try {
	// 			await this.http.post(this.baseURL + 'categories/addCategory', obj).subscribe((data) => {
	// 				resolve(data);
	// 			});
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	});
	// }

	// sum(a, b) {
	//   return a + b;
	// }
}
