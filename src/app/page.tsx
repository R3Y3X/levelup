"use client";

import { analyzeStudentQuery } from "@/ai/flows/analyze-student-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [relevantSubjects, setRelevantSubjects] = useState<string[]>([]);

  const handleAnalyzeQuery = async () => {
    if (query) {
      const result = await analyzeStudentQuery({ query });
      setRelevantSubjects(result.relevantSubjects);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Service Overview */}
      <section className="py-12 px-6 md:px-24">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Tutoring Services</h2>
        <p className="text-lg text-muted-foreground text-center">
          We offer expert tutoring in Math, Python Programming (Introductory and Advanced), and Calculus 1.
        </p>
      </section>

      {/* Approach &amp; Purpose Section */}
      <section className="py-12 px-6 md:px-24 bg-secondary">
        <h2 className="text-3xl font-semibold mb-4 text-center text-foreground">Our Approach</h2>
        <p className="text-lg text-muted-foreground text-center">
          We believe in personalized learning, adapting our methods to suit your unique needs and goals.
        </p>
        {/* Add engaging visuals here */}
      </section>

      {/* Contact Form */}
      <section className="py-12 px-6 md:px-24">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <Card>
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
            <CardDescription>Leave your information and we&apos;ll get back to you.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="your@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" />
            </div>
            <Button>Submit</Button>
          </CardContent>
        </Card>
      </section>

      {/* Pricing Display */}
      <section className="py-12 px-6 md:px-24 bg-secondary">
        <h2 className="text-3xl font-semibold mb-4 text-center text-foreground">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Math Tutoring</CardTitle>
              <CardDescription>For school students</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Price: $50/hour</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Python Programming</CardTitle>
              <CardDescription>Introductory and Advanced</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Price: $60/hour</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Calculus 1</CardTitle>
              <CardDescription>For university students</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Price: $70/hour</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI-Powered Query Analysis */}
      <section className="py-12 px-6 md:px-24">
        <h2 className="text-3xl font-semibold mb-4">AI Query Analysis</h2>
        <div className="grid gap-4">
          <Label htmlFor="query">Enter your query:</Label>
          <Textarea
            id="query"
            placeholder="Ask your question here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleAnalyzeQuery}>Analyze Query</Button>
          {relevantSubjects.length > 0 && (
            <div className="mt-4">
              <p>Relevant Subjects:</p>
              <ul>
                {relevantSubjects.map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
