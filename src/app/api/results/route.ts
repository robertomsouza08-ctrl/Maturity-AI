
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export async function GET(req: NextRequest){
  const list = await prisma.assessmentResponse.findMany({ orderBy: { createdAt: 'desc' }, take: 50 });
  return NextResponse.json(list);
}
