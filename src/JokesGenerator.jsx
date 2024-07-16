import React, { useState } from 'react';
import jokes from './jokes';
import { motion, AnimatePresence } from 'framer-motion';

const JokeGenerator = () => {
  const [joke, setJoke] = useState('');

  const generateJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Knock-Knock Joke Generator</h1>
        <AnimatePresence>
          {joke && (
            <motion.p
              key={joke}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-lg mb-6"
            >
              {joke}
            </motion.p>
          )}
        </AnimatePresence>
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={generateJoke}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Generate Joke
        </motion.button>
      </div>
    </div>
  );
};

export default JokeGenerator;
