
import styles from './CharactersList.module.scss';
import { useCharacters } from "@/assets/hooks/useCharacters";
import CharacterCard from "../CharacterCard/CharacterCard";
import HeadMeta from "../HeadMeta/HeadMeta";
import Link from 'next/link';
import { getLayout } from '../Layout/Layout';




function CharactersList() {
  const characters = useCharacters();

  return (
    <>
      <HeadMeta title={'Characters List'}/>
        <div className={styles.wrapper}>{characters && characters.map((char) => (
          <Link key={char.id} href={`/characters/${char.id}`}>
            <CharacterCard char={char}/>
          </Link>
        ))}
        </div>
    </>
  )
}

CharactersList.getLayout = getLayout
export default CharactersList;
