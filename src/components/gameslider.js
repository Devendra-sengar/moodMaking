import React from 'react';

const games = [
  { title: 'Puzzle', imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.uK1CLA3_Ji1wDLsP6FkjlAHaHa&pid=Api&P=0&h=180' ,name:"blocky-blast-puzzle"},
  { title: 'Temple Run', imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.L38fbUWeHDJCAvcI3RsT9gHaHa&pid=Api&P=0&h=180' ,name:"temple-run-2"},
  { title: 'bubble Short', imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.uP9yTu7dN92KtY5oky1euAHaHa&pid=Api&P=0&h=180' ,name:"bubble-shooter-lak" },
  { title: 'Breathing Exercises', imgSrc: 'https://i.ytimg.com/vi/mjMckw0gjQI/maxresdefault.jpg' ,name:"moto-x3m"},
];

const GameSlider = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-xl ">
      <h2 className="text-4xl font-bold text-center text-teal-700 animate-pulse">Mood-Boosting Games</h2>
      <div className="flex overflow-x-auto mt-8 gap-6 px-4 scrollbar-none">
        {games.map((game, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-60 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform"
          >
            <img
              src={game.imgSrc}
              alt={game.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{game.title}</h3>
              <button
                className="mt-3 px-5 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300 shadow-lg"
              >
                <a
                  href={`https://poki.com/en/g/${game.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Now
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSlider;
