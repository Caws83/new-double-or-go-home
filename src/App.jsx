
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function DIOGHLanding() {
  const [flipResult, setFlipResult] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [flipCount, setFlipCount] = useState(0);

  const flipCoin = () => {
    const result = Math.random() < 0.5 ? 'Heads 💰' : 'Tails 💥';
    setFlipResult(result);
    const reward = Math.floor(Math.random() * 10 + 1);
    setTokenBalance(prev => prev + reward);
    const newCount = flipCount + 1;
    setFlipCount(newCount);
    setLeaderboard(prev => {
      const updated = [...prev];
      updated[0] = { name: 'You', flips: newCount };
      return updated;
    });
  };

  return (
    <div style={{
      backgroundColor: '#000000',
      backgroundImage: 'radial-gradient(circle at 30% 30%, #1f1f1f, #000)',
      color: 'white',
      fontFamily: 'Orbitron, sans-serif',
      height: '100vh',
      margin: 0,
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <img src="logo.png" alt="Logo" style={{ height: '60px', borderRadius: '5px' }} />
      </div>

      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <button
          style={{
            padding: '8px 16px',
            fontSize: '1rem',
            backgroundColor: '#9945FF',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={() => alert('Phantom wallet connection coming soon!')}
        >
          🔐 Connect Wallet
        </button>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem 2rem', borderRadius: '8px', marginBottom: '20px', border: '1px solid #555' }}>
          <h1 style={{ fontSize: '3rem', letterSpacing: '2px', textShadow: '0 0 10px #ff007f' }}>DOUBLE IT OR GO HOME</h1>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/2275/2275401.png" alt="Dice" style={{ width: '70px', marginBottom: '10px', filter: 'drop-shadow(0 0 8px #0ff)' }} />
        <p style={{ fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.6)', padding: '1rem', borderRadius: '5px', maxWidth: '600px', border: '1px solid #444' }}>
          Welcome to the ultimate futuristic coin flip experience. Will you double it or go home?
        </p>
        <button
          onClick={flipCoin}
          style={{
            padding: '12px 28px',
            fontSize: '1.3rem',
            marginTop: '20px',
            background: 'linear-gradient(to right, #ff007f, #ff00ff)',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 0 10px #ff00ff'
          }}
        >
          🎲 Flip Coin
        </button>
        {flipResult && (
          <div style={{ marginTop: '20px', fontSize: '1.8rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem 1.5rem', borderRadius: '8px', border: '1px solid #666' }}>
            Result: {flipResult}
          </div>
        )}
        <img src="https://cdn-icons-png.flaticon.com/512/615/615075.png" alt="Coin" style={{ width: '50px', marginTop: '30px', filter: 'drop-shadow(0 0 8px #fff)' }} />
        
        <div style={{ marginTop: '30px', fontSize: '1rem', color: '#ccc', textAlign: 'center' }}>
          <p><strong>Token Balance:</strong> {tokenBalance} $DIOGH</p>
        </div>
        <div style={{ marginTop: '20px', backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid #444', maxWidth: '300px' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '1.2rem', color: '#0ff' }}>🏆 Leaderboard</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {leaderboard.map((entry, i) => (
              <li key={i} style={{ marginBottom: '6px' }}>{entry.name}: {entry.flips} flips</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
