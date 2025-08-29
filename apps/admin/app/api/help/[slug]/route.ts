import { NextResponse } from 'next/server';
import { getSql } from '../../../../../packages/shared/db';
export async function GET(_:Request, {params}:any){
  const sql = await getSql();
  const [row] = await sql`select slug,title,content_md from help_docs where slug=${params.slug}`;
  if(!row) return NextResponse.json({error:'not found'},{status:404});
  return NextResponse.json(row);
}
