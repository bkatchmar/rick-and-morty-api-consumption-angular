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

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.getCharacters();
  }
  
  getCharacters(): void {
    this.charactersService.getCharacters().subscribe(characters => {
      this.characterCall = characters;
    });
  }
}