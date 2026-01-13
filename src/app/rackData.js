export const dispositivos = {
  patchera_1: {
    tipo: "PATCHERA",
    nombre: "Patchera 1",
    modelo: "Patch Panel 24 puertos",
    imagen: "/src/images/p1.jpg",
    puertos: Array.from({ length: 24 }, (_, i) => ({
      numero: i + 1,
      x: 4 + i * 3.8,
      y: 60
    }))
  },

  switch_1: {
    tipo: "SWITCH",
    nombre: "Switch 1",
    modelo: "Switch 24p",
    imagen: "/src/images/sw1.jpg",
    puertos: Array.from({ length: 24 }, (_, i) => ({
      numero: i + 1,
      x: 4 + i * 3.8,
      y: 55
    }))
  },

  switch_2: {
    tipo: "SWITCH_POE",
    nombre: "Switch 2",
    modelo: "Switch 24p PoE",
    imagen: "/src/images/sw2.jpg",
    puertos: Array.from({ length: 24 }, (_, i) => ({
      numero: i + 1,
      x: 4 + i * 3.8,
      y: 55
    }))
  }
};
