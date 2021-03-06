import { Component, OnInit } from '@angular/core';
import { GithubComponent } from '../github/github.component';
import { Router } from '@angular/router';
import { CsService } from './cs.service';

@Component({
  selector: 'app-cs',
  templateUrl: './cs.component.html',
  styleUrls: ['./cs.component.css']
})
export class CsComponent implements OnInit {


  giturl: string;
  csRep: any;
  router: Router;
  constructor(private CsService: CsService) { 
    this.giturl = window.history.state.data;
    this.getCsReport();
  }

  ngOnInit() {
    if (this.giturl) {
    
    }
    else {
      alert(this.giturl);
    }

  }
  public async getCsReport() {
    this.csRep = (await this.CsService.getCsReport(this.giturl)).data;
    console.log("Pmd : ", this.csRep);
  }

}
