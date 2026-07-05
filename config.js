export const API_BASE = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "" : "https://anirbansinha-in-be.onrender.com/api/v1")
).replace(/\/$/, "");

export const apiUrl = (path) => {
  let cleanPath = path;
  // Deduplicate /api/v1 prefix if it is present in both API_BASE and path
  if (API_BASE.endsWith("/api/v1") && path.startsWith("/api/v1")) {
    cleanPath = path.substring(7); // strips "/api/v1"
  }
  return `${API_BASE}${cleanPath.startsWith("/") ? "" : "/"}${cleanPath}`;
};
