import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch dog groups
const fetchDogGroups = async () => {
  const response = await fetch("https://dogapi.dog/api/v2/groups");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Fetch breeds by group
const fetchBreedsByGroup = async (groupId) => {
  const response = await fetch(`https://dogapi.dog/api/v2/groups/${groupId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Fetch breed details
const fetchBreedDetails = async (breedId) => {
  const response = await fetch(`https://dogapi.dog/api/v2/breeds/${breedId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function DogGroups() {
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [selectedBreedId, setSelectedBreedId] = useState(null);
  const [breedNames, setBreedNames] = useState({}); // Store breed names by ID

  // Fetch dog groups
  const {
    data: groupsData,
    isPending: isGroupsPending,
    isError: isGroupsError,
    error: groupsError,
  } = useQuery({
    queryKey: ["groups"],
    queryFn: fetchDogGroups,
  });

  // Fetch breeds by group
  const {
    data: breedsData,
    isPending: isBreedsPending,
    isError: isBreedsError,
    error: breedsError,
  } = useQuery({
    queryKey: ["groupBreeds", selectedGroupId],
    queryFn: () => fetchBreedsByGroup(selectedGroupId),
    enabled: !!selectedGroupId, // Only fetch breeds if a group is selected
  });

  // Fetch breed details for each breed in the group
  React.useEffect(() => {
    if (breedsData) {
      const breedIds = breedsData.data.relationships.breeds.data.map(
        (breed) => breed.id
      );

      // Fetch breed details for each breed ID
      breedIds.forEach((breedId) => {
        fetchBreedDetails(breedId)
          .then((breedDetails) => {
            setBreedNames((prev) => ({
              ...prev,
              [breedId]: breedDetails.data.attributes.name,
            }));
          })
          .catch((error) => {
            console.error(
              `Error fetching breed details for ${breedId}:`,
              error
            );
          });
      });
    }
  }, [breedsData]);

  // Fetch breed details for the selected breed
  const {
    data: breedDetails,
    isPending: isBreedDetailsPending,
    isError: isBreedDetailsError,
    error: breedDetailsError,
  } = useQuery({
    queryKey: ["breedDetails", selectedBreedId],
    queryFn: () => fetchBreedDetails(selectedBreedId),
    enabled: !!selectedBreedId, // Only fetch breed details if a breed is selected
  });

  if (isGroupsPending) return <div>Loading dog groups...</div>;
  if (isGroupsError) return <div>Error: {groupsError.message}</div>;

  return (
    <div className="dog-groups">
      <h2>Dog Groups</h2>
      <ul>
        {groupsData.data.map((group) => (
          <li
            key={group.id}
            onClick={() => {
              setSelectedGroupId(group.id);
              setSelectedBreedId(null); // Reset selected breed when a new group is selected
              setBreedNames({}); // Reset breed names when a new group is selected
            }}
          >
            {group.attributes.name}
          </li>
        ))}
      </ul>

      {selectedGroupId && (
        <div className="group-breeds">
          <h3>Breeds in this Group</h3>
          {isBreedsPending && <div>Loading breeds...</div>}
          {isBreedsError && <div>Error: {breedsError.message}</div>}
          {breedsData && (
            <ul>
              {breedsData.data.relationships.breeds.data.map((breed) => (
                <li key={breed.id} onClick={() => setSelectedBreedId(breed.id)}>
                  {breedNames[breed.id] || "Loading..."}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {selectedBreedId && (
        <div className="breed-details">
          <h3>Breed Details</h3>
          {isBreedDetailsPending && <div>Loading breed details...</div>}
          {isBreedDetailsError && <div>Error: {breedDetailsError.message}</div>}
          {breedDetails && (
            <div>
              <p>
                <strong>Name:</strong> {breedDetails.data.attributes.name}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {breedDetails.data.attributes.description}
              </p>
              <p>
                <strong>Life Expectancy:</strong>{" "}
                {breedDetails.data.attributes.life.min} -{" "}
                {breedDetails.data.attributes.life.max} years
              </p>
              <p>
                <strong>Male Weight:</strong>{" "}
                {breedDetails.data.attributes.male_weight.min} -{" "}
                {breedDetails.data.attributes.male_weight.max} kg
              </p>
              <p>
                <strong>Female Weight:</strong>{" "}
                {breedDetails.data.attributes.female_weight.min} -{" "}
                {breedDetails.data.attributes.female_weight.max} kg
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DogGroups;
