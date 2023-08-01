export function changeArtist(direction, setTurn, turn, length) {
  if (direction === "forward" && turn < length - 1) setTurn(turn + 1);
  else if (direction === "backward" && turn > 0) setTurn(turn - 1);

}
