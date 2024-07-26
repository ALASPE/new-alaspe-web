import React from "react";
import Popup from "./components/Popup";
import SwiperCarousel from "./components/Slider";
import PageComp from "./components/PageComp";
import NavBarItem from "./components/NavbarItem";

const images = [
  "/slider/Slider1@10x.png",
  "/slider/Slider2@10x.png",
  "/slider/1.jpg",
  "/slider/2.jpg",
  "/slider/3.jpg",
  "/slider/4.jpg",
  "/slider/5.jpg",
  "/slider/8.jpg",
  "/slider/9.jpg",
  "/slider/10.jpg",
  "/slider/11.jpg",
];

export default function HomePage() {
  return (
    <>
      <Popup />
      <div className="lg:mx-12">
        <SwiperCarousel images={images} w="2500" h={600} />
        <PageComp title="Nuestros Servicios, Beneficios y Convenios">
          <NavBarItem
            href="/servicios/prestamos"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Préstamos"
          />
          <NavBarItem
            href="/servicios/prevision-social"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Previsión Social"
          />
          <NavBarItem
            href="/servicios/hospedaje"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Hospedaje"
          />
          <NavBarItem
            href="/beneficios/actividades"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Actividades y Cursos"
          />
          <NavBarItem
            href="/convenios/club"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Sorteo Gratuito"
          />
          <NavBarItem
            href="/servicios/merch"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Ventas y Merchandising"
          />
          <NavBarItem
            href="/beneficios/educacion"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Sistema Educativo"
          />
          <NavBarItem
            href="/servicios/curso-cooperativismo"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Curso Cooperativismo"
          />
          <NavBarItem
            href="/beneficios/servicentro"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Servicentro"
          />
          <NavBarItem
            href="/convenios"
            src="/hospedaje-logo.webp"
            alt="Actividades logo"
            title="Convenios"
          />
        </PageComp>
      </div>
    </>
  );
}
