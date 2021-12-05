export function dist(flow1: number[], flow2: number[]) {
  let sum = 0;
  for (let i = 0; i < flow1.length; i++) {
    if (flow1[i] > 0 && flow2[i] > 0) {
      sum += Math.pow(flow1[i] - flow2[i], 2);
    }
  }
  return Math.sqrt(sum);
}
