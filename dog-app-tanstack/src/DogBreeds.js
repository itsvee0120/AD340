import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BreedDetails from "./BreedDetails";

const fetchBreeds = async () => {
  const response = await fetch("https://dogapi.dog/api/v2/breeds");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function DogBreeds() {
  const [selectedBreedId, setSelectedBreedId] = useState(null);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["breeds"],
    queryFn: fetchBreeds,
  });

  if (isPending) return <div>Loading breeds...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="dog-breeds">
      <h2>Dog Breeds</h2>
      <ul>
        {data.data.map((breed) => (
          <li key={breed.id} onClick={() => setSelectedBreedId(breed.id)}>
            {breed.attributes.name}
          </li>
        ))}
      </ul>
      {selectedBreedId && <BreedDetails id={selectedBreedId} />}
    </div>
  );
}

// Ensure this is the default export
export default DogBreeds;
