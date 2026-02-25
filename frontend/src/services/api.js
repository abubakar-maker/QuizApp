// Get API base URL from environment, with fallback to Vercel backend
export const API_BASE = import.meta.env.VITE_API_BASE || "https://quiz-46g9x5bah-abubakaar9913-9143s-projects.vercel.app";

// Helper function to get auth header
export const getAuthHeader = () => {
  const token = localStorage.getItem("token") || localStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};
