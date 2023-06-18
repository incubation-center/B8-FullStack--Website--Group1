import { useRouter } from "next/router";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      // Redirect to login page if token doesn't exist
      router.push("/unauthorized");
    }
  }, []);

  return children;
}

export default ProtectedRoute;
