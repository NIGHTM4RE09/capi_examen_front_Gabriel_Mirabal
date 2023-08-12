import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  datos: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
   this.http.get<any[]>('http://127.0.0.1:8000/api/user').subscribe(datos => {
    this.datos = datos;
   });
    
  }
}
