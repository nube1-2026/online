export interface Ubicacion {
  ciudad: string;
  direccion: string;
<<<<<<< HEAD
  mapa: string;
=======
>>>>>>> 95728e948178cf45ca139cdf75c2ee2522c18e93
}

export interface Contacto {
  telefono?: string;
  whatsapp?: string;
  sitio?: string;
  correo?: string;
}

<<<<<<< HEAD
export interface RedesSociales {
facebook?: string;
instagram?: string;
massenger?: string;

}
=======
>>>>>>> 95728e948178cf45ca139cdf75c2ee2522c18e93
export interface Horario {
  abre: string;
  cierra: string;
}

export interface Negocio {
  id: string;
  nombre: string;
  slug: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  calificacion: number;
  resenas: number;
  rango_precio: string;
  etiquetas: string[];
  ubicacion: Ubicacion;
  contacto: Contacto;
  horario: Horario;
  destacado?: boolean;
<<<<<<< HEAD
  redessociales?: RedesSociales;
  vip?: boolean;
=======
>>>>>>> 95728e948178cf45ca139cdf75c2ee2522c18e93
}
