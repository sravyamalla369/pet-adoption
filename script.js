const pets = [
  {
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    image: "https://placedog.net/400?id=1",
    description: "Friendly and playful.",
    adopted: false
  },
  {
    name: "Mittens",
    type: "Cat",
    breed: "Siamese",
    image: "https://placecats.com/millie/300/150",
    description: "Loves naps and cuddles.",
    adopted: false
  },
  {
    name: "Rocky",
    type: "Dog",
    breed: "Bulldog",
    image: "https://placedog.net/400?id=2",
    description: "Strong and loyal companion.",
    adopted: false
  },
  {
    name: "Luna",
    type: "Cat",
    breed: "Persian",
    image: "https://placecats.com/neo_banana/300/200",
    description: "Quiet and regal indoor cat.",
    adopted: false
  },
  {
    name: "Max",
    type: "Dog",
    breed: "Labrador Retriever",
    image: "https://placedog.net/400?id=3",
    description: "Energetic and loves fetch.",
    adopted: false
  },
  {
    name: "Cleo",
    type: "Cat",
    breed: "Maine Coon",
    image: " https://placecats.com/bella/300/200",
    description: "Large and fluffy with a loving nature.",
    adopted: false
  },
  {
    name: "Bella",
    type: "Dog",
    breed: "Beagle",
    image: "https://placedog.net/400?id=4",
    description: "Curious and great with families.",
    adopted: false
  },
  {
    name: "Shadow",
    type: "Cat",
    breed: "Bombay",
    image: "https://placecats.com/g/300/200",
    description: "Black coat and very affectionate.",
    adopted: false
  },
  {
    name: "Charlie",
    type: "Dog",
    breed: "Poodle",
    image: "https://placedog.net/400?id=5",
    description: "Smart and hypoallergenic.",
    adopted: false
  },
  {
    name: "Nala",
    type: "Cat",
    breed: "Bengal",
    image: "https://placecats.com/300/200",
    description: "Active and loves to explore.",
    adopted: false
  }
];

let adoptedCount = 0;

function renderPets(filter = "All", searchTerm = "") {
  const container = document.getElementById("pet-container");
  container.innerHTML = "";

  const filteredPets = pets.filter(pet => {
    const matchesType = filter === "All" || pet.type === filter;
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm) ||
                          pet.breed.toLowerCase().includes(searchTerm);
    return matchesType && matchesSearch;
  });

  filteredPets.forEach((pet, index) => {
    const card = document.createElement("div");
    card.className = "pet-card";
    if (pet.adopted) card.classList.add("adopted");

    card.innerHTML = `
      <img src="${pet.image}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p><strong>Breed:</strong> ${pet.breed}</p>
      <p>${pet.description}</p>
      <button onclick="adoptPet(${index})" ${pet.adopted ? "disabled" : ""}>
        ${pet.adopted ? "Adopted" : "Adopt Me"}
      </button>
    `;
    container.appendChild(card);
  });
}

function adoptPet(index) {
  if (!pets[index].adopted) {
    pets[index].adopted = true;
    adoptedCount++;
    alert(`You adopted ${pets[index].name}!`);
    document.getElementById("adoption-counter").textContent = `Pets Adopted: ${adoptedCount}`;
    renderPets();
  }
}

function filterPets(type) {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  renderPets(type, searchTerm);
}

document.getElementById("search").addEventListener("input", () => {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  renderPets("All", searchTerm);
});

renderPets(); // Initial render
