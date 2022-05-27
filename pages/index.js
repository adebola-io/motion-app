import Head from "next/head";
import { useState } from "react";
import Carousel from "../components/Carousel";
import Item from "../components/Item";
import home from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Motion</title>
      </Head>
      <main>
        {/* <h1 className={home.heading}>Upcoming Tasks</h1> */}
        <Carousel></Carousel>
        <Carousel></Carousel>
      </main>
    </>
  );
}
