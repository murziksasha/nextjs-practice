

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import Head from 'next/head'
import { useCharacters } from "@/assets/hooks/useCharacters";
import CharacterCard from "../CharacterCard/CharacterCard";
import HeadMeta from "../HeadMeta/HeadMeta";



function CharactersList() {
  const characters = useCharacters();

  return (
    <>
      <HeadMeta title={'Characters List'}/>
      <main className={`${styles.main} ${inter.className}`}>
        {characters && characters.map((char) => (
          <CharacterCard key={char.id} char={char}/>
        ))}
      </main>
    </>
  )
}

export default CharactersList