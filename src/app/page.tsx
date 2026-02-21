import Link from "next/link";
import { Scissors, Calendar, Users, Star, ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header / Navbar */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Scissors className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">SalãoSaaS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#features" className="hover:text-primary transition-colors">Recursos</Link>
            <Link href="#testimonials" className="hover:text-primary transition-colors">Depoimentos</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Preços</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden md:block text-sm font-medium hover:text-primary transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/login?tab=register"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2 group"
            >
              Começar grátis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative px-4 pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
          {/* Decorative background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10" />

          <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
              <span>O sistema #1 para barbearias e salões</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Gestão inteligente para<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/80 to-primary">
                elevar o seu negócio
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Agendamentos, controle de clientes e gestão de serviços em um só lugar. Feito para profissionais modernos que buscam crescer sem dor de cabeça.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Link
                href="/login?tab=register"
                className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-base font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Criar conta gratuita
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#demo"
                className="w-full sm:w-auto bg-secondary text-secondary-foreground px-8 py-3.5 rounded-full text-base font-medium hover:bg-secondary/80 transition-all duration-300 flex items-center justify-center"
              >
                Ver demonstração
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Tudo o que você precisa</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Automatize processos e foque no que realmente importa: atender bem seus clientes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Agenda Inteligente</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Evite horários duplicados e buracos na agenda com nosso sistema de reservas automático 24/7.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Gestão de Clientes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Histórico de serviços, preferências e métricas de fidelização para um atendimento personalizado.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Segurança Total</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gestão de profissionais, permissões de acesso e dados na nuvem criptografados com segurança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Pronto para transformar seu espaço?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Junte-se a centenas de profissionais que já modernizaram a gestão de seus negócios.
            </p>
            <Link
              href="/login?tab=register"
              className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-full text-lg font-semibold hover:bg-foreground/90 hover:scale-105 transition-all shadow-xl"
            >
              Experimente 14 dias grátis
            </Link>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-primary/5 via-background to-primary/5 blur-3xl -z-10" />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Scissors className="w-5 h-5 text-primary" />
            <span className="font-bold text-xl">SalãoSaaS</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SalãoSaaS. Alguns direitos reservados.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Termos do Serviço</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
