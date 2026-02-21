import Link from "next/link";
import { Home, Calendar, User as UserIcon, ShieldAlert } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Mock auth state base - no futuro isso virá do NextAuth/Supabase/etc
    const isUserAdmin = true;

    return (
        <div className="flex flex-col min-h-screen bg-secondary/30 relative pb-20 md:pb-0">

            {/* Desktop Sidebar Stub (hidden on mobile) */}
            <aside className="hidden md:flex flex-col fixed inset-y-0 left-0 w-64 bg-background border-r border-border z-40 p-4">
                <div className="px-4 py-6">
                    <h2 className="font-bold text-lg mb-6">Menu</h2>
                    {/* Adicione links do sidebar desktop aqui no futuro */}
                </div>
            </aside>

            {/* Main Content Wrapper (adjusts for sidebar on desktop) */}
            <div className="flex flex-col flex-1 md:ml-64">
                {/* Top Header / Mobile */}
                <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
                    <div className="container px-4 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                {/* Pseudo-avatar do usuário */}
                                <span className="font-semibold text-primary">MC</span>
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm text-muted-foreground leading-tight">Olá,</p>
                                <h1 className="font-bold leading-tight truncate">Matheus</h1>
                            </div>
                        </div>

                        {/* Admin Link Nav */}
                        {isUserAdmin && (
                            <Link
                                href="/admin"
                                className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0"
                            >
                                <ShieldAlert className="w-4 h-4" />
                                <span className="hidden sm:inline">Área Admin</span>
                            </Link>
                        )}
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 container mx-auto p-4 md:p-6 mb-safe">
                    {children}
                </main>
            </div>

            {/* Modern Bottom Navigation (Mobile Only) */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
                {/* Glass effect wrapper */}
                <div className="mx-4 mb-4 rounded-3xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg px-6 py-3 flex justify-between items-center">
                    <Link href="/dashboard" className="flex flex-col items-center gap-1 text-primary">
                        <div className="p-2 rounded-xl bg-primary/10 transition-colors">
                            <Home className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-medium">Início</span>
                    </Link>

                    <Link href="/dashboard/booking" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        <div className="p-2 rounded-xl hover:bg-secondary transition-colors">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-medium">Agendar</span>
                    </Link>

                    <Link href="/dashboard/appointments" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        <div className="p-2 rounded-xl hover:bg-secondary transition-colors">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-medium">Histórico</span>
                    </Link>

                    <Link href="/dashboard/profile" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        <div className="p-2 rounded-xl hover:bg-secondary transition-colors">
                            <UserIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-medium">Perfil</span>
                    </Link>
                </div>
            </nav>

        </div>
    );
}
