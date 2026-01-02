import type { Era } from './types';

export const theAxialAge: Era = {
	id: 'era-7',
	number: 'VII',
	title: 'THE AXIAL AGE      (2 AI PASSES, Manual Edits Required, Verification Required)',
	timespan: '~2,500 - 2,000 years ago (~500 BCE - 0 CE)',
	description: 'The axis around which human history turns. Simultaneously, across disconnected civilizations, reflexive consciousness achieves breakthrough. Buddha in India. Confucius in China. The Hebrew prophets in exile. Greek philosophy on the Aegean. Zoroastrianism in Persia. The WHY-capacity, developed under Laschamp pressure 40,000 years ago, finally becomes strong enough to examine itself. Humans begin thinking about thinking about meaning. And as consciousness expands, so does power—Persia builds the first true world empire, Alexander shatters it, Rome rises from Italian village to Mediterranean hegemon, China unifies, India consolidates. The frameworks that will dominate the next 2,500 years are forged in these five centuries.',
	events: [
		// PART ONE: THE AXIAL BREAKTHROUGH (600-400 BCE)
		// INDIA: THE AWAKENING
		{
			id: 'mahavira-jainism',
			date: '~2,599 years ago (~599 BCE)',
			title: 'Mahavira and Jainism',
			type: 'expansion',
			summary: 'The path of non-harm.',
			content: `Vardhamana Mahavira—the 24th Tirthankara (ford-maker) of Jain tradition—achieves enlightenment and teaches for 30 years before dying around 527 BCE.

The teaching:
Ahimsa (non-violence): Absolute, extending to all living beings including insects and microorganisms. Jain monks sweep paths before walking, strain water before drinking, wear masks to avoid inhaling insects.
Anekantavada (many-sidedness): Reality has multiple aspects; no single view captures truth completely. A proto-relativism that respects others' perspectives.
Aparigraha (non-attachment): Possessions bind the soul. Extreme asceticism, including eventual death by fasting (sallekhana) for the most devoted.
Karma as matter: Karma isn't just action but a subtle material substance that adheres to the soul, weighing it down. Liberation requires burning off accumulated karma.

The practice: Jain monks and nuns live in radical renunciation—naked (Digambara sect) or white-robed (Shvetambara), owning nothing, harming nothing. Lay Jains follow modified versions, often becoming merchants (non-agricultural work avoids harming creatures in soil).

The influence: Jainism remains a small religion (~4-5 million today) but profoundly influences Indian thought. Gandhi's non-violence draws directly from Jain ahimsa.`,
			imagePlaceholder: 'Mahavira in meditation, Jain monks with mouth covers'
		},
		{
			id: 'siddhartha-born',
			date: '~2,563 years ago (~563 BCE)',
			title: 'Siddhartha Gautama Born',
			type: 'expansion',
			summary: 'The future Buddha.',
			content: `In Lumbini (modern Nepal), Siddhartha Gautama is born to a Shakya clan chief. According to tradition, seers predict he will become either a great king or a great spiritual teacher.

The sheltered prince: His father, preferring the king option, shields Siddhartha from suffering—no old age, sickness, or death visible in the palace.

The four sights: As a young man, Siddhartha encounters: an old man, a sick man, a corpse, and a wandering ascetic. He realizes suffering is universal and renounces his princely life to seek liberation.

The search: Six years of wandering, studying with teachers, practicing extreme asceticism. None of it works. Siddhartha nearly dies from fasting.

The Middle Way: Rejecting both luxury and extreme asceticism, he eats, recovers his strength, and sits beneath a tree at Bodh Gaya, vowing not to rise until he achieves enlightenment.`,
			imagePlaceholder: 'Young Siddhartha encountering the four sights'
		},
		{
			id: 'buddha-enlightenment',
			date: '~2,528 years ago (~528 BCE)',
			title: "The Buddha's Enlightenment",
			type: 'expansion',
			summary: 'Awakening under the Bodhi tree.',
			content: `At age 35, Siddhartha Gautama achieves enlightenment (bodhi)—becoming the Buddha ("awakened one"). According to tradition, he perceives the nature of reality directly, understanding:

The Four Noble Truths:
Dukkha: Life is suffering/unsatisfactoriness
Samudaya: Suffering arises from craving/attachment
Nirodha: Suffering can cease
Magga: The path to cessation is the Eightfold Path

The Eightfold Path:
Right View
Right Intention
Right Speech
Right Action
Right Livelihood
Right Effort
Right Mindfulness
Right Concentration

Dependent Origination: Nothing exists independently; everything arises in dependence on conditions. The self is not a fixed entity but a process—the doctrine of anatta (non-self).

The choice: The Buddha could enter final nirvana immediately. Instead, out of compassion, he chooses to teach for 45 years.`,
			imagePlaceholder: 'Buddha achieving enlightenment under the Bodhi tree'
		},
		{
			id: 'first-sermon-sarnath',
			date: '~2,528 years ago (~528 BCE)',
			title: 'First Sermon at Sarnath',
			type: 'expansion',
			summary: 'The wheel of dharma turns.',
			content: `At Deer Park in Sarnath, the Buddha delivers his first sermon to five ascetics who had been his companions. This is the "First Turning of the Wheel of Dharma."

The Sangha forms: These five become the first Buddhist monks. The triple refuge is established: Buddha (the teacher), Dharma (the teaching), Sangha (the community).

The spread: For 45 years, the Buddha wanders northeastern India, teaching kings, merchants, farmers, outcasts. The Sangha grows. Women are eventually admitted (the first female monastic order in recorded history).

The method: The Buddha teaches differently to different audiences—adapting his message to the listener's capacity. This "skillful means" (upaya) becomes a key Buddhist principle.`,
			imagePlaceholder: 'Buddha teaching the five ascetics at Deer Park'
		},
		{
			id: 'upanishadic-revolution',
			date: '~2,500 years ago (~500 BCE)',
			title: 'Upanishadic Revolution',
			type: 'expansion',
			summary: 'Knowledge over ritual.',
			content: `The Upanishads—philosophical texts appended to the Vedas—develop the ideas that will define Hindu philosophy:

Core concepts:
Brahman: The ultimate reality, the ground of all being, impersonal and infinite. "That from which all beings are born, by which they live, and into which they return."
Atman: The individual self/soul, which is ultimately identical with Brahman. "Tat tvam asi" (That thou art)—the individual self IS the universal self.
Maya: The illusion of separation, the appearance of multiplicity that conceals underlying unity.
Moksha: Liberation from the cycle of rebirth (samsara), achieved through knowledge (jnana) of the Brahman-Atman identity.

The critique: The Upanishads implicitly criticize Brahmanical ritualism. True liberation comes not from sacrifice but from knowledge. The priests' elaborate rituals are preparatory at best, distracting at worst.

The synthesis: The Upanishads don't reject the Vedas; they reinterpret them. The external sacrifice becomes the internal sacrifice—the offering of ignorance in the fire of knowledge.`,
			imagePlaceholder: 'Sage teaching Upanishadic wisdom to disciples'
		},
		{
			id: 'buddha-parinirvana',
			date: '~2,483 years ago (~483 BCE)',
			title: "The Buddha's Parinirvana",
			type: 'expansion',
			summary: 'The teacher passes.',
			content: `At age 80, the Buddha dies (achieves parinirvana—"complete nirvana") at Kushinagar. His last words: "All conditioned things are impermanent. Strive with diligence."

The cremation: His body is cremated; the relics divided among eight claimant groups. Stupas (memorial mounds) are built over the relics—the beginning of Buddhist sacred architecture.

The councils: The First Buddhist Council at Rajagriha, shortly after the Buddha's death, establishes the canon—monks recite what they remember, agree on authoritative versions.

The question: Without the Buddha, how does the teaching continue? The answer: through the Sangha, through memorized texts, through the Dharma itself. "Be a lamp unto yourselves."`,
			imagePlaceholder: 'Buddha entering parinirvana, disciples mourning'
		},

		// CHINA: THE HUNDRED SCHOOLS
		{
			id: 'confucius-born',
			date: '~2,551 years ago (551 BCE)',
			title: 'Confucius Born',
			type: 'expansion',
			summary: 'The first teacher.',
			content: `Kong Qiu (Confucius is the Latinized form) is born in the state of Lu (modern Shandong province) during the Spring and Autumn Period—a time of political fragmentation, interstate warfare, and social disorder.

The context: The Zhou dynasty still nominally exists but has lost real power. Feudal lords fight constantly. Traditional values are eroding. China is in crisis.

The response: Confucius doesn't invent a new religion; he transmits and reinterprets tradition. He looks backward to the idealized Zhou golden age, forward to restoration of order.`,
			imagePlaceholder: 'Confucius teaching disciples in ancient China'
		},
		{
			id: 'confucius-teaches',
			date: '~2,520 years ago (~520 BCE)',
			title: 'Confucius Teaches',
			type: 'expansion',
			summary: 'The Analects take shape.',
			content: `Confucius gathers disciples and teaches—not religious doctrine but ethics, politics, personal cultivation. The Analects (Lunyu) preserve his sayings and conversations.

Core concepts:
Ren (仁 - Benevolence/Humaneness): The supreme virtue, variously translated as benevolence, humaneness, love, compassion. Asked to define it, Confucius says: "Do not impose on others what you yourself do not desire" (the negative Golden Rule).
Li (禮 - Ritual/Propriety): Correct behavior in all relationships and contexts. Not empty ceremony but the forms that express and cultivate inner virtue.
Junzi (君子 - Exemplary Person): The goal of self-cultivation—a person of virtue, learning, and moral authority. Originally meaning "son of a lord," Confucius democratizes it: anyone can become a junzi through effort.
Xiao (孝 - Filial Piety): Respect and care for parents, ancestors, and elders. The root of social virtue—if you're good to your parents, you'll be good to others.
Zhengming (正名 - Rectification of Names): Calling things by their proper names. If a ruler doesn't rule properly, he isn't really a ruler. Language and reality must align.

The political vision: Virtue flows from the ruler down. A virtuous ruler creates a virtuous state; a corrupt ruler corrupts everything. "Govern by moral example rather than by force."`,
			imagePlaceholder: 'Confucius in dialogue with disciples'
		},
		{
			id: 'laozi-daodejing',
			date: '~2,500 years ago (~500 BCE)',
			title: 'Laozi and the Daodejing',
			type: 'expansion',
			summary: 'The way that cannot be named.',
			content: `According to tradition, Laozi (Old Master) writes the Daodejing before leaving China westward. Historical existence uncertain; the text itself may be compiled from multiple sources over centuries.

The Dao (道 - Way):
The ultimate reality underlying all things
Nameless, formless, inexhaustible
The source from which all emerges, to which all returns
Cannot be grasped by intellect, only intuited

"The Dao that can be spoken is not the eternal Dao. The name that can be named is not the eternal name."

De (德 - Virtue/Power): The Dao's manifestation in individuals and things. Natural virtue, not moral striving.

Wu Wei (無為 - Non-action): Not passivity but acting without forcing, flowing with natural patterns rather than against them. The sage rules by not-ruling.
"The Dao does nothing, yet nothing is left undone."

The contrast with Confucius:
Confucius: Society can be improved through moral effort, education, proper ritual
Laozi: Society's problems come from too much effort; return to simplicity, naturalness

The synthesis (later): Daoism and Confucianism become complementary—Confucianism for public life, Daoism for private; Confucianism for action, Daoism for acceptance.`,
			imagePlaceholder: 'Laozi departing westward on an ox'
		},
		{
			id: 'confucius-dies',
			date: '~2,479 years ago (479 BCE)',
			title: 'Confucius Dies',
			type: 'expansion',
			summary: 'The legacy begins.',
			content: `Confucius dies at 72, believing himself a failure. He never achieved political power; his teachings were not adopted in his lifetime. He leaves disciples and a body of thought.

The disciples: Students preserve his sayings, debate interpretations, spread the teaching. Confucianism becomes a school—the Ru (儒)—among many.

The Analects: Compiled by disciples after his death, this collection of sayings and dialogues becomes the core Confucian text.

The canonization (much later): Confucianism becomes China's state ideology under the Han dynasty (~2nd century BCE). Confucius is eventually venerated almost as a deity. But in his own time, he was one teacher among many.`,
			imagePlaceholder: 'Disciples mourning at Confucius tomb'
		},
		{
			id: 'mozi-mohism',
			date: '~2,470 years ago (~470 BCE)',
			title: 'Mozi and Mohism',
			type: 'expansion',
			summary: 'Universal love.',
			content: `Mozi (Master Mo) founds Mohism—a rival to Confucianism with different emphases:

Jian Ai (兼愛 - Universal Love): Impartial care for all people, not the graded love of Confucianism (more for family, less for strangers). If everyone loved everyone equally, warfare would cease.

Anti-Confucian critiques:
Elaborate funerals waste resources
Music and ritual are extravagant distractions
Graded love creates divisions

Utilitarianism: Actions should be judged by their consequences for the welfare of all. The first clear utilitarian ethics in world philosophy.

Religion: Mozi believes in Heaven (Tian) as a moral agent who rewards the good and punishes the wicked. More theistic than Confucianism.

Organization: Mohists form a tightly organized group with a leader (Juzi), discipline, and military expertise. They offer defensive services to states under attack—early principled mercenaries.

The decline: Mohism rivals Confucianism for centuries but eventually dies out under the Han dynasty's Confucian orthodoxy.`,
			imagePlaceholder: 'Mohist engineers defending a city'
		},
		{
			id: 'hundred-schools',
			date: '~2,450 years ago (~450 BCE)',
			title: 'Hundred Schools of Thought',
			type: 'expansion',
			summary: 'Chinese intellectual explosion.',
			content: `The Warring States Period produces an explosion of philosophical schools:

Confucianism (儒家): Already discussed. Virtue ethics, social harmony, ritual propriety.
Daoism (道家): Already discussed. Natural spontaneity, non-action, mystical unity.
Mohism (墨家): Already discussed. Universal love, utilitarianism, defensive warfare.
Legalism (法家): Developing now, peaks later. Law and punishment, not virtue, maintain order. Human nature is selfish; only rewards and punishments work.
School of Names (名家): Logic, language, paradoxes. "A white horse is not a horse" (because "white horse" and "horse" have different meanings).
Yin-Yang School (陰陽家): Cosmology based on complementary opposites (yin/yang) and five phases (wood, fire, earth, metal, water).
Agriculturalists (農家): Rulers should farm alongside commoners; everyone should labor.
Diplomats/Strategists (縱橫家): Political strategy, alliance-building, realpolitik.

The pattern: China's "Axial Age" moment—multiple competing frameworks for understanding reality and organizing society. The intellectual diversity rivals Greece.`,
			imagePlaceholder: 'Scholars debating at a Warring States court'
		},
		{
			id: 'zhuangzi',
			date: '~2,400 years ago (~400 BCE)',
			title: 'Zhuangzi',
			type: 'expansion',
			summary: 'Daoist philosophy deepens.',
			content: `Zhuangzi (Master Zhuang) produces the text bearing his name—the second foundational Daoist text after the Daodejing. Where the Daodejing is terse, the Zhuangzi is playful, paradoxical, literary.

The butterfly dream: Zhuangzi dreams he's a butterfly. Waking, he wonders: is he a man who dreamed he was a butterfly, or a butterfly dreaming he's a man? The boundaries of identity and reality dissolve.

Relativism: Right and wrong, beautiful and ugly, useful and useless—all are relative to perspective. The sage transcends such distinctions.

Spontaneity: True skill is unconscious—the butcher who carves an ox without thinking, the swimmer who moves with water. Over-thinking destroys natural ability.

Death: When Zhuangzi's wife dies, he sits drumming and singing. Asked how he can be so callous, he explains: she has returned to the great transformation, like the alternation of seasons. Why mourn?

The influence: Zhuangzi's literary brilliance makes Daoism not just philosophy but art. His influence on Chinese poetry, painting, and sensibility is immense.`,
			imagePlaceholder: 'Zhuangzi dreaming of being a butterfly'
		},

		// PERSIA: EMPIRE AND RELIGION
		{
			id: 'cyrus-rises',
			date: '~2,559 years ago (559 BCE)',
			title: 'Cyrus the Great Rises',
			type: 'expansion',
			summary: 'The first world empire.',
			content: `Cyrus II of Persia rebels against his Median overlords and, within twenty years, builds the largest empire the world has yet seen.

The conquests:
550 BCE: Defeats Medes, unites Persian and Median peoples
547 BCE: Conquers Lydia (Croesus's wealthy kingdom in Anatolia)
539 BCE: Conquers Babylon (the ancient heart of civilization)
Extends rule to Central Asia, the borders of India

The method: Remarkably (for the ancient world), Cyrus rules through tolerance. Conquered peoples keep their customs, languages, religions. The empire demands tribute and loyalty, not cultural conformity.

The Cyrus Cylinder: After conquering Babylon, Cyrus issues a declaration (on a clay cylinder) allowing exiles to return home and rebuild temples. This includes the Jews—the end of the Babylonian Exile.

The Hebrew view: Isaiah 45 calls Cyrus "anointed" (messiah)—the only non-Jew given this title in the Hebrew Bible. YHWH uses the Persian king to accomplish divine purposes.`,
			imagePlaceholder: 'Cyrus the Great and the Cyrus Cylinder'
		},
		{
			id: 'edict-of-cyrus',
			date: '~2,538 years ago (538 BCE)',
			title: 'Edict of Cyrus / Jewish Return',
			type: 'expansion',
			summary: 'The exile ends.',
			content: `Cyrus allows Jewish exiles in Babylon to return to Judah and rebuild the Temple in Jerusalem. Not all Jews return—many remain in Babylon, forming the first major diaspora community.

The Second Temple period begins: The returnees, led by figures like Zerubbabel and later Ezra and Nehemiah, rebuild the Temple (completed ~516 BCE), reconstitute the community, and codify Jewish law and scripture.

The transformation: The Jews who return are different from those who left. The exile crystallized Jewish identity:
YHWH is not just Israel's god but THE God, creator of all
Torah becomes central (the law as portable temple)
Synagogue worship develops (community prayer without sacrifice)
Prophetic literature is compiled and canonized
Apocalyptic hope intensifies

The influence of Persia: Zoroastrian ideas may influence late Hebrew thought: dualism (good vs. evil), angels and demons, resurrection, final judgment, heaven and hell. The connections are debated but suggestive.`,
			imagePlaceholder: 'Jewish exiles returning to Jerusalem'
		},
		{
			id: 'darius-i',
			date: '~2,522 years ago (522 BCE)',
			title: 'Darius I Takes the Throne',
			type: 'expansion',
			summary: 'The empire organizes.',
			content: `After a succession crisis, Darius I becomes king. He reorganizes and expands the empire, creating administrative structures that will endure for two centuries.

The satrapies: The empire is divided into ~20 provinces (satrapies), each governed by a satrap (governor) with considerable autonomy. Below the satrap: tax collectors, military commanders, judges.

The Royal Road: A highway from Sardis (Anatolia) to Susa (Persia)—2,700 km—with rest stations every day's journey. Messages can travel the length in a week via relay riders. The first imperial communication network.

The postal system: "Neither snow nor rain nor heat nor gloom of night stays these couriers from the swift completion of their appointed rounds." (Herodotus, describing Persian messengers—later adopted as the US Postal Service motto.)

Persepolis: Darius builds a new ceremonial capital at Persepolis—massive stone platforms, columned halls, elaborate reliefs showing tribute-bearers from every part of the empire. A monument to universal rule.`,
			imagePlaceholder: 'Persepolis with tribute bearers from across the empire'
		},
		{
			id: 'zoroastrianism-imperial',
			date: '~2,520 years ago (~520 BCE)',
			title: 'Zoroastrianism as Imperial Religion',
			type: 'expansion',
			summary: 'The religion of the Magi.',
			content: `Under the Achaemenids, Zoroastrianism (or a related Mazdean tradition) becomes the dominant religion of the Persian elite.

The core teachings (as crystallized by this period):
Ahura Mazda: The Wise Lord, supreme god of light, truth, and good. Creator of all good things.
Angra Mainyu (Ahriman): The Destructive Spirit, source of evil, lies, and darkness. Cosmic enemy of Ahura Mazda.
Dualism: The universe is a battleground between good and evil. Humans must choose sides. The choice matters eternally.

The Amesha Spentas: Six divine beings who serve Ahura Mazda—aspects of his nature or semi-independent figures:
Vohu Manah (Good Mind)
Asha Vahishta (Best Righteousness)
Khshathra Vairya (Desirable Dominion)
Spenta Armaiti (Holy Devotion)
Haurvatat (Wholeness)
Ameretat (Immortality)

Eschatology:
Individual judgment after death (crossing the Chinvat Bridge)
Final battle between good and evil
Resurrection of the dead
Renovation of the world (Frashokereti)
Evil destroyed; eternity in perfection

The influence: These concepts—cosmic dualism, personal judgment, resurrection, final renovation—appear later in Judaism, Christianity, and Islam. Direct influence is debated, but the structural parallels are striking.`,
			imagePlaceholder: 'Zoroastrian fire temple with Ahura Mazda symbol'
		},
		{
			id: 'persian-engineering',
			date: '~2,500 years ago (~500 BCE)',
			title: 'Persian Engineering',
			type: 'tech',
			summary: 'Imperial infrastructure.',
			content: `The Persian Empire develops engineering at unprecedented scale:

The Royal Road: Already mentioned—paved highway spanning the empire.

Qanats: Underground water channels that tap groundwater and transport it to the surface without evaporation. Technology may be older, but Persians perfect and spread it. Still in use in Iran, Morocco, Oman.

Bridges: The Persians bridge major rivers—the Halys, the Bosporus (via boat-bridge for Darius's invasion of Scythia), the Hellespont (for Xerxes's invasion of Greece).

Siege engineering: The Persians are masters of siege warfare—mining, ramps, artillery (torsion catapults developing).

Gardens (Pairidaeza → Paradise): The Persian word for enclosed garden becomes Greek "paradeisos" and enters English as "paradise." Persian gardens—with water channels, shade trees, symmetry—influence Islamic gardens and European garden design.`,
			imagePlaceholder: 'Persian qanat system and royal gardens'
		},

		// GREECE: THE CLASSICAL ACHIEVEMENT
		{
			id: 'presocratic-philosophy',
			date: '~2,550 years ago (~550 BCE)',
			title: 'Pre-Socratic Philosophy Begins',
			type: 'expansion',
			summary: 'Reason examines nature.',
			content: `Greek philosophy begins in Ionia (western Anatolia, now Turkey)—the interface between Greek and Eastern cultures. The question: what is the fundamental nature of reality?

The shift: Previous explanations were mythological—Zeus causes lightning, Poseidon causes earthquakes. The Pre-Socratics seek naturalistic explanations—physis (nature) operating by consistent principles.`,
			imagePlaceholder: 'Ionian philosophers observing nature'
		},
		{
			id: 'thales',
			date: '~2,546 years ago (546 BCE)',
			title: 'Thales of Miletus',
			type: 'expansion',
			summary: 'Water as the first principle.',
			content: `Thales proposes that water is the fundamental substance—everything comes from water, returns to water. The content is less important than the method: seeking a single natural principle underlying diversity.

Other achievements:
Predicted a solar eclipse (585 BCE)—using Babylonian astronomical data
Proved geometric theorems (traditionally—sources are late)
Measured pyramid heights using shadows

The significance: Thales asks: what is the world made of? Not "who made it" (gods) but "what is it" (substance). The question shapes Western philosophy and science.`,
			imagePlaceholder: 'Thales observing water and natural phenomena'
		},
		{
			id: 'pythagoras',
			date: '~2,530 years ago (~530 BCE)',
			title: 'Pythagoras',
			type: 'expansion',
			summary: 'Number as reality.',
			content: `Pythagoras of Samos founds a philosophical-religious community in southern Italy (Croton). The Pythagoreans combine mathematics, music, cosmology, and mysticism.

The discoveries:
The Pythagorean theorem (known earlier in Babylon, but Greeks prove it)
Musical intervals correspond to numerical ratios (octave = 2:1, fifth = 3:2, fourth = 4:3)
Numbers have properties (odd/even, perfect, triangular)

The philosophy: "All is number." Reality's fundamental nature is mathematical. The cosmos is ordered, harmonious, intelligible.

The religion: Pythagoreans practice asceticism, vegetarianism (or restrictions), believe in reincarnation, and keep secret doctrines. The soul is immortal and transmigrates; philosophy purifies the soul for escape from the cycle.

The influence: Pythagoreanism influences Plato (the Forms are mathematical), mathematics (number theory), music theory, and mystical traditions.`,
			imagePlaceholder: 'Pythagoreans studying geometry and music'
		},
		{
			id: 'heraclitus',
			date: '~2,510 years ago (~510 BCE)',
			title: 'Heraclitus',
			type: 'expansion',
			summary: 'Flux and logos.',
			content: `Heraclitus of Ephesus (the "Obscure" or "Weeping Philosopher") teaches that reality is fundamentally change.

The doctrine of flux: "You cannot step into the same river twice"—everything flows, nothing remains. What seems stable is dynamic equilibrium.

The unity of opposites: Hot and cold, wet and dry, life and death are connected. "The way up and the way down are one and the same." Opposition is creative; harmony arises from tension.

The Logos: An organizing principle underlying change—reason, pattern, proportion. The cosmos is not chaos but ordered change. Fire is the primary element—always transforming, never static.

The paradox: Change is constant, but the PATTERN of change is constant. The Logos persists through flux.`,
			imagePlaceholder: 'Heraclitus contemplating flowing water and fire'
		},
		{
			id: 'parmenides',
			date: '~2,500 years ago (~500 BCE)',
			title: 'Parmenides',
			type: 'expansion',
			summary: 'Being is one.',
			content: `Parmenides of Elea directly opposes Heraclitus. Where Heraclitus sees flux, Parmenides sees unchanging unity.

The argument: "What is, is. What is not, is not." Non-being cannot exist (you can't think about nothing). Therefore: change is impossible (change requires what-is-not to become what-is), motion is impossible, plurality is impossible. Reality is one, eternal, unchanging, perfect.

The consequence: Sense experience (which shows change, motion, plurality) must be illusion. Only reason reveals truth.

The dilemma: Parmenides forces subsequent philosophers to explain change without violating his logic. Pluralists (Empedocles, Anaxagoras, Atomists) respond by positing multiple unchanging elements that combine and separate.`,
			imagePlaceholder: 'Parmenides in contemplation of unchanging Being'
		},
		{
			id: 'greek-democracy',
			date: '~2,500 years ago (~500 BCE)',
			title: 'Greek Democracy Develops',
			type: 'expansion',
			summary: 'The polis transformed.',
			content: `Athens transitions from tyranny to democracy. Cleisthenes (508 BCE) reforms the political system:

The innovations:
Demes: Local units based on residence, not kinship—breaking aristocratic clan power
Tribes: Ten new tribes, each mixing demes from different regions
Council of 500: 50 from each tribe, chosen by lot, rotating presidency
Assembly (Ekklesia): All male citizens can speak and vote
Ostracism: Citizens can vote to exile someone for ten years—a safety valve against tyranny

The limits: Democracy is for male citizens only. Women, slaves (30-40% of population), resident foreigners (metics) are excluded. But within its limits, it's genuinely participatory.

The link to philosophy: Democratic speech (rhetoric, debate, persuasion) creates demand for education in argument. The Sophists and later Socrates emerge in this context.`,
			imagePlaceholder: 'Athenian assembly with citizens voting'
		},
		{
			id: 'battle-marathon',
			date: '~2,490 years ago (490 BCE)',
			title: 'Battle of Marathon',
			type: 'expansion',
			summary: 'Greece defeats Persia.',
			content: `Darius I sends a punitive expedition against Athens (which had supported Ionian revolt against Persia). At Marathon, 10,000 Athenians and 1,000 Plataeans face ~25,000 Persians.

The battle: The Greeks charge at a run, close to hand-to-hand combat before Persian archers can thin them. The Greek flanks envelop the Persian center. Persian casualties: ~6,400. Greek: ~192.

The legend: The runner Pheidippides (or Philippides) runs from Marathon to Athens (~40 km) to announce victory, gasps "Nike!" (Victory!), and dies. The marathon race commemorates this.

The significance: A small Greek force defeats the superpower. Greek morale soars. But Persia will return.`,
			imagePlaceholder: 'Greek hoplites charging at Marathon'
		},
		{
			id: 'xerxes-invasion',
			date: '~2,480 years ago (480 BCE)',
			title: "Xerxes' Invasion",
			type: 'expansion',
			summary: 'The great Persian War.',
			content: `Darius's son Xerxes leads an enormous army to conquer Greece—perhaps 100,000-200,000 troops (Greek sources claim millions, but these are exaggerated).

The Hellespont crossing: Xerxes bridges the Hellespont with boats. When a storm destroys the first bridge, he has the sea whipped as punishment and builds another.

Thermopylae: 300 Spartans plus ~7,000 allies hold the narrow pass for three days against the Persian host. Betrayed by a local guide, the Greeks are surrounded. The Spartans (and Thespians and Thebans) stay to die, covering the Greek retreat. "Go tell the Spartans, stranger passing by, that here obedient to their laws we lie."

Salamis: The Athenians evacuate their city (which Persia burns). The Greek fleet, led by Athenian Themistocles, lures the Persian fleet into the narrow straits of Salamis. In the confined space, Persian numbers are useless. The Persian fleet is destroyed.

Plataea (479 BCE): The following year, the Greek allied army defeats the Persian land force at Plataea. Persia retreats from Greece permanently.`,
			imagePlaceholder: 'Battle of Thermopylae and naval battle at Salamis'
		},
		{
			id: 'greek-trireme',
			date: '~2,480 years ago (480 BCE)',
			title: 'Greek Trireme Warfare',
			type: 'tech',
			summary: 'The weapon that saved Greece.',
			content: `The trireme—a warship with three banks of oars and a bronze ram—is the decisive weapon at Salamis.

The specifications:
Length: ~37 meters
Beam: ~6 meters
Crew: ~200 (170 rowers, 30 crew/marines)
Speed: ~7-8 knots (rowing), ~10 knots (ramming sprint)
Armament: Bronze ram at bow

The tactics: Triremes aim to ram enemy ships at the waterline, holing them below deck. The "diekplous" (breakthrough) and "periplous" (outflanking) are key maneuvers.

The democracy connection: Rowing triremes requires mass manpower—ordinary citizens, not just wealthy hoplites. The navy democratizes military power. Those who row demand political voice.`,
			imagePlaceholder: 'Greek trireme with bronze ram'
		},
		{
			id: 'empedocles',
			date: '~2,480 years ago (~480 BCE)',
			title: 'Empedocles',
			type: 'expansion',
			summary: 'The four elements.',
			content: `Empedocles of Acragas (Sicily) proposes that all matter consists of four eternal elements: earth, water, air, fire. These don't change; they combine and separate.

The forces: Two cosmic forces drive combination and separation:
Love (Philia): Draws elements together
Strife (Neikos): Drives elements apart

The cycle: The cosmos oscillates between complete unity (Love dominant) and complete separation (Strife dominant). Our world is somewhere between.

The influence: The four-element theory dominates Western thought until the scientific revolution. Aristotle adopts it; medieval alchemy is based on it.`,
			imagePlaceholder: 'Four elements: earth, water, air, fire'
		},
		{
			id: 'anaxagoras',
			date: '~2,470 years ago (~470 BCE)',
			title: 'Anaxagoras',
			type: 'expansion',
			summary: 'Mind orders the cosmos.',
			content: `Anaxagoras of Clazomenae proposes that Nous (Mind/Intellect) orders the cosmos. Matter is infinitely divisible; in everything is a portion of everything.

The innovation: Mind is not material—it's separate from the mixture it orders. This is a move toward immaterial causation.

The scandal: Anaxagoras says the sun is not a god but a "burning stone larger than the Peloponnesus." He's tried for impiety and exiled from Athens.

The influence: Socrates is initially excited by Nous but disappointed that Anaxagoras uses it only to start cosmic motion, then explains everything mechanically.`,
			imagePlaceholder: 'Anaxagoras observing the sun'
		},
		{
			id: 'atomism',
			date: '~2,460 years ago (~460 BCE)',
			title: 'Leucippus and Democritus',
			type: 'expansion',
			summary: 'Atomism.',
			content: `Leucippus and his student Democritus propose: reality consists of atoms (indivisible particles) and void (empty space). Atoms differ in shape, size, arrangement. Everything is atoms in motion.

The logic: Parmenides said being is indivisible. The atomists agree—each atom is indivisible being. But there are many atoms, and void allows motion.

The mechanism: Everything happens by necessity—atoms move, collide, combine, separate according to their natures. No mind, no purpose, no gods (or gods are just atom-configurations).

The anticipation: Democritus's atoms anticipate modern atomic theory—not precisely, but structurally. Physical reductionism begins here.

The counterculture: Atomism is materialist, mechanist, proto-atheist. It influences Epicurus, then lies dormant, then revives in early modern science.`,
			imagePlaceholder: 'Atoms and void - ancient atomist conception'
		},
		{
			id: 'athenian-golden-age',
			date: '~2,470 years ago (~470 BCE)',
			title: 'Athenian Golden Age Begins',
			type: 'expansion',
			summary: 'Pericles and the height of Athens.',
			content: `After the Persian Wars, Athens leads the Delian League (alliance against Persia) and transforms it into an empire. Under Pericles (dominant ~460-429 BCE), Athens reaches its cultural peak.

The democracy matures: Pay for jury service (allowing poor citizens to participate), public building programs employing citizens, the assembly as supreme authority.

The empire: League treasury moved to Athens. Tribute funds Athenian building programs. Allies become subjects. The contradiction between democracy at home and empire abroad will haunt Athens.

The Parthenon: Built 447-432 BCE on the Acropolis. A temple to Athena housing a massive gold-and-ivory statue. The proportions, the sculptures (Phidias), the setting—the defining monument of Classical Greece.`,
			imagePlaceholder: 'The Parthenon and Pericles'
		},
		{
			id: 'hippocratic-medicine',
			date: '~2,460 years ago (~460 BCE)',
			title: 'Hippocratic Medicine',
			type: 'tech',
			summary: 'The body without gods.',
			content: `Hippocrates of Cos (and the school associated with him) establishes medicine as an empirical discipline distinct from religion.

The Hippocratic Corpus: ~60 texts on anatomy, disease, treatment, prognosis, medical ethics. Not all by Hippocrates; a school tradition.

The method:
Careful observation of symptoms
Recording case histories
Natural explanations (diet, environment, lifestyle)
Prognosis (predicting disease course)
"First, do no harm" (primum non nocere)

The Sacred Disease (epilepsy): "I do not believe that the Sacred Disease is any more divine or sacred than any other disease, but has a natural cause." Diseases have physical causes, not divine punishment.

The Four Humors: Blood, phlegm, yellow bile, black bile—corresponding to air, water, fire, earth. Health is balance; illness is imbalance. Wrong, but systematic.

The oath: The Hippocratic Oath—"I will use treatment to help the sick according to my ability and judgment, but never with a view to injury or wrongdoing"—establishes medical ethics.`,
			imagePlaceholder: 'Hippocrates examining a patient'
		},
		{
			id: 'sophists',
			date: '~2,450 years ago (~450 BCE)',
			title: 'Sophists',
			type: 'expansion',
			summary: 'Teachers of rhetoric and relativism.',
			content: `The Sophists—traveling teachers who charge for instruction—offer education in rhetoric, argument, and success.

Major figures:
Protagoras: "Man is the measure of all things." Truth is relative to the perceiver. What seems true to you is true for you.
Gorgias: Rhetoric is power. Persuasion can make the weaker argument appear stronger. (He reportedly argued that nothing exists; if it did, it couldn't be known; if known, couldn't be communicated.)
Hippias: Polymathic knowledge—memory techniques, mathematics, poetry, history.
Thrasymachus: Justice is "the advantage of the stronger." Might makes right.

The critique (later): Plato attacks the Sophists as superficial, money-grubbing relativists who undermine truth and virtue. "Sophistry" becomes a term of abuse.

The defense: The Sophists democratize education, teach critical thinking, and raise genuine philosophical questions about knowledge and values.`,
			imagePlaceholder: 'Sophist teaching rhetoric to students'
		},
		{
			id: 'herodotus',
			date: '~2,439 years ago (439 BCE)',
			title: 'Herodotus',
			type: 'expansion',
			summary: 'The first historian.',
			content: `Herodotus of Halicarnassus writes the Histories—an inquiry (historia) into the causes of the Greek-Persian Wars and the customs of peoples across the known world.

The method:
Travel and inquiry (Herodotus visits Egypt, Babylon, Scythia)
Recording different accounts ("I am obliged to report what I am told, but I am not obliged to believe it")
Natural and human causes (not just divine)

The scope: The Histories includes ethnography, geography, customs, marvels, and narrative history. It's part travelogue, part anthropology, part political analysis.

The title: Cicero calls Herodotus "the Father of History." He invents the genre—or at least provides its foundational text.

The critics: Thucydides will implicitly criticize Herodotus for including entertaining but unverifiable stories. Later writers call him "the Father of Lies." But his method—inquiry, multiple sources, skepticism—is genuinely historical.`,
			imagePlaceholder: 'Herodotus traveling and recording histories'
		},
		{
			id: 'peloponnesian-war',
			date: '~2,431 years ago (431 BCE)',
			title: 'Peloponnesian War Begins',
			type: 'collapse',
			summary: 'Greece destroys itself.',
			content: `Athens and Sparta—allies against Persia—become enemies. The war lasts 27 years (431-404 BCE) and devastates Greece.

The causes:
Athenian imperialism (threatening Spartan allies)
Spartan fear of Athenian power
Corinthian grievances
Thucydides: "The growth of Athenian power and the fear which this caused in Sparta"

The pattern:
Athens: naval power, walled city, democratic, commercial
Sparta: land power, militaristic, oligarchic, conservative

The devastation: Plague kills perhaps 25% of Athens (including Pericles, 429 BCE). Sicily expedition (415-413 BCE) destroys Athenian fleet and army. Sparta, with Persian money, eventually defeats Athens (404 BCE).`,
			imagePlaceholder: 'Athens and Sparta at war'
		},
		{
			id: 'thucydides',
			date: '~2,430 years ago (~430 BCE)',
			title: 'Thucydides',
			type: 'tech',
			summary: 'Scientific history.',
			content: `Thucydides, an Athenian general, writes the History of the Peloponnesian War—a model of rigorous historical analysis.

The method:
Contemporary history (he lived through the events)
Cross-checking sources
Skepticism about supernatural explanations
Focus on politics, strategy, causation
Reconstructed speeches ("what was called for in the situation")

The Melian Dialogue: Athens demands that neutral Melos submit. The Melians appeal to justice. The Athenians respond: "The strong do what they can and the weak suffer what they must." Athens conquers Melos, kills the men, enslaves the women and children. Thucydides offers no commentary; the facts speak.

The vision: Human nature is constant. History teaches patterns. The war reveals what humans do under pressure.`,
			imagePlaceholder: 'Thucydides writing his history'
		},
		{
			id: 'greek-tragedy',
			date: '~2,430 years ago (~430 BCE)',
			title: 'Greek Tragedy Peaks',
			type: 'expansion',
			summary: 'Drama as philosophy.',
			content: `The three great tragedians—Aeschylus, Sophocles, Euripides—produce their masterworks:

Aeschylus (525-456 BCE):
Oresteia (458 BCE): Agamemnon returns from Troy, is murdered by Clytemnestra, is avenged by Orestes, who is then pursued by Furies until Athena establishes the law court. Blood-vengeance yields to civic justice.
Introduces second actor (allowing real dialogue)
Cosmic themes: fate, justice, divine order

Sophocles (496-406 BCE):
Oedipus Rex (~429 BCE): The king who solves the riddle discovers he's the source of plague—he killed his father, married his mother. "Count no man happy until he is dead."
Antigone (~441 BCE): Antigone buries her brother against the king's decree. Divine law vs. human law.
Character focus: individuals facing fate

Euripides (480-406 BCE):
Medea (431 BCE): Medea, abandoned by Jason, kills their children for revenge.
The Bacchae (405 BCE): Dionysus destroys the king who denies him.
Psychological realism, questions traditional religion, sympathetic outsiders (women, barbarians, slaves)

The function: Tragedy isn't entertainment—it's civic education, religious ritual, philosophical exploration. 10,000-15,000 citizens watch; the plays address the community.`,
			imagePlaceholder: 'Greek theater with tragic performance'
		},
		{
			id: 'aristophanes',
			date: '~2,425 years ago (~425 BCE)',
			title: 'Aristophanes and Greek Comedy',
			type: 'expansion',
			summary: 'Laughter as critique.',
			content: `Aristophanes (446-386 BCE) writes comedies that satirize politics, philosophy, and society:

The Clouds (423 BCE): Mocks Socrates as a Sophist running a "Thinkery" where students learn to make worse arguments appear better. (Aristophanes' Socrates differs from Plato's.)
The Birds (414 BCE): Athenians establish a city in the sky ("Cloud-Cuckoo-Land") and blockade the gods.
Lysistrata (411 BCE): Women of Greece go on sex strike until men end the war.

The method: Obscene, fantastical, topical. Named individuals (including Socrates, Cleon, Euripides) are mocked directly. Democracy allows—even celebrates—irreverence.`,
			imagePlaceholder: 'Comic actors in Greek theater'
		},
		{
			id: 'socrates-teaching',
			date: '~2,420 years ago (~420 BCE)',
			title: "Socrates' Teaching Career",
			type: 'expansion',
			summary: 'The gadfly of Athens.',
			content: `Socrates (469-399 BCE)—son of a stonemason and a midwife—spends his adult life in philosophical conversation in the Athenian agora.

The method (elenchus):
Socrates claims to know nothing
He questions those who claim to know
Through cross-examination, he reveals contradictions
The interlocutor discovers they don't really know what they thought they knew
"The unexamined life is not worth living"

The content (as transmitted by Plato):
What is justice? What is virtue? What is piety?
Definitions are sought but rarely achieved
The process of inquiry is valuable even without final answers

The daemon: Socrates claims a divine sign (daimonion) that warns him against wrong actions. Not a voice commanding, but an internal check.

The person: Barefoot, poor (he doesn't charge), homely, physically brave (he served as a hoplite), indifferent to pleasure and pain. He models what he teaches.`,
			imagePlaceholder: 'Socrates questioning in the Athenian agora'
		},
		{
			id: 'athens-defeated',
			date: '~2,404 years ago (404 BCE)',
			title: 'Athens Defeated',
			type: 'collapse',
			summary: 'The end of the golden age.',
			content: `Sparta defeats Athens. The Long Walls connecting Athens to its port are demolished. The fleet is surrendered. An oligarchy (the Thirty Tyrants) is installed briefly before democracy is restored.

The aftermath: Athens survives and remains culturally important, but its imperial power is broken. The 5th century BCE—the century of Marathon, the Parthenon, Pericles, tragedy, Socrates—ends in defeat.

The lesson: The war reveals the dark side of Athenian democracy: imperialism, demagoguery, the Sicily disaster. Thucydides documents how democracies can make terrible decisions.`,
			imagePlaceholder: 'Long Walls of Athens being demolished'
		},
		{
			id: 'trial-death-socrates',
			date: '~2,399 years ago (399 BCE)',
			title: 'Trial and Death of Socrates',
			type: 'expansion',
			summary: 'Philosophy becomes martyrdom.',
			content: `Athens puts Socrates on trial. Charges: corrupting the youth, not believing in the city's gods, introducing new gods.

The context: Athens has just lost a catastrophic war. Some of Socrates' associates (Alcibiades, Critias) were traitors or tyrants. The democracy is insecure.

The trial: Socrates defends himself (recounted in Plato's Apology). He refuses to beg for mercy, proposes as his "penalty" free meals for life (as given to Olympic victors). The jury votes death.

The death: Socrates drinks hemlock. His last words (in Plato's Phaedo): "Crito, we owe a rooster to Asclepius. Please, don't forget to pay the debt." The meaning is debated—thanks for healing? Irony? Genuine piety?

The legacy: Socrates writes nothing. His students—especially Plato—transmit his thought. His death makes philosophy dangerous and serious. "The first philosopher to die for his beliefs."`,
			imagePlaceholder: 'Death of Socrates drinking hemlock'
		},
		{
			id: 'plato-academy',
			date: '~2,387 years ago (387 BCE)',
			title: 'Plato Founds the Academy',
			type: 'expansion',
			summary: 'The first university.',
			content: `Plato (427-347 BCE) establishes the Academy in Athens—a school for philosophical research and education that will last 900 years (until 529 CE, when Justinian closes it).

The curriculum: Mathematics (geometry, astronomy), dialectic (philosophical argument), ethics, politics. "Let no one ignorant of geometry enter" (supposedly inscribed at the entrance).

The dialogues: Plato writes philosophical dialogues featuring Socrates as main character:
Early dialogues: Socratic questioning (Euthyphro, Apology, Crito)
Middle dialogues: Theory of Forms (Meno, Phaedo, Republic, Symposium)
Late dialogues: Logical and cosmological (Parmenides, Theaetetus, Timaeus, Laws)`,
			imagePlaceholder: "Plato's Academy in Athens"
		},
		{
			id: 'plato-forms',
			date: '~2,380 years ago (~380 BCE)',
			title: "Plato's Theory of Forms",
			type: 'expansion',
			summary: 'The metaphysics of ideals.',
			content: `Plato proposes that the physical world we perceive is not fully real. Behind appearances are Forms (Ideas)—perfect, eternal, unchanging templates.

The Forms:
The Form of the Good (highest Form, source of being and knowledge)
Forms of Beauty, Justice, Equality, etc.
Mathematical Forms (the Triangle itself, the Number Two itself)

The argument: We recognize equality (two sticks of equal length), but no physical sticks are perfectly equal. We must have knowledge of Equality itself—a non-physical Form.

The Cave allegory (Republic): Prisoners chained in a cave see only shadows cast on the wall. They think shadows are reality. One escapes, sees the fire casting shadows, then emerges to see the sun. The philosopher escapes the cave of appearances to perceive Forms—especially the Form of the Good.

The soul: The soul is immortal and knows the Forms before birth. Learning is recollection (anamnesis). The soul has three parts: reason, spirit, appetite—corresponding to rulers, warriors, and producers in the ideal state.

The politics (Republic): The ideal state is ruled by philosopher-kings who have seen the Good. Below them: guardians (warriors), then producers. Communal property and child-rearing for the upper classes. A meritocratic, authoritarian utopia.`,
			imagePlaceholder: "Plato's Cave allegory illustrated"
		},
		{
			id: 'aristotle-academy',
			date: '~2,367 years ago (367 BCE)',
			title: 'Aristotle Joins the Academy',
			type: 'expansion',
			summary: 'The student who will rival the master.',
			content: `Aristotle (384-322 BCE) comes to Athens at age 17 and studies at the Academy for 20 years.

The background: Aristotle is from Stagira (Macedonia), son of the physician to the Macedonian king. He's not an Athenian citizen—always somewhat an outsider.

The relationship: "Plato is dear to me, but truth is dearer." Aristotle will eventually reject key Platonic doctrines (the Forms, the soul's pre-existence) while developing systematic alternatives.`,
			imagePlaceholder: 'Young Aristotle at the Academy'
		},
		{
			id: 'philip-ii-macedon',
			date: '~2,359 years ago (359 BCE)',
			title: 'Philip II of Macedon',
			type: 'expansion',
			summary: 'The power behind Alexander.',
			content: `Philip II becomes king of Macedon—a semi-Greek kingdom on Greece's northern fringe, often regarded as barbarian by southern Greeks.

The innovations:
Professional standing army (not citizen militia)
The sarissa (5.5-meter pike—twice the hoplite spear length)
Combined arms (heavy infantry, cavalry, light troops, siege equipment)
Military drilling and discipline

The strategy: Philip uses diplomacy, bribery, and marriage alongside war. He conquers or co-opts Greek cities one by one.

The goal: Unite Greece under Macedonian leadership to invade Persia—revenge for 480 BCE, and control of Persian wealth.`,
			imagePlaceholder: 'Philip II and the Macedonian phalanx'
		},
		{
			id: 'aristotle-tutors-alexander',
			date: '~2,343 years ago (343 BCE)',
			title: 'Aristotle Tutors Alexander',
			type: 'expansion',
			summary: 'Philosopher and conqueror.',
			content: `Philip II hires Aristotle to tutor his son Alexander (age 13). For three years, Aristotle teaches the future conqueror at Mieza in Macedonia.

The curriculum: Homer (Alexander sleeps with the Iliad under his pillow), philosophy, medicine, science. Aristotle reportedly prepares an annotated edition of the Iliad for Alexander.

The influence: Alexander develops a passion for Greek culture and a sense of heroic destiny. Whether Aristotle's philosophy shapes Alexander's policies is debated.`,
			imagePlaceholder: 'Aristotle teaching young Alexander'
		},
		{
			id: 'chaeronea',
			date: '~2,338 years ago (338 BCE)',
			title: 'Battle of Chaeronea',
			type: 'expansion',
			summary: 'Greece falls to Macedon.',
			content: `Philip II defeats the combined forces of Athens and Thebes at Chaeronea. Greek independence ends—though the Greeks don't fully realize it.

The battle: The 18-year-old Alexander commands the Macedonian left wing and leads the cavalry charge that breaks the Theban Sacred Band.

The aftermath: Philip organizes the League of Corinth—all Greek states except Sparta under Macedonian leadership. Philip is elected hegemon (leader). The official purpose: invade Persia.`,
			imagePlaceholder: 'Battle of Chaeronea with Alexander leading cavalry'
		},
		{
			id: 'alexander-king',
			date: '~2,336 years ago (336 BCE)',
			title: 'Alexander Becomes King',
			type: 'expansion',
			summary: 'The great campaign begins.',
			content: `Philip II is assassinated at his daughter's wedding. Alexander (age 20) takes the throne, suppresses revolts, destroys Thebes as an example, and prepares the Persian invasion.

The army: ~40,000 infantry, ~5,000 cavalry—modest by Persian standards, but superbly trained and led.

The purpose: Officially, revenge for Xerxes' invasion. Actually, conquest and glory.`,
			imagePlaceholder: 'Alexander crowned king of Macedon'
		},
		{
			id: 'alexander-invades',
			date: '~2,334 years ago (334 BCE)',
			title: 'Alexander Invades Persia',
			type: 'expansion',
			summary: 'The world-conqueror.',
			content: `Alexander crosses into Asia and defeats the Persian satraps at the Granicus River. He liberates Greek cities in Anatolia and moves inland.

Issus (333 BCE): Alexander defeats Darius III in person. Darius flees; his family is captured. Alexander treats them with respect.

Tyre (332 BCE): The island city resists. Alexander builds a causeway, besieges for seven months, and destroys the city.

Egypt (332 BCE): Alexander is welcomed as liberator from Persian rule. He founds Alexandria (one of many), visits the oracle of Ammon at Siwa, and is hailed as son of the god.

Gaugamela (331 BCE): The decisive battle. Darius has perhaps 100,000 troops; Alexander has 47,000. On a plain chosen for Persian chariots, Alexander strikes at Darius directly. Darius again flees. The Persian Empire is broken.`,
			imagePlaceholder: "Alexander's conquests across Persia"
		},
		{
			id: 'alexander-persepolis',
			date: '~2,330 years ago (330 BCE)',
			title: 'Alexander Takes Persepolis',
			type: 'expansion',
			summary: 'The Persian Empire falls.',
			content: `Alexander captures Persepolis—the ceremonial capital—and burns it. Perhaps revenge for Athens; perhaps accident; perhaps policy.

The transformation: Alexander increasingly adopts Persian dress, court ritual, and officials. He encourages intermarriage between Greeks and Persians. The Greeks are uneasy—they didn't conquer Persia to become Persian.

The further east: Alexander pushes into Central Asia, then India. He defeats King Porus at the Hydaspes (326 BCE) but his army refuses to go further.`,
			imagePlaceholder: 'Persepolis burning'
		},
		{
			id: 'alexander-dies',
			date: '~2,323 years ago (323 BCE)',
			title: 'Death of Alexander',
			type: 'collapse',
			summary: 'The empire shatters.',
			content: `Alexander dies in Babylon at age 32—fever, possibly typhoid, possibly poisoning, possibly alcohol. He leaves no clear successor.

The question: "To whom do you leave your empire?" Alexander's alleged answer: "To the strongest."

The result: The generals (Diadochi) fight for 40 years. The empire splits into three main kingdoms:
Ptolemaic Egypt (Ptolemy and successors)
Seleucid Empire (Seleucus and successors—Persia, Mesopotamia, eventually parts of Anatolia)
Antigonid Macedon (Antigonus and successors—Macedon and Greece)

Smaller kingdoms: Pergamon (Anatolia), Bactria (Central Asia), and others.`,
			imagePlaceholder: "Alexander's empire fragmenting after his death"
		},
		{
			id: 'aristotle-lyceum',
			date: '~2,335 years ago (335 BCE)',
			title: 'Aristotle Founds the Lyceum',
			type: 'expansion',
			summary: 'The universal philosopher.',
			content: `After Plato's death and Alexander's departure, Aristotle returns to Athens and founds his own school—the Lyceum (named for a grove sacred to Apollo Lykeios).

The Peripatetics: Aristotle teaches while walking (peripateo = I walk). The school's style is encyclopedic—research in every field.

The scope: Aristotle writes on:
Logic: Syllogisms, categories, valid argument forms (Organon)
Physics: Nature, motion, causation (Physics)
Metaphysics: Being, substance, form and matter (Metaphysics)
Biology: Classification of animals, reproduction, observation (Historia Animalium)
Psychology: The soul and its faculties (De Anima)
Ethics: Virtue, happiness, the good life (Nicomachean Ethics)
Politics: Constitutions, the ideal state (Politics)
Rhetoric: Persuasion (Rhetoric)
Poetics: Tragedy, epic (Poetics)`,
			imagePlaceholder: 'Aristotle teaching at the Lyceum'
		},
		{
			id: 'aristotle-philosophy',
			date: '~2,330 years ago (~330 BCE)',
			title: "Aristotle's Philosophy",
			type: 'expansion',
			summary: 'The alternative to Plato.',
			content: `Aristotle rejects Plato's transcendent Forms. The Forms are IN things, not separate from them.

Substance: Primary reality is individual things (this horse, this human). Form and matter are inseparable in actual existence.

The four causes:
Material: What something is made of (bronze)
Formal: Its structure/essence (the shape of a statue)
Efficient: What brings it about (the sculptor)
Final: Its purpose/goal (to honor the god)

Teleology: Nature acts for ends. The acorn's purpose is to become an oak. Final causes are real and explanatory.

The unmoved mover: The first cause of all motion—itself unmoved, eternal, perfect. It moves by being desired (all things seek perfection). This becomes important for medieval theology.

Ethics: Virtue is the mean between extremes (courage between cowardice and recklessness). The goal is eudaimonia (flourishing)—living well and doing well. Practical wisdom (phronesis) is essential.

Politics: "Man is a political animal." The polis is natural—humans realize themselves in community. The best constitution depends on circumstances; Aristotle analyzes 158 constitutions.`,
			imagePlaceholder: 'Aristotle with his philosophical works'
		},
		{
			id: 'aristotle-dies',
			date: '~2,322 years ago (322 BCE)',
			title: 'Aristotle Dies',
			type: 'expansion',
			summary: 'Philosophy disperses.',
			content: `After Alexander's death, anti-Macedonian feeling in Athens forces Aristotle to flee. He dies in Chalcis at 62, allegedly saying he didn't want Athens to "sin twice against philosophy."

The legacy: Aristotle's works are preserved (eventually) and become the foundation of Western science and philosophy until the Scientific Revolution. "The Philosopher" in medieval usage means Aristotle.`,
			imagePlaceholder: 'Aristotle in his final years'
		},

		// PART TWO: THE HELLENISTIC WORLD (323-146 BCE)
		{
			id: 'hellenistic-culture',
			date: '~2,320 years ago (~320 BCE)',
			title: 'Hellenistic Culture Spreads',
			type: 'expansion',
			summary: 'Greek becomes universal.',
			content: `Alexander's conquests spread Greek language, culture, and ideas from Egypt to Afghanistan. Local elites adopt Greek—a common culture (koine) emerges.

The cities: New cities (many named Alexandria) are founded throughout the former Persian Empire. Greek-style gymnasia, theaters, and temples appear in Babylon, Bactria, Egypt.

The synthesis: Greek culture absorbs and is absorbed by local traditions. Egyptian Isis becomes Greco-Egyptian Isis. Persian magi interact with Greek philosophers. Indian influences may reach West.

The language: Koine Greek ("common Greek") becomes the lingua franca from Rome to India. The New Testament will be written in Koine Greek.`,
			imagePlaceholder: 'Greek-style city in the Hellenistic East'
		},
		{
			id: 'epicurus-garden',
			date: '~2,307 years ago (307 BCE)',
			title: 'Epicurus Founds the Garden',
			type: 'expansion',
			summary: 'Pleasure and tranquility.',
			content: `Epicurus (341-270 BCE) establishes his school in Athens—the Garden (Kepos). Unlike the Academy and Lyceum, the Garden admits women and slaves.

The physics: Epicurus adopts Democritean atomism. Everything is atoms and void. The gods exist but don't intervene (they're too happy to bother with us). Death is simply dissolution of atoms—"nothing to us."

The ethics: The goal is pleasure (hedone)—but not hedonism in the vulgar sense. The highest pleasure is ataraxia (tranquility)—freedom from disturbance. This requires:
Limiting desires to what's natural and necessary
Friendship (the greatest of all goods)
Withdrawal from politics (which disturbs peace)
Philosophy (which dispels fears)

The tetrapharmakos (four-part remedy):
Don't fear the gods
Don't fear death
What is good is easy to get
What is terrible is easy to endure`,
			imagePlaceholder: "Epicurus in his Garden with followers"
		},
		{
			id: 'stoicism-founded',
			date: '~2,301 years ago (301 BCE)',
			title: 'Stoicism Founded',
			type: 'expansion',
			summary: 'Virtue and acceptance.',
			content: `Zeno of Citium (334-262 BCE) teaches at the Stoa Poikile (Painted Porch) in Athens. Stoicism becomes the dominant philosophy of the Hellenistic and Roman world.

The physics: The cosmos is a living, rational organism—pervaded by logos/pneuma (reason/breath). Everything happens according to fate/providence. The universe is cyclically destroyed and reborn.

The ethics: The goal is virtue (arete)—living according to nature/reason. External things (health, wealth, status) are "indifferent"—neither good nor bad. Only virtue is good; only vice is bad.

The practice:
Accept what happens (amor fati—love of fate)
Control what you can (your judgments, intentions)
Don't be disturbed by what you can't control
Fulfill your role in the cosmic order

Later Stoics: Cleanthes, Chrysippus (systematizer), Panaetius (brings Stoicism to Rome), Posidonius, Epictetus (slave who became teacher), Marcus Aurelius (emperor who was philosopher).`,
			imagePlaceholder: 'Zeno teaching at the Painted Porch'
		},
		{
			id: 'skepticism',
			date: '~2,300 years ago (~300 BCE)',
			title: 'Skepticism Develops',
			type: 'expansion',
			summary: 'Suspending judgment.',
			content: `Pyrrho of Elis (360-270 BCE) teaches suspension of judgment (epochē). We cannot know reality; every argument has an equal counter-argument; peace comes from not committing.

The ten modes: Later skeptics develop ten arguments for suspending judgment—different appearances to different senses, species, individuals, circumstances, etc.

The goal: Ataraxia (tranquility)—the same goal as Epicureanism, achieved differently. Don't commit to beliefs; don't be disturbed by questions you can't answer.

The Academic skeptics: The Academy under Arcesilaus and Carneades adopts skepticism. Plato's school becomes anti-dogmatic, arguing against all positive claims.`,
			imagePlaceholder: 'Pyrrho in contemplative doubt'
		},
		{
			id: 'cynicism',
			date: '~2,300 years ago (~300 BCE)',
			title: 'Cynicism',
			type: 'expansion',
			summary: 'The dog philosophers.',
			content: `The Cynics (from kynikos, "dog-like") reject social conventions and live according to nature.

Diogenes of Sinope (412-323 BCE): The exemplar. Lives in a barrel, owns nothing, masturbates in public ("If only I could satisfy hunger by rubbing my stomach"), tells Alexander to stop blocking his sunlight. "I am looking for an honest man" (with a lamp in daylight).

The teaching: Nature provides what we need. Civilization creates artificial desires that enslave us. Live simply, naturally, shamelessly. Virtue is self-sufficiency.

The influence: Cynicism influences Stoicism (Zeno studied with a Cynic). The radical rejection of convention anticipates later counter-cultural movements.`,
			imagePlaceholder: 'Diogenes in his barrel'
		},
		{
			id: 'euclid-elements',
			date: '~2,300 years ago (~300 BCE)',
			title: "Euclid's Elements",
			type: 'tech',
			summary: 'Geometry systematized.',
			content: `Euclid of Alexandria compiles the Elements—13 books systematizing Greek geometry. Starting from definitions, postulates, and axioms, Euclid derives hundreds of propositions through rigorous proof.

The content:
Plane geometry (Books 1-6)
Number theory (Books 7-9)
Incommensurables/irrationals (Book 10)
Solid geometry (Books 11-13)

The method: Axiomatic-deductive. Start with obvious truths; derive everything else by logic. This method becomes the model for rigorous knowledge.

The duration: The Elements is the most successful textbook ever written. It's used continuously for 2,300 years—Lincoln studies it; 19th-century students still learn geometry from Euclid.`,
			imagePlaceholder: "Euclid's geometric proofs"
		},
		{
			id: 'archimedes-born',
			date: '~2,287 years ago (287 BCE)',
			title: 'Archimedes Born',
			type: 'tech',
			summary: 'The greatest ancient scientist.',
			content: `Archimedes of Syracuse (287-212 BCE) combines mathematics, physics, and engineering at the highest level.

The mathematics:
Calculates pi with new precision (between 3 10/71 and 3 1/7)
Measures curved surfaces and volumes (spheres, cylinders, parabolas)
Anticipates integral calculus (method of exhaustion)
Sand Reckoner: calculates grains of sand to fill the universe (developing large-number notation)

The physics:
Law of the lever: "Give me a place to stand and I will move the earth"
Principle of buoyancy (Archimedes' principle): the "Eureka!" story
Center of gravity calculations

The engineering:
Archimedean screw (water-lifting device)
Compound pulleys
Defensive weapons for Syracuse (burning mirrors? catapults? claws that lifted ships?)

The death: When Romans take Syracuse, a soldier kills Archimedes (allegedly while he's working on a geometry problem: "Do not disturb my circles").`,
			imagePlaceholder: 'Archimedes with his inventions'
		},
		{
			id: 'library-alexandria',
			date: '~2,280 years ago (~280 BCE)',
			title: 'Library of Alexandria',
			type: 'tech',
			summary: 'The greatest library of antiquity.',
			content: `Ptolemy I (or Ptolemy II) founds the Library of Alexandria—part of the Mouseion (Temple of the Muses), a research institution.

The ambition: Collect all books in the world. Agents buy manuscripts everywhere. Ships arriving in Alexandria have their books copied (sometimes the original is kept, copy returned).

The holdings: Perhaps 400,000-700,000 scrolls at peak. Every significant Greek author is represented. Translations (including the Septuagint—Greek Old Testament) are made.

The scholars:
Zenodotus (first librarian, textual criticism of Homer)
Callimachus (cataloger, poet)
Apollonius of Rhodes (Argonautica)
Eratosthenes (measured Earth's circumference)
Aristarchus of Samothrace (textual criticism)

The loss: The library's destruction is gradual and debated. Caesar's fire (48 BCE) damages it. Christian mob destroys the Serapeum (391 CE). Arab conquest (642 CE)? Probably already diminished. The loss is incalculable.`,
			imagePlaceholder: 'Library of Alexandria with scholars'
		},
		{
			id: 'eratosthenes',
			date: '~2,250 years ago (~250 BCE)',
			title: 'Eratosthenes Measures the Earth',
			type: 'tech',
			summary: 'The planet quantified.',
			content: `Eratosthenes of Cyrene, librarian at Alexandria, calculates the Earth's circumference using geometry and observation.

The method:
At Syene (Aswan), the sun is directly overhead at noon on summer solstice (no shadow in a well)
At Alexandria (north of Syene), a vertical stick casts a shadow at the same moment
The shadow angle is ~7.2° (1/50 of a circle)
The distance Syene-Alexandria is ~5,000 stadia
Therefore, Earth's circumference = 50 × 5,000 = ~250,000 stadia

The result: Depending on which "stadion" Eratosthenes used, his result is within 1-16% of the correct value (~40,000 km). Remarkably accurate.

The implication: The Earth is spherical, and we know how big. This knowledge will matter when Columbus proposes sailing west.`,
			imagePlaceholder: "Eratosthenes' method for measuring Earth"
		},
		{
			id: 'aristarchus-heliocentric',
			date: '~2,240 years ago (~240 BCE)',
			title: "Aristarchus's Heliocentric Theory",
			type: 'tech',
			summary: 'The sun at the center.',
			content: `Aristarchus of Samos proposes that the Earth orbits the sun—1,800 years before Copernicus.

The evidence: His heliocentric work is lost; we know of it from Archimedes' Sand Reckoner: "Aristarchus of Samos brought out a book... His hypotheses are that the fixed stars and the sun remain unmoved, that the earth revolves about the sun on the circumference of a circle..."

The reception: Almost no one accepts heliocentrism. Aristotelian physics (Earth as center) and common sense prevail. Geocentrism dominates until Copernicus.

The lesson: Being right isn't enough. Without a physics that can explain how Earth moves without us feeling it, heliocentrism seems absurd.`,
			imagePlaceholder: 'Heliocentric model of Aristarchus'
		},
		{
			id: 'siege-syracuse',
			date: '~2,212 years ago (212 BCE)',
			title: 'Roman Siege of Syracuse',
			type: 'tech',
			summary: 'West meets East.',
			content: `Rome besieges Syracuse (allied with Carthage in the Second Punic War). Archimedes' war machines terrify the Romans:
Catapults calibrated for different ranges
Cranes that lift ships and drop them
(Possibly) burning mirrors focusing sunlight

The conquest: Syracuse falls after two years. Archimedes is killed. Roman general Marcellus reportedly mourns him.

The transfer: Rome captures Greek art, Greek books, Greek slaves. The conquest of the Greek world begins—militarily and culturally. "Captive Greece captured her fierce conqueror."`,
			imagePlaceholder: "Archimedes' war machines defending Syracuse"
		},

		// PART THREE: ROMAN ASCENT (264-31 BCE)
		{
			id: 'rome-founding',
			date: '~2,753 years ago (753 BCE)',
			title: 'Traditional Founding of Rome',
			type: 'expansion',
			summary: 'The legend.',
			content: `According to tradition, Romulus founds Rome on April 21, 753 BCE—killing his brother Remus in the process. The date is legendary but becomes official.

The myth: Romulus and Remus are sons of Mars, raised by a she-wolf. The founding involves fratricide, rape (Sabine women), and warfare. Rome's origins are violent.

The reality: Archaeological evidence shows Latin settlement on the Palatine Hill by ~1000 BCE. Rome develops from a village to a city over centuries.`,
			imagePlaceholder: 'Romulus and Remus with the she-wolf'
		},
		{
			id: 'roman-republic',
			date: '~2,509 years ago (509 BCE)',
			title: 'Roman Republic Established',
			type: 'expansion',
			summary: 'The kings expelled.',
			content: `According to tradition, the Romans expel their last king (Tarquinius Superbus) and establish the Republic. Two consuls (elected annually) replace the king.

The structure:
Consuls: Two, elected annually, hold executive power (imperium)
Senate: Council of elders (former magistrates), advisory but immensely influential
Assemblies: Popular assemblies elect magistrates and pass laws
Tribunes: Representatives of the plebeians, can veto actions

The conflict of orders: Patricians (aristocrats) vs. plebeians (commoners). Over two centuries, plebeians gain political rights—tribunes, access to offices, written law (Twelve Tables, 450 BCE).`,
			imagePlaceholder: 'Roman Republic government structure'
		},
		{
			id: 'rome-veii',
			date: '~2,396 years ago (396 BCE)',
			title: 'Rome Conquers Veii',
			type: 'expansion',
			summary: 'Italian expansion begins.',
			content: `Rome captures Veii—a major Etruscan city—after a ten-year siege. This marks Rome's emergence as a major Italian power.

The pattern: Rome expands through conquest, alliance, and absorption. Conquered peoples receive various statuses—some become citizens, some allies, some subjects. The network grows.`,
			imagePlaceholder: 'Roman siege of Veii'
		},
		{
			id: 'gauls-sack-rome',
			date: '~2,390 years ago (390 BCE)',
			title: 'Gauls Sack Rome',
			type: 'collapse',
			summary: 'The trauma remembered.',
			content: `Celtic Gauls defeat the Roman army at the Allia River and sack Rome. According to legend, geese sacred to Juno warn of night attack on the Capitol, saving the citadel.

The ransom: The Romans pay the Gauls to leave. When Romans complain about false weights, the Gallic chief Brennus throws his sword on the scale: "Vae victis!" (Woe to the conquered!)

The response: Rome rebuilds, militarizes, and never forgets. The "metus Gallicus" (fear of Gauls) motivates expansion. Never again will Rome be so vulnerable.`,
			imagePlaceholder: 'Gauls sacking Rome'
		},
		{
			id: 'samnite-wars',
			date: '~2,343 years ago (343-290 BCE)',
			title: 'Samnite Wars',
			type: 'expansion',
			summary: 'Central Italy conquered.',
			content: `Three wars against the Samnites (mountain people of central-south Italy) establish Roman dominance over the Italian peninsula.

The innovation: Roman roads (beginning of the Via Appia, 312 BCE), colonies, alliances. The infrastructure of empire develops.

The outcome: By 290 BCE, Rome controls central Italy. Greek cities of the south and Gauls of the north remain.`,
			imagePlaceholder: 'Roman legions fighting Samnites'
		},
		{
			id: 'pyrrhic-war',
			date: '~2,280 years ago (280-275 BCE)',
			title: 'Pyrrhic War',
			type: 'expansion',
			summary: 'Victory at a cost.',
			content: `Pyrrhus of Epirus (Greek king) invades Italy to help Greek cities against Rome. He wins battles at Heraclea and Asculum but suffers heavy losses.

The phrase: After Asculum, Pyrrhus allegedly says: "One more such victory and I shall be lost." A "Pyrrhic victory" is one too costly to be worthwhile.

The outcome: Pyrrhus withdraws. Rome absorbs the Greek cities of southern Italy. Rome now controls the peninsula—and borders Carthaginian Sicily.`,
			imagePlaceholder: 'Pyrrhus in battle against Rome'
		},
		{
			id: 'first-punic-war',
			date: '~2,264 years ago (264 BCE)',
			title: 'First Punic War Begins',
			type: 'expansion',
			summary: 'Rome vs. Carthage.',
			content: `Rome and Carthage—the two great Western Mediterranean powers—collide over Sicily. The First Punic War (264-241 BCE) is primarily naval.

The challenge: Rome has no navy. Carthage has the Mediterranean's finest fleet.

The response: Rome builds a fleet from scratch, adds the corvus (boarding bridge) to neutralize Carthaginian seamanship, and fights.

The outcome: Rome wins, takes Sicily (Rome's first overseas province), and exacts massive indemnity. Carthage survives but is weakened.`,
			imagePlaceholder: 'Roman and Carthaginian fleets at war'
		},
		{
			id: 'roman-naval-innovation',
			date: '~2,241 years ago (241 BCE)',
			title: 'Roman Naval Innovation',
			type: 'tech',
			summary: 'Learning to fight at sea.',
			content: `The First Punic War forces Roman naval development:

The corvus: A boarding bridge with a spike that locks into enemy decks. Roman soldiers can fight ship-to-ship combat like land battle.

Mass production: Rome builds hundreds of ships, losing entire fleets to storms and rebuilding. Industrial capacity wins over seamanship.

The legacy: Rome becomes a naval power. The Mediterranean eventually becomes "Mare Nostrum" (Our Sea).`,
			imagePlaceholder: 'Roman ship with corvus boarding bridge'
		},
		{
			id: 'hannibal-alps',
			date: '~2,218 years ago (218 BCE)',
			title: 'Hannibal Crosses the Alps',
			type: 'expansion',
			summary: 'The greatest threat Rome faces.',
			content: `Hannibal Barca leads a Carthaginian army (including war elephants) from Spain, across southern Gaul, and over the Alps into Italy.

The losses: Perhaps half the army dies in the crossing—cold, hostile tribes, terrain. But Hannibal arrives with ~26,000 soldiers.

The strategy: Hannibal can't attack Carthage's walls; he'll attack Rome's alliances. Defeat Roman armies, peel off Italian allies, and strangle Rome.`,
			imagePlaceholder: 'Hannibal crossing the Alps with elephants'
		},
		{
			id: 'cannae',
			date: '~2,216 years ago (216 BCE)',
			title: 'Battle of Cannae',
			type: 'collapse',
			summary: "Rome's greatest defeat.",
			content: `At Cannae in southern Italy, Hannibal annihilates a Roman army of ~80,000. Perhaps 50,000-70,000 Romans die in a single day.

The tactics: Hannibal's center retreats deliberately, drawing Romans in. His African infantry wheels inward on both flanks. Roman cavalry is routed. The Romans are surrounded and slaughtered.

The aftermath: Some Italian allies defect to Hannibal. Rome refuses to negotiate. The Senate decrees: no mourning beyond 30 days. The war continues.`,
			imagePlaceholder: "Hannibal's double envelopment at Cannae"
		},
		{
			id: 'zama',
			date: '~2,202 years ago (202 BCE)',
			title: 'Battle of Zama',
			type: 'expansion',
			summary: 'Rome defeats Hannibal.',
			content: `Roman general Scipio Africanus defeats Hannibal at Zama in North Africa. The Second Punic War ends.

The terms: Carthage loses Spain, its navy, its war elephants. It pays massive indemnity. It becomes a Roman client, forbidden to make war without Roman permission.

The outcome: Rome is now the dominant Western Mediterranean power. Hannibal flees and eventually commits suicide (183 BCE) to avoid capture.`,
			imagePlaceholder: 'Scipio defeating Hannibal at Zama'
		},
		{
			id: 'roman-concrete',
			date: '~2,200 years ago (~200 BCE)',
			title: 'Roman Concrete',
			type: 'tech',
			summary: 'The building revolution.',
			content: `Romans develop opus caementicium—concrete made from volcanic ash (pozzolana), lime, and aggregate. Unlike Greek marble architecture, Roman concrete allows new forms.

The properties:
Sets underwater (pozzolanic reaction)
Can be cast in any shape
Relatively cheap
Extremely durable

The applications:
Domes (impossible in stone on this scale)
Vaults
Harbors (underwater construction)
Aqueducts
The Pantheon (dome still standing after 2,000 years)

The secret lost: Roman concrete's exact formula was lost for centuries. Modern analysis shows it's actually stronger than modern Portland cement in some applications.`,
			imagePlaceholder: 'Roman concrete construction'
		},
		{
			id: 'roman-roads',
			date: '~2,200 years ago (~200 BCE)',
			title: 'Roman Roads',
			type: 'tech',
			summary: 'The empire connected.',
			content: `The Roman road network expands—eventually ~400,000 km of roads, ~80,000 km paved.

The construction:
Surveyed for straightness
Foundation of large stones
Layers of gravel and sand
Paving stones on top
Drainage ditches
Milestones

The function:
Military movement (legions can march quickly)
Administration (messages, officials)
Trade (though water transport remains cheaper)
Integration (the empire becomes traversable)

The saying: "All roads lead to Rome."`,
			imagePlaceholder: 'Roman road with milestone'
		},
		{
			id: 'roman-aqueducts',
			date: '~2,200 years ago (~200 BCE)',
			title: 'Roman Aqueducts',
			type: 'tech',
			summary: 'Water for cities.',
			content: `Rome builds aqueducts to supply its growing population with fresh water. By the imperial period, Rome has 11 aqueducts delivering ~1 million cubic meters per day.

The engineering:
Gravity-fed (slight downward slope over miles)
Tunnels through mountains
Bridges across valleys
Siphons (inverted siphons for crossing depressions)
Settling tanks and distribution networks

The hygiene: Roman water supply, public baths, and sewers (the Cloaca Maxima) create public health infrastructure unmatched until the 19th century.`,
			imagePlaceholder: 'Roman aqueduct spanning a valley'
		},
		{
			id: 'rome-defeats-macedon',
			date: '~2,197 years ago (197 BCE)',
			title: 'Rome Defeats Macedon',
			type: 'expansion',
			summary: 'Greece falls.',
			content: `Rome defeats Philip V of Macedon at Cynoscephalae. Macedonia becomes a client kingdom, then a province (148 BCE).

The declaration: At the Isthmian Games (196 BCE), Roman general Flamininus declares Greece "free"—meaning free from Macedonian rule, under Roman protection. Greeks celebrate; the reality is Roman dominance.`,
			imagePlaceholder: 'Roman victory over Macedonian phalanx'
		},
		{
			id: 'rome-defeats-seleucids',
			date: '~2,190 years ago (190 BCE)',
			title: 'Rome Defeats the Seleucids',
			type: 'expansion',
			summary: 'Eastern expansion.',
			content: `Rome defeats Antiochus III (Seleucid king) at Magnesia. The Seleucid Empire (heir to Alexander's eastern conquests) is pushed out of Anatolia and reduced.

The pattern: Rome projects power eastward without yet annexing territory. Client kingdoms and alliances precede direct rule.`,
			imagePlaceholder: 'Battle of Magnesia'
		},
		{
			id: 'pydna',
			date: '~2,168 years ago (168 BCE)',
			title: 'Battle of Pydna',
			type: 'expansion',
			summary: 'Macedon finished.',
			content: `Rome destroys the Macedonian army at Pydna. Macedonia is divided into four republics, then annexed (148 BCE) after a revolt.

The library: Aemilius Paullus, the Roman general, takes the royal library—bringing Greek books to Rome. Cultural conquest accompanies military conquest.`,
			imagePlaceholder: 'Roman legions at Pydna'
		},
		{
			id: 'maccabean-revolt',
			date: '~2,167 years ago (167 BCE)',
			title: 'Maccabean Revolt',
			type: 'expansion',
			summary: 'Jewish independence.',
			content: `Antiochus IV Epiphanes (Seleucid king) attempts to suppress Jewish religion—banning circumcision, sabbath observance, Torah study; erecting an altar to Zeus in the Temple.

The revolt: Judah Maccabee ("the Hammer") leads a guerrilla campaign. Against expectations, the Jews defeat Seleucid armies.

Hanukkah: The Temple is purified and rededicated (164 BCE). The miracle of oil (one day's oil lasting eight days) is commemorated in the festival.

The Hasmonean dynasty: The Maccabees establish an independent Jewish kingdom (lasting until 63 BCE when Rome intervenes). High priest and king are combined—a controversial innovation.`,
			imagePlaceholder: 'Maccabees reclaiming the Temple'
		},
		{
			id: 'carthage-destroyed',
			date: '~2,149 years ago (149-146 BCE)',
			title: 'Third Punic War / Destruction of Carthage',
			type: 'collapse',
			summary: 'Carthago delenda est.',
			content: `Rome attacks Carthage (which has revived economically) on a pretext. After a three-year siege, Carthage is destroyed.

The destruction: The city is razed. The population is killed or enslaved. The territory becomes the province of Africa. According to legend, the fields are sown with salt (probably apocryphal).

The phrase: Cato the Elder ends every Senate speech with "Carthago delenda est" (Carthage must be destroyed). Even discussing unrelated topics.

The same year (146 BCE): Rome also destroys Corinth, ending Greek independence definitively.`,
			imagePlaceholder: 'Destruction of Carthage'
		},
		{
			id: 'silk-road',
			date: '~2,130 years ago (~130 BCE)',
			title: 'Silk Road Develops',
			type: 'tech',
			summary: 'East meets West.',
			content: `Trade routes connecting China to the Mediterranean consolidate. Chinese silk, Indian spices, and other luxury goods flow west; Roman glass and gold flow east.

The Han connection: Zhang Qian's missions from Han China (138-126 BCE) open the western routes. The Parthian Empire controls the central section.

The intermediaries: Few travelers traverse the entire route. Goods pass through many hands—each middleman adding cost. Parthia profits from controlling the bottleneck.

The exchange: Not just goods—ideas, technologies, religions, diseases travel the routes. Buddhism will reach China this way. So will plague.`,
			imagePlaceholder: 'Silk Road caravan'
		},
		{
			id: 'tiberius-gracchus',
			date: '~2,133 years ago (133 BCE)',
			title: 'Tiberius Gracchus',
			type: 'stress',
			summary: 'Reform and violence.',
			content: `Tiberius Gracchus, tribune of the plebs, proposes land reform—redistributing public land to poor Romans. The Senate resists.

The conflict: Tiberius seeks re-election as tribune (unconstitutional). Senators beat him to death with chair legs in a riot. First political violence in Rome in centuries.

The precedent: Violence becomes a political tool. The Republic's norms crack.`,
			imagePlaceholder: 'Death of Tiberius Gracchus'
		},
		{
			id: 'gaius-gracchus',
			date: '~2,121 years ago (121 BCE)',
			title: 'Gaius Gracchus',
			type: 'stress',
			summary: 'Reform escalates.',
			content: `Gaius Gracchus (Tiberius's brother) pushes more radical reforms—grain subsidies, road building, citizenship extension, judicial reform.

The conflict: The Senate passes a senatus consultum ultimum (emergency decree) authorizing force. Gaius is killed; 3,000 supporters are executed.

The pattern: Reform through constitutional means is failing. Ambitious men will seek power through armies.`,
			imagePlaceholder: 'Gaius Gracchus addressing the people'
		},
		{
			id: 'marius-reforms',
			date: '~2,107 years ago (107 BCE)',
			title: "Marius's Military Reforms",
			type: 'expansion',
			summary: 'The army transforms.',
			content: `Gaius Marius, facing manpower shortages, recruits landless poor into the legions—previously, property ownership was required.

The change:
Soldiers are now professional, long-service
They depend on their commander for pay, land grants, retirement
Loyalty shifts from Rome to the general
Armies become personal power bases

The consequence: Marius's army defeats Jugurtha (North Africa) and Germanic tribes (Cimbri, Teutones). But the loyal-to-commander model will produce civil wars.`,
			imagePlaceholder: "Marius's reformed legions"
		},
		{
			id: 'sulla-marches',
			date: '~2,088 years ago (88 BCE)',
			title: 'Sulla Marches on Rome',
			type: 'collapse',
			summary: 'Civil war begins.',
			content: `Lucius Cornelius Sulla, denied command of a war against Mithridates, marches his legions on Rome—the first Roman general to do so.

The precedent: A Roman army attacks Rome. The constitutional order is violated by force. What Sulla does, others will do.

The dictatorship: After winning a civil war against Marius's supporters, Sulla becomes dictator, proscribes enemies (legalized murder and property seizure), reforms the constitution, and—remarkably—retires.`,
			imagePlaceholder: 'Sulla marching on Rome'
		},
		{
			id: 'spartacus',
			date: '~2,073 years ago (73-71 BCE)',
			title: 'Spartacus Revolt',
			type: 'stress',
			summary: 'The slaves rise.',
			content: `Spartacus, a gladiator, leads a massive slave revolt. At its peak, the rebel army numbers ~120,000.

The campaign: The slaves defeat several Roman armies. Italy is terrorized. For two years, Rome struggles to suppress the revolt.

The suppression: Marcus Licinius Crassus defeats Spartacus (who dies in battle). 6,000 captured slaves are crucified along the Appian Way from Capua to Rome.`,
			imagePlaceholder: 'Spartacus leading the slave revolt'
		},
		{
			id: 'pompey-east',
			date: '~2,063 years ago (63 BCE)',
			title: "Pompey's Eastern Settlement",
			type: 'expansion',
			summary: 'Rome reorganizes the East.',
			content: `Pompey the Great conquers the Seleucid remnant, annexes Syria, and reorganizes the East into Roman provinces and client kingdoms.

Judea: Pompey intervenes in a Hasmonean civil war, captures Jerusalem, and enters the Temple (shocking Jews). Judea becomes a Roman client kingdom.

The result: Rome now controls the entire Mediterranean. The Hellenistic kingdoms founded after Alexander's death have all fallen to Rome.`,
			imagePlaceholder: 'Pompey entering the Temple in Jerusalem'
		},
		{
			id: 'cicero-catiline',
			date: '~2,063 years ago (63 BCE)',
			title: 'Cicero and the Catiline Conspiracy',
			type: 'expansion',
			summary: 'Rhetoric and crisis.',
			content: `Marcus Tullius Cicero, consul, exposes and suppresses a conspiracy led by Catiline to overthrow the government. His Catilinarian Orations are masterpieces of invective.

The execution: Cicero executes conspirators without trial—constitutionally questionable. This will be used against him later.

The significance: Cicero represents the old Republic—government by debate, persuasion, constitutional norms. But the forces destroying the Republic are stronger than rhetoric.`,
			imagePlaceholder: 'Cicero denouncing Catiline in the Senate'
		},
		{
			id: 'first-triumvirate',
			date: '~2,060 years ago (60 BCE)',
			title: 'First Triumvirate',
			type: 'expansion',
			summary: 'Three men divide power.',
			content: `Julius Caesar, Pompey, and Crassus form an informal alliance—the First Triumvirate. They dominate Roman politics through their combined wealth, armies, and influence.

The arrangement: Caesar gets a consulship and military command in Gaul. Pompey gets land for his veterans. Crassus gets eastern business opportunities.

The fragility: The arrangement depends on continued cooperation. When interests diverge, civil war follows.`,
			imagePlaceholder: 'Caesar, Pompey, and Crassus'
		},
		{
			id: 'gallic-wars',
			date: '~2,058-2,050 years ago (58-50 BCE)',
			title: "Caesar's Gallic Wars",
			type: 'expansion',
			summary: 'Gaul conquered.',
			content: `Julius Caesar conquers Gaul (modern France, Belgium, parts of Germany and Britain). The campaigns are brutal and brilliant.

The numbers (Caesar's, probably exaggerated): One million Gauls killed, another million enslaved. Entire tribes destroyed or displaced.

The Commentarii: Caesar writes his own account—the Commentarii de Bello Gallico. Clear Latin prose, self-promoting but valuable.

The result: Caesar builds a loyal, experienced army. He accumulates enormous wealth. He becomes too powerful to fit within the Republic.`,
			imagePlaceholder: "Caesar's conquest of Gaul"
		},
		{
			id: 'rubicon',
			date: '~2,049 years ago (49 BCE)',
			title: 'Caesar Crosses the Rubicon',
			type: 'collapse',
			summary: 'The die is cast.',
			content: `The Senate orders Caesar to disband his army. Caesar marches south, crossing the Rubicon River (the boundary between his province and Italy) with the 13th Legion.

The phrase: "Alea iacta est" (The die is cast). Civil war is inevitable.

The war: Caesar defeats Pompey at Pharsalus (48 BCE). Pompey flees to Egypt and is murdered. Caesar pursues, becomes entangled with Cleopatra, conquers Egypt, defeats remaining Pompeians in Africa and Spain.`,
			imagePlaceholder: 'Caesar crossing the Rubicon'
		},
		{
			id: 'caesar-dictator',
			date: '~2,045 years ago (45 BCE)',
			title: 'Caesar as Dictator',
			type: 'expansion',
			summary: 'Rome remade.',
			content: `Caesar is dictator perpetuo (dictator in perpetuity). He reforms the calendar (Julian calendar, still the basis of ours), settles veterans, extends citizenship, plans conquests.

The question: Is he becoming a king? Romans have hated kingship since 509 BCE. Caesar refuses the crown publicly but accumulates royal honors.`,
			imagePlaceholder: 'Caesar as dictator of Rome'
		},
		{
			id: 'caesar-assassination',
			date: '~2,044 years ago (44 BCE)',
			title: 'Assassination of Julius Caesar',
			type: 'collapse',
			summary: 'The Ides of March.',
			content: `On March 15, a group of senators stab Caesar to death in the Senate—23 wounds. Brutus and Cassius lead the conspiracy.

The motive: Save the Republic from tyranny.

The result: The opposite. The Republic dies in the civil wars following Caesar's death. The conspirators are hunted down and killed.`,
			imagePlaceholder: 'Assassination of Caesar'
		},
		{
			id: 'second-triumvirate',
			date: '~2,043 years ago (43 BCE)',
			title: 'Second Triumvirate',
			type: 'expansion',
			summary: 'Legalized tyranny.',
			content: `Octavian (Caesar's adopted heir), Mark Antony, and Lepidus form the Second Triumvirate—legally constituted, with power to make laws.

The proscriptions: The triumvirs proscribe enemies—including Cicero, who is killed. His head and hands are displayed in the Forum.

Philippi (42 BCE): The triumvirs defeat Brutus and Cassius. The Republic's last defenders are dead.`,
			imagePlaceholder: 'Octavian, Antony, and Lepidus'
		},
		{
			id: 'actium',
			date: '~2,031 years ago (31 BCE)',
			title: 'Battle of Actium',
			type: 'expansion',
			summary: 'Octavian triumphs.',
			content: `Octavian defeats Antony and Cleopatra at Actium (naval battle off Greece). Antony and Cleopatra flee to Egypt and commit suicide (30 BCE).

The result: Octavian controls the entire Roman world. Egypt is annexed—the last Hellenistic kingdom falls.`,
			imagePlaceholder: 'Battle of Actium'
		},
		{
			id: 'augustus',
			date: '~2,027 years ago (27 BCE)',
			title: 'Augustus: The Roman Empire Begins',
			type: 'expansion',
			summary: 'Republic to Principate.',
			content: `Octavian "restores the Republic" but retains control of the armies and key provinces. The Senate grants him the title "Augustus." He is princeps (first citizen)—not king, but effectively emperor.

The fiction: Augustus maintains republican forms—consuls, Senate, assemblies. But he controls everything that matters.

The reality: The Roman Republic is dead. The Roman Empire has begun.

The Pax Romana: Augustus's reign (27 BCE - 14 CE) begins two centuries of relative peace and prosperity—the Roman Peace.`,
			imagePlaceholder: 'Augustus as first emperor'
		},

		// PART FOUR: INDIA AND CHINA (500 BCE - 0 CE)
		// INDIA: FROM BUDDHA TO ASHOKA
		{
			id: 'sixteen-mahajanapadas',
			date: '~2,400 years ago (~400 BCE)',
			title: 'Sixteen Mahajanapadas',
			type: 'expansion',
			summary: "India's competing kingdoms.",
			content: `Northern India is divided among sixteen major kingdoms (mahajanapadas) and many smaller states. Among the most important:

Magadha: Dominant, centered on modern Bihar
Kosala: Important, eventually absorbed by Magadha
Vatsa, Avanti, Kuru, Panchala: Other significant states

The pattern: Like Warring States China or Archaic Greece, competing states drive innovation—military, administrative, intellectual.`,
			imagePlaceholder: 'Map of the sixteen Mahajanapadas'
		},
		{
			id: 'nanda-empire',
			date: '~2,350 years ago (~350 BCE)',
			title: 'Nanda Empire',
			type: 'expansion',
			summary: "India's first great empire.",
			content: `The Nanda dynasty unites much of northern India—the largest empire in Indian history to that point. Centered on Magadha, commanding enormous armies.

The wealth: Greek sources describe the Nandas as fabulously wealthy, with armies of 200,000 infantry, 20,000 cavalry, 2,000 chariots, 3,000 elephants.

The significance: The Nandas demonstrate that subcontinental empire is possible. Their successors will achieve it.`,
			imagePlaceholder: 'Nanda Empire at its height'
		},
		{
			id: 'chandragupta-maurya',
			date: '~2,321 years ago (321 BCE)',
			title: 'Chandragupta Maurya',
			type: 'expansion',
			summary: 'India united.',
			content: `Chandragupta Maurya overthrows the Nanda dynasty and founds the Mauryan Empire—the first empire to unite most of the Indian subcontinent.

The meeting: Chandragupta allegedly meets Alexander the Great in 326 BCE. He models his conquest partly on Macedonian methods.

The extent: The Mauryan Empire eventually controls: the entire Gangetic plain, much of central India, the northwest (after defeating Seleucus Nicator), parts of Afghanistan.`,
			imagePlaceholder: 'Chandragupta Maurya founding the empire'
		},
		{
			id: 'arthashastra',
			date: '~2,300 years ago (~300 BCE)',
			title: "Kautilya's Arthashastra",
			type: 'expansion',
			summary: 'The science of politics.',
			content: `The Arthashastra—attributed to Kautilya (Chanakya), Chandragupta's advisor—is a comprehensive treatise on statecraft.

The content:
How to administer an empire
Taxation and treasury management
Spy networks and intelligence
Foreign policy (alliance, war, peace, neutrality)
Criminal law and punishment
Economic regulation

The realism: The Arthashastra is coldly pragmatic—often compared to Machiavelli. "The enemy of my enemy is my friend." Morality serves the state.`,
			imagePlaceholder: 'Kautilya advising the king'
		},
		{
			id: 'ashoka-emperor',
			date: '~2,268 years ago (268 BCE)',
			title: 'Ashoka Becomes Emperor',
			type: 'expansion',
			summary: 'The convert king.',
			content: `Ashoka, grandson of Chandragupta, takes the throne after a bloody succession struggle. He will transform himself and his empire.

Kalinga War (260 BCE): Ashoka conquers Kalinga (modern Odisha). The slaughter is immense—100,000 killed, 150,000 deported. Ashoka is supposedly horrified by what he's done.

The conversion: Ashoka converts to Buddhism. He renounces aggressive war and dedicates himself to dharma (righteousness).`,
			imagePlaceholder: 'Ashoka surveying the aftermath of Kalinga'
		},
		{
			id: 'ashoka-edicts',
			date: '~2,260 years ago (~260 BCE)',
			title: "Ashoka's Edicts",
			type: 'expansion',
			summary: 'Buddhism as state policy.',
			content: `Ashoka erects rock and pillar inscriptions throughout his empire—the edicts—proclaiming his policies and values.

The content:
Non-violence (ahimsa)
Tolerance for all religions
Public works (hospitals, roads, wells)
Welfare of animals
Respect for parents, teachers, elders
Truthfulness, charity, purity

The spread of Buddhism: Ashoka sends Buddhist missionaries throughout India and abroad—to Sri Lanka, Central Asia, possibly Southeast Asia and the Mediterranean.

The significance: Ashoka is the first Indian ruler to leave extensive written records. His edicts are in multiple languages (Prakrit, Greek, Aramaic)—reflecting his empire's diversity.`,
			imagePlaceholder: "Ashoka's pillar with lion capital"
		},
		{
			id: 'ashoka-death',
			date: '~2,232 years ago (232 BCE)',
			title: 'Death of Ashoka / Mauryan Decline',
			type: 'collapse',
			summary: 'The empire fragments.',
			content: `Ashoka dies; his successors are weak. Within 50 years, the Mauryan Empire fragments. By 185 BCE, the last Mauryan ruler is assassinated.

The pattern: Ashoka's non-violence may have weakened the empire's military capacity. Alternatively, the empire was simply too large to hold together with ancient technology.

The legacy: The Mauryan model (especially Ashoka's) remains influential. The Ashokan pillar capital (four lions) is the emblem of modern India.`,
			imagePlaceholder: 'Mauryan Empire fragmenting'
		},
		{
			id: 'sunga-dynasty',
			date: '~2,185 years ago (~185 BCE)',
			title: 'Sunga Dynasty and Brahmanical Revival',
			type: 'expansion',
			summary: 'Hinduism reasserts.',
			content: `The Sunga dynasty (185-73 BCE) replaces the Mauryas. The Sungas patronize Brahmanical Hinduism rather than Buddhism.

The tension: The pattern of Hindu-Buddhist coexistence and competition develops. Buddhism remains strong but is no longer state-sponsored.

The development: This period sees development of Hindu epics (Mahabharata, Ramayana in their growing forms), Hindu temple worship, and the Sanskrit revival.`,
			imagePlaceholder: 'Sunga period Hindu worship'
		},
		{
			id: 'indo-greek',
			date: '~2,100 years ago (~100 BCE)',
			title: 'Indo-Greek Kingdoms',
			type: 'expansion',
			summary: 'Greeks in India.',
			content: `Greek kingdoms in Bactria (Afghanistan) and India persist after Alexander. Menander I (Milinda) is the most famous—his dialogues with the Buddhist monk Nagasena are preserved in the Milinda Panha.

The synthesis: Greco-Buddhist art emerges—Buddha depicted in Greek sculptural style (Gandhara school). Greek philosophical vocabulary is used to express Buddhist concepts.

The transfer: Buddhism begins spreading westward along trade routes. Buddhist ideas may reach Alexandria, possibly influencing later thought (though this is debated).`,
			imagePlaceholder: 'Greco-Buddhist sculpture of Buddha'
		},

		// CHINA: WARRING STATES TO HAN
		{
			id: 'warring-states',
			date: '~2,475 years ago (~475 BCE)',
			title: 'Warring States Period Begins',
			type: 'expansion',
			summary: "China's age of conflict.",
			content: `The Zhou dynasty retains nominal authority but has no real power. China is divided among seven major states (and many minor ones) in constant warfare.

The seven states:
Qin (northwest—eventually wins)
Chu (south)
Zhao, Wei, Han (central—former Jin)
Qi (east)
Yan (northeast)

The warfare: This is total war—massive armies, new tactics, siege warfare, conscription, destruction of enemy populations. The stakes are survival.

The innovation: Military, political, and intellectual innovation accelerate. States that don't adapt are conquered.`,
			imagePlaceholder: 'Map of the Warring States'
		},
		{
			id: 'mencius',
			date: '~2,400 years ago (~400 BCE)',
			title: 'Mencius',
			type: 'expansion',
			summary: 'Confucianism developed.',
			content: `Mencius (Meng Ke, 372-289 BCE) is the "second sage" of Confucianism, developing and defending Confucian thought.

Human nature: Mencius argues that human nature is good—we have innate moral tendencies (four sprouts: compassion, shame, deference, moral sense). Evil results from neglect, not nature.

Politics: Righteous government is essential. A ruler who fails his people loses the Mandate of Heaven. The people are the most important element of the state.

The legacy: Mencius's works become part of the Confucian canon (one of the Four Books). His optimistic view of human nature defines mainstream Confucianism.`,
			imagePlaceholder: 'Mencius teaching'
		},
		{
			id: 'xunzi',
			date: '~2,350 years ago (~350 BCE)',
			title: 'Xunzi',
			type: 'expansion',
			summary: "Confucianism's realist.",
			content: `Xunzi (Xun Kuang, 310-235 BCE) takes a different position on human nature: it's bad. Goodness is achieved through education, ritual, self-cultivation—not by following nature but by reforming it.

The consequence: This emphasizes the importance of culture, tradition, and social institutions. Morality is achievement, not gift.

The influence: Two of Xunzi's students become architects of Legalism (Han Feizi and Li Si)—taking his pessimism about human nature in an authoritarian direction.`,
			imagePlaceholder: 'Xunzi and his students'
		},
		{
			id: 'shang-yang-legalism',
			date: '~2,350 years ago (~350 BCE)',
			title: 'Shang Yang and Legalist Reforms in Qin',
			type: 'expansion',
			summary: 'The totalitarian state.',
			content: `Shang Yang (390-338 BCE) implements Legalist reforms in the state of Qin:

The policies:
Strict, written laws applied equally to all
Severe punishments (mutilation, death)
Rewards for military achievement and agricultural production
Collective responsibility (families punished for members' crimes)
Suppression of aristocratic privilege
State control of the economy
Destruction of old feudal structures

The result: Qin becomes the most efficient, militarized, and ruthless state. It will eventually conquer all others.`,
			imagePlaceholder: "Shang Yang's Legalist reforms"
		},
		{
			id: 'han-feizi',
			date: '~2,280 years ago (~280 BCE)',
			title: 'Han Feizi',
			type: 'expansion',
			summary: 'Legalism perfected.',
			content: `Han Feizi (280-233 BCE) systematizes Legalist thought:

Human nature: Purely self-interested. People respond only to rewards and punishments.

The ruler: Must use law (fa), method/techniques (shu), and positional power (shi). Trust no one; rely on systems, not persons.

The state: Should be strong, wealthy, and militarily powerful. Morality is irrelevant; effectiveness is everything.

The irony: Han Feizi goes to Qin to advise the king—and is forced to commit suicide by his former classmate Li Si (who fears a rival).`,
			imagePlaceholder: 'Han Feizi and Legalist philosophy'
		},
		{
			id: 'ying-zheng-king',
			date: '~2,247 years ago (247 BCE)',
			title: 'Ying Zheng Becomes King of Qin',
			type: 'expansion',
			summary: 'The future First Emperor.',
			content: `At age 13, Ying Zheng becomes king of Qin. Under his rule (with Li Si as chief minister), Qin will conquer all rivals.

The conquests (230-221 BCE):
Han (230 BCE)
Zhao (228 BCE)
Wei (225 BCE)
Chu (223 BCE)
Yan (222 BCE)
Qi (221 BCE)

The method: Massive armies (Qin fields 600,000 troops), superior organization, ruthless tactics.`,
			imagePlaceholder: 'Young Ying Zheng becoming king'
		},
		{
			id: 'qin-shi-huang',
			date: '~2,221 years ago (221 BCE)',
			title: 'Qin Shi Huang: First Emperor',
			type: 'expansion',
			summary: 'China unified.',
			content: `Ying Zheng takes a new title: Qin Shi Huang Di (First Emperor of Qin). He claims to be founding a dynasty that will last 10,000 generations.

The unification:
Standardized writing (script unified across former states)
Standardized weights and measures
Standardized axle widths (for roads)
Standardized currency
Legal code applied uniformly
Roads and canals connecting the empire
Destruction of feudal structures (nobles relocated, walls between states demolished)

The Great Wall: Qin connects and extends existing walls into a unified northern defense against nomads—the ancestor of the Great Wall.

The Terracotta Army: The emperor builds a massive tomb complex protected by thousands of life-sized terracotta soldiers, discovered in 1974.`,
			imagePlaceholder: 'Qin Shi Huang and the Terracotta Army'
		},
		{
			id: 'burning-books',
			date: '~2,213 years ago (213 BCE)',
			title: 'Burning of Books and Burying of Scholars',
			type: 'collapse',
			summary: 'Thought controlled.',
			content: `Qin Shi Huang orders the burning of books—especially Confucian classics—and (according to tradition) the execution of hundreds of scholars.

The motive: Uniformity. Dissent and alternative traditions threaten the new order. The past must be erased.

The reality: The burning was real but not total. Copies were preserved in the imperial library (which later burned) and in hidden private collections. The Confucian classics survive, though with some textual problems.`,
			imagePlaceholder: 'Books burning under Qin dynasty'
		},
		{
			id: 'qin-shi-huang-death',
			date: '~2,210 years ago (210 BCE)',
			title: 'Death of Qin Shi Huang',
			type: 'collapse',
			summary: 'The dynasty collapses.',
			content: `The First Emperor dies. His weak successor (manipulated by eunuchs and Li Si) faces rebellion. Within four years, the Qin dynasty falls—the shortest major dynasty in Chinese history.

The irony: The dynasty that would last 10,000 generations lasts 15 years.`,
			imagePlaceholder: "Qin Shi Huang's tomb and collapse"
		},
		{
			id: 'liu-bang-han',
			date: '~2,206 years ago (206 BCE)',
			title: 'Liu Bang Founds the Han Dynasty',
			type: 'expansion',
			summary: 'The long dynasty.',
			content: `After civil war, Liu Bang (a commoner who rose through rebellion) defeats rivals and founds the Han dynasty. He takes the title Gaozu (High Ancestor).

The lesson learned: The Han relax Qin's harshness—reducing punishments, lowering taxes, returning to feudal structures partially. But they keep Qin's unification, standardization, and centralization.`,
			imagePlaceholder: 'Liu Bang founding the Han dynasty'
		},
		{
			id: 'emperor-wu-han',
			date: '~2,141 years ago (141 BCE)',
			title: 'Emperor Wu of Han',
			type: 'expansion',
			summary: 'The great expansion.',
			content: `Emperor Wu (r. 141-87 BCE) is the most dynamic Han ruler. Under him, the empire reaches maximum extent and Confucianism becomes state ideology.

The conquests:
Southern expansion (Vietnam, parts of Korea)
Western expansion (Xiongnu campaigns, Central Asian contact)
Silk Road development

Confucian orthodoxy (136 BCE): Confucianism is made the official state ideology. The civil service examination system begins—officials selected by mastery of Confucian classics.

The consequence: The scholar-official class becomes the backbone of Chinese government—a pattern lasting 2,000 years.`,
			imagePlaceholder: 'Emperor Wu and Han expansion'
		},
		{
			id: 'sima-qian',
			date: '~2,104 years ago (104 BCE)',
			title: "Sima Qian's Historical Records",
			type: 'tech',
			summary: 'The model for Chinese history.',
			content: `Sima Qian (145-86 BCE) completes the Shiji (Records of the Grand Historian)—a comprehensive history from mythical times to his own day.

The structure:
Basic Annals (emperors)
Tables (chronology)
Treatises (topics like astronomy, economy, ritual)
Hereditary Houses (major families)
Biographies (individuals)

The achievement: 130 chapters, 520,000+ characters. The model for all subsequent Chinese historical writing.

The personal: Sima Qian was castrated for defending a general who surrendered. He chose to live with this shame to complete his history.`,
			imagePlaceholder: 'Sima Qian writing his histories'
		},
		{
			id: 'paper-invented',
			date: '~2,100 years ago (~100 BCE)',
			title: 'Paper Invented',
			type: 'tech',
			summary: 'Writing transformed.',
			content: `Paper (in recognizable form) is invented in Han China—traditionally attributed to Cai Lun (105 CE), but earlier forms exist.

The process: Plant fibers (mulberry bark, hemp, rags) are pulped, suspended in water, spread on screens, and dried.

The advantage: Lighter than bamboo strips, cheaper than silk, more portable than both. Writing becomes easier, more widespread.

The spread: Paper technology slowly diffuses westward. It reaches the Islamic world after the Battle of Talas (751 CE), where Arab forces capture Chinese papermakers. It reaches Europe in the Middle Ages.`,
			imagePlaceholder: 'Early Chinese papermaking'
		},
		{
			id: 'water-mill',
			date: '~2,050 years ago (~50 BCE)',
			title: 'Water Mill Technology',
			type: 'tech',
			summary: 'Power harnessed.',
			content: `Water mills for grinding grain develop in the Roman and Chinese worlds (possibly independently). Flowing water turns wheels that turn millstones.

The significance: The first use of inanimate power sources for industrial production. Human and animal muscle are supplemented.

The limitation: Water mills require suitable water sources. They spread where conditions permit but don't transform the ancient economy.`,
			imagePlaceholder: 'Ancient water mill'
		},

		// ERA VII CLOSES
		{
			id: 'jewish-sects',
			date: '~2,100-2,000 years ago',
			title: 'Jewish Sectarian Period',
			type: 'fragmentation',
			summary: 'Multiple Jewish WHY-frameworks compete.',
			content: `Multiple Jewish WHY-frameworks compete:

Pharisees: Oral Torah, resurrection, adapts tradition to new conditions
Sadducees: Temple aristocracy, Torah only, no resurrection
Essenes: Withdraw to the desert, apocalyptic expectation, purity
Zealots: Armed resistance, divine kingdom by force

This is the three-body problem in crisis—multiple WHYs, no stable orbit.`,
			imagePlaceholder: 'Dead Sea Scrolls and Qumran community'
		},
		{
			id: 'era-vii-closes',
			date: '~2,000 years ago (1 CE)',
			title: 'Era VII Closes',
			type: 'transition',
			summary: 'The classical world established.',
			content: `By 1 CE:

Rome: The empire is at peace under Augustus and his successors. The Mediterranean is united under one rule.
China: The Han dynasty (briefly interrupted by Wang Mang's Xin dynasty, 9-23 CE) rules a unified China.
India: Multiple kingdoms (no single empire), but cultural unity through Hinduism and Buddhism.
Persia: The Parthian Empire controls the Iranian plateau and Mesopotamia.

The frameworks:
Confucianism dominates China
Greco-Roman philosophy spreads through the Mediterranean
Buddhism spreads across Asia
Hinduism develops in India
Zoroastrianism persists in Persia
Judaism survives under Roman rule
Christianity is about to be born`,
			imagePlaceholder: 'The classical world at 1 CE'
		}
	],
	// Links format: { "1": { url: "...", tag: "tech" }, "2": { url: "..." } }
	links: {}
};
