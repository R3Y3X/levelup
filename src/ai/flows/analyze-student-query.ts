'use server';
/**
 * @fileOverview Analyzes a student's query to identify relevant subject areas.
 *
 * - analyzeStudentQuery - A function that analyzes the query and returns relevant subjects.
 * - AnalyzeStudentQueryInput - The input type for the analyzeStudentQuery function.
 * - AnalyzeStudentQueryOutput - The return type for the analyzeStudentQuery function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AnalyzeStudentQueryInputSchema = z.object({
  query: z.string().describe('The student assignment query.'),
});
export type AnalyzeStudentQueryInput = z.infer<typeof AnalyzeStudentQueryInputSchema>;

const AnalyzeStudentQueryOutputSchema = z.object({
  relevantSubjects: z
    .array(z.enum(['Math', 'Python', 'Calculus']))
    .describe('The relevant subject areas identified in the query.'),
});
export type AnalyzeStudentQueryOutput = z.infer<typeof AnalyzeStudentQueryOutputSchema>;

export async function analyzeStudentQuery(input: AnalyzeStudentQueryInput): Promise<AnalyzeStudentQueryOutput> {
  return analyzeStudentQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeStudentQueryPrompt',
  input: {
    schema: z.object({
      query: z.string().describe('The student assignment query.'),
    }),
  },
  output: {
    schema: z.object({
      relevantSubjects: z
        .array(z.enum(['Math', 'Python', 'Calculus']))
        .describe('The relevant subject areas identified in the query.'),
    }),
  },
  prompt: `You are an AI assistant designed to analyze student queries and identify relevant subject areas.

  Based on the student's query, determine which of the following subjects are most relevant: Math, Python, and Calculus.

  Query: {{{query}}}

  Return a list of the relevant subjects.
  `,
});

const analyzeStudentQueryFlow = ai.defineFlow<
  typeof AnalyzeStudentQueryInputSchema,
  typeof AnalyzeStudentQueryOutputSchema
>(
  {
    name: 'analyzeStudentQueryFlow',
    inputSchema: AnalyzeStudentQueryInputSchema,
    outputSchema: AnalyzeStudentQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
