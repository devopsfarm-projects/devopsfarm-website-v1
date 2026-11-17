import { NextRequest, NextResponse } from 'next/server';
import { isAdmin } from '@/lib/adminAuth';
import { listLeads } from '@/lib/leads';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }
  try {
    const leads = await listLeads();
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error('List leads error:', error);
    return NextResponse.json({ success: false, message: 'Failed to load leads' }, { status: 500 });
  }
}
