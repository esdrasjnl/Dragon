import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dragon';

  entrada = "";
  salida = "";
  options: any = {
    lineNumbers: true,
    theme:'blackboard',
    lineWrapping : true,
    indentWithTabs: true,
    mode: 'javascript',
    styleActiveLine: true,
  };

  ejecutar(){
    try {
      console.log("Hola Mundo");
    } catch (error) {
      alert("Aun no valido errores")
    }
  }
}
