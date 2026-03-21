import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, ShieldCheck, Cpu, Globe, 
  Zap, Shield, Rocket, Sword, Target, Activity 
} from 'lucide-react';

const ProgressionHub: React.FC = () => {
  const { t } = useTranslation();

  const attributes = [
    { key: 'vigor', icon: <Zap size={14} />, color: '#00d2ff' },
    { key: 'inventory', icon: <Shield size={14} />, color: '#ff6a00' },
    { key: 'vitality', icon: <Rocket size={14} />, color: '#00ff88' },
    { key: 'strength', icon: <Sword size={14} />, color: '#ff4444' },
    { key: 'archer', icon: <Target size={14} />, color: '#E5C77A' },
    { key: 'defender', icon: <Shield size={14} />, color: '#888' },
    { key: 'critical', icon: <Zap size={14} />, color: '#ff00ff' },
    { key: 'resistance', icon: <Shield size={14} />, color: '#444' },
    { key: 'luck', icon: <Globe size={14} />, color: '#00d2ff' },
    { key: 'sustainability', icon: <ShieldCheck size={14} />, color: '#00ff88' },
    { key: 'tamer', icon: <Users size={14} />, color: '#ff6a00' },
    { key: 'farmer', icon: <Globe size={14} />, color: '#00d2ff' },
    { key: 'fishing', icon: <Target size={14} />, color: '#00ff88' },
    { key: 'gastric', icon: <Shield size={14} />, color: '#ff4444' },
  ];

  return (
    <section className="progression-hub module-container" id="multiplayer">
      <div className="section-header">
        <Cpu className="icon-accent" />
        <h2>{t('landing.progression_hub.title')}</h2>
        <p>{t('landing.progression_hub.desc')}</p>
      </div>

      <div className="attributes-grid-hud">
        {attributes.map((attr) => (
          <motion.div 
            key={attr.key}
            whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.05)" }}
            className="attribute-item-hud"
          >
            <div className="attr-icon" style={{ borderColor: attr.color }}>
              {attr.icon}
            </div>
            <div className="attr-info">
              <span className="attr-desc">{t(`attributes.${attr.key}`)}</span>
            </div>
            <div className="attr-limit-bar">
              <div className="limit-fill" style={{ background: attr.color, width: '35%', boxShadow: `0 0 10px ${attr.color}` }}></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="progression-grid" style={{ marginTop: '4rem' }}>
        <motion.div 
            whileHover={{ scale: 1.01 }}
            className="multiplayer-info premium-hud"
        >
          <div className="card-scan-line"></div>
          <div className="card-header">
            <Users color="#00d2ff" size={24} />
            <h3>{t('landing.progression_hub.multiplayer_title')}</h3>
          </div>
          <div className="net-body">
            <p className="net-desc" dangerouslySetInnerHTML={{ __html: t('landing.progression_hub.net_desc') }} />
            <div className="network-list-hud">
              <div className="net-status-item">
                 <Globe size={14} color="#00d2ff" />
                 <span>{t('landing.progression_hub.seed')}</span>
              </div>
              <div className="net-status-item">
                 <ShieldCheck size={14} color="#00d2ff" />
                 <span>{t('landing.progression_hub.state_sync')}</span>
              </div>
              <div className="net-status-item">
                 <Users size={14} color="#00d2ff" />
                 <span>{t('landing.progression_hub.limit')}</span>
              </div>
            </div>
          </div>
          <div className="card-corner-bl"></div>
        </motion.div>

        <motion.div 
          whileHover={{ borderColor: "#00ff88" }}
          className="save-security premium-hud"
        >
          <div className="card-scan-line"></div>
          <div className="save-header">
             <ShieldCheck color="#00ff88" size={30} />
             <div>
               <h4>{t('landing.progression_hub.manager_title')}</h4>
               <p>{t('landing.progression_hub.manager_desc')}</p>
             </div>
          </div>
          <div className="card-corner-bl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgressionHub;
