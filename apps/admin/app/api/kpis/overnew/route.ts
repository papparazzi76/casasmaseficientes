import { NextResponse } from 'next/server';
import { getSql } from '../../../../packages/shared/db';
export async function GET(){
  const sql = await getSql();
  const [leads] = await sql`select count(*)::int n from leads`;
  return NextResponse.json({ leads: (leads?.n||0) });
}
