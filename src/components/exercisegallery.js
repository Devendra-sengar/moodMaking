import React from 'react';

const exercises = [
  { title: 'Yoga', imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.OqPzCUuk02_-AVxDMwGkJQHaE7&pid=Api&P=0&h=180' },
  { title: 'Meditation', imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.BDOjInNVEowpvO05cMRpQwHaEK&pid=Api&P=0&h=180' },
  { title: 'Stretching', imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.CdFDucm6IjvDZrrCL202bAHaEZ&pid=Api&P=0&h=180' },
];

const ExerciseGallery = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-center text-green-700 animate-pulse">Mood-Boosting Exercises</h2>
      <div className="flex flex-wrap justify-center gap-8 mt-8 px-4 py-4">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-60 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform"
          >
            <img
              src={exercise.imgSrc}
              alt={exercise.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <h3 className="p-4 text-xl font-semibold text-gray-800">{exercise.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseGallery;
