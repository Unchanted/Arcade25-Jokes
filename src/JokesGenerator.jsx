
import React, { useState } from 'react';

const jokes = [
  "Knock knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s freezing out here!",
  "Knock knock. Who’s there? Boo. Boo who? Don’t cry, it’s just a joke!",
  "Knock knock. Who’s there? Cow says. Cow says who? Cow says moooo!",
  "Knock knock. Who’s there? Atch. Atch who? Bless you!",
  "Knock knock. Who’s there? Annie. Annie who? Annie way you can let me in now?",
];

const JokeGenerator = () => {
  const [joke, setJoke] = useState('');

  const generateJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Knock-Knock Joke Generator</h1>
        <p className="text-lg mb-6">{joke}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={generateJoke}
        >
          Generate Joke
        </button>
      </div>
    </div>
  );
};

export default JokeGenerator;
