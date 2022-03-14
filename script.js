// assigning variables
const jokeElements = document.getElementById('joke');
const jokeButtons = document.getElementById('joke-buttons');

jokeButtons.addEventListener('click',generateJoke);

generateJoke();

async function generateJoke() {
    const config ={
        headers: {
            Accept: 'application/json'
        }
    }

   const res = await fetch(`https://icanhazdadjoke.com/`,config);

  const data = await res.json()

  console.log(data.joke);

  jokeElements.innerHTML = data.joke;

}