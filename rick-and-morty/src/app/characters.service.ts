import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CharacterApiResponse } from "./api_responses/characterapiresponse";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CharactersService {
  private charactersUrl = "https://rickandmortyapi.com/api/character";  // URL to web api
  constructor(private http: HttpClient) { }
  getCharacters(): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>(this.charactersUrl);
  }
}