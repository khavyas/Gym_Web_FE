import React, { useState } from 'react';
import { User, Mail, Lock, Phone, Calendar, Eye, EyeOff, Dumbbell } from 'lucide-react';

interface FormData {
  name: string;
  age: string;
  phone: string;
  email: string;
  password: string;
}

const AuthPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<'login' | 'register'>('register');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleLogin = () => {
    console.log('Login attempt:', { email: formData.email, password: formData.password });
    alert('Login functionality would be implemented here!');
  };

  const handleRegister = () => {
    console.log('Registration attempt:', formData);
    alert('Registration functionality would be implemented here!');
  };

  const LoginForm = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Dumbbell className="text-white" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-300">Sign in to your gym account</p>
        </div>

        <div className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-3 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-400/20 transition-all">
              <Mail className="text-gray-400 mr-3" size={20} />
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-3 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-400/20 transition-all">
              <Lock className="text-gray-400 mr-3" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
              <button
                type="button"
                className="text-gray-400 hover:text-gray-300 transition-colors p-1"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Sign In
          </button>

          {/* Forgot Password */}
          <button
            type="button"
            className="w-full text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors py-2"
            onClick={() => alert('Forgot password!')}
          >
            Forgot your password?
          </button>

          {/* Register Link */}
          <div className="text-center pt-4 border-t border-white/20">
            <span className="text-gray-300 text-sm">Not yet registered? </span>
            <button
              type="button"
              className="text-purple-300 hover:text-purple-200 text-sm font-medium hover:underline transition-colors"
              onClick={() => setCurrentView('register')}
            >
              Register here
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const RegisterForm = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Dumbbell className="text-white" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Join Our Gym</h1>
          <p className="text-gray-300">Create your account to get started</p>
        </div>

        <div className="space-y-5">
          {/* Name Field */}
          <div className="relative">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-3 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-400/20 transition-all">
              <User className="text-gray-400 mr-3" size={20} />
              <input
                type="text"
                placeholder="Full name"
                className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
          </div>

          {/* Age Field */}
          <div className="relative">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-3 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-400/20 transition-all">
              <Calendar className="text-gray-400 mr-3" size={20} />
              <input
                type="number"
                placeholder="Age"
                className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="relative">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-3 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-400/20 transition-all">
              <Phone className="text-gray-400 mr-3" size={20} />
              <input
                type="tel"
                placeholder="Phone number"
                className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-3 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-400/20 transition-all">
              <Mail className="text-gray-400 mr-3" size={20} />
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-3 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-400/20 transition-all">
              <Lock className="text-gray-400 mr-3" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
              <button
                type="button"
                className="text-gray-400 hover:text-gray-300 transition-colors p-1"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Create Account
          </button>

          {/* Login Link */}
          <div className="text-center pt-4 border-t border-white/20">
            <span className="text-gray-300 text-sm">Already have an account? </span>
            <button
              type="button"
              className="text-purple-300 hover:text-purple-200 text-sm font-medium hover:underline transition-colors"
              onClick={() => setCurrentView('login')}
            >
              Sign in here
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return currentView === 'login' ? <LoginForm /> : <RegisterForm />;
};

export default AuthPage;