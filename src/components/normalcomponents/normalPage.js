import React from "react";
import Chatbot from "./chatbot";
import Quote from "./quote";
import ActivityCard from "./ActivityCard";
import WeatherWidget from "./WeatherWidget";
import ToDoList from "./ToDoList";

const Normal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="py-6 bg-gradient-to-r from-pink-500 to-yellow-400 text-white shadow-lg text-center">
        <h1 className="text-4xl font-extrabold">🌟 Happy Space 🌟</h1>
        <p className="mt-2 text-lg">Where positivity meets productivity</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Left Section: Interactive Widgets */}
        <section className="lg:col-span-2 flex flex-col gap-6">
          <Quote />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WeatherWidget />
            <ToDoList />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-pink-600">Explore Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <ActivityCard
                title="Meditation"
                description="Find your inner peace with guided meditation."
                buttonText="Start Meditation"
                image="https://via.placeholder.com/200?text=Meditation"
                link="https://www.heromovement.net/blog/free-guided-meditation-resources/"
              />
              <ActivityCard
                title="Journaling"
                description="Reflect on your day and express gratitude."
                buttonText="Start Journaling"
                image="https://via.placeholder.com/200?text=Journaling"
                link="https://journey.cloud/"
              />
            </div>
          </div>
        </section>

        {/* Right Section: Chatbot */}
        <aside className="bg-white rounded-lg shadow-md p-6 max-h-screen">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Chat with Us</h2>
          <p className="text-gray-600 mb-4">
            Need a friend to talk to? Our chatbot is here for you!
          </p>
          <Chatbot />
        </aside>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center bg-pink-200 text-pink-800">
        © 2024 Happy Space | Crafted with 🌈 for brighter days.
      </footer>
    </div>
  );
};

export default Normal;
