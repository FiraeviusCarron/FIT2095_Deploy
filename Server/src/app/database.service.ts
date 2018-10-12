import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'ContentType': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }
  result: any;

  getActors() {
    return this.http.get('/actors');
  }
  getActor(id) {
    const url = '/actors/' + id;
    return this.http.get(url);
  }
  createActor(data) {
    return this.http.post('/actors', data, httpOptions);
  }
  updateActor(id, data) {
    const url = '/actors/' + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteActor(id) {
    const url = '/actors/' + id;
    return this.http.delete(url, httpOptions);
  }
  pushMovie(data) {
    return this.http.post('/actors/movie', data, httpOptions);
  }


  getMovies() {
    return this.http.get('/movies');
  }
  getMovie(id) {
    const url = '/movies/' + id;
    return this.http.get(url);
  }
  createMovie(data) {
    return this.http.post('/movies', data, httpOptions);
  }
  updateMovie(id, data) {
    const url = '/movies/' + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteMovie(id) {
    const url = '/movies/' + id;
    return this.http.delete(url, httpOptions);
  }
  pushActor(data) {
    return this.http.post('/movies/actor', data, httpOptions);
  }
}
