import React from 'react'
import Player from './Player'

import styles from '../styles/PlayersSelecteds.module.css'

function PlayersSelected ({ flags, players = [], playerAnswer }) {
  return <div className={styles.playersSelecteds}>
    { players && players.map(player => (
      <Player flags={flags} key={player.id} playerAnswer={playerAnswer} {...player} />
    )) }
  </div>
}

export default React.memo(PlayersSelected)