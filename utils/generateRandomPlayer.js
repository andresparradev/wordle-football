export default async function generateRandomPlayer (players) {
  const posRandom = Math.floor(Math.random() * players.length)
  return players[posRandom]
}
