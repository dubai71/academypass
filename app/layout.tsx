import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: 'NurseHub® | A comunidade de enfermeiros que usam IA na rotina',
  description: 'NurseHub® é a comunidade onde enfermeiros e técnicos de enfermagem aprendem a usar inteligência artificial para transformar a rotina de cuidado. Conteúdo prático, sem enrolação.',
  keywords: 'NurseHub, IA para enfermeiros, inteligência artificial enfermagem, comunidade enfermeiros, NurseHub Brasil',
  openGraph: {
    title: 'NurseHub® | A comunidade de enfermeiros que usam IA na rotina',
    description: 'Conteúdo prático de IA para enfermeiros e técnicos de enfermagem. Sem hype. Só o que funciona.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}