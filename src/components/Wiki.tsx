import React, { useState } from 'react';
import { ItemDatabase } from '../utils/ItemDatabase';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer, Settings, Search, Package } from 'lucide-react';

const Wiki: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const allItems = Object.values(ItemDatabase);

  const filteredItems = allItems.filter(item => {
    const matchesFilter = filter === 'All' || item.type === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="module-container">
      <div className="scanlines"></div>
      <div className="section-header">
        <Package className="icon-accent" />
        <h2>{t('landing.wiki.title')}</h2>
        <p>{t('landing.wiki.desc')}</p>
      </div>

      <div className="wiki-controls">
        <div className="search-bar-hud">
          <Search size={18} />
          <input 
            type="text" 
            placeholder={t('landing.wiki.search_placeholder')} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-group">
          {['All', 'Food', 'Tool', 'Resource', 'Machine'].map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? t('landing.wiki.all') : cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="wiki-grid"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.name}
              layout
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(0, 210, 255, 0.05)",
                borderColor: "#00d2ff" 
              }}
              className="wiki-card premium-hud"
            >
              <div className="card-scan-line"></div>
              <div className="card-header">
                {item.image ? (
                  <div className="icon-box">
                    <img src={item.image} alt={item.name} className="game-sprite" />
                  </div>
                ) : (
                  <div className="icon-box">
                    {item.type === 'Food' && <img src="assets/heart.png" alt="Life" width="24" />}
                    {item.type === 'Tool' && <Hammer size={24} color="#C96B2C" />}
                    {item.type === 'Tool' && <img src="assets/backpack.png" alt="Resource" width="24" />}
                    {item.type === 'Machine' && <Settings size={24} color="#00d2ff" />}
                  </div>
                )}
                <h3>{item.name}</h3>
              </div>
              
              <div className="card-body">
                <p className="item-description">{item.description}</p>
                
                {item.stats && (
                  <div className="item-stats-hud">
                    {item.stats.regen !== undefined && item.stats.regen !== 0 && (
                      <div className={`stat-pill ${item.stats.regen > 0 ? 'pos' : 'neg'}`}>
                        VITA: {item.stats.regen > 0 ? '+' : ''}{item.stats.regen}
                      </div>
                    )}
                    {item.stats.hunger && <div className="stat-pill">SALAR: +{item.stats.hunger}s</div>}
                    {item.stats.energy && <div className="stat-pill">NRG: +{item.stats.energy}</div>}
                  </div>
                )}

                {item.recipe && (
                  <div className="recipe-hud">
                    <span className="recipe-label">{t('landing.wiki.components_label')}:</span>
                    <div className="recipe-grid">
                      {Object.entries(item.recipe).map(([ing, qty]) => (
                        <span key={ing} className="recipe-item">{qty}x {ing}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="card-corner-bl"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Wiki;
