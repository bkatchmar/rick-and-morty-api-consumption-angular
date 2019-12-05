import { Component, OnInit } from "@angular/core";
import { CharacterApiResponse } from "../api_responses/characterapiresponse";
import { CharactersService } from "../characters.service";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.css"]
})
export class CharactersComponent implements OnInit {
  characterCall: CharacterApiResponse;
  pages: number[];
  currentPage = 1;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() { this.getCharacters(); }
  
  getCharacters(): void {
    this.charactersService.getCharacters().subscribe(characters => {
      this.characterCall = characters;
      this.fillInPageArray(characters.info.pages);
    });
  }

  fillInPageArray(total: number): void {
    this.pages = [] as number[];

    for(var counter:number = 1; counter<=total; counter++) {
      this.pages.push(counter);
    }
  }

  changePage(page: number) : void {
    this.currentPage = page;
  }
}