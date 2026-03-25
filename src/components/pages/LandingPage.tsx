import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import {
   Play, MessageCircle, ChevronDown, Axe, Wheat, Users,
   Fish, Hammer, Flame, Sword, Dna, ShoppingCart, Wrench,
   Cpu, Bug, Leaf, Monitor, HardDrive, MemoryStick,
   ChevronRight
 } from 'lucide-react';
 import gameplayMain from '../../assets/images/gameplay_main.png';

// --- Animated Counter ---
const StatCounter: React.FC<{ end: number; label: string; suffix?: string }> = ({ end, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="stat-counter-item">
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

// --- Animal Card ---
const AnimalCard: React.FC<{ emoji: string; name: string; drops: string[]; color: string; behavior: string }> =
  ({ emoji, name, drops, color, behavior }) => (
    <motion.div
      className="animal-card"
      whileHover={{ y: -8, borderColor: color }}
      style={{ '--animal-color': color } as React.CSSProperties}
    >
      <div className="animal-emoji">{emoji}</div>
      <div className="animal-name">{name}</div>
      <div className="animal-behavior">{behavior}</div>
      <div className="animal-drops">
        {drops.map(d => <span key={d} className="drop-tag">{d}</span>)}
      </div>
      <div className="animal-accent" style={{ background: color }} />
    </motion.div>
  );

// --- Mechanic Row ---
const MechanicRow: React.FC<{ icon: React.ReactNode; title: string; desc: string; color: string; index: number }> =
  ({ icon, title, desc, color, index }) => (
    <motion.div
      className="mechanic-row"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.12 }}
      viewport={{ once: true }}
      style={{ '--mech-color': color } as React.CSSProperties}
    >
      <div className="mech-icon" style={{ color }}>{icon}</div>
      <div className="mech-text">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <div className="mech-index">0{index + 1}</div>
    </motion.div>
  );

// --- Future System Card ---
const FutureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; tag: string; color: string; index: number }> =
  ({ icon, title, desc, tag, color, index }) => (
    <motion.div
      className="future-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      style={{ '--future-color': color } as React.CSSProperties}
    >
      <div className="future-tag" style={{ color, borderColor: color }}>{tag}</div>
      <div className="future-icon" style={{ color }}>{icon}</div>
      <h3 className="future-title">{title}</h3>
      <p className="future-desc">{desc}</p>
      <div className="future-bar" style={{ background: color }} />
    </motion.div>
  );

