import React from 'react';
import { useTranslation } from 'react-i18next';
import WorldPreviewer from './WorldPreviewer';
import Wiki from './Wiki';
import Workshop from './Workshop';
import BuilderAtelier from './BuilderAtelier';
import ProgressionHub from './ProgressionHub';

const TechPortal: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="tech-portal">
      <header className="portal-header">
        <h1>{t('tech_portal_title')}</h1>
        <p>{t('tech_portal_desc')}</p>
      </header>

      <section className="world-engine">
        <div className="section-header">
          <h2>{t('landing.tech_portal.world_engine.title')}</h2>
          <p>{t('landing.tech_portal.world_engine.desc')}</p>
        </div>
        <WorldPreviewer />
      </section>

      <Wiki />
      
      <section className="workshop-section">
        <Workshop />
      </section>

      <section className="builder-atelier">
        <BuilderAtelier />
      </section>

      <section className="progression-hub">
        <ProgressionHub />
      </section>
    </div>
  );
};

export default TechPortal;
