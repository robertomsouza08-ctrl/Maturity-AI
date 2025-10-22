
export const metadata = { title: 'Maturidade IA/ML – Varejo', description: 'Assessment, mapa de processos e roadmap' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: 'Inter, system-ui, Arial', margin: 0 }}>
        <div style={{ display: 'flex', padding: 16, gap: 12, borderBottom: '1px solid #eee' }}>
          <a href="/" style={{ fontWeight: 700 }}>Assessment</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/processes">Processos</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/settings">Configurações</a>
        </div>
        <main style={{ padding: 16 }}>{children}</main>
      </body>
    </html>
  );
}
