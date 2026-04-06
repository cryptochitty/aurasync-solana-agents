import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Mock Database
const agentStats = {
  activeDeals: 4,
  totalVolume: 1250.5,
  fanRewardsDistributed: 450.2,
  negotiationHistory: [
    { id: 1, brand: 'HyperX', status: 'Negotiating', value: '45 SOL', date: '2023-11-20' },
    { id: 2, brand: 'Logitech', status: 'Completed', value: '120 SOL', date: '2023-11-18' },
    { id: 3, brand: 'RedBull', status: 'Proposal', value: '300 SOL', date: '2023-11-21' }
  ]
};

app.get('/api/agent/stats', (req, res) => {
  res.json(agentStats);
});

app.post('/api/agent/negotiate', (req, res) => {
  const { brandId } = req.body;
  // Simulation of autonomous AI agent logic
  res.json({
    message: `Digital Twin is currently analyzing terms for deal ${brandId}...`,
    estimatedCompletion: '2 hours'
  });
});

app.listen(PORT, () => {
  console.log(`SovereignSynth Backend running on http://localhost:${PORT}`);
});