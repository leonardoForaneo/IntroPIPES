import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena',
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, estado: boolean): string {
    let contrasena = '';
    contrasena = value;

    if (!estado) {
      contrasena = '*'.repeat(contrasena.length);
    }
    return contrasena;
  }
}
