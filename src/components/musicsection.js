// src/components/MusicSection.js
import React, { useState } from 'react';
import healingMusic from '../music/healing-music2.mp3';
const tracks = [
  { title: 'Ocean Waves',src: healingMusic},
  { title: 'Rainfall', src: '/music/spiritual-healing-and-emotional-release-225402.mp3' },
  { title: 'Soft Piano', src: '/music/soft-piano.mp3' }
];

const MusicSection = () => {
  const [playingTrack, setPlayingTrack] = useState(null);

  const togglePlay = (index) => {
    const audioElement = document.getElementById(`track-${index}`);
    if (playingTrack === index) {
      audioElement.pause();
      setPlayingTrack(null);
    } else {
      if (playingTrack !== null) document.getElementById(`track-${playingTrack}`).pause();
      audioElement.play();
      setPlayingTrack(index);
    }
  };

  return (
    <div className="py-8 bg-blue-100">
      <h2 className="text-3xl font-semibold text-center text-teal-600">Healing Music</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {tracks.map((track, index) => (
          <div key={index} className="flex items-center gap-4 bg-white rounded-lg shadow-lg p-4 w-64">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{track.title}</h3>
            </div>
            <button
              onClick={() => togglePlay(index)}
              className="text-white bg-blue-500 px-3 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              {playingTrack === index ? 'Pause' : 'Play'}
            </button>
            <audio id={`track-${index}`} src={track.src} loop />
          </div>
        ))}
      </div>
    </div>
  );
};


export default MusicSection;
