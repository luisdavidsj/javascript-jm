export function areaCirculo(radio) {
  const PI = Math.PI;
  let area = Math.pow(PI * radio, 2);
  return area;
}

export function radioCirculo(diametro) {
  let radio = diametro / 2;
  return radio;
}

export function diametroCirculo(radio) {
  let diametro = radio * 2;
  return diametro;
}

export function perimetroCirculo(diametro) {
  let perimetro = Math.PI * diametro;
  return perimetro;
}
