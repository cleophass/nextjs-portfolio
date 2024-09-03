// app/notebook/page.tsx
"use client";
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function NotebookPage() {
  const router = useRouter();
  
  // Redirection vers le fichier HTML
  if (typeof window !== 'undefined') {
    window.location.href = '/notebook.html';
  }

  // Le composant peut aussi retourner un message ou une redirection par défaut
  return <p>Redirection en cours...</p>;
}
