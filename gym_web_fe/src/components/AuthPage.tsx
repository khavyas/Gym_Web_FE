// src/components/AuthPage.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { User, Mail, Lock, Phone, Calendar, Eye, EyeOff, Dumbbell } from 'lucide-react';
import { Platform } from '../utils/Platform';

interface FormData {
  name: string;
  age: string;
  phone: string;
  email: string;
  password: string;
}

const AuthPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<'login' | 'register'>('login');
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
    if (Platform.OS === 'web') {
      alert('Login functionality would be implemented here!');
    } else {
      // Use native alert for mobile
      console.log('Login functionality would be implemented here!');
    }
  };

  const handleRegister = () => {
    console.log('Registration attempt:', formData);
    if (Platform.OS === 'web') {
      alert('Registration functionality would be implemented here!');
    } else {
      // Use native alert for mobile
      console.log('Registration functionality would be implemented here!');
    }
  };

  const LoginForm = () => (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Dumbbell color="white" size={Platform.select({ web: 32, native: 24 })} />
            </View>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to your gym account</Text>
          </View>

          <View style={styles.formFields}>
            {/* Email Field */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Mail style={styles.icon} color="#9CA3AF" size={20} />
                <TextInput
                  style={styles.input}
                  placeholder="Email address"
                  placeholderTextColor="#D1D5DB"
                  value={formData.email}
                  onChangeText={(text) => handleInputChange('email', text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Password Field */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Lock style={styles.icon} color="#9CA3AF" size={20} />
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="Password"
                  placeholderTextColor="#D1D5DB"
                  value={formData.password}
                  onChangeText={(text) => handleInputChange('password', text)}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff color="#9CA3AF" size={20} /> : <Eye color="#9CA3AF" size={20} />}
                </TouchableOpacity>
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Forgot Password */}
            <TouchableOpacity 
              style={styles.forgotPassword} 
              onPress={() => {
                if (Platform.OS === 'web') {
                  alert('Forgot password!');
                } else {
                  console.log('Forgot password!');
                }
              }}
            >
              <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
            </TouchableOpacity>

            {/* Register Link */}
            <View style={styles.switchContainer}>
              <Text style={styles.switchText}>Not yet registered? </Text>
              <TouchableOpacity onPress={() => setCurrentView('register')}>
                <Text style={styles.switchLink}>Register here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  const RegisterForm = () => (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Dumbbell color="white" size={Platform.select({ web: 32, native: 24 })} />
            </View>
            <Text style={styles.title}>Join Our Gym</Text>
            <Text style={styles.subtitle}>Create your account to get started</Text>
          </View>

          <View style={styles.formFields}>
            {/* Name Field */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <User style={styles.icon} color="#9CA3AF" size={20} />
                <TextInput
                  style={styles.input}
                  placeholder="Full name"
                  placeholderTextColor="#D1D5DB"
                  value={formData.name}
                  onChangeText={(text) => handleInputChange('name', text)}
                />
              </View>
            </View>

            {/* Age Field */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Calendar style={styles.icon} color="#9CA3AF" size={20} />
                <TextInput
                  style={styles.input}
                  placeholder="Age"
                  placeholderTextColor="#D1D5DB"
                  value={formData.age}
                  onChangeText={(text) => handleInputChange('age', text)}
                  keyboardType="numeric"
                />
              </View>
            </View>

            {/* Phone Field */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Phone style={styles.icon} color="#9CA3AF" size={20} />
                <TextInput
                  style={styles.input}
                  placeholder="Phone number"
                  placeholderTextColor="#D1D5DB"
                  value={formData.phone}
                  onChangeText={(text) => handleInputChange('phone', text)}
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            {/* Email Field */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Mail style={styles.icon} color="#9CA3AF" size={20} />
                <TextInput
                  style={styles.input}
                  placeholder="Email address"
                  placeholderTextColor="#D1D5DB"
                  value={formData.email}
                  onChangeText={(text) => handleInputChange('email', text)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Password Field */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Lock style={styles.icon} color="#9CA3AF" size={20} />
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="Password"
                  placeholderTextColor="#D1D5DB"
                  value={formData.password}
                  onChangeText={(text) => handleInputChange('password', text)}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff color="#9CA3AF" size={20} /> : <Eye color="#9CA3AF" size={20} />}
                </TouchableOpacity>
              </View>
            </View>

            {/* Register Button */}
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.switchContainer}>
              <Text style={styles.switchText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => setCurrentView('login')}>
                <Text style={styles.switchLink}>Sign in here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  return currentView === 'login' ? <LoginForm /> : <RegisterForm />;
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    minHeight: Platform.select({ web: height, native: height }),
  },
  container: {
    flex: 1,
    backgroundColor: '#1e1b4b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Platform.select({ web: 32, native: 16 }),
    minHeight: Platform.select({ web: height, native: height }),
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    padding: Platform.select({ web: 32, native: 24 }),
    width: '100%',
    maxWidth: Platform.select({ web: 400, native: width - 32 }),
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    // Web-specific backdrop blur
    ...(Platform.OS === 'web' && {
      backdropFilter: 'blur(16px)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    }),
    // Native-specific shadow
    ...(Platform.OS !== 'web' && {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.25,
      shadowRadius: 25,
      elevation: 25,
    }),
  },
  header: {
    alignItems: 'center',
    marginBottom: Platform.select({ web: 32, native: 24 }),
  },
  iconContainer: {
    width: Platform.select({ web: 64, native: 48 }),
    height: Platform.select({ web: 64, native: 48 }),
    borderRadius: Platform.select({ web: 32, native: 24 }),
    backgroundColor: '#a855f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: Platform.select({ web: 24, native: 20 }),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: Platform.select({ web: 16, native: 14 }),
    color: '#d1d5db',
    textAlign: 'center',
  },
  formFields: {
    gap: Platform.select({ web: 20, native: 16 }),
  },
  inputContainer: {
    marginBottom: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: Platform.select({ web: 12, native: 14 }),
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: Platform.select({ web: 16, native: 14 }),
    paddingVertical: 0,
    // Web-specific outline removal
    ...(Platform.OS === 'web' && {
      outlineWidth: 0,
    }),
  },
  passwordInput: {
    paddingRight: 12,
  },
  eyeIcon: {
    padding: 4,
  },
  button: {
    backgroundColor: '#a855f7',
    borderRadius: 8,
    paddingVertical: Platform.select({ web: 16, native: 18 }),
    alignItems: 'center',
    marginTop: 8,
    // Web-specific hover and transform
    ...(Platform.OS === 'web' && {
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    }),
  },
  buttonText: {
    color: 'white',
    fontSize: Platform.select({ web: 16, native: 14 }),
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 8,
    padding: 8,
  },
  forgotPasswordText: {
    color: '#a78bfa',
    fontSize: Platform.select({ web: 14, native: 12 }),
    fontWeight: '500',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  switchText: {
    color: '#d1d5db',
    fontSize: Platform.select({ web: 14, native: 12 }),
  },
  switchLink: {
    color: '#a78bfa',
    fontSize: Platform.select({ web: 14, native: 12 }),
    fontWeight: '500',
  },
});

export default AuthPage;














// import React, { useState } from 'react';
// import { User, Mail, Lock, Phone, Calendar, Eye, EyeOff, Dumbbell } from 'lucide-react';

// interface FormData {
//   name: string;
//   age: string;
//   phone: string;
//   email: string;
//   password: string;
// }

// const AuthPage: React.FC = () => {
//   const [currentView, setCurrentView] = useState<'login' | 'register'>('login');
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     age: '',
//     phone: '',
//     email: '',
//     password: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleLogin = () => {
//     console.log('Login attempt:', { email: formData.email, password: formData.password });
//     alert('Login functionality would be implemented here!');
//   };

//   const handleRegister = () => {
//     console.log('Registration attempt:', formData);
//     alert('Registration functionality would be implemented here!');
//   };

//   const LoginForm = () => (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
//       <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Dumbbell className="text-white" size={32} />
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
//           <p className="text-gray-300">Sign in to your gym account</p>
//         </div>

//         <div className="space-y-6">
//           {/* Email Field */}
//           <div className="relative">
//             <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email address"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//             />
//           </div>

//           {/* Password Field */}
//           <div className="relative">
//             <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           {/* Login Button */}
//           <button
//             onClick={handleLogin}
//             className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 transition-all duration-200"
//           >
//             Sign In
//           </button>

//           {/* Forgot Password */}
//           <div className="text-center">
//             <button
//               type="button"
//               className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
//               onClick={() => alert('Forgot password functionality would be implemented here!')}
//             >
//               Forgot your password?
//             </button>
//           </div>

//           {/* Register Link */}
//           <div className="text-center pt-4 border-t border-white/20">
//             <p className="text-gray-300 text-sm">
//               Not yet registered?{' '}
//               <button
//                 type="button"
//                 onClick={() => setCurrentView('register')}
//                 className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
//               >
//                 Register here
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const RegisterForm = () => (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
//       <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Dumbbell className="text-white" size={32} />
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-2">Join Our Gym</h2>
//           <p className="text-gray-300">Create your account to get started</p>
//         </div>

//         <div className="space-y-5">
//           {/* Name Field */}
//           <div className="relative">
//             <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="text"
//               name="name"
//               placeholder="Full name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//             />
//           </div>

//           {/* Age Field */}
//           <div className="relative">
//             <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="number"
//               name="age"
//               placeholder="Age"
//               value={formData.age}
//               onChange={handleInputChange}
//               className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//               min={16}
//               max={100}
//             />
//           </div>

//           {/* Phone Field */}
//           <div className="relative">
//             <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone number"
//               value={formData.phone}
//               onChange={handleInputChange}
//               className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//             />
//           </div>

//           {/* Email Field */}
//           <div className="relative">
//             <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email address"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//             />
//           </div>

//           {/* Password Field */}
//           <div className="relative">
//             <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           {/* Register Button */}
//           <button
//             onClick={handleRegister}
//             className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-105 transition-all duration-200"
//           >
//             Create Account
//           </button>

//           {/* Login Link */}
//           <div className="text-center pt-4 border-t border-white/20">
//             <p className="text-gray-300 text-sm">
//               Already have an account?{' '}
//               <button
//                 type="button"
//                 onClick={() => setCurrentView('login')}
//                 className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
//               >
//                 Sign in here
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return currentView === 'login' ? <LoginForm /> : <RegisterForm />;
// };

// export default AuthPage;