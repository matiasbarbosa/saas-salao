import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    // Mock check para entender se o usuário está logado
    // No mundo real: obteríamos o token de sessão do NextAuth ou JWT
    const session = request.cookies.get('mock_session')?.value;

    const pathname = request.nextUrl.pathname;
    const isAuthPage = pathname.startsWith('/login');

    // Rota Protegida Genérica (Cliente ou Admin)
    if (pathname.startsWith('/dashboard') || pathname.startsWith('/admin')) {
        // Se não tiver sessão, manda pro Login
        if (!session) {
            const url = request.nextUrl.clone();
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }

    // Regra Exclusiva de Autorização para /admin
    if (pathname.startsWith('/admin')) {
        // Apenas quem logou como admin_logged_in pode acessar o /admin
        if (session !== 'admin_logged_in') {
            const url = request.nextUrl.clone();
            url.pathname = '/dashboard'; // Redireciona usuários comuns de volta ao dashboard cliente
            return NextResponse.redirect(url);
        }
    }

    // Se o usuário já está logado e tenta acessar /login, manda de volta ao dashboard aplicável
    if (isAuthPage && session) {
        const url = request.nextUrl.clone();
        url.pathname = session === 'admin_logged_in' ? '/admin' : '/dashboard';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// Configuração para dizer ao Next.js em quais rotas o middleware deve rodar
export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*', '/login'],
};
