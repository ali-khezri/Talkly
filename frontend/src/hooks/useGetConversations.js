import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useGetConversations() {
  const [loading, setLoading] = useState(false);

  const [conversations, setConverstions] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    
    async function getConversations() {
      setLoading(true);

      try {
        const res = await fetch("/api/users", { signal: controller.signal });

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConverstions(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    getConversations();

    return () => {
      controller.abort();
    };
  }, []);

  return { loading, conversations };
}

export default useGetConversations;
