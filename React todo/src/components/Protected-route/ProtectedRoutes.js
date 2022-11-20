
export const ProtectedRoute = ({ children }) => {
  let isAuthenticated=localStorage.getItem('auth')
    if (!isAuthenticated) {
      return <div>Not having Access</div>;
    }
    else 
    return children;
  };