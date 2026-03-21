import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      "nav_home": "INCEPTUM",
      "nav_features": "Gameplay",
      "nav_portal": "Alpha Showcase",
      "nav_discord": "Comunidade",
      "lore_title": "O GRANDE RESET: 2025",
      "lore_text": "Tudo começou em 2025. Uma luz verde cobriu a Terra e a humanidade foi petrificada. Milhares de anos se passaram. Apenas aqueles que mantiveram o pensamento ativo, contando cada segundo, conseguiram romper a pedra. O mundo agora é um ecossistema indomável onde a tecnologia de ponta foi enterrada pelo tempo.",
      "lore_reset_call": "Despetrifique sua mente. Recomece do zero.",
      "faq": {
        "title": "Protocolos de Dúvidas",
        "q1": "O que torna o Inceptum diferente?",
        "a1": "Sua natureza sistêmica e o foco em genéticas reais de plantas e animais, exigindo escolhas nutricionais e estratégicas profundas.",
        "q2": "O progresso será salvo?",
        "a2": "Sim. Utilizamos o sistema Sentinel para sincronização persistente de estado entre sessões solo e cooperativas.",
        "q3": "O alfa já está jogável?",
        "a3": "Estamos em fase de testes fechados. O acesso é liberado periodicamente para membros ativos do nosso Discord.",
        "q4": "Suporte Solo e Coop?",
        "a4": "Total. Jogue sozinho ou com até 3 amigos em servidores otimizados via Unity Relay."
      },
      "hero_tagline": "Sobreviva ao colapso entre natureza e máquina",
      "hero_subtitle": "A natureza reage. As máquinas escalam. O mundo não espera. Construa, automatize e domine um ecossistema imprevisível.",
      "hero_cta_primary": "VER GAMEPLAY",
      "hero_cta_secondary": "ENTRAR NO DISCORD",
      "feature_p1": "Ecossistema Vivo",
      "feature_p1_desc": "Interações biológicas e mecânicas reais em um mundo que respira e evolui.",
      "feature_p2": "Engenharia Sistêmica",
      "feature_p2_desc": "Transforme sucata em infraestrutura pesada, automação industrial e sobrevivência.",
      "feature_p3": "Cooperativo de Elite",
      "feature_p3_desc": "Arquitetura Multiplayer estável com baixa latência para até 4 sobreviventes.",
      "genetics_title": "BIODESIGN & AGRICULTURA",
      "genetics_desc": "Utilize DNA extraído de Porcos, Vacas, Galinhas e Lobos para criar variantes resistentes. O clima do mundo não perdoa — a engenharia genética é sua única vantagem competitiva real.",
      "genetics_cta": "ANALISAR GENOMA",
      "attributes": {
        "vigor": "Vigor+: Aumenta velocidade e reduz cansaço",
        "inventory": "Inventário+: Capacidade máxima de carga",
        "vitality": "Vitalidade+: Vida e regeneração",
        "strength": "Força+: Dano base e crítico",
        "archer": "Arqueiro+: Precisão e dano à distância",
        "defender": "Defensor+: Melhoria em defesas automáticas",
        "critical": "Crítico+: Chance de dano crítico",
        "resistance": "Resistência+: Redução de dano físico e ambiental",
        "luck": "Sorte+: Melhoria em drops e itens raros",
        "sustainability": "Sustentabilidade+: Durabilidade de itens criados",
        "tamer": "Adestrador+: Eficácia em domesticação",
        "farmer": "Fazendeiro+: Eficiência em agricultura",
        "fishing": "Pesca+: Habilidade de coleta aquática",
        "gastric": "Resistência Gástrica+: Absorção de nutrientes"
      },
      "roadmap_title": "Mapa de Desenvolvimento",
      "roadmap_status": "Status: Alpha 0.1.2 - Ativo",
      "roadmap_q1": "Fase 1: Fundação",
      "roadmap_q1_desc": "Inventário sistêmico, crafting base, mundo procedural e arquitetura coop.",
      "roadmap_q2": "Fase 2: Expansão",
      "roadmap_q2_desc": "Agricultura, sistemas complexos de energia, novos biomas e fauna reativa.",
      "roadmap_q3": "Fase 3: Lançamento",
      "roadmap_q3_desc": "Progressão avançada, polimento de alto nível e balanceamento de longo prazo.",
      "legal": {
        "license": "Survivor IO Inceptum © CyWoodsDev. Licença pessoal para entretenimento exclusivo via Steam.",
        "contact": "Comercial / Suporte: Canais oficiais CyWoodsDev."
      },
      "community_title": "Acompanhe o Desenvolvimento",
      "community_desc": "Faça parte da elite de testers do Inceptum. Entre para a comunidade e ajude a moldar o futuro do survival industrial.",
      "community_cta": "TORNAR-SE TESTER",
      "landing": {
        "hero": {
          "badge": "ALPHA 0.1.2 — TESTES FECHADOS",
          "title_1": "SOBREVIVA",
          "title_2": "AO COLAPSO",
          "scroll": "SCROLL"
        },
        "manifesto": {
          "tag": "PROTOCOL_HISTORY_RESET · 2025"
        },
        "stats": {
          "craftable": "Itens Craftáveis",
          "animals": "Espécies Animais",
          "biomes": "Biomas",
          "coop": "Co-op Jogadores",
          "fish": "Tipos de Peixe",
          "attributes": "Atributos"
        },
        "mechanics": {
          "eyebrow": "SISTEMAS DE JOGO",
          "title": "Profundidade sistêmica real",
          "body": "Cada sistema do Inceptum interage com os outros. A floresta cresce. As máquinas envelhecem. Os animais reagem.",
          "online": "ONLINE",
          "items": {
            "crafting": { "title": "Crafting Sistêmico", "desc": "55+ itens craftáveis — de gravetos a Forja de metal com receitas encadeadas." },
            "farming": { "title": "Agricultura Real", "desc": "Plante trigo e uva, fermente, moa e cozinhe com cadeia nutricional real." },
            "fishing": { "title": "Pesca & Ecossistema", "desc": "8 espécies de peixe por bioma. Peixes de superfície e de águas profundas." },
            "building": { "title": "Construção Modular", "desc": "Blocos de madeira (níveis 1–5) e pedregulho. Edifique sua base camada por camada." },
            "survival": { "title": "Sobrevivência Profunda", "desc": "Fome, energia, estamina e deterioração de itens. HP base: 100. Velocidade: 0.5." },
            "multiplayer": { "title": "Co-op 4 Jogadores", "desc": "Unity Relay otimizado. Mundos persistentes com seed sincronizada entre sessões." }
          }
        },
        "progression": {
          "eyebrow": "PROGRESSÃO TECNOLÓGICA",
          "title": "Do zero à era tecnológica",
          "eras": {
            "stone": "Idade da Pedra",
            "iron": "Idade do Ferro",
            "tech": "Era Tecnológica"
          }
        },
        "fauna": {
          "eyebrow": "FAUNA & ECOSSISTEMA",
          "title": "Cada animal tem comportamento único",
          "firefly": "VAGALUME — Passivo · Aparece apenas à noite · Não dropa itens",
          "dev": "EM DESENVOLVIMENTO",
          "animals": {
            "chicken": { "name": "GALINHA", "behavior": "Pacífica — Segue o jogador" },
            "pig": { "name": "PORCO", "behavior": "Neutra — Foge ao atacar" },
            "wolf": { "name": "LOBO", "behavior": "Agressivo — Ataca em bando" },
            "cow": { "name": "VACA", "behavior": "Passiva — Rara em campo aberto" }
          }
        },
        "agriculture": {
          "eyebrow": "AGRICULTURA & NUTRIÇÃO",
          "title": "Cultive. Fermente. Sobreviva.",
          "body": "Cada alimento tem valor nutricional real. Escolha mal e pague com debuffs. A Resistência Gástrica+ define quanto seu personagem absorve de cada refeição.",
          "now": "DISPONÍVEL AGORA",
          "planned": "PRÓXIMAS CULTURAS",
          "nutrition_title": "SISTEMA DE NUTRIÇÃO",
          "nutrition_footer": "Dados extraídos diretamente do ResourcesManager.cs"
        },
        "future": {
          "eyebrow": "MECÂNICAS FUTURAS",
          "title": "O que vem por aí",
          "body": "O Inceptum tem um roadmap ambicioso. Cada fase adiciona sistemas que transformam a experiência de forma radical.",
          "systems": {
            "bosses": { "title": "Sistema de Bosses", "desc": "Encontre bosses durante exploração ou defenda sua base de invasões. Drops únicos e raros." },
            "ai": { "title": "IA de Animais", "desc": "Detecção de paredes e navegação inteligente. Animais não atravessam estruturas — eles as contornam." },
            "genetics": { "title": "Genética Animal & Vegetal", "desc": "Selecione animais por eficiência, docilidade ou combate. Escolha plantas por tamanho e velocidade de crescimento." },
            "economy": { "title": "Economia & NPCs", "desc": "Missões secundárias, comércio com moeda do jogo, guildas solo e multiplayer." },
            "repair": { "title": "Sistema de Reparo", "desc": "Ferramentas têm durabilidade. Repare-as antes que quebrem. Atributo Sustentabilidade+ aumenta a vida útil." },
            "advanced": { "title": "Tecnologia Avançada", "desc": "Armadilhas passivas e ativas, estruturas tecnológicas e automação industrial pesada." }
          }
        },
        "sysreq": {
          "eyebrow": "REQUISITOS DO SISTEMA",
          "title": "Roda em quase tudo",
          "min": "MÍNIMO",
          "rec": "RECOMENDADO"
        },
        "devboard": {
          "eyebrow": "PROGRESSO DO DESENVOLVIMENTO",
          "title": "Construído feature a feature",
          "body": "Transparência total. Cada categoria reflete o estado real do jogo — sem marketing, sem promessas vazias.",
          "overall": "PROGRESSO GERAL",
          "overall_desc": "~62% — Alpha 0.1.2",
          "done": "features concluídas",
          "milestones": "PRÓXIMOS MILESTONES",
          "categories": {
            "bugs": "Bugs & Correções",
            "machines": "Máquinas",
            "core": "Sistemas Básicos",
            "animals": "Animais",
            "mechanics": "Mecânicas de Jogo",
            "resources": "Recursos",
            "construction": "Construção",
            "farming": "Agricultura",
            "enemies": "Inimigos & Bosses"
          },
          "next_milestones": {
            "mp": "Salvar progresso coop",
            "bugs": "MP Plantação · MP Fornalha",
            "machines": "Filtro de Areia e Carvão",
            "core": "Sistema de Sede",
            "animals": "Coelho · Abelha · Ovelha",
            "mechanics": "Domesticação · Economia",
            "resources": "Barro · Cobre · Bronze",
            "construction": "Estrutura de Ferro · Armadilhas",
            "farming": "Feijão · Cenoura · Batata",
            "enemies": "Tribos · Boss"
          }
        },
        "devstory": {
          "eyebrow": "SOBRE O PROJETO",
          "title": "Desenvolvido por",
          "text": "Inceptum — antes Survivor IO — nasceu da inspiração em <strong>ARK, 7 Days to Die, Minecraft, Stardew Valley</strong> e especialmente no <strong>MooMoo.io</strong>, jogo que fez parte da infância do criador. Conforme o projeto cresceu, ficou claro que o nível já era muito além de um jogo <em>.io</em>.",
          "dev": "Dev",
          "week": "por semana",
          "alpha_label": "Alpha",
          "machines_label": "Máquinas"
        },
        "community": {
          "eyebrow": "COMUNIDADE",
          "title": "Entre no Inceptum",
          "desc": "Acompanhe o desenvolvimento diário, participe de testes fechados e ajude a moldar o futuro do Inceptum através do nosso Discord.",
          "cta": "Entrar na Comunidade",
          "note": "Acesso periódico para membros ativos. Sem custo."
        },
        "wiki": {
          "title": "Banco de Dados Autêntico",
          "desc": "Acesse informações e receitas sincronizadas diretamente do motor do Inceptum.",
          "search_placeholder": "Pesquisar itens...",
          "all": "TODOS",
          "components_label": "COMPONENTES NECESSÁRIOS"
        },
        "progression_hub": {
          "title": "Evolução Sistêmica",
          "desc": "A jornada do sobrevivente baseada em atributos de rede neural e biologia adaptativa.",
          "multiplayer_title": "Hub Multiplayer",
          "net_desc": "Netcode sincronizado via <strong>Unity Relay</strong>. Sincronização de Mundo, Itens e Máquinas.",
          "seed": "Mundo: SEED Sincronizada",
          "state_sync": "Itens: State Sync Transparente",
          "limit": "Limite: 4 Jogadores Solo/Coop",
          "manager_title": "Gerenciador Sentinel",
          "manager_desc": "Sincronização persistente de progresso e genética entre sessões."
        },
        "dev_diary": {
          "title": "Dev Diary",
          "desc": "Notas técnicas sobre a engenharia por trás do véu.",
          "read_more": "Ler Artigo",
          "copyright": "2026 Inceptum Project. Desenvolvido para exploração técnica máxima.",
          "footer": {
            "version": "VERSÃO 0.1.2",
            "systems": "SISTEMAS OPERACIONAIS"
          }
        },
        "tech_portal": {
          "world_engine": {
            "title": "World Engine",
            "desc": "Visualizador de ruído fractal e biomas."
          }
        },
        "content": {
          "drops": {
            "egg": "Ovo", "feather": "Pena", "raw_meat": "Carne Crua", "bacon": "Bacon Cru", 
            "leather": "Couro", "fat": "Gordura Animal", "bone": "Osso", "beef": "Carne Bovina", "animal_fat": "Gordura"
          },
          "crops": {
            "grape": "Uva", "bean": "Feijão", "pumpkin": "Abóbora", "carrot": "Cenoura", 
            "potato": "Batata", "coffee": "Café", "kiwi": "Kiwi", "strawberry": "Morango", 
            "avocado": "Abacate", "corn": "Milho", "barley": "Cevada"
          },
          "animals": {
            "rabbit": "Coelho", "bird": "Pássaro", "bee": "Abelha", "sheep": "Ovelha"
          },
          "eras": {
            "stone": ["Machado de Pedra", "Picareta", "Espada de Pedra", "Lança de Madeira", "Arco"],
            "iron": ["Ferramentas de Ferro", "Forja", "Bancada de Carpinteiro", "Moedor", "Blocos de Pedra"],
            "tech": ["Automação Industrial", "Armadilhas Ativas", "Estruturas Avançadas", "Tecnologias Únicas"]
          },
          "milestones_list": {
            "save_time": "Salvar Tempo", "mp_farming": "MP Plantação", "mp_furnace": "MP Fornalha",
            "thirst": "Sistema de Sede", "rabbit": "Coelho", "domestication": "Domesticação",
            "enemies": "Inimigos", "boss": "Boss"
          },
          "phases": {
            "p2": "FASE 2", "p3": "FASE 3", "done": "CONCLUÍDO"
          }
        }
      }
    }
  },
  en: {
    translation: {
      "nav_home": "INCEPTUM",
      "nav_features": "Gameplay",
      "nav_portal": "Alpha Showcase",
      "nav_discord": "Community",
      "lore_title": "THE GREAT RESET: 2025",
      "lore_text": "It all began in 2025. A green light covered the Earth, and humanity was petrified. Thousands of years passed. Only those who kept their minds active, counting every second, broke through the stone. The world is now an untamable ecosystem where cutting-edge technology was buried by time.",
      "lore_reset_call": "Unpetrify your mind. Start from zero.",
      "faq": {
        "title": "Survival Protocols / FAQ",
        "q1": "What makes Inceptum different?",
        "a1": "Its systemic nature and focus on real plant and animal genetics, requiring deep nutritional and strategic choices.",
        "q2": "Will my progress be saved?",
        "a2": "Yes. We use the Sentinel system for persistent state synchronization across solo and coop sessions.",
        "q3": "Is the alpha playable now?",
        "a3": "We are in closed testing. Access is periodically granted to active community members on Discord.",
        "q4": "Solo and Coop Support?",
        "a4": "Full. Play alone or with up to 3 friends on optimized Unity Relay servers."
      },
      "hero_tagline": "Survive the collapse between nature and machine",
      "hero_subtitle": "Nature reacts. Machines scale. The world doesn't wait. Build, automate, and dominate an unpredictable ecosystem.",
      "hero_cta_primary": "WATCH GAMEPLAY",
      "hero_cta_secondary": "JOIN DISCORD",
      "feature_p1": "Living Ecosystem",
      "feature_p1_desc": "Real biological and mechanical interactions in a world that breathes and evolves.",
      "feature_p2": "Systemic Engineering",
      "feature_p2_desc": "Transform scrap into heavy infrastructure, industrial automation, and survival.",
      "feature_p3": "Elite Cooperative",
      "feature_p3_desc": "Stable multiplayer architecture with low latency for up to 4 survivors.",
      "genetics_title": "BIODESIGN & FARMING",
      "genetics_desc": "Use DNA extracted from Pigs, Cows, Chickens, and Wolves to create resilient variants. The world's climate is unforgiving — genetic engineering is your only real competitive advantage.",
      "genetics_cta": "ANALYZE GENOME",
      "attributes": {
        "vigor": "Vigor+: Increases speed and reduces fatigue",
        "inventory": "Inventory+: Maximum carry capacity",
        "vitality": "Vitality+: Health and regeneration",
        "strength": "Strength+: Base damage and critical chance",
        "archer": "Archer+: Range accuracy and damage",
        "defender": "Defender+: Improvements in automatic defenses",
        "critical": "Critical+: Critical damage chance",
        "resistance": "Resistance+: Physical and environmental damage reduction",
        "luck": "Luck+: Improved drops and rare items",
        "sustainability": "Sustainability+: Durability of crafted items",
        "tamer": "Adestrador+: Taming effectiveness",
        "farmer": "Farmer+: Farming efficiency",
        "fishing": "Fishing+: Aquatic gathering skill",
        "gastric": "Gastric Resistance+: Nutrient absorption efficiency"
      },
      "roadmap_title": "Project Roadmap",
      "roadmap_status": "Status: Alpha 0.1.2 - Active",
      "roadmap_q1": "Phase 1: Foundation",
      "roadmap_q1_desc": "Systemic inventory, base crafting, procedural world, and coop architecture.",
      "roadmap_q2": "Phase 2: Expansion",
      "roadmap_q2_desc": "Farming, complex power systems, new biomes, and reactive fauna.",
      "roadmap_q3": "Phase 3: Launch",
      "roadmap_q3_desc": "Advanced progression, high-level polish, and long-term meta balance.",
      "legal": {
        "license": "Survivor IO Inceptum © CyWoodsDev. Personal license for exclusive Steam entertainment.",
        "contact": "Commercial / Support: Official CyWoodsDev channels."
      },
      "community_title": "Follow the Development",
      "community_desc": "Join the elite Inceptum testers. Become part of the community and help shape the future of industrial survival.",
      "community_cta": "BECOME A TESTER",
      "landing": {
        "hero": {
          "badge": "ALPHA 0.1.2 — CLOSED TESTING",
          "title_1": "SURVIVE",
          "title_2": "THE COLLAPSE",
          "scroll": "SCROLL"
        },
        "manifesto": {
          "tag": "PROTOCOL_HISTORY_RESET · 2025"
        },
        "stats": {
          "craftable": "Craftable Items",
          "animals": "Animal Species",
          "biomes": "Biomes",
          "coop": "Co-op Players",
          "fish": "Fish Types",
          "attributes": "Attributes"
        },
        "mechanics": {
          "eyebrow": "GAME SYSTEMS",
          "title": "Real Systemic Depth",
          "body": "Every system in Inceptum interacts with the others. The forest grows. Machines age. Animals react.",
          "online": "ONLINE",
          "items": {
            "crafting": { "title": "Systemic Crafting", "desc": "55+ craftable items — from sticks to Metal Forges with chained recipes." },
            "farming": { "title": "Real Agriculture", "desc": "Plant wheat and grapes, ferment, grind, and cook with real nutritional chains." },
            "fishing": { "title": "Fishing & Ecosystem", "desc": "8 fish species per biome. Surface and deep water fish." },
            "building": { "title": "Modular Construction", "desc": "Wood blocks (levels 1–5) and cobblestone. Build your base layer by layer." },
            "survival": { "title": "Deep Survival", "desc": "Hunger, energy, stamina, and item decay. Base HP: 100. Speed: 0.5." },
            "multiplayer": { "title": "4-Player Co-op", "desc": "Optimized Unity Relay. Persistent worlds with seed synced across sessions." }
          }
        },
        "progression": {
          "eyebrow": "TECH PROGRESSION",
          "title": "From Zero to Tech Era",
          "eras": {
            "stone": "Stone Age",
            "iron": "Iron Age",
            "tech": "Tech Era"
          }
        },
        "fauna": {
          "eyebrow": "FAUNA & ECOSYSTEM",
          "title": "Unique Animal Behaviors",
          "firefly": "FIREFLY — Passive · Only appears at night · No item drops",
          "dev": "UNDER DEVELOPMENT",
          "animals": {
            "chicken": { "name": "CHICKEN", "behavior": "Peaceful — Follows player" },
            "pig": { "name": "PIG", "behavior": "Neutral — Flees when attacked" },
            "wolf": { "name": "WOLF", "behavior": "Aggressive — Attacks in packs" },
            "cow": { "name": "COW", "behavior": "Passive — Rare in open fields" }
          }
        },
        "agriculture": {
          "eyebrow": "FARMING & NUTRITION",
          "title": "Grow. Ferment. Survive.",
          "body": "Every food has real nutritional value. Choose poorly and pay with debuffs. Gastric Resistance+ defines how much your character absorbs from each meal.",
          "now": "AVAILABLE NOW",
          "planned": "UPCOMING CROPS",
          "nutrition_title": "NUTRITION SYSTEM",
          "nutrition_footer": "Data extracted directly from ResourcesManager.cs"
        },
        "future": {
          "eyebrow": "FUTURE MECHANICS",
          "title": "What's Ahead",
          "body": "Inceptum has an ambitious roadmap. Each phase adds systems that radically transform the experience.",
          "systems": {
            "bosses": { "title": "Boss System", "desc": "Find bosses during exploration or defend your base from raids. Unique and rare drops." },
            "ai": { "title": "Animal AI", "desc": "Wall detection and intelligent navigation. Animals won't walk through structures — they'll go around them." },
            "genetics": { "title": "Animal & Plant Genetics", "desc": "Select animals for efficiency, docility, or combat. Choose plants by size and growth speed." },
            "economy": { "title": "Economy & NPCs", "desc": "Side quests, trade with in-game currency, solo and multiplayer guilds." },
            "repair": { "title": "Repair System", "desc": "Tools have durability. Repair them before they break. Sustainability+ attribute increases lifespan." },
            "advanced": { "title": "Advanced Tech", "desc": "Passive and active traps, technological structures, and heavy industrial automation." }
          }
        },
        "sysreq": {
          "eyebrow": "SYSTEM REQUIREMENTS",
          "title": "Runs on Almost Anything",
          "min": "MINIMUM",
          "rec": "RECOMMENDED"
        },
        "devboard": {
          "eyebrow": "DEVELOPMENT PROGRESS",
          "title": "Built Feature by Feature",
          "body": "Total transparency. Every category reflects the real state of the game — no marketing, no empty promises.",
          "overall": "OVERALL PROGRESS",
          "overall_desc": "~62% — Alpha 0.1.2",
          "done": "features completed",
          "milestones": "UPCOMING MILESTONES",
          "categories": {
            "bugs": "Bugs & Fixes",
            "machines": "Machines",
            "core": "Core Systems",
            "animals": "Animals",
            "mechanics": "Game Mechanics",
            "resources": "Resources",
            "construction": "Construction",
            "farming": "Agriculture",
            "enemies": "Enemies & Bosses"
          },
          "next_milestones": {
            "mp": "Save coop progress",
            "bugs": "MP Farming · MP Furnace",
            "machines": "Sand & Coal Filter",
            "core": "Thirst System",
            "animals": "Rabbit · Bee · Sheep",
            "mechanics": "Domestication · Economy",
            "resources": "Clay · Copper · Bronze",
            "construction": "Iron Structure · Traps",
            "farming": "Beans · Carrot · Potato",
            "enemies": "Tribes · Boss"
          }
        },
        "devstory": {
          "eyebrow": "ABOUT THE PROJECT",
          "title": "Developed by",
          "text": "Inceptum — formerly Survivor IO — was inspired by <strong>ARK, 7 Days to Die, Minecraft, Stardew Valley</strong>, and especially <strong>MooMoo.io</strong>, a game from the creator's childhood. As the project grew, it became clear it had moved far beyond a typical <em>.io</em> game.",
          "dev": "Dev",
          "week": "per week",
          "alpha_label": "Alpha",
          "machines_label": "Machines"
        },
        "community": {
          "eyebrow": "COMMUNITY",
          "title": "Join Inceptum",
          "desc": "Track daily development, participate in closed testing, and help shape the future of Inceptum through our Discord.",
          "cta": "Join Community",
          "note": "Periodic access for active members. No cost."
        },
        "wiki": {
          "title": "Authentic Database",
          "desc": "Access information and recipes synced directly from the Inceptum engine.",
          "search_placeholder": "Search items...",
          "all": "ALL",
          "components_label": "REQUIRED COMPONENTS"
        },
        "progression_hub": {
          "title": "Systemic Evolution",
          "desc": "The survivor's journey based on neural network attributes and adaptive biology.",
          "multiplayer_title": "Multiplayer Hub",
          "net_desc": "Netcode synced via <strong>Unity Relay</strong>. World, Item, and Machine synchronization.",
          "seed": "World: Synced SEED",
          "state_sync": "Items: Transparent State Sync",
          "limit": "Limit: 4 Players Solo/Coop",
          "manager_title": "Sentinel Manager",
          "manager_desc": "Persistent synchronization of progress and genetics across sessions."
        },
        "dev_diary": {
          "title": "Dev Diary",
          "desc": "Technical notes on the engineering behind the veil.",
          "read_more": "Read Article",
          "copyright": "2026 Inceptum Project. Developed for maximum technical exploration.",
          "footer": {
            "version": "VERSION 0.1.2",
            "systems": "OPERATING SYSTEMS"
          }
        },
        "tech_portal": {
          "world_engine": {
            "title": "World Engine",
            "desc": "Fractal noise and biome visualizer."
          }
        },
        "content": {
          "drops": {
            "egg": "Egg", "feather": "Feather", "raw_meat": "Raw Meat", "bacon": "Raw Bacon", 
            "leather": "Leather", "fat": "Animal Fat", "bone": "Bone", "beef": "Beef", "animal_fat": "Fat"
          },
          "crops": {
            "grape": "Grape", "bean": "Bean", "pumpkin": "Pumpkin", "carrot": "Carrot", 
            "potato": "Potato", "coffee": "Coffee", "kiwi": "Kiwi", "strawberry": "Strawberry", 
            "avocado": "Avocado", "corn": "Corn", "barley": "Barley"
          },
          "animals": {
            "rabbit": "Rabbit", "bird": "Bird", "bee": "Bee", "sheep": "Sheep"
          },
          "eras": {
            "stone": ["Stone Axe", "Pickaxe", "Stone Sword", "Wooden Spear", "Bow"],
            "iron": ["Iron Tools", "Forge", "Carpenter Bench", "Grinder", "Stone Blocks"],
            "tech": ["Industrial Automation", "Active Traps", "Advanced Structures", "Unique Technologies"]
          },
          "milestones_list": {
            "save_time": "Save Time", "mp_farming": "MP Farming", "mp_furnace": "MP Furnace",
            "thirst": "Thirst System", "rabbit": "Rabbit", "domestication": "Domestication",
            "enemies": "Enemies", "boss": "Boss"
          },
          "phases": {
            "p2": "PHASE 2", "p3": "PHASE 3", "done": "COMPLETED"
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
