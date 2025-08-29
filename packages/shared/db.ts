import { Pool } from 'pg';
let pool: Pool | null = null;
export async function getSql(){
  if(!pool){
    const url = process.env.SUPABASE_DB_URL;
    if(!url) throw new Error('SUPABASE_DB_URL not set');
    pool = new Pool({ connectionString: url, ssl: { rejectUnauthorized: false } });
  }
  const sql = async (strings: TemplateStringsArray, ...values: any[]) => {
    const text = strings.reduce((acc, s, i) => acc + s + (i < values.length ? `$${i+1}` : ''), '');
    const res = await pool!.query(text, values);
    return res.rows;
  };
  return sql as any;
}
