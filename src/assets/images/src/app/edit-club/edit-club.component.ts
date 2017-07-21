import { Component, Input, OnInit } from '@angular/core';
import { Club } from '../club.model';
import { ClubService } from '../club.service';


@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.css'],
  providers: [ClubService]
})

export class EditClubComponent implements OnInit {
  @Input() selectedClub;

  editClubForm: boolean = false;
  editClubButton: boolean = true;

  constructor(private clubService: ClubService) { }

  ngOnInit() {
  }

  beginUpdatingClub(clubToUpdate){
  this.clubService.updateClub(clubToUpdate);
  }

  beginDeletingClub(clubToDelete){
  if(confirm("Are you sure you want to delete this item?")){
    this.clubService.deleteClub(clubToDelete);
    }
  }

  showEditClubForm() {
  this.editClubForm = true;
  this.editClubButton = false;
  }

  hideEditClubForm() {
    this.editClubForm = false;
  }
}
