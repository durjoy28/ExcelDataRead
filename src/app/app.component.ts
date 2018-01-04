import { Component } from '@angular/core';
import { XlsxToJsonService } from './xlsx-to-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public result:any;
  constructor(private xlsxToJsonService: XlsxToJsonService){}
  handleFile(event) {
    let file = event.target.files[0];
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      this.result = JSON.stringify(data['sheets'].Sheet1);
    })

  }
}
