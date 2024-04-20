import axios from "axios";
import { useEffect, useState } from "react";
import { Nullabe } from "../typex";

export type CharacterType = {
  id: number;
  name: string;
  image: string;
}

export const useCharacters = (): Nullabe<CharacterType[]> => {
  const [characters, setCharacters] = useState<Nullabe<CharacterType[]>>(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then(res => setCharacters(res.data.results))
  }, [])

  return characters;
}