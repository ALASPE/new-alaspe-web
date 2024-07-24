"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./BurgerButton.jsx";
import styled from "styled-components";
import BurguerButton from "./BurgerButton.jsx";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClickMenu = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="w-full h-full static">
        <div className="flex justify-around items-center px-12 pt-5 pb-5 bg-[#175935]">
          <Image
            src="/logo_alaspe.png"
            width={100}
            height={100}
            alt="Logo Cooperativa"
            className="hidden lg:block"
          />
          <h1 className="text-white font-bold text-lg md:text-3xl text-center">
            Cooperativa de Servicios Múltiples Alas Peruanas
          </h1>
          <Link
            className="hidden lg:flex bg-[#F74E0F] py-1 px-8 text-white rounded-xl border border-white text-xs lg:text-base"
            href="http://190.12.83.18/portal/ConsulNet/default.aspx"
          >
            Acceso a Socios
          </Link>
        </div>
        <div className="bg-[#209F63]">
          <ul className="hidden lg:flex pl-8 text-white text-sm">
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/">
              Inicio
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/servicios">
              Servicios
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/beneficios">
              Beneficios
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/convenios">
              Convenios
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/nosotros">
              Nosotros
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/asociado">
              Asociado
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/comunicado">
              Comunicados
            </Link>
            <Link className="py-3 px-5 hover:bg-[#0284c7]" href="/contacto">
              Contacto
            </Link>
          </ul>
          <div className="flex flex-row lg:hidden">
            <NavContainer>
              <div className={`links ${clicked ? "active" : ""}`}>
                <Link onClick={handleClickMenu} className="py-3 px-5" href="/">
                  Inicio
                </Link>
                <Link
                  onClick={handleClickMenu}
                  className="py-3 px-5"
                  href="/servicios"
                >
                  Servicios
                </Link>
                <Link
                  onClick={handleClickMenu}
                  className="py-3 px-5"
                  href="/beneficios"
                >
                  Beneficios
                </Link>
                <Link
                  onClick={handleClickMenu}
                  className="py-3 px-5"
                  href="/convenios"
                >
                  Convenios
                </Link>
                <Link
                  onClick={handleClickMenu}
                  className="py-3 px-5"
                  href="/nosotros"
                >
                  Nosotros
                </Link>
                <Link
                  onClick={handleClickMenu}
                  className="py-3 px-5"
                  href="/asociado"
                >
                  Asociado
                </Link>
                <Link
                  onClick={handleClickMenu}
                  className="py-3 px-5"
                  href="/comunicado"
                >
                  Comunicados
                </Link>
                <Link
                  onClick={handleClickMenu}
                  className="py-3 px-5"
                  href="/contacto"
                >
                  Contacto
                </Link>
                <Link
                  className="py-3 px-5 text-1xs"
                  href="http://190.12.83.18/portal/ConsulNet/default.aspx"
                >
                  Acceso a Socios
                </Link>
              </div>
              
                <div className="burguer">
                <BurguerButton
                  clicked={clicked}
                  handleClick={handleClickMenu}
                />
                </div>
                
              <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
            </NavContainer>
          </div>
        </div>
      </div>
    </>
  );
}

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #209f63;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 1s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 1024px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1000;
    a {
      font-size: 1.5rem;
      margin-top: 0.5rem;
      color: white;
    }
  }
  .burguer {
    z-index: 1100; /* Asegura que el botón esté por encima del navbar */
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #209f63;
  position: fixed;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 999;
  transition: all 1s ease;

  &.active {
    border-radius: 0 0 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
