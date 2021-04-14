import { nanoid } from "nanoid";
import uno from "../assets/products/lito1.JPG";
import dos from "../assets/home/lis1.jpg";
import tres from "../assets/home/hu5.JPG";
import cuatro from "../assets/home/hu6.JPG";
import cinco from "../assets/home/wilif2.JPG";
import seis from "../assets/home/placas.JPG";
import siete from "../assets/home/michif1.JPG";
import ocho from "../assets/home/bruno.JPG";
import nueve from "../assets/home/hue8.JPG";
import diez from "../assets/home/hue13.JPG";

export const carousel = [
  {
    img: uno,
    id: "id" + nanoid(),
    message: "Lámpara personalizada",
  },
  { img: dos, id: "id" + nanoid(), message: "Placas personalizadas" },
  { img: tres, id: "id" + nanoid(), message: "Placas personalizadas" },
  {
    img: cuatro,
    id: "id" + nanoid(),
    message: "Con el nombre de tu mascota",
  },
  { img: cinco, id: "id" + nanoid(), message: "Y con un número teléfonico" },
  { img: seis, id: "id" + nanoid(), message: "Placas en forma de hueso" },
  { img: siete, id: "id" + nanoid(), message: "Placas personalizadas" },
  { img: ocho, id: "id" + nanoid(), message: "Placas circulares" },
  { img: nueve, id: "id" + nanoid(), message: "Con el nombre de tu mascota" },
  { img: diez, id: "id" + nanoid(), message: "Con el nombre de tu mascota" },
];
