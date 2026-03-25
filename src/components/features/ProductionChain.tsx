import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, Sprout, Flame, Hammer, FlaskConical, Droplets } from 'lucide-react';
import { BREAD_CHAIN } from '../../data/ProductionChains';

const getMachineIcon = (machineKey: string) => {
  if (machineKey.includes('grinder')) return <Settings size={20} className="machine-icon" />;
  if (machineKey.includes('furnace')) return <Flame size={20} className="machine-icon" />;
  if (machineKey.includes('soil')) return <Sprout size={20} className="machine-icon" />;
  if (machineKey.includes('fermentation')) return <FlaskConical size={20} className="machine-icon" />;
  if (machineKey.includes('workbench')) return <Hammer size={20} className="machine-icon" />;
  if (machineKey.includes('manual')) return <Droplets size={20} className="machine-icon" />;
  return <Settings size={20} className="machine-icon" />;
};

const ProductionChain: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="production-chain-container">
      <div className="section-header">
         <h2>{t('landing.production.title')}</h2>
         <p>{t('landing.production.desc')}</p>
      </div>

      <div className="chains-scroller">
        <div className="chain-wrapper">
          <div className="chain-title">
            <div className="glow-dot"></div>
            <h3>{t('landing.wiki.items.bread.name')} — {t('landing.production.technical_cycle')}</h3>
          </div>

          <div className="flowchart-nodes">
            {BREAD_CHAIN.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.div 
                  className="flow-node"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="node-id">STEP_0{index + 1}</div>
                  <div className="node-machine">
                    {getMachineIcon(step.machineKey)}
                    <span>{t(step.machineKey)}</span>
                  </div>
                  <div className="node-content">
                    <div className="node-inputs">
                      {step.inputs.map(input => (
                        <div key={input.id} className="input-pill">
                          <span className="qty">{input.quantity}x</span> {t(input.nameKey)}
                        </div>
                      ))}
                    </div>
                    <div className="node-arrow">
                      <ArrowRight size={14} />
                    </div>
                    <div className="node-output">
                      <div className="output-badge">{t(step.output.nameKey)}</div>
                    </div>
                  </div>
                  <div className="node-label">{t(step.labelKey)}</div>
                  <div className="node-glow"></div>
                </motion.div>
                
                {index < BREAD_CHAIN.length - 1 && (
                  <div className="flow-connector">
                    <div className="connector-line"></div>
                    <div className="connector-dot"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionChain;
