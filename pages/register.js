import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Form.module.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Add registration logic here (e.g., API call)
    console.log('Registering', name);
    
    // After successful registration, redirect to subscription page
    router.push('/subscription');
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <form onSubmit={handleRegister} className={styles.form}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name" 
          required 
          className={styles.input} 
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
          className={styles.input} 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
          className={styles.input} 
        />
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
}
