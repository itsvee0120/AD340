import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchDogFacts = async () => {
  const response = await fetch("https://dogapi.dog/api/v2/facts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function DogFacts() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["facts"],
    queryFn: fetchDogFacts,
  });

  if (isPending) return <div>Loading dog facts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="dog-facts">
      <h2>Dog Facts</h2>
      <ul>
        {data.data.map((fact, index) => (
          <li key={index}>{fact.attributes.body}</li>
        ))}
      </ul>
    </div>
  );
}

// Ensure this is the default export
export default DogFacts;
