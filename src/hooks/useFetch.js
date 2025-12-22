import { useState, useEffect } from "react";
function useFetch() {
    const url = "/doctors-db.json";
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(null);
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const getDoctors = await fetch(url);
                const result = await getDoctors.json();
                setData(result);
            } catch (error) {
                setHasError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchDoctors()
    }, []);
    return { data, isLoading, hasError };
}
export default useFetch;