import React, { useState } from 'react';
import { 
  Mail, 
  Eye, 
  EyeOff, 
  Github, 
  Facebook, 
  Chrome, 
  Hexagon, 
  Sparkles 
} from 'lucide-react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 font-sans selection:bg-fuchsia-500/30">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Floating Rings (CSS art for background) */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 border-[16px] border-white/5 rounded-full blur-[2px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[15%] w-48 h-48 border-[8px] border-fuchsia-500/10 rounded-full blur-[1px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[5%] w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-md pointer-events-none"></div>

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-md m-4 p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.1)]">
        
        {/* Header / Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-fuchsia-500/20 mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 blur-md transform -rotate-45 translate-x-4 -translate-y-4"></div>
            <Hexagon className="text-white relative z-10" size={28} />
            <Sparkles className="text-fuchsia-200 absolute top-2 right-2" size={12} />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">NexusCore</h1>
          <h2 className="text-xl font-semibold text-white mt-4">Welcome back</h2>
          <p className="text-slate-400 text-sm mt-2">Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-300 ml-1">Email address</label>
            <div className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-slate-950/50 border border-slate-700/50 text-white rounded-xl px-4 py-3 outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all placeholder:text-slate-600"
                required
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-slate-950/50 border border-slate-700/50 text-white rounded-xl px-4 py-3 outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all placeholder:text-slate-600 pr-12"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-4 h-4 rounded bg-slate-800 border border-slate-600 peer-checked:bg-fuchsia-600 peer-checked:border-fuchsia-600 transition-all"></div>
                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Remember me</span>
            </label>
            
            <a href="#" className="text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-indigo-500/25 transition-all active:scale-[0.98]"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="mt-8 mb-6 relative flex items-center justify-center">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          <span className="relative bg-slate-900/40 px-4 text-xs font-medium text-slate-500 backdrop-blur-sm">
            or continue with
          </span>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-3 gap-3">
          <button className="flex items-center justify-center gap-2 py-2.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-xl text-slate-300 hover:text-white transition-all group">
            <Chrome size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium sr-only md:not-sr-only md:block">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-xl text-slate-300 hover:text-white transition-all group">
            <Github size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium sr-only md:not-sr-only md:block">GitHub</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-xl text-slate-300 hover:text-white transition-all group">
            <Facebook size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium sr-only md:not-sr-only md:block">Facebook</span>
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-slate-400">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
            Create account
          </a>
        </p>

      </div>
    </div>
  );
}