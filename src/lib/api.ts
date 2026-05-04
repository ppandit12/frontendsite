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

export const BACKEND_URL = API_URL ? API_URL.replace(/\/$/, '') : 'http://localhost:5000';

export function getImageUrl(url: string) {
  if (!url) return '';
  // Fix legacy URLs that might have been saved with http://localhost:5000
  const cleanUrl = url.replace('http://localhost:5000', '');
  if (cleanUrl.startsWith('http')) return cleanUrl;
  return `${BACKEND_URL}${cleanUrl}`;
}

export { API_BASE };
