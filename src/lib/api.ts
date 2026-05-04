const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

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
