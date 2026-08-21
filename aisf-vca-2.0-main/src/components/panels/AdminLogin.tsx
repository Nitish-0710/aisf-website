import { useState } from "react";

interface AdminLoginProps {
  onLogin: () => void;
}

const ADMIN_PASSWORD = "admin123";

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setError(false);
      onLogin();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div
        className={`w-full max-w-sm bg-card border border-border rounded-lg p-8 shadow-[0_0_30px_hsl(348_100%_50%/0.1)] transition-all duration-300 ${
          shaking ? "screen-shake" : ""
        }`}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="font-pixel text-primary text-xs mb-2 leading-relaxed">
            Admin Access
          </h2>
          <p className="font-mono text-muted-foreground text-sm">
            Enter password to manage panels
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-mono text-xs text-muted-foreground mb-2 uppercase tracking-widest">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="••••••••"
              className={`neon-input w-full px-4 py-3 rounded-lg text-base ${
                error ? "border-destructive shadow-[0_0_10px_hsl(0_84%_60%/0.3)]" : ""
              }`}
              autoFocus
            />
            {error && (
              <p className="mt-2 text-xs font-mono text-destructive animate-fade-in">
                ✗ Invalid password. Access denied.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-primary text-primary-foreground font-mono text-sm tracking-widest uppercase rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(348_100%_50%/0.4)] active:scale-95"
          >
            Authenticate →
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
