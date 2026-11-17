'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/common/button.component';
import type { LeadRecord } from '@/lib/leads';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const loadLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/leads');
      if (res.status === 401) {
        setLoggedIn(false);
        return;
      }
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
        setLoggedIn(true);
        setError('');
      } else {
        setError(data.message || 'Could not load leads');
      }
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
      setChecking(false);
    }
  }, []);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setPassword('');
      loadLeads();
    } else {
      setError(data.message || 'Login failed');
    }
  };

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    setLeads([]);
    setLoggedIn(false);
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return leads;
    return leads.filter((l) =>
      [l.name, l.company, l.email, l.phone, l.country, l.message].some((v) => v?.toLowerCase().includes(q))
    );
  }, [leads, search]);

  if (checking) {
    return <div className="pt-32 pb-20 text-center text-gray-500">Loading...</div>;
  }

  if (!loggedIn) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-slate-50">
        <meta name="robots" content="noindex,nofollow" />
        <form onSubmit={login} className="max-w-sm mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <h1 className="text-2xl font-bold text-navy-900">Admin Login</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-brand"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" fullWidth>Login</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50">
      <meta name="robots" content="noindex,nofollow" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-navy-900">Contact Leads</h1>
            <p className="text-gray-500 text-sm">{filtered.length} of {leads.length} submissions</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email, company..."
              className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-brand text-sm w-64"
            />
            <Button size="sm" variant="outline" onClick={loadLeads} disabled={loading}>
              {loading ? 'Refreshing...' : 'Refresh'}
            </Button>
            <Button size="sm" onClick={logout}>Logout</Button>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                {['Date', 'Name', 'Company', 'Email', 'Phone', 'Country', 'Message'].map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-gray-400">No submissions yet</td>
                </tr>
              )}
              {filtered.map((l) => (
                <tr key={l.id} className="hover:bg-gray-50 align-top">
                  <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                    {l.createdAt ? new Date(l.createdAt).toLocaleString('en-IN') : '-'}
                  </td>
                  <td className="px-4 py-3 font-medium text-navy-900">{l.name}</td>
                  <td className="px-4 py-3">{l.company}</td>
                  <td className="px-4 py-3">
                    <a href={`mailto:${l.email}`} className="text-brand hover:underline">{l.email}</a>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{l.phone}</td>
                  <td className="px-4 py-3">{l.country}</td>
                  <td className="px-4 py-3 max-w-xs whitespace-pre-wrap break-words">{l.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
