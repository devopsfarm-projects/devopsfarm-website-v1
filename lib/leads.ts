import { MongoClient } from 'mongodb';

// ---------------------------------------------------------------
// ONLY FILE that knows about the database.
// Agar doosra DB (MySQL / Postgres / Supabase) use karna ho,
// sirf is file ka saveLead() badalna hai.
// ---------------------------------------------------------------

const DB_NAME = process.env.MONGODB_DB || 'devopsfarm';
const COLLECTION = process.env.MONGODB_LEADS_COLLECTION || 'leads';

// Reuse one connection (important in Next.js / serverless, avoids too many connections)
const globalForMongo = globalThis as unknown as { _mongoClientPromise?: Promise<MongoClient> };

function getClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not set');
  }
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClientPromise;
}

export interface LeadInput {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  source: string; // which form/page this came from
  ip?: string;
  userAgent?: string;
}

export async function saveLead(lead: LeadInput): Promise<string> {
  const client = await getClient();
  const result = await client
    .db(DB_NAME)
    .collection(COLLECTION)
    .insertOne({ ...lead, createdAt: new Date() });
  return result.insertedId.toString();
}
