
import scoring from './data/scoring.json';
type Weights = Record<string, number>;
export function calculateScores(answersByDimension: Record<string, number[]>) {
  const weights = (scoring as any).weights as Weights;
  const dimScores: Record<string, number> = {};
  let overall = 0;
  for (const [dim, answers] of Object.entries(answersByDimension)) {
    const mean = (answers as number[]).length ? (answers as number[]).reduce((a,b)=>a+b,0)/(answers as number[]).length : 0;
    dimScores[dim] = Number(mean.toFixed(2));
    overall += (weights[dim] || 0) * mean;
  }
  const overallRounded = Number(overall.toFixed(2));
  const maturity = resolveMaturityLevel(overallRounded);
  return { dimScores, overall: overallRounded, maturity };
}
function resolveMaturityLevel(score:number){
  if (score >= 4.3) return 5;
  if (score >= 3.5) return 4;
  if (score >= 3.0) return 3;
  if (score >= 2.0) return 2;
  return 1;
}
