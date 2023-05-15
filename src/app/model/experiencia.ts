export class Experiencia {
  id?: number;
  nombre: string;
  descripcion: string;
  tipoEmpleo: string;
  esTrabajoActual: boolean;

  constructor(
    nombre: string,
    descripcion: string,
    tipoEmpleo: string,
    esTrabajoActual: boolean
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipoEmpleo = tipoEmpleo;
    this.esTrabajoActual = esTrabajoActual;
  }
}
