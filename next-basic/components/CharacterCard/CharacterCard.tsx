
import styles from './CharacterCard.module.scss';
import Image from "next/image";
import { CharacterType } from '@/assets/hooks/useCharacters'
import React from 'react';

interface IProps {
  char: CharacterType;
}

function CharacterCard({char}: IProps) {
  return (
    <div className={styles.card}>
      <div>{char.name}</div>
      <Image src={char.image} alt={`Character name is ${char.name}`} width={200} height={200}/>
    </div>
  )
}

export default CharacterCard