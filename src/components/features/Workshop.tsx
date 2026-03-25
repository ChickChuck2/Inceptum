import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Settings, Cpu, Package } from 'lucide-react';

const Workshop: React.FC = () => {
  const { t } = useTranslation();

  const machines = [
    { 
      name: 'Fornalha', 
      use: 'Fundição de Minérios e Culinária', 
      recipes: ['Iron Ore -> Iron (3x1)', 'Meat -> Beef', 'Wood -> Coal'] 
    },
    { 
      name: 'Mesa de Carpintaria', 
      use: 'Processamento de Madeira', 
      recipes: ['Wood -> Boards (1x3)', 'Stick -> Rods', 'Boards -> Frame'] 
    },
    { 
      name: 'Forja Industrial', 
      use: 'Engenharia de Metais', 
      recipes: ['Iron Ore -> Iron (High Speed)', 'Iron -> Bucket'] 
    },
    { 
        name: 'Mesa de Fermentação', 
        use: 'Produção de Insumos Orgânicos', 
        recipes: ['Pre-Ferment -> Yeast'] 
      }
  ];

  return (
    <div className="module-container">
      <div className="section-header">
        <Settings className="icon-accent" />
        <h2>WORKSHOP_CORE</h2>
        <p>Cadeia de produção e refinamento industrial.</p>
      </div>

      <div className="machine-grid">
        {machines.map((m, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.02, borderColor: "#ff6a00" }}
            className="machine-card premium-hud"
          >
            <div className="card-scan-line"></div>
            <div className="card-header">
              <Package size={20} color="#ff6a00" />
              <h3>{m.name}</h3>
            </div>
            <p className="machine-usage">{m.use}</p>
            <div className="recipe-list-hud">
              {m.recipes.map((r, ri) => (
                <div key={ri} className="recipe-entry">
                   <div className="pulse-dot"></div>
                   <span>{r}</span>
                </div>
              ))}
            </div>
            <div className="card-corner-bl"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Workshop;
