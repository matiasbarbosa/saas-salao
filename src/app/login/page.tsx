"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Scissors, ArrowLeft, Mail, Lock, AlertCircle } from "lucide-react";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isRegister = searchParams.get("tab") === "register";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States to handle validation UI
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Regex rules
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Mínimo 8 caracteres, pelo menos uma letra e um número
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

  const validate = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("O e-mail é obrigatório.");
      isValid = false;
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError("Digite um e-mail válido (ex: seu@email.com).");
      isValid = false;
    }

    if (!password) {
      setPasswordError("A senha é obrigatória.");
      isValid = false;
    } else if (isRegister && !PASSWORD_REGEX.test(password)) {
      setPasswordError("A senha deve ter no mínimo 8 caracteres, contendo letras e números.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      if (email === 'admin@salao.com' && password === '123456') {
        document.cookie = "mock_session=admin_logged_in; path=/";
        router.push("/admin");
      } else {
        document.cookie = "mock_session=client_logged_in; path=/";
        router.push("/dashboard");
      }
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-md relative z-10">
      <div className="flex justify-center mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <div className="bg-primary text-primary-foreground p-2 rounded-xl shadow-lg">
            <Scissors className="w-8 h-8" />
          </div>
        </Link>
      </div>

      <div className="bg-background border border-border rounded-3xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight mb-2">
            {isRegister ? "Crie sua Conta" : "Bem-vindo de volta!"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {isRegister ? "Prepare-se para transformar a gestão do seu salão." : "Acesse sua conta para gerenciar seus horários."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              E-mail
            </label>
            <div className="relative">
              <Mail className={`absolute left-3 top-2.5 h-5 w-5 ${emailError ? 'text-destructive' : 'text-muted-foreground'}`} />
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 pl-10 transition-colors ${emailError ? 'border-destructive focus-visible:ring-destructive/30' : 'border-input focus-visible:ring-ring'
                  }`}
              />
            </div>
            {emailError && (
              <p className="text-xs text-destructive font-semibold flex items-center gap-1 mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                <AlertCircle className="w-3.5 h-3.5" />
                {emailError}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium leading-none">
                Senha
              </label>
              {!isRegister && (
                <Link href="#" className="text-xs text-primary hover:underline font-medium">
                  Esqueceu a senha?
                </Link>
              )}
            </div>
            <div className="relative">
              <Lock className={`absolute left-3 top-2.5 h-5 w-5 ${passwordError ? 'text-destructive' : 'text-muted-foreground'}`} />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 pl-10 transition-colors ${passwordError ? 'border-destructive focus-visible:ring-destructive/30' : 'border-input focus-visible:ring-ring'
                  }`}
              />
            </div>
            {passwordError && (
              <p className="text-xs text-destructive font-semibold flex items-center gap-1 mt-1 animate-in fade-in slide-in-from-top-1 duration-200 text-left">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {passwordError}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:opacity-90 h-11 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all mt-6 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processando..." : isRegister ? "Cadastrar" : "Entrar"}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground border-t border-border pt-6">
          {isRegister ? "Já tem uma conta?" : "Não tem uma conta?"} {" "}
          <Link
            href={isRegister ? "/login" : "/login?tab=register"}
            className="text-primary hover:underline font-medium"
          >
            {isRegister ? "Faça login" : "Crie seu negócio agora"}
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <Suspense fallback={<div className="text-muted-foreground text-sm z-10">Carregando formulário...</div>}>
        <LoginContent />
      </Suspense>
    </div>
  );
}
