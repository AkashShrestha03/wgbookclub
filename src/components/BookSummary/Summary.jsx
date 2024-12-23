import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SummaryHero from "./SummaryHero";
import Details from "./Details";
import AboutAuthor from "./AboutAuthor";
import Discussions from "./Discussions";
import API from "@/config";

const Summary = () => {
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchBookDetails = async () => {
        try {
          const response = await axios.get(
            `${API}/api/Book/Get`,
            {
              params: { id }, // Automatically appends `?id=your-id` to the URL
            }
          );
          setBookData(response.data?.data[0]);
        } catch (err) {
          setError(
            err.response?.data?.message || "Failed to fetch book details"
          );
        } finally {
          setLoading(false);
        }
      };

      fetchBookDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <SummaryHero bookData={bookData} />
      <Details bookData={bookData} />
      <AboutAuthor bookData={bookData} />
      <Discussions bookData={bookData} />
    </>
  );
};

export default Summary;
