document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
     // Attach event listener for Room 1
    document.getElementById("solveRoom1").addEventListener("click", () => {
    // Fetch the list of books from books.json
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
     // Find the most recent book and display the key to the next room
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

     // Attach event listener for Room 2
    document.getElementById("solveRoom2").addEventListener("click", () => {
    // Define JavaScript and React concepts
        const jsConcepts = new Set(['closure', 'scope', 'hoisting','async' ]);
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
    // Find common concepts between JavaScript and React and display them
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    // Attach event listener for Room 3
    document.getElementById("solveRoom3").addEventListener("click", async () => {
    // Fetch labyrinth directions from directions.json
    fetch('directions.json') 
            .then(response => response.json())  // Convert the response to JSON format
            .then(directions => {
    // Navigate the labyrinth with fetched directions
             navigateLabyrinth(directions)
                    .then(message => {
                        // 🪲 Bug: Incorrect method
     // Display the resulting message in the 'room3Result' element
                        document.getElementById("room3Result").textContent = message;
                    });
            });
    });
});
  

// Function to find the most recent book based on the published date
function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

// Function to find the intersection (common elements) between two sets
function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set([...setA].filter(item => setB.has(item)));
    return intersection;
}

// Asynchronous function to navigate the labyrinth with a delay
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
// Introduce delay for each step
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
// Return final message after completing the labyrinth
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

