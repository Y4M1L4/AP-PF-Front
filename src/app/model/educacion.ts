export class Educacion {
  id: number;
  nombre: string;
  descripcion: string;
  esActual: boolean;

  constructor(nombre: string, descripcion: string, esActual: boolean) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.esActual = esActual;
  }
}
