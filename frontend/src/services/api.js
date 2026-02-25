// Get API base URL from environment, with fallback
export const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

// Helper function to get auth header
export const getAuthHeader = () => {
  const token = localStorage.getItem("token") || localStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};
