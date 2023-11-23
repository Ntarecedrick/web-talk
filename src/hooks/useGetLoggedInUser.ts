import { useState, useEffect } from "react";

export default function useGetLoggedInUser() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(
        JSON.parse(
          localStorage.getItem("sb-tdzbfypydoznzefzsncj-auth-token") || "null"
        )
      );
    }
  }, []);
  const userId = user?.user.id;
console.log(user)
  return { userId };
}
