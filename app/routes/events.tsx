import React from "react";
import eventsData from "../data/events.json";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{event.title}</h2>
        <div className="text-sm text-gray-600 mb-4">
          <p>
            📅{" "}
            {new Date(event.date).toLocaleDateString("ja-JP")} {event.time}
          </p>
          <p>📍 {event.location}</p>
        </div>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <button className="bg-[#F0566E] text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors duration-300">
          詳細を見る
        </button>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">イベント一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
