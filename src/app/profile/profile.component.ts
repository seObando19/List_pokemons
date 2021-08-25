import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PokemonProfile } from '../models/profile';
import { ProfileService } from "../services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profiles:PokemonProfile[] = [];
  constructor(private router: ActivatedRoute, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    /* let id:string = this.router.snapshot.paramMap.get('id');
    this.profileService.getPokemonProfile(id)
      .subscribe(profile =>{
        this.profiles = profile;
      }) */
  }
}
