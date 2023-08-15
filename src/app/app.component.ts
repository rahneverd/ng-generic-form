import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonFormData: any
  constructor(private dataService: DataService) {
    this.dataService.jsonFormData$.subscribe((data:any) => {
      this.jsonFormData = data
    })
  }
}
