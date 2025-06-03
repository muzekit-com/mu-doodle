
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    });
    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Moo Doodle</h1>
      <textarea
        rows={4}
        style={{ width: '100%' }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe what you want to make..."
      />
      <button onClick={handleSubmit} style={{ marginTop: 10 }}>Generate</button>
      <div style={{ marginTop: 20, padding: 10, border: '1px solid #ccc' }}>
        <h3>Sandbox Output:</h3>
        <pre>{result}</pre>
      </div>
    </div>
  );
}
