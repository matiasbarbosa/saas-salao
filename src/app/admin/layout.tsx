import Link from "next/link";
import { CalendarDays, LayoutDashboard, Settings, ReceiptText, LogOut, Scissors } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-secondary/30 overflow-hidden">
            {/* Desktop Sidebar */}
            <aside className="w-64 bg-background border-r border-border flex flex-col hidden md:flex">
                <div className="h-16 flex items-center px-6 border-b border-border/50">
                    <Link href="/admin" className="flex items-center gap-2">
                        <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                            <Scissors className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg tracking-tight">Admin SaaS</span>
                    </Link>
                </div>

                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                    <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                        <LayoutDashboard className="w-5 h-5" />
                        <span className="font-medium text-sm">Dashboard</span>
                    </Link>
                    <Link href="/admin/agenda" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors">
                        <CalendarDays className="w-5 h-5" />
                        <span className="font-medium text-sm">Agenda</span>
                    </Link>
                    <Link href="/admin/financeiro" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                        <ReceiptText className="w-5 h-5" />
                        <span className="font-medium text-sm">Financeiro</span>
                    </Link>

                    <div className="pt-4 mt-4 border-t border-border/50">
                        <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Cadastros</p>
                        <Link href="/admin/configuracoes/servicos" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                            <Settings className="w-5 h-5" />
                            <span className="font-medium text-sm">Serviços & Preços</span>
                        </Link>
                        <Link href="/admin/configuracoes/profissionais" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                            <Settings className="w-5 h-5" />
                            <span className="font-medium text-sm">Profissionais</span>
                        </Link>
                    </div>
                </nav>

                <div className="p-4 border-t border-border/50">
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors w-full text-left">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium text-sm">Sair (Área Cliente)</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Mobile Header (Only visible on small screens) */}
                <header className="h-16 bg-background border-b border-border/50 flex items-center justify-between px-4 md:hidden">
                    <Link href="/admin" className="flex items-center gap-2">
                        <Scissors className="w-5 h-5 text-primary" />
                        <span className="font-bold">Admin</span>
                    </Link>
                    {/* Mobile menu button could go here */}
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
