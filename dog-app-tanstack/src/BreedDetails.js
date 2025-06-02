import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchBreedDetails = async (id) => {
  const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function BreedDetails({ id }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["breed", id],
    queryFn: () => fetchBreedDetails(id),
  });

  if (isPending) return <div>Loading breed details...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const breed = data.data;
  return (
    <div className="breed-details">
      <h3>{breed.attributes.name}</h3>
      <p>{breed.attributes.description}</p>
      <p>
        Life Span: {breed.attributes.life.min} - {breed.attributes.life.max}{" "}
        years
      </p>
      <p>
        Male Weight: {breed.attributes.male_weight.min} -{" "}
        {breed.attributes.male_weight.max} kg
      </p>
      <p>
        Female Weight: {breed.attributes.female_weight.min} -{" "}
        {breed.attributes.female_weight.max} kg
      </p>
    </div>
  );
}

// Ensure this is the default export
export default BreedDetails;
