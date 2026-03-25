import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Hammer, Zap, Shield } from 'lucide-react';

const BuilderAtelier: React.FC = () => {
  const { t } = useTranslation();

  // Data 100% faithful to MachineRecipes.cs (BlockTiers)
  const blockTiers = [
    { tier: 0, name: 'Wood Lvl 1', hp: 100, dur: '10%', cost: '1x Wood Frame + 10x Boards' },
    { tier: 1, name: 'Wood Lvl 2', hp: 125, dur: '20%', cost: '20x Boards + 3x Rods' },
    { tier: 2, name: 'Wood Lvl 3', hp: 150, dur: '25%', cost: '25x Boards + 5x Rods' },
    { tier: 3, name: 'Wood Lvl 4', hp: 175, dur: '30%', cost: '30x Boards + 7x Rods' },
    { tier: 4, name: 'Wood Lvl 5', hp: 200, dur: '37%', cost: '40x Boards + 10x Rods' },
    { tier: 5, name: 'Stone Lvl 1', hp: 250, dur: '45%', cost: '30x Stone' },
    { tier: 6, name: 'Stone Lvl 2', hp: 300, dur: '52%', cost: '50x Stone' },
  ];

  return (
    <div className="module-container">
      <div className="section-header">
        <Hammer className="icon-accent" />
        <h2>Ateliê de Blocos</h2>
        <p>Progressão de blindagem e integridade física de estruturas.</p>
      </div>

      <div className="tier-progression">
        {blockTiers.map((b) => (
          <motion.div 
            key={b.tier}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="tier-card"
          >
            <div className="tier-header">
              <span className="tier-num">TIER {b.tier}</span>
              <h3>{b.name}</h3>
            </div>
            
            <div className="tier-stats-row">
              <div className="stat">
                <Shield size={16} />
                <span>{b.hp} HP</span>
              </div>
              <div className="stat">
                <Zap size={16} />
                <span>{b.dur} DR</span>
              </div>
            </div>

            <div className="tier-cost">
              <strong>Custo de Upgrade:</strong>
              <p>{b.cost}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BuilderAtelier;
