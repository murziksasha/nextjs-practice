

import CharactersList from '@/components/CharactersList'
import { getLayout } from '@/components/Layout/Layout';
import React from 'react'

function Characters() {
  return (
    <>
      <CharactersList />
    </>
  )
}

Characters.getLayout = getLayout;
export default Characters