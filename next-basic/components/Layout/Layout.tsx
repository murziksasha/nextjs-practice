import styles from "@/styles/Home.module.css";
import Navbar from "../Navbar/Navbar";
import { Inter } from "next/font/google";
import { PropsWithChildren, ReactElement } from "react";
import { NextPage } from "next";
const inter = Inter({ subsets: ["latin"] });



export const  Layout: NextPage<PropsWithChildren> = ({children})=> {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Navbar />
      {children}
    </main>
  )
}


export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}