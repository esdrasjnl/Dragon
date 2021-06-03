import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.css']
})
export class IDEComponent implements OnInit {

  constructor() { }

  txtentrada = "";
  content = "";

  options: any = {
    lineNumbers: true,
    theme:'blackboard',
    lineWrapping : true,
    indentWithTabs: true,
    mode: 'javascript',
    styleActiveLine: true,
  };

  ngOnInit(): void {
  }

}
