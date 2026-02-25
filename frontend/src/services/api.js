// Get API base URL from environment, with fallback to Vercel backend
export const API_BASE = import.meta.env.VITE_API_BASE || "https://quiz-app-mauve-sigma-34.vercel.app";

// Helper function to get auth header
export const getAuthHeader = () => {
  const token = localStorage.getItem("token") || localStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};
