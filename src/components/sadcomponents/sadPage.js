import React from "react";
import Chatbot from "./chatbot";
import Quote from "./quote";
import ActivityCard from "./activity";

const Sad = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 p-4">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-indigo-700">
          🌟 Lift Your Mood 🌟
        </h1>
        <p className="mt-2 text-lg text-indigo-500">
          Small steps can make a big difference in how you feel.
        </p>
      </header>

      <main className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        {/* Left Content Section */}
        <section className="flex-1">
          {/* Quote Section */}
          <div className="mb-6">
            <Quote />
          </div>

          {/* Activities Section */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Activities to Lift Your Mood
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ActivityCard
                title="Breathing Exercise"
                description="Take a moment to focus on your breathing. Inhale... Exhale..."
                buttonText="Start Exercise"
                image="https://via.placeholder.com/200?text=Breathing+Exercise"
              />
              <ActivityCard
                title="Listen to Music"
                description="Explore playlists designed to uplift your mood."
                buttonText="Discover Playlists"
                link="https://open.spotify.com"
                image="https://via.placeholder.com/200?text=Music"
              />
              <ActivityCard
                title="Watch Funny Videos"
                description="Laughter is the best medicine. Watch something fun!"
                buttonText="Watch Now"
                link="https://www.youtube.com/results?search_query=funny+videos"
                image="https://via.placeholder.com/200?text=Videos"
              />
            </div>
          </div>
        </section>

        {/* Right Chatbot Section */}
        <aside className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Talk to Our Friendly Bot
          </h2>
          <Chatbot />
        </aside>
      </main>

      <footer className="text-center py-4 text-indigo-500 mt-8">
        © 2024 Lift Your Mood | Built with ❤️ for brighter days.
      </footer>
    </div>
  );
};

export default Sad;
