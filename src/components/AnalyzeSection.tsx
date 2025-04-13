"use client";

import { useCallback, useState } from "react";
import { analyzeStudentQuery } from "@/ai/flows/analyze-student-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { debounce } from "lodash";

export default function AnalyzeSection() {
  const [query, setQuery] = useState("");
  const [relevantSubjects, setRelevantSubjects] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedSetQuery = useCallback(
    debounce((val: string) => setQuery(val), 300),
    []
  );

  const handleAnalyzeQuery = useCallback(async () => {
    if (!query) return;
    setLoading(true);
    const result = await analyzeStudentQuery({ query });
    setRelevantSubjects(result.relevantSubjects);
    setLoading(false);
  }, [query]);

  return (
    <section className="py-12 px-6 md:px-24">
      <h2 className="text-3xl font-semibold mb-4">Análisis de Pregunta con IA</h2>
      <div className="grid gap-4">
        <Label htmlFor="query">Escribe tu consulta:</Label>
        <Textarea
          id="query"
          placeholder="Ejemplo: ¿Cómo resuelvo una derivada de segundo grado?"
          onChange={(e) => debouncedSetQuery(e.target.value)}
        />
        <Button onClick={handleAnalyzeQuery} disabled={loading}>
          {loading ? "Analizando..." : "Analizar"}
        </Button>
        {relevantSubjects.length > 0 && (
          <div className="mt-4">
            <p>Temas relevantes:</p>
            <ul className="list-disc ml-5 mt-2">
              {relevantSubjects.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
