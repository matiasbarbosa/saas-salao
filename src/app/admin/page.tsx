import { redirect } from "next/navigation";

export default function AdminRootPage() {
    // Simplesmente redirecionamos a raiz de admin para o painel de faturamento/dashboard inicial do Admin.
    redirect("/admin/financeiro");
}
