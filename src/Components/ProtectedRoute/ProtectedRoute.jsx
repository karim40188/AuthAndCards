export function ProtectedRoute({ children }) {
  if (localStorage.getItem("userToken")) {
    return children;
  }
}