// ============================================================
const LandingPage: React.FC = () => {
  const { t } = useTranslation();

  const mechanics = [
    { icon: <Axe size={28} />, title: t('landing.mechanics.items.crafting.title'), desc: t('landing.mechanics.items.crafting.desc'), color: '#C96B2C' },
    { icon: <Wheat size={28} />, title: t('landing.mechanics.items.farming.title'), desc: t('landing.mechanics.items.farming.desc'), color: '#6C8037' },
    { icon: <Fish size={28} />, title: t('landing.mechanics.items.fishing.title'), desc: t('landing.mechanics.items.fishing.desc'), color: '#8FBED6' },
    { icon: <Hammer size={28} />, title: t('landing.mechanics.items.building.title'), desc: t('landing.mechanics.items.building.desc'), color: '#E5C77A' },
    { icon: <Flame size={28} />, title: t('landing.mechanics.items.survival.title'), desc: t('landing.mechanics.items.survival.desc'), color: '#ff6a00' },
    { icon: <Users size={28} />, title: t('landing.mechanics.items.multiplayer.title'), desc: t('landing.mechanics.items.multiplayer.desc'), color: '#00d2ff' },
  ];

  const animals = [
    { emoji: '🐔', name: t('landing.fauna.animals.chicken.name'), behavior: t('landing.fauna.animals.chicken.behavior'), drops: [t('landing.content.drops.egg'), t('landing.content.drops.feather'), t('landing.content.drops.raw_meat')], color: '#E5C77A' },
    { emoji: '🐷', name: t('landing.fauna.animals.pig.name'), behavior: t('landing.fauna.animals.pig.behavior'), drops: [t('landing.content.drops.bacon'), t('landing.content.drops.leather'), t('landing.content.drops.fat')], color: '#C96B2C' },
    { emoji: '🐺', name: t('landing.fauna.animals.wolf.name'), behavior: t('landing.fauna.animals.wolf.behavior'), drops: [t('landing.content.drops.raw_meat'), t('landing.content.drops.bone'), t('landing.content.drops.leather')], color: '#8FBED6' },
    { emoji: '🐄', name: t('landing.fauna.animals.cow.name'), behavior: t('landing.fauna.animals.cow.behavior'), drops: [t('landing.content.drops.beef'), t('landing.content.drops.leather'), t('landing.content.drops.animal_fat')], color: '#6C8037' },
  ];

  const futureSystems = [
    {
      icon: <Sword size={26} />,
      title: t('landing.future.systems.bosses.title'),
      desc: t('landing.future.systems.bosses.desc'),
      tag: t('landing.content.phases.p2'),
      color: '#ff4444',
    },
    {
      icon: <Bug size={26} />,
      title: t('landing.future.systems.ai.title'),
      desc: t('landing.future.systems.ai.desc'),
      tag: t('landing.content.phases.p2'),
      color: '#8FBED6',
    },
    {
      icon: <Dna size={26} />,
      title: t('landing.future.systems.genetics.title'),
      desc: t('landing.future.systems.genetics.desc'),
      tag: t('landing.content.phases.p2'),
      color: '#00ff88',
    },
    {
      icon: <ShoppingCart size={26} />,
      title: t('landing.future.systems.economy.title'),
      desc: t('landing.future.systems.economy.desc'),
      tag: t('landing.content.phases.p3'),
      color: '#E5C77A',
    },
    {
      icon: <Wrench size={26} />,
      title: t('landing.future.systems.repair.title'),
      desc: t('landing.future.systems.repair.desc'),
      tag: t('landing.content.phases.done'),
      color: '#00ff88',
    },
    {
      icon: <Cpu size={26} />,
      title: t('landing.future.systems.advanced.title'),
      desc: t('landing.future.systems.advanced.desc'),
      tag: t('landing.content.phases.p3'),
      color: '#ff6a00',
    },
  ];

  const futureCrops = [
    t('landing.content.crops.grape'), t('landing.content.crops.bean'), t('landing.content.crops.pumpkin'),
    t('landing.content.crops.carrot'), t('landing.content.crops.potato'), t('landing.content.crops.coffee'),
    t('landing.content.crops.kiwi'), t('landing.content.crops.strawberry'), t('landing.content.crops.avocado'),
    t('landing.content.crops.corn'), t('landing.content.crops.barley')
  ];
  const futureAnimalsList = [
    `🐰 ${t('landing.content.animals.rabbit')}`,
    `🐦 ${t('landing.content.animals.bird')}`,
    `🐝 ${t('landing.content.animals.bee')}`,
    `🐑 ${t('landing.content.animals.sheep')}`
  ];

  const eras = [
    { num: '01', name: t('landing.progression.eras.stone'), tools: t('landing.content.eras.stone', { returnObjects: true }) as string[], color: '#8C5C3B', icon: '🪨' },
    { num: '02', name: t('landing.progression.eras.iron'), tools: t('landing.content.eras.iron', { returnObjects: true }) as string[], color: '#8FBED6', icon: '⚙️' },
    { num: '03', name: t('landing.progression.eras.tech'), tools: t('landing.content.eras.tech', { returnObjects: true }) as string[], color: '#E5C77A', icon: '🔬' },
  ];

  const devProgress = [
    { icon: '👥', name: 'Multiplayer', done: 15, total: 16, pct: 94, color: '#00d2ff', next: t('landing.devboard.next_milestones.mp') },
    { icon: '🐞', name: t('landing.devboard.categories.bugs'), done: 48, total: 51, pct: 94, color: '#00ff88', next: t('landing.devboard.next_milestones.bugs') },
    { icon: '🔧', name: t('landing.devboard.categories.machines'), done: 7, total: 8, pct: 88, color: '#C96B2C', next: t('landing.devboard.next_milestones.machines') },
    { icon: '⚙️', name: t('landing.devboard.categories.core'), done: 3, total: 4, pct: 75, color: '#E5C77A', next: t('landing.devboard.next_milestones.core') },
    { icon: '🐮', name: t('landing.devboard.categories.animals'), done: 5, total: 9, pct: 56, color: '#8FBED6', next: t('landing.devboard.next_milestones.animals') },
    { icon: '⚙️', name: t('landing.devboard.categories.mechanics'), done: 5, total: 10, pct: 50, color: '#ff6a00', next: t('landing.devboard.next_milestones.mechanics') },
    { icon: '⚒️', name: t('landing.devboard.categories.resources'), done: 12, total: 28, pct: 43, color: '#8C5C3B', next: t('landing.devboard.next_milestones.resources') },
    { icon: '🧱', name: t('landing.devboard.categories.construction'), done: 2, total: 5, pct: 40, color: '#8FBED6', next: t('landing.devboard.next_milestones.construction') },
    { icon: '🌽', name: t('landing.devboard.categories.farming'), done: 2, total: 13, pct: 15, color: '#6C8037', next: t('landing.devboard.next_milestones.farming') },
    { icon: '💀', name: t('landing.devboard.categories.enemies'), done: 0, total: 2, pct: 0, color: '#ff4444', next: t('landing.devboard.next_milestones.enemies') },
  ];

  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    fetch('./news.json')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error("Error loading news:", err));
  }, []);

  return (
    <div className="landing-v2">

      {/* ===================== HERO ===================== */}
      <section className="hero-v2">
        <div className="hero-v2-bg" />
        <div className="hero-v2-grain" />
        <div className="hero-v2-vignette" />

        <motion.div
          className="hero-v2-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-alpha-badge"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <span className="badge-dot" />
            {t('landing.hero.badge')}
          </motion.div>

          <h1 className="hero-v2-title">
            <span className="title-line-1">{t('landing.hero.title_1')}</span>
            <span className="title-line-2">{t('landing.hero.title_2')}</span>
          </h1>

          <p className="hero-v2-sub">
            {t('hero_subtitle')}
          </p>

          <div className="hero-v2-ctas">
            <motion.button
              className="cta-hero-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Play size={18} fill="currentColor" />
              {t('hero_cta_primary')}
            </motion.button>
            <motion.button
              className="cta-hero-secondary"
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open('https://discord.gg/ZW5ZrmP3jw', '_blank')}
            >
              <MessageCircle size={18} />
              {t('hero_cta_secondary')}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="hero-scroll-hint"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={22} />
          <span>{t('landing.hero.scroll')}</span>
        </motion.div>

        <div className="hud-corner hud-tl" />
        <div className="hud-corner hud-tr" />
        <div className="hud-corner hud-bl" />
        <div className="hud-corner hud-br" />
      </section>

      {/* ===================== MANIFESTO (LORE) ===================== */}
      <section className="manifesto-section">
        <div className="manifesto-inner">
          <motion.div className="manifesto-tag" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {t('landing.manifesto.tag')}
          </motion.div>
          <motion.h2 className="manifesto-headline" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            {t('lore_title')}
          </motion.h2>
          <div className="manifesto-rule" />
          <motion.p className="manifesto-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            {t('lore_text')}
          </motion.p>
          <motion.p className="manifesto-call" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.35 }} viewport={{ once: true }}>
            — {t('lore_reset_call')}
          </motion.p>
        </div>
      </section>

      {/* ===================== STATS STRIP ===================== */}
      <section className="stats-strip">
        <StatCounter end={55} label={t('landing.stats.craftable')} suffix="+" />
        <div className="stats-divider" />
        <StatCounter end={5} label={t('landing.stats.animals')} />
        <div className="stats-divider" />
        <StatCounter end={6} label={t('landing.stats.biomes')} />
        <div className="stats-divider" />
        <StatCounter end={4} label={t('landing.stats.coop')} />
        <div className="stats-divider" />
        <StatCounter end={6} label={t('landing.stats.fish')} suffix="+" />
        <div className="stats-divider" />
        <StatCounter end={13} label={t('landing.stats.attributes')} />
      </section>

      {/* ===================== MECHANICS ===================== */}
      <section className="mechanics-section">
        <div className="mechanics-inner">
          <div className="mechanics-left">
            <motion.div className="section-eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              {t('landing.mechanics.eyebrow')}
            </motion.div>
            <motion.h2 className="section-title-large" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} viewport={{ once: true }}>
              <span dangerouslySetInnerHTML={{ __html: t('landing.mechanics.title') }} />
            </motion.h2>
            <motion.p className="section-body" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              {t('landing.mechanics.body')}
            </motion.p>
            <div className="mechanics-list">
              {mechanics.map((m, i) => <MechanicRow key={i} {...m} index={i} />)}
            </div>
          </div>

          <div className="mechanics-right">
            <div className="gameplay-mockup">
              <div className="mockup-hud-bar">
                <span className="hud-bar-item">❤ 100</span>
                <span className="hud-bar-item">🍖 82%</span>
                <span className="hud-bar-item">⚡ 71%</span>
              </div>
              <img src={gameplayMain} alt="Gameplay" className="mockup-img" />
              <div className="mockup-overlay">
                <div className="mockup-item-slot active">🪓</div>
                <div className="mockup-item-slot">⛏</div>
                <div className="mockup-item-slot">🏹</div>
                <div className="mockup-item-slot">🔥</div>
                <div className="mockup-item-slot">🎣</div>
              </div>
              <div className="mockup-caption">
                <span>BIOMA_FLORESTA · SEED_7429</span>
                <span className="mockup-online">● {t('landing.mechanics.online')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ERAS DE PROGRESSÃO ===================== */}
      <section className="eras-section">
        <div className="eras-inner">
          <motion.div className="section-eyebrow center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {t('landing.progression.eyebrow')}
          </motion.div>
          <motion.h2 className="section-title-large center" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} viewport={{ once: true }}>
            <span dangerouslySetInnerHTML={{ __html: t('landing.progression.title') }} />
          </motion.h2>
          <div className="eras-grid">
            {eras.map((era, i) => (
              <motion.div
                key={i}
                className="era-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.13 }}
                viewport={{ once: true }}
                style={{ '--era-color': era.color } as React.CSSProperties}
              >
                <div className="era-num">{era.num}</div>
                <div className="era-icon">{era.icon}</div>
                <h3 className="era-name" style={{ color: era.color }}>{era.name}</h3>
                <ul className="era-tools">
                  {era.tools.map(tool => (
                    <li key={tool}>
                      <ChevronRight size={12} style={{ color: era.color }} />
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ECOSYSTEM ANIMALS ===================== */}
      <section className="ecosystem-section">
        <div className="ecosystem-inner">
          <motion.div className="section-eyebrow center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {t('landing.fauna.eyebrow')}
          </motion.div>
          <motion.h2 className="section-title-large center" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} viewport={{ once: true }}>
            <span dangerouslySetInnerHTML={{ __html: t('landing.fauna.title') }} />
          </motion.h2>
          <div className="animal-cards-grid">
            {animals.map((a, i) => (
              <motion.div key={a.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <AnimalCard {...a} />
              </motion.div>
            ))}
          </div>
          <div className="firefly-note">
            <span className="firefly-emoji">✨</span>
            {t('landing.fauna.firefly')}
          </div>

          {/* Future animals */}
          <motion.div
            className="future-animals-strip"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="future-animals-label">{t('landing.fauna.dev')}</span>
            <div className="future-animals-chips">
              {futureAnimalsList.map(a => (
                <span key={a} className="future-animal-chip">{a}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== AGRICULTURA ===================== */}
      <section className="farming-section">
        <div className="farming-inner">
          <div className="farming-left">
            <motion.div className="section-eyebrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              {t('landing.agriculture.eyebrow')}
            </motion.div>
            <motion.h2 className="section-title-large" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} viewport={{ once: true }}>
              <span dangerouslySetInnerHTML={{ __html: t('landing.agriculture.title') }} />
            </motion.h2>
            <motion.p className="section-body" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              {t('landing.agriculture.body')}
            </motion.p>
            <div className="farming-current">
              <span className="farming-current-label">{t('landing.agriculture.now')}</span>
              <div className="farming-chips">
                <span className="farming-chip available">🌾 Trigo</span>
                <span className="farming-chip available">🍇 Uva</span>
              </div>
            </div>
            <div className="farming-planned">
              <span className="farming-current-label">{t('landing.agriculture.planned')}</span>
              <div className="farming-chips">
                {futureCrops.filter(c => c !== t('landing.content.crops.grape')).map(crop => (
                  <span key={crop} className="farming-chip planned">{crop}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="farming-right">
            <div className="nutrition-card">
              <div className="nutrition-header">
                <Leaf size={18} color="#6C8037" />
                <span>{t('landing.agriculture.nutrition_title')}</span>
              </div>
              <div className="nutrition-items">
                {[
                  { name: 'Maçã', regen: '+2', hunger: '+7', energy: '+4' },
                  { name: 'Carne Bovina', regen: '+15', hunger: '+30', energy: '+25' },
                  { name: 'Carne Crua', regen: '-7', hunger: '+0', energy: '+1', bad: true },
                  { name: 'Pão Francês', regen: '+15', hunger: '+22', energy: '+9' },
                  { name: 'Polpa de Coco', regen: '+7', hunger: '+22', energy: '+6' },
                  { name: 'Fruta do Dragão', regen: '+2.3', hunger: '+5', energy: '+3' },
                ].map(item => (
                  <div key={item.name} className={`nutrition-row ${item.bad ? 'bad' : ''}`}>
                    <span className="nutrition-name">{item.name}</span>
                    <span className={`nutrition-val ${parseFloat(item.regen) < 0 ? 'neg' : 'pos'}`}>HP {item.regen}</span>
                    <span className="nutrition-val neutral">🍖 {item.hunger}s</span>
                    <span className="nutrition-val neutral">⚡ {item.energy}</span>
                  </div>
                ))}
              </div>
              <div className="nutrition-footer">{t('landing.agriculture.nutrition_footer')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FUTURE SYSTEMS ===================== */}
      <section className="future-section">
        <div className="future-inner">
          <motion.div className="section-eyebrow center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {t('landing.future.eyebrow')}
          </motion.div>
          <motion.h2 className="section-title-large center" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} viewport={{ once: true }}>
            {t('landing.future.title')}
          </motion.h2>
          <motion.p className="section-body center" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            {t('landing.future.body')}
          </motion.p>
          <div className="future-grid">
            {futureSystems.map((s, i) => (
              <FutureCard key={i} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SYSTEM REQUIREMENTS ===================== */}
      <section className="sysreq-section">
        <div className="sysreq-inner">
          <motion.div className="section-eyebrow center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {t('landing.sysreq.eyebrow')}
          </motion.div>
          <motion.h2 className="section-title-large center" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} viewport={{ once: true }}>
            {t('landing.sysreq.title')}
          </motion.h2>
          <div className="sysreq-grid">
            <motion.div className="sysreq-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="sysreq-label">{t('landing.sysreq.min')}</div>
              <div className="sysreq-rows">
                <div className="sysreq-row"><Cpu size={14} /><span>CPU</span><b>Intel Core i3 ou equivalente</b></div>
                <div className="sysreq-row"><Monitor size={14} /><span>GPU</span><b>Intel UHD 620 integrada</b></div>
                <div className="sysreq-row"><MemoryStick size={14} /><span>RAM</span><b>8 GB</b></div>
                <div className="sysreq-row"><HardDrive size={14} /><span>HDD</span><b>5–10 GB livres</b></div>
                <div className="sysreq-row"><Monitor size={14} /><span>SO</span><b>Windows 10 64-bit</b></div>
              </div>
            </motion.div>
            <motion.div className="sysreq-card recommended" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="sysreq-label recommended-label">{t('landing.sysreq.rec')}</div>
              <div className="sysreq-rows">
                <div className="sysreq-row"><Cpu size={14} /><span>CPU</span><b>Intel Core i5/i7 10ª geração</b></div>
                <div className="sysreq-row"><Monitor size={14} /><span>GPU</span><b>NVIDIA GT 730 / RX 550</b></div>
                <div className="sysreq-row"><MemoryStick size={14} /><span>RAM</span><b>16 GB</b></div>
                <div className="sysreq-row"><HardDrive size={14} /><span>HDD</span><b>15–20 GB livres</b></div>
                <div className="sysreq-row"><Monitor size={14} /><span>SO</span><b>Windows 11 64-bit</b></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== DEV PROGRESS BOARD ===================== */}
      <section className="devprogress-section">
        <div className="devprogress-inner">
          <motion.div className="section-eyebrow center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {t('landing.devboard.eyebrow')}
          </motion.div>
          <motion.h2 className="section-title-large center" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} viewport={{ once: true }}>
            <span dangerouslySetInnerHTML={{ __html: t('landing.devboard.title') }} />
          </motion.h2>
          <motion.p className="section-body center" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            {t('landing.devboard.body')}
          </motion.p>

          {/* Overall bar */}
          <div className="devprogress-overall">
            <div className="devprogress-overall-labels">
              <span>{t('landing.devboard.overall')}</span>
              <span className="devprogress-overall-pct">{t('landing.devboard.overall_desc')}</span>
            </div>
            <div className="devprogress-overall-track">
              <motion.div
                className="devprogress-overall-fill"
                initial={{ width: 0 }}
                whileInView={{ width: '62%' }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          {/* Category grid */}
          <div className="devprogress-grid">
            {devProgress.map((cat, i) => (
              <motion.div
                key={i}
                className="devprogress-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={{ '--dp-color': cat.color } as React.CSSProperties}
              >
                <div className="devprogress-card-header">
                  <span className="devprogress-icon">{cat.icon}</span>
                  <span className="devprogress-cat">{cat.name}</span>
                  <span className="devprogress-pct" style={{ color: cat.pct >= 80 ? '#00ff88' : cat.pct >= 40 ? '#E5C77A' : '#ff6a00' }}>
                    {cat.pct}%
                  </span>
                </div>
                <div className="devprogress-bar-track">
                  <motion.div
                    className="devprogress-bar-fill"
                    style={{ background: cat.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cat.pct}%` }}
                    transition={{ duration: 1.1, delay: i * 0.07, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="devprogress-counts">{cat.done}/{cat.total} {t('landing.devboard.done')}</div>
                {cat.next && <div className="devprogress-next">→ {cat.next}</div>}
              </motion.div>
            ))}
          </div>

          {/* Upcoming milestones */}
          <motion.div
            className="devprogress-milestones"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="devprogress-milestones-label">{t('landing.devboard.milestones')}</span>
            <div className="devprogress-milestone-chips">
              {Object.values(t('landing.content.milestones_list', { returnObjects: true }) as Record<string, string>).map(m => (
                <span key={m} className="devprogress-milestone-chip">{m}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== DYANMIC NEWS (CHANGELOG) ===================== */}
      <section className="news-section-web">
        <div className="news-web-inner">
          <motion.div className="section-eyebrow center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {t('landing.news.eyebrow', 'CHANGELOG')}
          </motion.div>
          <motion.h2 className="section-title-large center" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            {t('landing.news.title', 'Últimas Atualizações')}
          </motion.h2>

          <div className="news-web-grid">
            {news?.updates?.map((update: any, idx: number) => (
              <motion.div
                key={update.version}
                className="news-web-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="news-web-header">
                  <span className="news-web-version">{update.version}</span>
                  <span className="news-web-date">{update.date}</span>
                </div>
                <h3 className="news-web-title">{update.title}</h3>
                <div className="news-web-notes">
                  {update.notes.map((note: any, i: number) => (
                    <div key={i} className="news-web-note">
                      <span className={`news-web-tag ${note.type}`}>
                        {note.type === 'bug' ? 'BUG' : note.type === 'feature' ? 'NEW' : 'IMP'}
                      </span>
                      <p>{note.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DEV STORY ===================== */}
      <section className="devstory-section">
        <div className="devstory-inner">
          <motion.div className="section-eyebrow center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {t('landing.devstory.eyebrow')}
          </motion.div>
          <motion.div
            className="devstory-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="devstory-avatar">CD</div>
            <div className="devstory-content">
              <h3>{t('landing.devstory.title')} <span className="devstory-name">Carlos Daniel</span></h3>
              <p className="devstory-text" dangerouslySetInnerHTML={{ __html: t('landing.devstory.text') }} />
              <div className="devstory-stats">
                <div className="devstory-stat"><span className="ds-num">1</span><span className="ds-label">{t('landing.devstory.dev')}</span></div>
                <div className="devstory-stat"><span className="ds-num">15h</span><span className="ds-label">{t('landing.devstory.week')}</span></div>
                <div className="devstory-stat"><span className="ds-num">{t('landing.devstory.alpha_label')}</span><span className="ds-label">0.1.2</span></div>
                <div className="devstory-stat"><span className="ds-num">5+</span><span className="ds-label">{t('landing.devstory.machines_label')}</span></div>
              </div>
              <div className="devstory-inspirations">
                {['ARK', 'Minecraft', 'Stardew Valley', '7 Days to Die', 'MooMoo.io'].map(g => (
                  <span key={g} className="inspiration-tag">{g}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== COMMUNITY CTA ===================== */}
      <section className="final-cta-section">
        <div className="final-cta-inner">
          <motion.div className="section-eyebrow center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {t('landing.community.eyebrow')}
          </motion.div>
          <motion.h2 className="final-cta-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} viewport={{ once: true }}>
            {t('landing.community.title')}
          </motion.h2>
          <motion.p className="final-cta-desc" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} viewport={{ once: true }}>
            {t('landing.community.desc')}
          </motion.p>
          <motion.button
            className="cta-discord-mega"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.22 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(143, 190, 214, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open('https://discord.gg/ZW5ZrmP3jw', '_blank')}
          >
            <MessageCircle size={24} />
            {t('landing.community.cta')}
          </motion.button>
          <p className="final-cta-note">{t('landing.community.note')}</p>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
