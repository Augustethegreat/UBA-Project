"use client"
import Image from "next/image";
import TheBody from "./components/Body";
import { useState,useEffect } from 'react';
import Components from "./components/page";
import { BsClockHistory } from "react-icons/bs";
import Link from "next/link";
import {motion} from "framer-motion"
import { MdOutlineVideoSettings } from "react-icons/md";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "./slider/Page";
import Page from "./page/page";
import Header from "./components/Header";
// const texts =["Ce site simule et illustre les composantes de la solution Portails FONAREV dont l’objectif est la digitalisation des opérations du FONAREV pour une meilleure gestion et un meilleur control des opérations.",
// "Ce site simule et illustre les composantes de la solution Portails FONAREV dont l’objectif est la digitalisation des opérations du FONAREV pour une meilleure gestion et un meilleur control des opérations.","Ce site simule et illustre les composantes de la solution Portails FONAREV dont l’objectif est la digitalisation des opérations du FONAREV pour une meilleure gestion et un meilleur control des opérations.","Ce site simule et illustre les composantes de la solution Portails FONAREV dont l’objectif est la digitalisation des opérations du FONAREV pour une meilleure gestion et un meilleur control des opérations.","Ce site simule et illustre les composantes de la solution Portails FONAREV dont l’objectif est la digitalisation des opérations du FONAREV pour une meilleure gestion et un meilleur control des opérations.","Ce site simule et illustre les composantes de la solution Portails FONAREV dont l’objectif est la digitalisation des opérations du FONAREV pour une meilleure gestion et un meilleur control des opérations."
// ]
export default function Home() {



  return (
    <main className="">
    

     <div>
      <Header/>
     </div>
     <div className="bg-white">
       <Page/>
     </div>

    </main>
  );
}
