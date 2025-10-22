
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { calculateScores } from '@/lib/scoring';
export async function POST(req: NextRequest){
  try{
    const payload = await req.json();
    const { answersByDimension, scenario = 'base', sessionId } = payload || {};
    if (!answersByDimension || typeof answersByDimension !== 'object'){
      return NextResponse.json({ error: 'answersByDimension inválido' }, { status: 400 });
    }
    const { dimScores, overall, maturity } = calculateScores(answersByDimension);
    const rec = await prisma.assessmentResponse.create({ data: { answers: answersByDimension, scores: { dimScores, overall }, maturity, scenario, sessionId } });
    return NextResponse.json({ id: rec.id, scores: { dimScores, overall }, maturity }, { status: 201 });
  } catch(e){
    console.error(e);
    return NextResponse.json({ error: 'Erro ao salvar assessment' }, { status: 500 });
  }
}
