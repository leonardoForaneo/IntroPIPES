import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Capitan América';
  nombre2: string = 'capitán américa';
  nombre3: string = 'lEonArdo MaRTinEz';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string = 'en';
  videoUrl: string = 'https://www.youtube.com/embed/1-4Zcr0De9g';

  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  cambiarIdioma(abb: string) {
    if (abb == 'es') {
      this.idioma = 'es';
    } else if (abb == 'en') {
      this.idioma = 'en';
    } else {
      this.idioma = 'fr';
    }
  }

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20,
    },
  };
}
