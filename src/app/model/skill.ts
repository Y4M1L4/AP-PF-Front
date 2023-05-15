export class Skill {
  id: number;
  nombre: string;
  porcentaje: number;
  urlImageLogo: string;

  constructor(nombre: string, porcentaje: number, urlImageLogo: string) {
    this.nombre = nombre;
    this.porcentaje = porcentaje;
    this.urlImageLogo = urlImageLogo;
  }
}
