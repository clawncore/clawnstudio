import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Auth() {
  const [, setLocation] = useLocation();
  const [memWord, setMemWord] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const word = memWord.trim().toLowerCase();
    
    if (word === 'clawn') {
      localStorage.setItem('auth', 'true');
      setLocation('/timeline');
    } else {
      setError('Wrong word. Try again.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground px-4">
      <div className="text-center w-full max-w-md">
        <h2 
          className="text-[1.8rem] font-medium mb-8"
          data-testid="heading-auth"
        >
          Enter your memorable word
        </h2>

        <input
          type="password"
          id="memWord"
          value={memWord}
          onChange={(e) => {
            setMemWord(e.target.value);
            setError('');
          }}
          onKeyPress={handleKeyPress}
          placeholder="Your word"
          className="w-full mb-6 px-4 py-2 rounded-md text-background bg-input border-none outline-none focus:ring-2 focus:ring-primary transition-all"
          style={{
            padding: '0.5rem',
            borderRadius: '6px'
          }}
          data-testid="input-memorable-word"
        />

        <Button
          onClick={handleLogin}
          className="px-6 py-2"
          style={{
            background: '#0077b6',
            color: '#fff'
          }}
          data-testid="button-login"
        >
          Login
        </Button>

        {error && (
          <p 
            className="mt-4 text-destructive text-sm"
            data-testid="text-error"
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
