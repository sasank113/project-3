async function getJoke() {
      const jokeContainer = document.getElementById("jokeContainer");
      jokeContainer.innerHTML = "Loading...";

      try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();

        if (data.type === "single") {
          jokeContainer.innerHTML = data.joke;
        } else if (data.type === "twopart") {
          jokeContainer.innerHTML = `${data.setup}<br><strong>${data.delivery}</strong>`;
        } else {
          jokeContainer.innerHTML = "Couldn't understand the joke format.";
        }
      } catch (error) {
        jokeContainer.innerHTML = "Failed to load joke.";
        console.error(error);
      }
    }