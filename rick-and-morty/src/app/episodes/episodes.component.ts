import { Component, OnInit } from "@angular/core";
import { EpisodeApiResponse } from "../api_responses/episodeapiresponse";
import { EpisodesService } from "../episodes.service";

@Component({
  selector: "app-episodes",
  templateUrl: "./episodes.component.html",
  styleUrls: ["./episodes.component.css"]
})
export class EpisodesComponent implements OnInit {
  episodesCall: EpisodeApiResponse;
  pages: number[];
  currentPage = 1;

  constructor(private episodesService: EpisodesService) { }

  ngOnInit() { this.getEpisodes(); }

  getEpisodes(page = 1): void {
    this.episodesService.getEpisodes(page).subscribe(episodes => {
      this.episodesCall = episodes;
      this.fillInPageArray(episodes.info.pages);
      this.currentPage = page;
    });
  }

  fillInPageArray(total: number): void {
    this.pages = [] as number[];

    for(var counter:number = 1; counter<=total; counter++) {
      this.pages.push(counter);
    }
  }
}