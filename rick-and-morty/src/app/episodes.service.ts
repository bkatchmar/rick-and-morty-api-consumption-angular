import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EpisodeApiResponse } from "./api_responses/episodeapiresponse";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private charactersUrl = "https://rickandmortyapi.com/api/episode";  // URL to web api
  constructor(private http: HttpClient) { }
  getEpisodes(page = 1): Observable<EpisodeApiResponse> {
    return this.http.get<EpisodeApiResponse>(`${this.charactersUrl}/?page=${page}`);
  }
}