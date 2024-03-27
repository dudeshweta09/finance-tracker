import AuthGuard from "@/components/auth-guard";
import HomePage from "./home-page/page";

export default function DefaultPage() {
  return (
    <AuthGuard>
    <HomePage/>
    </AuthGuard>
  );
}
