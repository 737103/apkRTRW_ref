import { LoginForm } from '@/components/login-form';

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/makassar-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10">
        <LoginForm />
      </div>
    </main>
  );
}
