import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookOpen, Cpu, Code, Zap } from 'lucide-react';

const DevDiary: React.FC = () => {
  const { t } = useTranslation();
  const articles = [
    {
      title: "O Segredo do StableHash",
      tag: "Algoritmos",
      icon: <Code />,
      desc: "Como garantimos que mundos infinitos sejam idênticos para todos os jogadores usando hashing determinístico base-2."
    },
    {
      title: "HDRP & Sincronização Solar",
      tag: "Shaders",
      icon: <Zap />,
      desc: "O desafio de sincronizar vetores de luz global (`_GlobalSunDir`) entre todos os clientes em tempo real."
    },
    {
      title: "Arquitetura Sentinel",
      tag: "Sistemas",
      icon: <Cpu />,
      desc: "Persistência massiva de dados: Salvando mais de 10.000 estados de blocos sem impactar a performance."
    }
  ];

  return (
    <section className="dev-diary" id="devlog">
      <div className="section-header">
        <h2>{t('landing.dev_diary.title')}</h2>
        <p>{t('landing.dev_diary.desc')}</p>
      </div>

      <div className="article-list">
        {articles.map((art, i) => (
          <motion.article 
            key={art.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="diary-card"
          >
            <div className="card-tag">{art.tag}</div>
            <div className="card-main">
              <div className="art-icon">{art.icon}</div>
              <div className="art-text">
                <h3>{art.title}</h3>
                <p>{art.desc}</p>
              </div>
            </div>
            <button className="read-more">{t('landing.dev_diary.read_more')} <BookOpen size={14} /></button>
          </motion.article>
        ))}
      </div>

      <footer className="portal-footer">
        <div className="footer-content">
          <div className="footer-logo">INCEPTUM</div>
          <p>&copy; {t('landing.dev_diary.copyright')}</p>
          <div className="social-links">
            <span>Discord</span>
            <span>GitHub</span>
            <span>Steam</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default DevDiary;
