export function ProtectedRoute({ children }) {
  if (localStorage.getItem("user")) {
    return children;
  }
}
