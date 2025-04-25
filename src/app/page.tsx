"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Lazy load para la sección de análisis AI
const AnalyzeSection = dynamic(() => import("@/components/AnalyzeSection"), {
  ssr: false,
  loading: () => <p className="text-center py-6">Cargando análisis...</p>,
});

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Service Overview */}
      <section className="py-12 px-6 md:px-24">
        <h2 className="text-3xl font-semibold mb-4 text-center">Servicio de Ayuda</h2>
        <p className="text-lg text-muted-foreground text-center">
          Ofrecemos tutoría experta en Matemáticas, Programación en Python (Introductorio y Avanzado), y Cálculo 1.
        </p>
      </section>

      {/* Approach & Purpose Section */}
      <section className="py-12 px-6 md:px-24 bg-secondary">
        <h2 className="text-3xl font-semibold mb-4 text-center text-foreground">Nuestro Enfoque</h2>
        <p className="text-lg text-muted-foreground text-center">
          Creemos en el aprendizaje personalizado, adaptando nuestros métodos a tus necesidades y metas.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-6 md:px-24">
        <h2 className="text-3xl font-semibold mb-4">Contáctanos</h2>
        <Card>
          <CardHeader>
            <CardTitle>Escríbenos</CardTitle>
            <CardDescription>Deja tu información y te contactaremos pronto.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Correo</Label>
              <Input type="email" id="email" placeholder="tu@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" placeholder="Tu mensaje" />
            </div>
            <Button>Enviar</Button>
          </CardContent>
        </Card>
      </section>

      {/* Pricing Display */}
      <section className="py-12 px-6 md:px-24 bg-secondary">
        <h2 className="text-3xl font-semibold mb-4 text-center text-foreground">Precios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Matemáticas</CardTitle>
              <CardDescription>Para estudiantes escolares</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Precio: $50/hora</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Programación en Python</CardTitle>
              <CardDescription>Introductorio y Avanzado</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Precio: $60/hora</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cálculo 1</CardTitle>
              <CardDescription>Para estudiantes universitarios</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Precio: $70/hora</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Query Analysis */}
      <AnalyzeSection />
    </main>
  );
}
