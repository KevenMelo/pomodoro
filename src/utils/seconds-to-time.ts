export function secondsToTime(seconds: number): String {
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0');
  const min = zeroLeft(Math.floor(seconds / 60) % 60);
  const sec = zeroLeft(Math.floor(seconds % 60) % 60)
  return `${min}:${sec}`;
}
