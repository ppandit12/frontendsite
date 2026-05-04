const API_URL = import.meta.env.VITE_API_URL || '';
const API_BASE = API_URL 
  ? `${API_URL.replace(/\/$/, '')}/api` 
  : 'http://localhost:5000/api';

export async function fetchContent(slug: string) {
  const res = await fetch(`${API_BASE}/content/${slug}`);
  if (!res.ok) return null;
  return res.json();
}

export async function fetchBlogPosts() {
  const res = await fetch(`${API_BASE}/blog/published`);
  if (!res.ok) return [];
  return res.json();
}

export { API_BASE };
