'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Mail, Phone, Users, LogIn, User, Globe } from "lucide-react";

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
        <header className="mb-12 text-center">
          <div className="flex justify-end mb-2">
            <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "NL" ? "EN" : "NL")}>
              <Globe className="mr-2" size={16} /> {language === "NL" ? "English" : "Nederlands"}
            </Button>
          </div>
          <h1 className="text-4xl font-bold mb-4">Wij bouwen aan de toekomst</h1>
          <p className="text-lg text-gray-800">
            Gespecialiseerd in vakmensen uit asielzoekerscentra voor de bouwsector
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button size="lg">Bouwpersoneel nodig?</Button>
            <Button size="lg" variant="outline">Ik zoek werk</Button>
          </div>
        </header>

        <section className="bg-gray-100 p-6 rounded-2xl shadow mb-12">
          <h2 className="text-2xl font-bold mb-4">Openstaande vacatures</h2>
          <div className="border p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold mb-2">Solliciteer direct</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="naam">Naam</Label>
                <Input id="naam" placeholder="Jouw naam" value={formData.naam} onChange={(e) => setFormData({ ...formData, naam: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="telefoon">Telefoonnummer</Label>
                <Input id="telefoon" placeholder="06-12345678" value={formData.telefoon} onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="cv">Upload je CV</Label>
                <Input type="file" id="cv" onChange={handleFileChange} />
              </div>
              <Button type="submit" className="mt-4">Verzend sollicitatie</Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}