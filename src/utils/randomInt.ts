export default function randomInt(end: number, start: number = 0): number {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
