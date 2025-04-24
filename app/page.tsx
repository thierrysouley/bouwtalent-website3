'use client';

import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("NL");
  const [formData, setFormData] = useState({ naam: "", telefoon: "", cv: null });

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  return (
    <div className="min-h-screen bg-white p-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Wij bouwen aan de toekomst</h1>

        <form className="bg-gray-100 p-6 rounded-2xl shadow max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Solliciteer direct</h2>

          <label className="block mb-2">
            Naam
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={formData.naam}
              onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
            />
          </label>

          <label className="block mb-2">
            Telefoonnummer
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={formData.telefoon}
              onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
            />
          </label>

          <label className="block mb-4">
            Upload je CV
            <input type="file" onChange={handleFileChange} className="w-full" />
          </label>

          <button type="submit" className="bg-black text-white py-2 px-4 rounded">
            Verstuur sollicitatie
          </button>
        </form>
      </div>
    </div>
  );
}
