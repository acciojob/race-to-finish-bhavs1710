window.promises = 

// Do not change the code above this
// add your promises to the array `promises
  // Function to generate a random time between min and max (inclusive)
  function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to create a promise that resolves after a random time
  function createRandomPromise() {
    const randomTime = getRandomTime(1000, 5000); // Random time between 1 and 5 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(randomTime);
      }, randomTime);
    });
  }

  // Create an array of five promises
  const promises = Array.from({ length: 5 }, createRandomPromise);

  // Use Promise.any to wait for the first promise to resolve
  Promise.any(promises)
    .then((result) => {
      // Print the result to the div with id "output"
      const outputDiv = document.getElementById("output");
      outputDiv.textContent = `Resolved after ${result} milliseconds.`;
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });


