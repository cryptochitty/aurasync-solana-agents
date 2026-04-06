import React, { useState, useEffect } from 'react';
import { Cpu, DollarSign, Users, Activity, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [stats, setStats] = useState<any>(null);
  const [isDeploying, setIsDeploying] = useState(false);

  useEffect(() => {
    fetch('/api/agent/stats')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-synth-purple to-synth-glow bg-clip-text text-transparent">
            SovereignSynth
          </h1>
          <p className="text-slate-400 mt-2">Autonomous Digital Twin & Economy Manager</p>
        </div>
        <button className="bg-synth-purple hover:bg-opacity-80 px-6 py-2 rounded-lg font-semibold transition-all">
          Connect Wallet
        </button>
      </header>

      {/* Dashboard Grid */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Agent Control Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 glass-card p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-synth-purple/20 rounded-xl">
              <Cpu className="text-synth-purple" />
            </div>
            <h2 className="text-xl font-bold">Digital Twin Status</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
              <span className="text-slate-400">Agent State</span>
              <span className="text-green-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Active
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
              <span className="text-slate-400">Learning Rate</span>
              <span className="text-white">0.0042</span>
            </div>
            <button 
              onClick={() => setIsDeploying(!isDeploying)}
              className="w-full py-4 mt-4 bg-gradient-to-r from-synth-purple to-synth-pink rounded-xl font-bold uppercase tracking-wider"
            >
              {isDeploying ? 'Syncing...' : 'Deploy Update to Solana'}
            </button>
          </div>
        </motion.div>

        {/* Financial Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-1 glass-card p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-synth-glow/20 rounded-xl">
              <DollarSign className="text-synth-glow" />
            </div>
            <h2 className="text-xl font-bold">Treasury</h2>
          </div>
          {stats && (
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <p className="text-slate-400 text-sm">Total Volume</p>
                <p className="text-2xl font-bold">{stats.totalVolume} SOL</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <p className="text-slate-400 text-sm">Fan Payouts</p>
                <p className="text-2xl font-bold text-synth-pink">{stats.fanRewardsDistributed} SOL</p>
              </div>
            </div>
          )}
          <div className="mt-6 p-4 border border-dashed border-slate-700 rounded-lg flex items-center gap-3">
            <Activity className="text-slate-500" />
            <span className="text-slate-500 text-sm italic">Processing real-time engagement...</span>
          </div>
        </motion.div>

        {/* Autonomous Negotiation Feed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 glass-card p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-pink-500/20 rounded-xl">
              <Zap className="text-pink-500" />
            </div>
            <h2 className="text-xl font-bold">Negotiations</h2>
          </div>
          <div className="space-y-3">
            {stats?.negotiationHistory.map((item: any) => (
              <div key={item.id} className="p-3 bg-slate-800/80 rounded-lg border-l-4 border-synth-purple">
                <div className="flex justify-between items-start">
                  <span className="font-semibold">{item.brand}</span>
                  <span className="text-xs bg-synth-purple/30 px-2 py-1 rounded text-synth-glow">{item.status}</span>
                </div>
                <div className="flex justify-between mt-2 text-sm text-slate-400">
                  <span>Bid: {item.value}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </main>

      {/* Fan Engagement Rewards Section */}
      <section className="mt-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Users className="text-synth-purple" /> Fan Reward Distribution
        </h3>
        <div className="glass-card rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-800/80">
              <tr>
                <th className="p-4">Fan ID</th>
                <th className="p-4">Engagement Score</th>
                <th className="p-4">Rewards Accrued</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-800">
                <td className="p-4">Ax...8921</td>
                <td className="p-4">98.4</td>
                <td className="p-4 font-mono text-synth-glow">2.45 SOL</td>
                <td className="p-4"><ShieldCheck className="text-green-500 size-5" /></td>
              </tr>
              <tr className="border-t border-slate-800">
                <td className="p-4">Bt...3312</td>
                <td className="p-4">85.1</td>
                <td className="p-4 font-mono text-synth-glow">1.12 SOL</td>
                <td className="p-4"><ShieldCheck className="text-green-500 size-5" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default App;