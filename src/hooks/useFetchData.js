import { useState } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (selectedValue) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://app.appointo.me/scripttag/mock_timeslots?start_date=2024-01-20&end_date=2024-01-30`
      );
      if (!response.ok) {
        throw new Error("Request failed, please try again later");
      }
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
};
