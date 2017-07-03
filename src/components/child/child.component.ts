import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
    
    @Input() page:any;
    @Input() currPage:any;
 
    constructor() { }
    
    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(JSON.stringify(changes, null, 3))
        
    }
    
    

}
