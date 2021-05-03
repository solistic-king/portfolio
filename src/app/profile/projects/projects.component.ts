import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: 'eStore',
      desc: '',
      githurl: 'https://github.com/solistic-king/estoreapi.git',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/os.jfif',
      tech: 'React , Node, MongoDB'
    },

    

  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
