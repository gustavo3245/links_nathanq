import Head from 'next/head'
import Image from 'next/image'
import css from '../styles/Home.module.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap'
import Link from "next/link";

export default function Home() {
  return (
   <div className={css.bgfundo}>
       <link rel="stylesheet" href="https://use.typekit.net/tic1lqg.css"/>
       <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
     <div>
       <Container>
         <div>
           <Image src="/perfil.png" width={80} height={80}/>
         </div>
           <div>
               <h2 className={css.textnome}>NATHAN SARTORI &nbsp;●&nbsp; DESIGNER</h2>
           </div>
           <div>
               <h1 className={css.titulo}>Links que vão te ajudar!</h1>
           </div>
           <div className={css.desalinhado}>
           <a href="https://www.behance.net/paidodesign" target="_blank" className={css.animatedbutton1}>
               <span className={css.span}></span>
               <span className={css.span}></span>
               <span className={css.span}></span>
               <span className={css.span}></span>
               <div className={css.align}>
                   <div className={css.icon}>
                       <Image src="/behance.png" width={33} height={33}/>
                   </div>
                   <div className={css.textbt}>
                       Meu Portfólio
                   </div>
               </div>
           </a>
           <a target="_blank" href="https://api.whatsapp.com/send?phone=5541997356552&text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20Instagram%20e%20gostaria%20de%20um%20or%C3%A7amento!" className={css.animatedbutton1}>
               <span className={css.span}></span>
               <span className={css.span}></span>
               <span className={css.span}></span>
               <span className={css.span}></span>
               <div className={css.align}>
                   <div className={css.icon}>
                       <Image src="/whats.png" width={33} height={33}/>
                   </div>
                   <div className={css.textbt}>
                       Orçamentos
                   </div>
               </div>
           </a>
           <a target="_blank" href="https://www.instagram.com/nathans.designer/" className={css.animatedbutton1}>
               <span className={css.span}></span>
               <span className={css.span}></span>
               <span className={css.span}></span>
               <span className={css.span}></span>
               <div className={css.align}>
                   <div className={css.icon}>
                       <Image src="/insta.png" width={33} height={33}/>
                   </div>
                   <div className={css.textbt}>
                       Instagram
                   </div>
               </div>
           </a>
           </div>
       </Container>
     </div>
   </div>
  )
}
