// loadeddetails.js

function displayAnimalDetails() {
    // 1. Get the ID from the URL (e.g., ?id=17)
    const params = new URLSearchParams(window.location.search);
    const animalId = parseInt(params.get('id'));

    // 2. Find the specific animal in your AnimalIndex array
    const animal = AnimalIndex.find(item => item.id === animalId);

    if (animal) {
        // --- 3. Update the Profile Image ---
        const imgElement = document.getElementById("profile-img");
        if (imgElement) {
            imgElement.src = animal.image; 
        }

        // --- 4. Update the Text Elements ---
        // Checks if the elements exist before trying to update them
        const titleElement = document.querySelector(".Grids");
        if (titleElement) titleElement.innerText = animal.animalname;

        const paraElement = document.querySelector(".para");
        if (paraElement) paraElement.innerText = animal.KeyCharacteristics;

        // --- 5. Update the Table Rows ---
        const tableBody = document.querySelector("tbody");
        if (tableBody) {
            // Determine badge color based on status text
            let badgeClass = 'bg-secondary'; // Default grey
            const statusText = animal.Status.toLowerCase();

            if (statusText.includes('stable') || statusText.includes('least concern')) {
                badgeClass = 'bg-success'; // Green
            } else if (statusText.includes('vulnerable')) {
                badgeClass = 'bg-warning text-dark'; // Yellow
            } else if (statusText.includes('decreasing') || statusText.includes('endangered')) {
                badgeClass = 'bg-danger'; // Red
            }

            tableBody.innerHTML = `
                <tr>
                    <td><strong>Scientific Name</strong></td>
                    <td class="fst-italic">${animal.ScientificName}</td>
                </tr>
                <tr>
                    <td><strong>Class</strong></td>
                    <td>${animal.Class}</td>
                </tr>
                <tr>
                    <td><strong>Diet</strong></td>
                    <td>${animal.Diet}</td>
                </tr>
                <tr>
                    <td><strong>Life Span</strong></td>
                    <td>${animal.LifeSpan}</td>
                </tr>
                <tr>
                    <td><strong>Conservation Status</strong></td>
                    <td>
                        <span class="badge ${badgeClass}">
                            ${animal.Status}
                        </span>
                    </td>
                </tr>
            `;
        }
    } else {
        // Error handling if ID is wrong or animal is missing
        const section = document.querySelector(".details-section");
        if (section) {
            section.innerHTML = "<h2 class='text-center py-5'>Animal record not found in Zoopedia.</h2>";
        }
    }
}

// Runs the script as soon as the page is finished loading
window.onload = displayAnimalDetails;