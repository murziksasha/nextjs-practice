import axios from "axios";
import { useEffect, useState } from "react";
import { Nullabe } from "../typex";
import { useRouter } from "next/router";
import { env } from "process";

export type CharacterType = {
  id: number;
  name: string;
  image: string;
}

export const useCharacter = (): Nullabe<CharacterType> => {
  const [character, setCharacter] = useState<Nullabe<CharacterType>>(null);

  const router = useRouter();

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character/${router.query.id}`)
    .then(res => setCharacter(res.data))
  }, [])

  return character;
}