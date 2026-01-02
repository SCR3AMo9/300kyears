import type { Era } from './types';

export const thePatriarchalFoundations: Era = {
	id: 'era-5',
	number: 'V',
	title: 'THE PATRIARCHAL FOUNDATIONS      (3 AI PASSES, Manual Edits Required, Verification Required)',
	timespan: '~4,000 - 3,200 years ago',
	description: 'The age of the fathers. Abraham walks. Moses leads. Hammurabi legislates. The chariot transforms warfare. Indo-European peoples—carrying horses, wheels, and sky-father gods—sweep across Eurasia from Ireland to India. The gods who will dominate the next 3,000 years take their thrones: Zeus, YHWH, Indra, Shangdi, Marduk. Patriarchy codifies from social tendency to legal structure. The Bronze Age reaches its zenith. The collapse waits.',
	events: [
		{
			id: 'indo-european-dispersal',
			date: '~4,000 years ago',
			title: 'The Indo-European Dispersal',
			tags: ['expansion', 'migration', 'gain'],
			summary: 'One language becomes many.',
			content: `From the Pontic-Caspian steppe (modern Ukraine/Russia), peoples speaking Proto-Indo-European languages continue migrations that have been underway for centuries. By 2000 BCE, the dispersal reshapes Eurasia.

The branches forming: Proto-Greek toward Mycenaean Greece. Proto-Indo-Iranian toward Vedic India and Persian Iran. Proto-Anatolian already in Anatolia (Hittites). Proto-Celtic toward Western Europe. Proto-Germanic toward Northern Europe. Proto-Italic toward Italy. Proto-Slavic and Proto-Baltic toward Eastern Europe and the Baltic.

What they carry: the horse, the chariot, the sky-father god (*Dyēus Phter becoming Zeus, Jupiter, Dyaus Pita), patrilineal kinship, pastoral economy with cattle as wealth, and tripartite ideology dividing society into priests, warriors, and producers. Wherever Indo-Europeans go, they bring similar religious structure. The similarities between Greek, Vedic, Norse, and Roman religion aren't coincidence—they're inheritance from a common source.`,
			imagePlaceholder: 'Map showing Indo-European migration routes from the steppe'
		},
		{
			id: 'chariot-revolution',
			date: '~4,000 years ago',
			title: 'The Chariot Revolution',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'War transformed.',
			content: `The light, horse-drawn, spoked-wheel chariot emerges—probably on the Eurasian steppe. This is the weapon system that will dominate warfare for 800 years.

Spoked wheels are light and strong, replacing solid wheels. Two trained horses pull together. A light platform carries one driver and one archer or spearman. The composite bow shoots from the moving platform. Speed is the advantage—a chariot moves at 30+ km/h while infantry moves at 5 km/h. Chariots choose engagement, flank, retreat, pursue. They are the tanks of the Bronze Age.

Within 500 years, chariots appear in Mesopotamia, Egypt, China, India—everywhere that can afford them. A chariot requires horses (expensive to breed and train), vehicle (skilled craftwork), crew (years of training), support staff (grooms, smiths, trainers). This is the most expensive weapon system until the aircraft carrier. Chariotry becomes synonymous with aristocracy.`,
			imagePlaceholder: 'Bronze Age war chariot with horses and warrior'
		},
		{
			id: 'spoked-wheel-technology',
			date: '~4,000 years ago',
			title: 'Spoked Wheel Technology',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Light, fast, strong.',
			content: `The spoked wheel replaces the solid wheel for military and prestige vehicles. Instead of heavy wooden disks, thin spokes radiate from hub to rim. Weight drops by two-thirds or more. Speed increases. Maneuverability improves.

The engineering is sophisticated: the hub must distribute stress, the spokes must be uniform in strength, the rim must be bent (or assembled from segments) into a perfect circle, the whole bound with leather or metal. A broken spoke disables the wheel. Quality control matters.

Spoked wheel construction becomes specialized craft. The wheelwright is essential to military power. The technology spreads from the steppe across Eurasia within centuries—evidence of how quickly military advantage propagates.`,
			imagePlaceholder: 'Spoked wheel construction'
		},
		{
			id: 'horse-domestication-matures',
			date: '~4,000 years ago',
			title: 'Horse Domestication Matures',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The animal that changes everything.',
			content: `Horses were domesticated earlier, but by 2000 BCE horse breeding and training have matured into systematic practice. Selective breeding produces horses suited for chariotry—strong enough to pull, trainable enough to work in teams, calm enough for battle.

The applications multiply: chariotry for war, prestige display for elites, mounted messengers for communication, herding from horseback for managing other animals. Cavalry as a dominant military arm awaits stirrups (still 2,000 years away), but mounted scouts and messengers already matter.

Across Indo-European cultures, the horse becomes sacred. Horse sacrifice is the supreme offering. The Vedic Ashvamedha grants sovereignty. Celtic horse goddesses (Epona) receive worship. Greek Poseidon carries horse associations. The horse carries meaning beyond function—it represents speed, power, nobility, divine favor.`,
			imagePlaceholder: 'Bronze Age horse breeding and training'
		},
		{
			id: 'canaanite-religion',
			date: '~4,000 years ago',
			title: 'Canaanite Religion Flourishes',
			tags: ['expansion', 'cognitive'],
			summary: 'The context for YHWH.',
			content: `Canaanite religion—known from texts discovered at Ugarit and elsewhere—provides the religious context from which Israelite religion will emerge. The pantheon includes El (father of gods, creator, wise elder, whose name becomes the Hebrew word for "god"), Baal (storm god, king of gods in practice, rider of clouds, defeater of Sea and Death), Asherah (mother goddess, consort of El, associated with trees and fertility), Anat (war goddess, Baal's sister, violent protector), Mot (Death personified), and Yam (Sea/chaos personified).

YHWH emerges in this context. Many YHWH epithets parallel El or Baal. The Bible's polemic against Baal worship shows how close the religions were—you don't fight what isn't a threat. The Canaanite background is essential for understanding Israelite religion as response, synthesis, and rejection.`,
			imagePlaceholder: 'Canaanite god El seated on throne'
		},
		{
			id: 'old-babylonian-period',
			date: '~3,900 years ago',
			title: 'Old Babylonian Period Begins',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Babylon rises.',
			content: `Babylon—a minor city under Ur III—rises to prominence. The Amorites (Semitic-speaking peoples from the Syrian steppe) establish dynasties across Mesopotamia. Babylon becomes their greatest center.

Power moves from Sumerian south to Babylonian center. Akkadian fully displaces Sumerian in daily use. Sumerian becomes a scholarly and liturgical language—the Latin of ancient Mesopotamia, learned by scribes but spoken by no one.

Despite ethnic and linguistic shift, religious and cultural continuity persists. The Amorite kings worship Sumerian gods, maintain Sumerian scribal traditions, preserve Sumerian literature. The cultural ratchet holds through political change. Conquerors are conquered by the culture they rule.`,
			imagePlaceholder: 'Old Babylonian city with ziggurat'
		},
		{
			id: 'bronze-armor-development',
			date: '~3,900 years ago',
			title: 'Bronze Armor Development',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Protection scales up.',
			content: `Bronze armor moves from prestige display to military necessity. Scale armor (small bronze plates sewn to leather backing), helmets, and greaves protect chariot warriors and elite infantry.

The economics are demanding: each bronze scale requires metal, each scale must be shaped and pierced, hundreds of scales make one corselet. A fully armored warrior represents enormous investment. But armor works—bronze weapons that would kill an unarmored man glance off bronze scales.

The arms race intensifies. Better armor demands better weapons. Better weapons demand better armor. The escalation that continues to the present day accelerates during the Bronze Age.`,
			imagePlaceholder: 'Bronze Age armor and weapons'
		},
		{
			id: 'siege-warfare-develops',
			date: '~3,850 years ago',
			title: 'Siege Warfare Develops',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Cities can fall.',
			content: `Siege technology matures: battering rams (wheeled, sometimes armored), scaling ladders, siege towers, mining (tunneling under walls), ramps built against fortifications. Cities that once seemed impregnable become vulnerable.

The response: thicker walls, multiple wall circuits, glacis (sloped stone facings preventing mining), towers for flanking fire, moats, strategic food storage. Fortification and siege technology co-evolve in an architectural arms race.

Siege warfare changes politics. A city that can be taken can be conquered. States that can conduct sieges can build empires. The technology of reduction enables the politics of empire.`,
			imagePlaceholder: 'Bronze Age siege warfare'
		},
		{
			id: 'abraham',
			date: '~3,800 years ago',
			title: 'Traditional Time of Abraham',
			tags: ['expansion', 'cognitive'],
			summary: 'The first patriarch.',
			content: `According to biblical chronology, Abraham leaves Ur for Canaan around this period. He receives God's covenant: land, descendants, blessing. The historical question remains contested—did Abraham exist as a historical individual? The patriarchal narratives may preserve authentic Bronze Age customs embedded in later literary composition.

Whether historical or not, Abraham establishes foundational concepts: covenant relationship (God chooses, human responds), promise of land (Canaan as promised territory), chosen lineage (blessing through Abraham's descendants), and monotheistic tendency (one God makes covenant). Abraham is the transition figure bridging Mesopotamian polytheism and Israelite monotheism.`,
			imagePlaceholder: 'Abraham journeying under starlit sky'
		},
		{
			id: 'proto-sinaitic-script',
			date: '~3,800 years ago',
			title: 'Proto-Sinaitic Script',
			tags: ['expansion', 'tech', 'gain'],
			summary: "The alphabet's ancestor.",
			content: `In the Sinai Peninsula and Canaan, workers—possibly Semitic miners serving Egypt—adapt Egyptian hieroglyphics into a simplified alphabetic script. Each sign represents one consonant. The revolution is efficiency: Cuneiform has ~600 signs, hieroglyphics ~700, Proto-Sinaitic has ~22. Writing becomes learnable in weeks rather than years.

The principle is acrophony—each sign is a pictograph whose name starts with the sound it represents. The sign for "ox" (alpu) represents /a/. It becomes Greek alpha, Latin A. The sign for "house" (bayt) becomes beta, B. Alphabetic writing will democratize literacy. When writing is simple, more people write.`,
			imagePlaceholder: 'Proto-Sinaitic inscriptions from Sinai'
		},
		{
			id: 'middle-kingdom-literature',
			date: '~3,800 years ago',
			title: 'Middle Kingdom Literature',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The classic age of Egyptian writing.',
			content: `Middle Egyptian becomes the classical literary language. Major texts emerge: The Tale of Sinuhe (an official who flees Egypt, lives among Asiatics, achieves success, but longs for home and proper burial), The Eloquent Peasant (a peasant robbed by a corrupt official delivers nine rhetorical speeches demanding justice), Instructions literature (wisdom texts teaching proper behavior), The Prophecy of Neferti (predicting chaos, then restoration).

This literature is sophisticated and self-conscious. These aren't transcriptions of oral tradition but written compositions by skilled authors exploring themes of identity, exile, justice, and proper living. WHY-capacity expressed through narrative reaches new heights.`,
			imagePlaceholder: 'Papyrus with Middle Egyptian literary text'
		},
		{
			id: 'hammurabi-throne',
			date: '~3,792 years ago',
			title: 'Hammurabi Takes the Throne',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The lawgiver.',
			content: `Hammurabi becomes king of Babylon. Through diplomacy and warfare over 40 years, he unifies Mesopotamia under Babylonian rule—the first unification since the Akkadian Empire collapsed.

The achievement is not just conquest but administration. Hammurabi personally oversees legal cases. Letters survive showing him adjudicating disputes, managing canals, disciplining officials. A hands-on ruler in an age when delegation was normal.

Hammurabi elevates Marduk—Babylon's patron god—to head of the pantheon. As Babylon dominates politically, Marduk dominates theologically. Political power reshapes divine hierarchy. The god of the winning city becomes king of gods.`,
			imagePlaceholder: 'Hammurabi receiving law from Shamash'
		},
		{
			id: 'canal-systems-expand',
			date: '~3,780 years ago',
			title: 'Canal Systems Expand',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Water engineering at scale.',
			content: `Mesopotamian irrigation reaches new sophistication. Main canals, secondary channels, tertiary ditches, water-lifting devices (shadufs), sluice gates, measurement systems. The technology of water distribution enables the population densities that support empire.

Canal maintenance becomes state function. Royal inscriptions boast of canals dug, channels cleared, water brought to dry land. The king who provides water provides life. Irrigation success legitimizes rule.

The mathematics of water distribution develops: calculating flow rates, allocating shares, scheduling access. The complexity requires bureaucracy. Water management and state administration intertwine.`,
			imagePlaceholder: 'Mesopotamian canal system'
		},
		{
			id: 'code-of-hammurabi',
			date: '~3,754 years ago',
			title: 'Code of Hammurabi',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Law made visible.',
			content: `Hammurabi's law code is carved on a black diorite stele—282 laws covering family, property, commerce, labor, crime. The stele shows Hammurabi receiving the laws from Shamash, god of justice.

The content includes "eye for an eye" (but graded by class—punishments differ for nobles, commoners, slaves), women's property rights (dowries, divorce settlements), commercial regulations (interest rates, contracts, liability), professional standards (surgeons and builders face malpractice punishments), and family law (inheritance, adoption, marriage, adultery).

The code is not a complete legal system—many situations aren't covered—but a statement of justice. "Let the oppressed man come before my image as king of justice." Law as royal propaganda, but also real: courts reference written standards. Disputes have predetermined resolutions.`,
			imagePlaceholder: 'Stele of Hammurabi with law code'
		},
		{
			id: 'marduk-rise',
			date: '~3,750 years ago',
			title: "Marduk's Rise",
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The god of Babylon.',
			content: `Marduk—originally a minor deity—becomes king of the gods. The Enuma Elish (Babylonian creation epic) is composed or revised to reflect this.

The myth: Marduk defeats Tiamat (primordial chaos/sea) and creates the world from her body. He organizes the gods, assigns functions, establishes order. The other gods proclaim him supreme and grant him fifty names.

As Babylon rules, Babylon's god rules. Marduk's rise mirrors and legitimizes Hammurabi's empire. The Enuma Elish is read annually at the New Year festival—religious renewal recapitulating cosmic creation and political order. Theology serves politics; politics reshapes theology.`,
			imagePlaceholder: 'Marduk defeating Tiamat the chaos dragon'
		},
		{
			id: 'scribal-education-systematizes',
			date: '~3,750 years ago',
			title: 'Scribal Education Systematizes',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Knowledge becomes curriculum.',
			content: `The edubba ("tablet house") becomes standardized institution. Scribal training follows set curriculum: sign lists, vocabulary lists, mathematical tables, model contracts, literary texts. Years of training produce professional scribes.

The curriculum creates canon. Texts copied for practice become the texts that survive. The school determines what literature persists. Student errors preserved in clay tell us how teaching worked.

Scribal status is desirable. "Be a scribe—your limbs will be sleek, your hands soft." Literacy means bureaucratic career, elevated status, indoor work. The scribe administers the illiterate. Knowledge is power, institutionalized.`,
			imagePlaceholder: 'Scribal school with students'
		},
		{
			id: 'debt-slavery',
			date: '~3,750 years ago',
			title: 'Debt and Debt Slavery',
			tags: ['expansion', 'cognitive'],
			summary: 'Economics of desperation.',
			content: `Debt slavery becomes institutionalized. Farmers borrow against future harvests. When harvests fail, they cannot repay. They pledge their labor, their children, themselves. Debt spirals; families enter bondage.

Hammurabi's code addresses this: debt slavery limited to three years, some protections for the enslaved. The limits acknowledge the problem without solving it. Periodic debt cancellations (royal "clean slate" decrees) reset the system—until debt accumulates again.

The pattern will persist for millennia. Agricultural societies generate debt; debt generates bondage; bondage generates resistance; resistance generates reform; reform proves temporary. The cycle is structural.`,
			imagePlaceholder: 'Debt and bondage in ancient Mesopotamia'
		},
		{
			id: 'babylonian-mathematics-peaks',
			date: '~3,700 years ago',
			title: 'Babylonian Mathematics Peaks',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The base-60 perfected.',
			content: `Babylonian mathematics reaches its highest development. Clay tablets show Pythagorean triples (1,000 years before Pythagoras), quadratic equations solved, square roots computed to high precision, astronomical calculations, compound interest computed, sophisticated word problems.

The method is algorithmic—step-by-step procedures that reliably produce answers. The Babylonians don't prove theorems abstractly; they show you how to calculate. The results work.

The legacy persists: base-60 gives us 60-minute hours, 60-second minutes, 360-degree circles. We still count time and angles like Babylonians. The mathematics of Mesopotamia outlasts its empires.`,
			imagePlaceholder: 'Plimpton 322 tablet with Pythagorean triples'
		},
		{
			id: 'epic-of-gilgamesh',
			date: '~3,700 years ago',
			title: 'Epic of Gilgamesh Compiled',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The first great literary work.',
			content: `The Epic of Gilgamesh is compiled from older Sumerian stories into a unified Akkadian narrative. Gilgamesh, king of Uruk, tyrannizes his people. The gods create Enkidu (wild man) to challenge him. They become friends, kill Humbaba and the Bull of Heaven. The gods kill Enkidu as punishment. Gilgamesh, confronting mortality, seeks Utnapishtim (flood survivor granted immortality). He learns the secret of a rejuvenating plant but loses it to a serpent. He returns home, accepting mortality, finding meaning in his city's walls.

The themes: friendship, mortality, the limits of human striving. The flood narrative parallels Genesis closely—same Mesopotamian source tradition. What does it mean to live knowing you will die? Gilgamesh is literature as meaning-making—not mythology explaining the world but narrative exploring the human condition.`,
			imagePlaceholder: 'Gilgamesh and Enkidu slaying Humbaba'
		},
		{
			id: 'astronomical-observation-advances',
			date: '~3,700 years ago',
			title: 'Astronomical Observation Advances',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The sky becomes predictable.',
			content: `Systematic sky-watching produces accumulated data. Venus observations recorded over decades. Lunar cycles tracked precisely. Eclipse patterns recognized (prediction still rough, but possible).

Astronomy serves astrology—reading divine will from celestial signs. But the observations accumulate regardless of interpretation. The data is real even when the meaning attributed is not. Eventually the observations will enable astronomy without astrology.

The calendar depends on astronomy. Religious festivals, agricultural timing, administrative cycles all require knowing when. The priest-astronomer who can predict celestial events holds power.`,
			imagePlaceholder: 'Babylonian astronomical observations'
		},
		{
			id: 'mitanni-kingdom',
			date: '~3,680 years ago',
			title: 'Mitanni Kingdom Emerges',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Indo-Aryans in Syria.',
			content: `The Mitanni kingdom emerges in northern Mesopotamia and Syria—ruled by an Indo-Aryan elite speaking a language related to Sanskrit, over a Hurrian-speaking population.

The evidence: Mitanni horse-training texts use Sanskrit terms (aika, tera, panza, satta = one, three, five, seven). Mitanni treaties invoke Vedic gods (Mitra, Varuna, Indra, Nasatya). An Indo-Aryan ruling class has imposed itself on a non-Indo-European population.

Mitanni becomes a great power, rivaling Egypt and Hatti. The kingdom demonstrates how small elite groups can dominate larger populations—and how language, religion, and technology (horses, chariots) enable that domination.`,
			imagePlaceholder: 'Mitanni kingdom territory'
		},
		{
			id: 'hyksos-invasion',
			date: '~3,650 years ago',
			title: 'Hyksos Invasion',
			tags: ['hammerfall', 'external'],
			summary: 'Egypt conquered.',
			content: `The Hyksos ("rulers of foreign lands")—Semitic-speaking peoples from the Levant—conquer Lower Egypt. For the first time, foreigners rule the Nile.

Egyptian texts remember catastrophe. "A blast of God smote us." The mythology of Egyptian invincibility—protected by desert, united by Nile, ruled by god-king—shatters.

What the Hyksos bring: chariot warfare (Egypt hadn't developed this), composite bow (superior to Egyptian simple bow), bronze weapons and armor (superior metallurgy), horses and horse-breeding expertise, new fortification techniques. The lesson is brutal: isolation isn't protection. Egypt must engage with the outside world—or be conquered by it.`,
			imagePlaceholder: 'Hyksos chariots entering Egypt'
		},
		{
			id: 'hittite-old-kingdom',
			date: '~3,650 years ago',
			title: 'Hittite Old Kingdom',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Empire in Anatolia.',
			content: `The Hittites—Indo-European speakers who entered Anatolia earlier—establish a kingdom centered at Hattusa. The Hittite Old Kingdom controls central Anatolia and raids as far as Babylon.

Hittite is the oldest attested Indo-European language. When deciphered in 1915, it revolutionized Indo-European studies. The connections between Hittite, Greek, Latin, Sanskrit became clearer.

Hittite society is culturally syncretic—absorbing Hattic (pre-Indo-European), Hurrian, and Mesopotamian influences. Their religion incorporates "thousand gods of Hatti." The empire demonstrates that conquest need not mean cultural replacement; often conquerors absorb as much as they impose.`,
			imagePlaceholder: 'Hittite capital Hattusa with Lion Gate'
		},
		{
			id: 'thera-eruption',
			date: '~3,628 years ago',
			title: 'Thera/Santorini Eruption',
			tags: ['hammerfall', 'external'],
			summary: 'The volcano that ended Minoan dominance.',
			content: `The volcanic island of Thera explodes—one of the largest eruptions in human history. The Minoan town of Akrotiri is buried, preserved like Pompeii. Tsunamis devastate Cretan coasts. Ash falls across the eastern Mediterranean.

The dating remains controversial—radiocarbon suggests ~1628 BCE, traditional archaeology suggests ~1500 BCE. Either way, the consequences are severe: Akrotiri buried (preserving extraordinary frescoes), Minoan Crete weakened, agricultural disruption across the region. The eruption may have inspired the Atlantis myth—island civilization destroyed by catastrophe.

After Thera, Minoan civilization declines. Mycenaeans take over Knossos. The Aegean world becomes Greek-dominated. A volcanic disaster reshapes Mediterranean politics.`,
			imagePlaceholder: 'Thera eruption and buried Akrotiri frescoes'
		},
		{
			id: 'hittite-thousand-gods',
			date: '~3,600 years ago',
			title: 'Hittite Religion: The Thousand Gods',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Syncretism as theology.',
			content: `Hittite religion incorporates every deity they encounter. Official lists name over a thousand gods. The theology is additive, not exclusive.

Major deities include Teshub (storm god of Hurrian origin, king of gods, paralleling Zeus, Indra, Thor), Arinna's Sun Goddess (supreme goddess, queen of heaven), Kumarbi (father of gods in the succession myth, paralleling Kronos), and Telepinu (vegetation god whose disappearance causes famine).

The succession myth—Kumarbi overthrows Anu, is overthrown by Teshub—parallels Hesiod's Theogony (Kronos overthrows Ouranos, is overthrown by Zeus). The Greek myth likely derives from Hittite/Hurrian sources transmitted through cultural contact. The tolerance is notable: Hittite kings add foreign gods to their pantheon after conquest. If a god has power, why not worship them?`,
			imagePlaceholder: 'Hittite relief of storm god Teshub'
		},
		{
			id: 'shang-dynasty',
			date: '~3,600 years ago',
			title: 'Shang Dynasty Established',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: "China's first archaeologically verified dynasty.",
			content: `The Shang dynasty establishes the pattern for Chinese civilization. Multiple capitals including Zhengzhou and Anyang (Yin). Territory centered on the Yellow River valley, though many cultures coexist.

Unlike the semi-legendary Xia, the Shang is fully documented in contemporary inscriptions. Oracle bones prove the dynasty is historical. The king list preserved in later texts is largely accurate. China's recorded history begins.

The Shang pattern—ancestor worship, divination, bronze ritual vessels, royal legitimacy through divine mandate—establishes templates that persist through Chinese history. What begins here continues recognizably for 3,500 years.`,
			imagePlaceholder: 'Shang dynasty capital Anyang reconstruction'
		},
		{
			id: 'mycenaean-civilization',
			date: '~3,600 years ago',
			title: 'Mycenaean Civilization Emerges',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The first Greeks.',
			content: `On mainland Greece, Mycenaean civilization emerges—Greek-speaking, palace-centered, warrior-elite, eventually dominating the Aegean. Mycenae, Tiryns, Pylos, Athens, Thebes—fortified palaces controlling surrounding territory. The Lion Gate at Mycenae, the massive walls, the shaft graves full of gold.

Linear B tablets prove Mycenaeans spoke Greek—the earliest written Greek, 600 years before Homer. Indo-European Greeks absorb Minoan influence: art styles, religious elements, bureaucratic methods. The synthesis produces something new.

The Mycenaean world is the world of the Trojan War (if it happened), the world behind Homer's epics, the Bronze Age backdrop to classical Greek mythology.`,
			imagePlaceholder: 'Mycenae Lion Gate and citadel'
		},
		{
			id: 'mycenaean-greek-gods',
			date: '~3,600 years ago',
			title: 'Mycenaean Religion: The Greek Gods',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Zeus takes his throne.',
			content: `Linear B tablets name gods recognizable from later Greek religion: Zeus (di-we, already king of gods), Hera (e-ra), Poseidon (po-se-da-o, major deity at Pylos), Dionysus (di-wo-nu-so, surprisingly early), Hermes, Athena, Artemis, Ares, Hephaestus.

The surprises are significant: Dionysus is already present, not a late import as later Greeks believed. Poseidon is possibly equal to Zeus at Pylos. "Potnia" (Mistress/Lady) is a major deity, possibly later absorbed into other goddesses.

The core Greek pantheon exists by ~1400 BCE. Homer, writing around 750 BCE, preserves and elaborates a religious system already 600+ years old. The gods who will dominate Western imagination for millennia are already enthroned.`,
			imagePlaceholder: 'Mycenaean gold death mask and religious artifacts'
		},
		{
			id: 'hittite-raid-babylon',
			date: '~3,595 years ago',
			title: 'Hittite Raid on Babylon / Kassite Takeover',
			tags: ['collapse', 'lost'],
			summary: 'The Old Babylonian order falls.',
			content: `The Hittites raid Babylon, sack the city, and withdraw. In the power vacuum, the Kassites—a people of unclear origin—take control. They will rule Babylon for 400 years.

The Kassites leave few inscriptions in their own language. We don't know where they came from or what language they originally spoke. They adopt Babylonian culture completely—gods, writing, literature. Political power and cultural continuity diverge. The cultural tradition persists through conquest. Babylon absorbs its rulers.

The lesson matters: civilization can survive regime change. The forms persist even when the rulers don't. Structure proves more durable than power.`,
			imagePlaceholder: 'Hittite warriors raiding Babylon'
		},
		{
			id: 'horse-breeding-programs',
			date: '~3,580 years ago',
			title: 'Horse Breeding Programs',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Selective improvement.',
			content: `Systematic horse breeding emerges. The Kikkuli text (from Mitanni, preserved in Hittite) provides detailed horse-training instructions: conditioning, feeding, exercise regimens. This is the first surviving manual on animal training.

Selective breeding produces horses suited to specific tasks: chariot horses for strength and steadiness, riding horses for speed and responsiveness. The improvement is measurable over generations.

Horse breeding becomes state concern. Royal studs maintain bloodlines. Trade in horses becomes diplomatic matter. The best horses are gifts between kings, symbols of alliance and respect.`,
			imagePlaceholder: 'Bronze Age horse breeding'
		},
		{
			id: 'new-kingdom-begins',
			date: '~3,550 years ago',
			title: 'New Kingdom Begins',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Egypt expels the Hyksos.',
			content: `Ahmose I expels the Hyksos and reunifies Egypt. The New Kingdom begins—Egypt's imperial age, its wealthiest and most powerful period.

The New Kingdom pharaohs learned from the Hyksos. They adopt chariot warfare (Egypt becomes a chariot power), imperial expansion (conquer before being conquered), professional military (standing army, career soldiers), and international diplomacy (marriage alliances, treaties).

Egypt expands into Nubia (south) and the Levant (north). At its height, the Egyptian empire stretches from Sudan to Syria. Egypt is no longer isolated—it's the center of an international system.`,
			imagePlaceholder: 'New Kingdom pharaoh in war chariot'
		},
		{
			id: 'egyptian-chariotry',
			date: '~3,550 years ago',
			title: 'Egyptian Chariotry',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Adopting the technology that conquered them.',
			content: `Egypt adopts and improves chariot technology. Egyptian chariots become lighter and faster than their Asian counterparts—two-person crews (driver and archer), bent wood construction, leather components for flexibility.

The Egyptian military reorganizes around chariotry. Chariot divisions become the elite force. Officers rise through chariot service. The pharaoh himself leads from a chariot—depicted in countless reliefs destroying enemies while driving.

The adoption demonstrates a principle: military necessity overcomes cultural pride. Egypt was conquered by chariot-using peoples; Egypt becomes a chariot power. The technology that defeated them becomes the technology they master.`,
			imagePlaceholder: 'Egyptian chariot warfare'
		},
		{
			id: 'hatshepsut',
			date: '~3,520 years ago',
			title: 'Hatshepsut',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The female pharaoh.',
			content: `Hatshepsut rules Egypt—first as regent for her stepson Thutmose III, then as pharaoh in her own right. She wears the royal regalia including the false beard. She is depicted as male in official art.

Her reign is peaceful and prosperous. The temple at Deir el-Bahri is architectural masterpiece. The expedition to Punt (probably Somalia/Eritrea) brings exotic goods. Trade flourishes.

After her death, Thutmose III eventually has her images defaced, her name erased. The reasons are debated—personal resentment? dynastic politics? ideological cleansing of female rule? Her erasure was incomplete; we know her story.`,
			imagePlaceholder: 'Hatshepsut temple at Deir el-Bahri'
		},
		{
			id: 'linear-b-script',
			date: '~3,500 years ago',
			title: 'Linear B Script',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Bureaucratic Greek.',
			content: `Linear B—adapted from Minoan Linear A—serves palace administration. It's a syllabic script (each sign equals one syllable), awkward for Greek but functional.

The content is almost entirely administrative: inventories of goods, land allocations, personnel lists, offerings to gods. No literature, no myths, no history. We know Mycenaean religion from offering lists, not from hymns.

When the palaces collapse around 1200 BCE, Linear B disappears. Greece becomes illiterate for 400 years. The Greeks will reinvent writing using the Phoenician alphabet. The gap is remarkable—a civilization forgetting how to write.`,
			imagePlaceholder: 'Linear B tablet from Pylos'
		},
		{
			id: 'hittite-iron-working',
			date: '~3,500 years ago',
			title: 'Hittite Iron Working',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The first iron.',
			content: `The Hittites develop iron smelting—extracting iron from ore using high-temperature furnaces. Iron objects remain rare and prestigious (iron is worth 40x silver by weight). This isn't yet the Iron Age—that comes after the Bronze Age Collapse.

Iron requires higher temperatures than bronze (~1538°C vs ~1085°C for copper). The technology is difficult; the Hittites guard it jealously.

The advantage is latent: iron ore is far more common than copper and tin. Once iron smelting becomes widespread, bronze becomes obsolete except for specialized uses. The Hittites control the future—but the Collapse will scatter the technology to everyone.`,
			imagePlaceholder: 'Hittite iron smelting and early iron objects'
		},
		{
			id: 'indo-aryan-migration',
			date: '~3,500 years ago',
			title: 'Indo-Aryan Migration/Arrival',
			tags: ['expansion', 'migration'],
			summary: 'The Vedic peoples enter India.',
			content: `Indo-Aryan speaking peoples enter the Indian subcontinent—whether through migration, slow infiltration, or cultural diffusion is debated. They bring Sanskrit (Indo-European language), Vedic religion, horse and chariot culture, pastoral economy, patriarchal social structure.

The Indus Valley civilization has collapsed by this time. The relationship between Indus peoples and Indo-Aryans is unclear—absorption, displacement, some continuity? The genetic and linguistic evidence is complex.

What's clear: a new cultural complex establishes itself in northern India, bringing the Vedic tradition that will shape South Asian civilization for the next 3,500 years.`,
			imagePlaceholder: 'Indo-Aryan migration into the subcontinent'
		},
		{
			id: 'vedic-religion-begins',
			date: '~3,500 years ago',
			title: 'Vedic Religion Begins',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The gods of India.',
			content: `The Rig Veda begins composition (orally—written centuries later). The Vedic religion establishes the foundation for all subsequent Indian religion.

Major Vedic gods: Indra (king of gods, storm/warrior god, dragon-slayer who kills Vritra, soma-drinker, paralleling Zeus, Thor, Teshub), Agni (fire god, intermediary between humans and gods), Varuna (cosmic order, moral law), Mitra (contracts, friendship), Soma (deified ritual drink), Surya (sun), Ushas (dawn goddess paralleling Greek Eos), Dyaus Pita (sky father cognate with Zeus and Jupiter, but fading early in Vedic period).

The Indo-European pattern is clear: many Vedic gods have cognates in Greek, Roman, Norse religion. The comparative evidence proves common origin from the Proto-Indo-European tradition.`,
			imagePlaceholder: 'Vedic fire sacrifice with priests'
		},
		{
			id: 'soma-ritual',
			date: '~3,500 years ago',
			title: 'Soma and Ritual Technology',
			tags: ['expansion', 'tech', 'cognitive'],
			summary: 'Consciousness as technology.',
			content: `Soma—a ritual drink produced from an unidentified plant—is central to Vedic religion. An entire book of the Rig Veda is devoted to Soma.

The texts describe ecstasy, vision, strength, immortality feelings, connection to gods. Soma is consciousness-altering technology embedded in religious practice. The effects are real; the identity is lost.

Candidates for soma include ephedra (stimulant), fly agaric mushroom (hallucinogenic), cannabis, or some mixture. Whatever it was, its identity was lost when Indo-Aryans moved from the plant's natural habitat. Later "soma" is a substitute. The original technology disappeared—a reminder that knowledge can be lost even in living traditions.`,
			imagePlaceholder: 'Soma pressing ritual with priests'
		},
		{
			id: 'valley-of-kings',
			date: '~3,500 years ago',
			title: 'Valley of the Kings Established',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Hidden tombs replace visible pyramids.',
			content: `Thutmose I begins the practice of hidden rock-cut tombs in the Valley of the Kings. Instead of pyramids—visible, raidable—the pharaohs hide their burials.

The logic is practical: every pyramid had been robbed by the New Kingdom. Monumental visibility invited theft. The new approach: concealment. Cut tombs deep into cliffs. Separate tomb from mortuary temple. Post guards.

The irony: the Valley of the Kings was also eventually robbed (except Tutankhamun, protected by accident). But the tombs preserve extraordinary art—painted walls showing the pharaoh's journey through the underworld, the theology of death made visible.`,
			imagePlaceholder: 'Valley of the Kings with rock-cut tomb entrance'
		},
		{
			id: 'amun-supreme',
			date: '~3,500 years ago',
			title: 'Amun Becomes Supreme',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The hidden god.',
			content: `Amun ("the hidden one")—patron god of Thebes—rises to theological supremacy. As Thebes becomes the New Kingdom capital, Amun becomes king of gods.

Amun-Ra merges the hidden god with the sun god—both transcendent and immanent. The temple of Amun at Karnak becomes the largest religious complex in history.

The priests of Amun accumulate enormous wealth and power. At times they rival the pharaoh. Karnak owns land, cattle, boats, mines, foreign tribute. Thousands of employees serve the temple. Religion becomes economic institution, political power, and WHY-framework simultaneously.`,
			imagePlaceholder: 'Karnak temple complex dedicated to Amun'
		},
		{
			id: 'ugaritic-texts',
			date: '~3,500 years ago',
			title: 'Ugaritic Texts Composed',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The Canaanite library.',
			content: `At Ugarit in Syria, scribes write myths, rituals, and administrative texts in a local alphabetic cuneiform. These texts reveal Canaanite religion in detail.

The Baal Cycle: Baal defeats Yam (Sea), builds his palace, descends to the underworld, is mourned by Anat, returns from death. The dying-and-rising god pattern—structurally parallel to Osiris, later to Jesus.

Ugaritic provides the closest parallel to biblical Hebrew. The texts illuminate what Israelites were responding to, arguing against, borrowing from. Understanding the Hebrew Bible requires Ugaritic context. The discovery of Ugarit (1928) transformed biblical studies.`,
			imagePlaceholder: 'Ugaritic tablet with Baal Cycle text'
		},
		{
			id: 'glass-production',
			date: '~3,500 years ago',
			title: 'Glass Production',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Transparent luxury.',
			content: `True glass production emerges in Mesopotamia and Egypt. Glass vessels, beads, inlays become prestige goods.

The technology: silica (sand) plus soda (flux) plus lime (stabilizer), melted at high temperature. The furnace technology developed for metallurgy enables glass production.

Early glass is colored—blue, green, white. Colorless transparent glass is a later achievement. Glass becomes trade good linking the Bronze Age international system, another luxury flowing through the networks that will soon collapse.`,
			imagePlaceholder: 'Egyptian glass vessels in blue and green'
		},
		{
			id: 'proto-zoroastrian',
			date: '~3,500 years ago',
			title: 'Proto-Zoroastrian Religion',
			tags: ['parallel', 'expansion'],
			summary: 'The Iranian branch.',
			content: `The Indo-Iranians who will become Persians carry religious traditions closely related to Vedic religion. Shared concepts include Ahura (Sanskrit asura) and Daeva (Sanskrit deva)—but inverted. In Vedic, devas are good, asuras problematic. In Zoroastrian, Ahura (Mazda) is good, daevas are evil.

Haoma equals Soma (the ritual drink). Fire worship is central to both. Similar cosmology, vocabulary, ritual structure. At some point, the Iranian tradition inverts the moral valuation. The split between "good" and "evil" divine beings becomes sharper, preparing for Zoroastrian dualism.`,
			imagePlaceholder: 'Proto-Zoroastrian fire worship'
		},
		{
			id: 'bronze-weapons-standardization',
			date: '~3,480 years ago',
			title: 'Bronze Weapons Standardization',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Military industrialization.',
			content: `Bronze weapons—swords, spearheads, axes, arrowheads, helmets, armor—become standardized military equipment. Not individual craftsman pieces but mass-produced supplies.

The implications: standing armies can be equipped from central supplies, military logistics use interchangeable parts, training standardizes around consistent weapons, states attempt monopoly on bronze (controlling bronze means controlling military power).

The arms race accelerates. Better bronze armor demands better bronze weapons. Better weapons demand better armor. Military advantage depends on production capacity as much as warrior skill.`,
			imagePlaceholder: 'Standardized bronze weapons array'
		},
		{
			id: 'mycenaean-takeover-crete',
			date: '~3,450 years ago',
			title: 'Mycenaean Takeover of Crete',
			tags: ['expansion', 'gain'],
			summary: 'The Greeks inherit Minoan civilization.',
			content: `Mycenaean Greeks control Knossos. Linear B replaces Linear A. Greek replaces whatever language Minoans spoke. The Minoan world is absorbed.

What the Mycenaeans preserve: art styles, religious elements (bull imagery, goddess worship), palace administration methods, trade networks. What they add: Greek language, warrior ethos, chariot warfare, mainland connections.

Classical Greek culture descends from this merger—Minoan sophistication meeting Mycenaean power, synthesis creating something new.`,
			imagePlaceholder: 'Mycenaean-era Knossos with Greek administration'
		},
		{
			id: 'thutmose-iii',
			date: '~3,450 years ago',
			title: 'Thutmose III',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: "Egypt's greatest conqueror.",
			content: `Thutmose III conducts 17 military campaigns over 20 years, extending Egyptian rule to the Euphrates. He defeats the Canaanite coalition at Megiddo—the first battle recorded in detail.

Thutmose's annals at Karnak list every campaign, every city taken, every tribute received. The Battle of Megiddo account describes tactics, terrain, logistics, timing. This is HOW-documentation of warfare—the general's art made text.

At Thutmose's death, Egypt controls Nubia to the Fourth Cataract, the Levant to the Euphrates, trade networks reaching Mesopotamia, Anatolia, the Aegean. Egypt is a superpower.`,
			imagePlaceholder: 'Thutmose III at the Battle of Megiddo'
		},
		{
			id: 'moses-exodus',
			date: '~3,450 years ago',
			title: 'Traditional Time of Moses and Exodus',
			tags: ['expansion', 'cognitive'],
			summary: 'The foundational narrative.',
			content: `According to biblical chronology (heavily contested), Moses leads the Israelites out of Egypt, receives the Law at Sinai, establishes the covenant. The historical question: the Exodus has no clear archaeological or Egyptian textual confirmation. Scholars debate historical kernel versus etiological myth.

The theological importance is separate from historical question. The Exodus establishes YHWH as liberator (god who acts in history), covenant at Sinai (Law as covenant obligation), election of Israel (chosen people, special relationship), rejection of other gods (first commandment: no other gods before me).

The Exodus is Israel's founding myth—slavery, liberation, wandering, promise. It structures Jewish identity for 3,000 years regardless of historicity debates.`,
			imagePlaceholder: 'Moses parting the Red Sea'
		},
		{
			id: 'oracle-bone-divination',
			date: '~3,400 years ago',
			title: 'Oracle Bone Divination',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Questions to the ancestors.',
			content: `Shang kings communicate with ancestors and gods through scapulimancy—heating animal bones (usually ox scapulae or turtle plastrons) and reading the cracks.

The process: prepare bone/shell, apply heat to hollows, cracks form in patterns, diviner reads cracks as answers, incise the question and sometimes the answer, archive the bone. Questions cover harvests, warfare, weather, hunts, childbirth, illness, ancestor satisfaction, ritual timing.

The Shang king is diviner-in-chief—religious and political authority unified. Oracle bone inscriptions are the earliest Chinese writing. They prove the Shang existed, the king list is accurate, the religious system centered on ancestor worship.`,
			imagePlaceholder: 'Oracle bone with inscribed questions and cracks'
		},
		{
			id: 'shangdi-ancestors',
			date: '~3,400 years ago',
			title: 'Shangdi and the Ancestors',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Chinese religious foundation.',
			content: `Shang religion centers on Shangdi ("Supreme Deity" or "Lord on High")—a high god who controls rain, harvests, warfare, the royal line. Di may also refer to deceased Shang kings who have ascended to divine status. The boundary between "god" and "royal ancestor" blurs.

Ancestors require regular offerings. They can help or harm the living. The ancestor cult becomes the foundation of Chinese religion. Nature spirits—mountains, rivers, earth, winds—also require propitiation.

The pattern: hierarchy extends to heaven. As the king rules earth, Shangdi rules heaven. Ancestors mediate. This hierarchical cosmology persists through Confucianism—heavenly order mirrors and legitimizes earthly order.`,
			imagePlaceholder: 'Shang ancestor worship ritual'
		},
		{
			id: 'shang-bronze-casting',
			date: '~3,400 years ago',
			title: 'Shang Bronze Casting',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The ritual vessels.',
			content: `Shang bronze work is among the finest ever produced. Ritual vessels—ding (tripods), gui (food vessels), jue (wine vessels)—are cast using piece-mold technique.

Chinese bronze casting differs from Western lost-wax. Clay molds are carved in sections, assembled, and bronze poured in. This allows fine surface decoration impossible in lost-wax.

Bronze vessels are for ancestor ritual—holding food and wine offerings. Their decoration (taotie masks, dragons, geometric patterns) carries religious meaning we don't fully understand. Major vessels represent enormous resources. They mark elite status and state power. Shang legitimacy is materialized in bronze.`,
			imagePlaceholder: 'Shang bronze ding vessel with taotie decoration'
		},
		{
			id: 'rig-veda-composition',
			date: '~3,400 years ago',
			title: 'Rig Veda Composition Continues',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The oldest sacred text in continuous use.',
			content: `The Rig Veda—1,028 hymns in 10 books—is composed over centuries of oral tradition. It's the oldest religious text still used in living practice.

Content includes hymns to gods, mythological narratives (Indra killing Vritra, cosmic creation), ritual instructions, and philosophical speculation. The famous Nasadiya Sukta (Creation Hymn, RV 10.129) questions whether even the gods know how creation happened.

The oral tradition preserves the Rig Veda for over 1,000 years before writing. Multiple memorization methods, correction systems, priestly lineages maintain the text. The preservation techniques are themselves technological achievements.`,
			imagePlaceholder: 'Vedic priests chanting Rig Veda hymns'
		},
		{
			id: 'yhwh-character-forms',
			date: '~3,400 years ago',
			title: "YHWH's Character Forms",
			tags: ['expansion', 'cognitive'],
			summary: 'The god who acts in history.',
			content: `Whether or not the Exodus occurred as narrated, the concept of YHWH crystallizes during this period. YHWH differs from Canaanite gods: not part of a pantheon (eventually), not tied to natural cycles but to historical events, ethically demanding (not just ritually propitiated), jealous (demanding exclusive worship).

YHWH is similar to El (creator, wise, father figure, "El Shaddai" epithet) and similar to Baal (storm imagery, warrior god, divine king). YHWH may have been a separate deity (possibly from Midian/Edom) who merges with El and absorbs Baal's characteristics while rejecting Baal worship. The process is complex and takes centuries.`,
			imagePlaceholder: 'YHWH storm theophany imagery'
		},
		{
			id: 'hittite-empire-peak',
			date: '~3,400 years ago',
			title: 'Hittite Empire Peak',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Superpowers in the north.',
			content: `Under Suppiluliuma I, the Hittite Empire reaches its peak—controlling Anatolia, northern Syria, and challenging Egypt for dominance of the Levant.

Suppiluliuma destroys the Mitanni Empire, installs his sons as kings in Syria, and maneuvers among the great powers. Hittite kings correspond as equals with Egypt and Babylon. The royal archives at Hattusa preserve treaties, letters, records—a complete diplomatic history.

The widow's letter: after Tutankhamun's death, his widow writes to Suppiluliuma asking for a son to marry. "Never shall I take a servant of mine and make him my husband." Suppiluliuma sends a prince; he's murdered en route. The incident nearly causes war.`,
			imagePlaceholder: 'Hittite Empire at its greatest extent'
		},
		{
			id: 'amarna-letters',
			date: '~3,400 years ago',
			title: 'Amarna Letters',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'International diplomacy documented.',
			content: `The Amarna archive preserves diplomatic correspondence between Egypt and other great powers: Babylon, Assyria, Mitanni, Hatti, plus vassal states in the Levant.

The language is Akkadian—the diplomatic lingua franca of the Bronze Age. Even Hittites and Egyptians write to each other in Akkadian. Content includes royal marriages negotiated, gold demanded and sent (everyone wants Egyptian gold), vassals complaining about each other, status disputes, trade arrangements.

The Late Bronze Age is an international system—great powers recognizing each other, maintaining diplomatic norms, exchanging goods and brides. The first world order. This system will collapse completely within 200 years.`,
			imagePlaceholder: 'Amarna letter cuneiform tablet'
		},
		{
			id: 'composite-bow-refinement',
			date: '~3,400 years ago',
			title: 'Composite Bow Refinement',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The curved killer.',
			content: `The composite bow reaches mature form—wood, horn, and sinew laminated together. More powerful than simple wooden bows, usable from horseback and chariots.

Horn resists compression (belly of bow). Sinew resists tension (back of bow). Wood provides structure. The combination stores more energy than any single material.

A composite bow can be short (usable on horseback) yet powerful (effective at range). This enables horse archer tactics that will dominate Eurasian warfare for 2,500 years.`,
			imagePlaceholder: 'Composite bow construction diagram'
		},
		{
			id: 'taxation-census-systems',
			date: '~3,380 years ago',
			title: 'Taxation and Census Systems',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Counting the kingdom.',
			content: `States develop systematic taxation and census-taking. Egyptian records list households, landholdings, cattle, production. Mesopotamian records track labor obligations, tribute, temple income.

The technology is bureaucratic: standardized forms, regular collection cycles, professional assessors, archival storage. The ability to count your subjects enables the ability to tax them. The ability to tax enables the ability to field armies, build monuments, administer empire.

Census-taking is politically sensitive. People resist being counted; being counted means being taxed, being conscripted, being controlled. The state's information appetite and the subject's information resistance are in tension.`,
			imagePlaceholder: 'Ancient census and taxation records'
		},
		{
			id: 'akhenaten-revolution',
			date: '~3,350 years ago',
			title: "Akhenaten's Revolution",
			tags: ['expansion', 'cognitive'],
			summary: "Monotheism's first attempt.",
			content: `Amenhotep IV changes his name to Akhenaten and revolutionizes Egyptian religion. He elevates Aten (the sun disk) to sole god, suppresses other cults, moves the capital to Akhetaten (Amarna), and commissions art in radical new style.

Aten is the sole god, creator of all. Akhenaten is Aten's sole representative. Other gods don't exist (not just inferior—nonexistent). Traditional temples close, images are defaced, priesthoods suppressed.

The Great Hymn to Aten parallels Psalm 104 strikingly. Is this monotheism? Scholars debate. Akhenaten's religion has one god, one prophet, one truth—structurally monotheist. But it dies with him.

Akhenaten neglects the empire (Amarna letters show vassal states pleading for help that doesn't come). After his death, his revolution is reversed. His name is erased. His city is abandoned. Egypt returns to Amun.`,
			imagePlaceholder: 'Akhenaten worshipping the Aten sun disk'
		},
		{
			id: 'tutankhamun',
			date: '~3,323 years ago',
			title: 'Tutankhamun',
			tags: ['expansion', 'cognitive'],
			summary: 'The restoration.',
			content: `Tutankhaten changes his name to Tutankhamun. The counter-revolution is complete. Traditional religion restored.

Tutankhamun was a minor king who died young (~19 years old). His significance: his tomb was found intact (1922), providing the only complete royal burial from ancient Egypt. The golden mask, the nested coffins, the thousands of artifacts show what every royal burial once contained.

Every other tomb was robbed. Tutankhamun survived because his tomb was buried under debris from later tomb construction. One accident of preservation; everything else destroyed.`,
			imagePlaceholder: 'Tutankhamun golden death mask'
		},
		{
			id: 'chinese-writing-develops',
			date: '~3,300 years ago',
			title: 'Chinese Writing System Develops',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The continuous script.',
			content: `Shang oracle bone script develops into a writing system that, unlike all others, continues in recognizable form to the present.

Chinese writing is logographic—each character represents a word/morpheme, not a sound. This allows the same script to be read in mutually unintelligible dialects. Modern Chinese readers can—with training—read oracle bone inscriptions.

The Chinese script unifies Chinese civilization across space (different dialects) and time (different eras). It's perhaps the longest-lived writing system in continuous use. Three thousand years of development, but fundamentally the same system.`,
			imagePlaceholder: 'Evolution from oracle bone to modern Chinese characters'
		},
		{
			id: 'hittite-law-code',
			date: '~3,300 years ago',
			title: 'Hittite Law Code',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'A different legal tradition.',
			content: `Hittite law differs from Hammurabi's. Less "eye for an eye," more compensation. Punishments for accidental killing differ from intentional. Slavery is less absolute—slaves have some rights, can own property.

If you kill a free person accidentally, you compensate the family with persons (slaves or substitutes). If you kill a slave accidentally, you pay silver. Hittite law suggests different social assumptions—hierarchy matters, but hierarchy is negotiable. Persons have value that can be quantified and exchanged.`,
			imagePlaceholder: 'Hittite law tablet'
		},
		{
			id: 'varna-system-begins',
			date: '~3,300 years ago',
			title: 'Varna System Begins',
			tags: ['expansion', 'cognitive'],
			summary: 'Social hierarchy codifies.',
			content: `The four-varna system appears in late Vedic texts: Brahmins (priests, scholars), Kshatriyas (warriors, rulers), Vaishyas (merchants, farmers), Shudras (servants, laborers).

The Purusha Sukta describes varnas arising from cosmic sacrifice—Brahmins from the mouth, Kshatriyas from the arms, Vaishyas from the thighs, Shudras from the feet. The system maps Indo-European tripartite ideology onto Indian social structure, with Shudras as fourth category (possibly representing absorbed non-Aryan populations).

The varna system evolves into the caste system—one of the most enduring and controversial social structures in human history. What begins here shapes India for 3,000+ years.`,
			imagePlaceholder: 'Vedic varna system illustration'
		},
		{
			id: 'zoroaster',
			date: '~3,300 years ago',
			title: 'Zoroaster (Zarathustra)',
			tags: ['expansion', 'cognitive'],
			summary: 'The prophet of dualism.',
			content: `Zoroaster lives—when exactly is debated (estimates range 1500-600 BCE). The traditional dating places him early; linguistic analysis of the Gathas suggests various periods.

The teaching: Ahura Mazda (the Wise Lord) is supreme good god, creator. Angra Mainyu (Ahriman) is destructive spirit, source of evil. Cosmic battle between good and evil, truth and lie. Human choice matters—each person chooses sides. Final judgment, resurrection, renovation of the world.

Zoroastrianism likely influences Judaism (during Persian period), and through Judaism influences Christianity and Islam. Concepts of heaven/hell, resurrection, final judgment, cosmic dualism—Zoroastrian parallels are striking.`,
			imagePlaceholder: 'Zoroaster with sacred fire and Faravahar'
		},
		{
			id: 'phoenician-alphabet',
			date: '~3,300 years ago',
			title: 'Phoenician Alphabet',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Writing simplified.',
			content: `The Phoenicians standardize and spread the alphabetic script developed from Proto-Sinaitic. The Phoenician alphabet—22 consonantal letters—becomes the ancestor of virtually all alphabets.

Descendants include Hebrew (via Aramaic), Arabic (via Nabataean), Greek (which adds vowels—the first complete alphabet), Latin (via Greek via Etruscan), Cyrillic (via Greek), South Asian scripts (via Brahmi).

Phoenician traders carry the alphabet across the Mediterranean. Within centuries, literacy explodes. The alphabet is perhaps the most consequential technology after writing itself—it makes writing accessible to non-specialists.`,
			imagePlaceholder: 'Phoenician alphabet evolution into Greek and Hebrew'
		},
		{
			id: 'seagoing-ships-advance',
			date: '~3,300 years ago',
			title: 'Seagoing Ships Advance',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The Mediterranean connected.',
			content: `Bronze Age ships become more sophisticated—keeled hulls, multiple sails, larger cargo capacity. The Mediterranean becomes a unified trade zone.

Routes circle Egypt to Canaan to Cyprus to Crete to Greece to Anatolia to Syria. Copper from Cyprus, tin from elsewhere, grain from Egypt, timber from Lebanon, luxury goods everywhere.

The Uluburun wreck (~1300 BCE) contained copper ingots, tin, glass, ebony, ivory, gold, silver, bronze tools, weapons, jewelry, foodstuffs. A single ship carrying the international trade system in microcosm.`,
			imagePlaceholder: 'Bronze Age Mediterranean trading ship'
		},
		{
			id: 'dye-technology',
			date: '~3,300 years ago',
			title: 'Dye Technology (Tyrian Purple)',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Color as status.',
			content: `The Phoenicians develop Tyrian purple—dye extracted from murex sea snails. Thousands of snails produce grams of dye. The color is vivid, permanent, extraordinarily expensive.

Purple becomes the color of royalty. The expense ensures exclusivity. Wearing purple broadcasts wealth and status. The technology creates the symbolism; the symbolism creates demand for the technology.

Dye technology more broadly advances. Indigo, kermes, weld, madder—colors extracted from plants and animals. Colored textiles become prestige goods, markers of rank, trade commodities.`,
			imagePlaceholder: 'Tyrian purple production'
		},
		{
			id: 'ugaritic-alphabetic-cuneiform',
			date: '~3,290 years ago',
			title: 'Ugaritic Alphabetic Cuneiform',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The hybrid script.',
			content: `At Ugarit, scribes develop an alphabetic cuneiform—wedge-shaped signs representing consonants rather than syllables or logograms. The efficiency of alphabet meets the technology of stylus-on-clay.

This script dies with Ugarit (~1185 BCE). But it demonstrates independent invention of alphabetic principle. The idea of reducing writing to minimal consonantal signs appears multiple times—convergent evolution of technology.`,
			imagePlaceholder: 'Ugaritic alphabetic cuneiform tablet'
		},
		{
			id: 'battle-of-kadesh',
			date: '~3,274 years ago',
			title: 'Battle of Kadesh',
			tags: ['expansion', 'gain'],
			summary: "The Bronze Age's greatest battle.",
			content: `Ramesses II of Egypt fights Muwatalli II of Hatti at Kadesh in Syria. Both sides claim victory. Neither wins decisively. Approximately 5,000-6,000 chariots engage—the largest chariot battle in history.

Ramesses, ambushed, fights heroically and single-handedly saves the army (in Egyptian accounts). The reliefs show him alone, towering, slaughtering Hittites. Propaganda, but magnificent propaganda.

The reality: tactical draw. Neither side breaks the other. The strategic result: Egypt and Hatti realize neither can destroy the other. Peace becomes preferable to endless war.`,
			imagePlaceholder: 'Battle of Kadesh chariot warfare'
		},
		{
			id: 'egyptian-hittite-peace-treaty',
			date: '~3,259 years ago',
			title: 'Egyptian-Hittite Peace Treaty',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The first international peace treaty.',
			content: `Ramesses II and Hattusili III sign a peace treaty—history's oldest surviving international peace treaty. Copies exist in both Egyptian hieroglyphics and Hittite cuneiform.

Terms include non-aggression pact, mutual defense alliance, extradition of fugitives, succession guarantees, divine witnesses from both pantheons.

Two great powers formally ending conflict through negotiated agreement. The treaty holds—Egypt and Hatti remain at peace until Hatti's collapse 80 years later. A copy hangs in the United Nations headquarters.`,
			imagePlaceholder: 'Egyptian-Hittite peace treaty tablets'
		},
		{
			id: 'ramesses-ii-building',
			date: '~3,250 years ago',
			title: "Ramesses II's Building Program",
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Monumentality at scale.',
			content: `Ramesses II builds on unprecedented scale: the Ramesseum (his mortuary temple), Abu Simbel (four colossal statues carved from living rock), additions to Karnak and Luxor, the new capital Pi-Ramesses.

The scale is overwhelming. Abu Simbel's statues are 20 meters tall. The seated Ramesses dwarfs visitors into insignificance. The message is political-theological: Ramesses is not merely king but god-on-earth.

The building program employs thousands—quarrymen, sculptors, builders, overseers. The labor is partly corvée (conscripted), partly paid. The organization demonstrates state capacity as much as the monuments themselves.`,
			imagePlaceholder: 'Abu Simbel colossal statues'
		},
		{
			id: 'medicine-advances',
			date: '~3,250 years ago',
			title: 'Medicine Advances',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Healing as craft.',
			content: `Egyptian medical papyri describe surgical procedures, herbal remedies, magical incantations. The Edwin Smith Papyrus takes an empirical approach to trauma—describing wounds, prognoses, treatments systematically.

Some treatments work: wound cleaning, bone setting, some herbal remedies. Some are magical. The distinction between medicine and magic isn't yet drawn; both address the mystery of suffering.

Physicians become professionals—trained, paid, respected. Medical specialization appears. The body becomes object of systematic knowledge, even as the WHY of illness remains attributed to gods, demons, or magical causes.`,
			imagePlaceholder: 'Egyptian medical papyrus'
		},
		{
			id: 'textile-patterns-dyes',
			date: '~3,230 years ago',
			title: 'Textile Patterns and Dyes',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Fabric as statement.',
			content: `Textile production reaches new sophistication. Complex weaving patterns, multi-colored designs, standardized decorative motifs. Textiles become markers of status, ethnicity, function.

The technology includes improved looms (more heddles for complex patterns), mordants (chemicals fixing dyes permanently), and specialized dyeing techniques. Textile workshops produce for domestic use and export.

Sumptuary laws in some societies restrict who can wear what patterns and colors. The technology of distinction creates the politics of display.`,
			imagePlaceholder: 'Bronze Age textile patterns'
		},
		{
			id: 'road-systems',
			date: '~3,220 years ago',
			title: 'Road Systems',
			tags: ['expansion', 'tech', 'gain'],
			summary: "Empire's infrastructure.",
			content: `Empires build roads. The Hittites maintain routes across Anatolia. Egypt builds roads and rest stations. Babylon maintains connections to its territories.

Roads enable military deployment, tax collection, trade, communication. The road is infrastructure of power. Who controls roads controls movement.

Road technology includes grading (leveling), surfacing (gravel or stone in wet areas), bridges (stone or pontoon), and way stations (supply points, fresh horses). The investment is significant; only states can maintain road systems.`,
			imagePlaceholder: 'Bronze Age road system'
		},
		{
			id: 'climate-shifts-begin',
			date: '~3,210 years ago',
			title: 'Climate Shifts Begin',
			tags: ['stress', 'climate'],
			summary: 'The environment turns.',
			content: `Climate data suggests increasing drought and instability in the eastern Mediterranean after ~1250 BCE. Tree rings, pollen records, and sediment cores indicate aridification.

The stress builds gradually. Agricultural yields decline. Populations migrate. Borderland peoples push toward the fertile centers. The system that depends on predictable surpluses begins to strain.

Climate doesn't cause the Bronze Age Collapse alone—but it stresses a complex, interdependent system. When systems run near capacity, small shocks cascade.`,
			imagePlaceholder: 'Climate change indicators'
		},
		{
			id: 'iron-working-spreads',
			date: '~3,200 years ago',
			title: 'Iron Working Spreads',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The beginning of the end of bronze.',
			content: `Iron smelting technology—previously Hittite-controlled—begins spreading. Iron remains inferior to bronze (carbon-controlled steel comes later), but iron ore is far more abundant.

Bronze requires copper plus tin. Tin is rare; trade networks essential. Iron ore is everywhere. When bronze trade networks collapse, iron becomes the alternative.

The Bronze Age Collapse—which destroys the international trade system—also forces iron adoption. Catastrophe accelerates technological transition. The old technology dies with the old system; the new technology enables the new world.`,
			imagePlaceholder: 'Early iron working spreading from Anatolia'
		},
		{
			id: 'sea-peoples-gathering',
			date: '~3,200 years ago',
			title: 'Sea Peoples Gathering',
			tags: ['stress'],
			summary: 'Storm on the horizon.',
			content: `Groups later called "Sea Peoples" begin appearing in Egyptian records—raiders, migrants, warriors of uncertain origin. Peoples from the Aegean, Anatolia, the islands—displaced, mobile, dangerous.

The names preserved: Peleset (possibly Philistines), Tjeker, Shekelesh, Denyen, Weshesh. Their origins are debated. Their impact is clear: they attack coastal cities, disrupt trade, participate in the coming collapse.

The Sea Peoples are both symptom and cause. Something displaces them; their displacement displaces others. The cascade has begun.`,
			imagePlaceholder: 'Sea Peoples in Egyptian reliefs'
		},
		{
			id: 'era-5-closes',
			date: '~3,200 years ago',
			title: 'Era V Closes: On the Edge of Collapse',
			tags: ['transition'],
			summary: 'Everything is about to break.',
			content: `By 1200 BCE, the Bronze Age international system is at its peak—and its breaking point. Egypt under Ramesses II's successors. Hatti weakening. Mycenaean palaces functioning. Babylon under Kassite rule. Assyria rising. Trade networks spanning the Mediterranean.

The stresses accumulate: climate shift (drought, famine), system complexity (fragility increases with interconnection), military technology diffusion (iron, new tactics), population movements (Sea Peoples gathering).

Within one century, this entire system will collapse. Hatti destroyed. Mycenaean civilization destroyed. Egyptian empire contracted. Ugarit burned. Trade networks severed. Writing systems lost. Cities abandoned.

The Bronze Age Collapse is coming—the first system-wide civilizational catastrophe in recorded history. Era VI will be the reckoning.`,
			imagePlaceholder: 'Bronze Age world on the eve of collapse'
		}
	],
	// Links format: { "1": { url: "...", tag: "tech" }, "2": { url: "..." } }
	links: {}
};
