import { NextResponse } from 'next/server';
import { getSql } from '../../../../packages/shared/db';
export async function GET(){
  const sql = await getSql();
  const rows = await sql`select destination, count(*)::int attempts from sync_audit group by destination`;
  return NextResponse.json({ metrics: rows });
}
