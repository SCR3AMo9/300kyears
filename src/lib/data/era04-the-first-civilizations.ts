import type { Era } from './types';

export const theFirstCivilizations: Era = {
	id: 'era-4',
	number: 'IV',
	title: 'THE FIRST CIVILIZATIONS      (3 AI PASSES, Manual Edits Required)',
	timespan: '~6,000 - 4,000 years ago',
	description: 'The three-body dynamic achieving stable orbit for the first time at scale: WHAT (the gods hold the mysteries), WHY (the temple interprets, mediates, explains), HOW (the state executes—irrigation, warfare, trade). The village becomes city. The chief becomes king. The shaman becomes priest. Writing captures speech. Bronze replaces stone. The human world begins.',
	events: [
		{
			id: 'irrigation-networks-scale',
			date: '~5,900 years ago',
			title: 'Irrigation Networks Scale Up',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Water becomes infrastructure.',
			content: `Canal systems expand from simple field-flooding to engineered networks. Main canals branch into secondary channels, which branch into tertiary ditches reaching individual fields. Water is measured, allocated, scheduled.

This requires coordination beyond anything before. Upstream use affects downstream availability. Silt must be dredged. Breaches must be repaired collectively. Water disputes must be adjudicated. The irrigation network becomes the template for governance—someone must manage the water, and whoever manages water rules.

Irrigation transforms Mesopotamia's unreliable rainfall into the most productive agricultural region on Earth. Population densities become possible that will support cities of tens of thousands.`,
			imagePlaceholder: 'Mesopotamian irrigation canal network'
		},
		{
			id: 'urban-revolution-begins',
			date: '~5,800 years ago',
			title: 'The Urban Revolution Begins',
			tags: ['expansion', 'tech'],
			summary: 'The city as technology.',
			content: `Uruk grows beyond anything before—from village to town to city. By 3500 BCE, it will reach 40,000 people. This requires technologies invisible to archaeology but essential to survival.

Sanitation: Dense population without waste management means epidemic. Drainage channels, designated dumping areas, separation of water sources from waste. Water distribution: 40,000 people need water daily—wells, canals, cisterns, carrying systems, allocation rules. Food logistics: 40,000 people need 40+ tons of grain daily—storage facilities, distribution systems, accounting, transport.

The city is a technology—a system for enabling human density beyond natural limits. Each solution creates new problems requiring new solutions. The ratchet tightens.`,
			imagePlaceholder: 'Early Uruk with emerging urban infrastructure'
		},
		{
			id: 'beveled-rim-bowls',
			date: '~5,800 years ago',
			title: 'Beveled-Rim Bowls',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Mass production for mass feeding.',
			content: `Crude, mass-produced ceramic bowls appear across Mesopotamia—thick-walled, made in molds, standardized in size. Archaeologists find them by the thousands. What are they for?

The leading theory: ration distribution. The bowl holds a standard portion—of grain, bread, beer. Workers receive their payment in these bowls. The bowl IS the measure. Mass production enables mass administration. Feed the workers building the temples; feed the laborers digging the canals.

This is industrial logic before industry: standardized containers for standardized portions enabling standardized labor management. HOW-capacity serving the growing apparatus of civilization.`,
			imagePlaceholder: 'Beveled-rim bowls from Uruk period'
		},
		{
			id: 'standardized-mud-brick',
			date: '~5,700 years ago',
			title: 'Standardized Mud Brick',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The first building code.',
			content: `Bricks become standardized—consistent sizes across a city, across generations. A brick made in 3700 BCE fits walls built in 3500 BCE. Interchangeability. Replaceability. Industrial logic.

Specialized brick-makers emerge (not everyone makes their own). Quality control rejects non-conforming bricks. Planning calculates materials before building. Repair matches old construction with new materials. Scale enables large projects with consistent components.

This is manufacturing standardization 5,000 years before the Industrial Revolution. The HOW-principle of interchangeable parts appears with the first cities.`,
			imagePlaceholder: 'Standardized mud bricks in ancient Mesopotamian construction'
		},
		{
			id: 'rope-making-industry',
			date: '~5,700 years ago',
			title: 'Rope-Making Industry',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Fiber becomes force.',
			content: `Rope production scales up—twisted plant fibers (palm, reed, flax) creating cables capable of bearing tons. Without rope, there are no ships, no construction hoists, no water-drawing, no animal harnesses.

Rope-making becomes specialized craft. Different fibers for different purposes: strong rope for construction, fine cordage for nets, waterproof rope for boats. The technology is invisible in most archaeology (rope decays), but the structures rope enabled remain.

Every temple platform, every boat, every well, every loaded donkey depends on rope. The humble twisted fiber is infrastructure.`,
			imagePlaceholder: 'Ancient rope-making techniques'
		},
		{
			id: 'textile-industry-scales',
			date: '~5,600 years ago',
			title: 'Textile Industry Scales',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Cloth becomes commodity.',
			content: `Textile production moves from household craft to organized industry. Temple workshops employ dozens of weavers—women, mostly. Production is tracked, quotas set, output measured.

Wool from temple flocks, processed through temple workshops, becomes trade good. Mesopotamia exports textiles; imports metals, stone, timber. The cloth industry funds civilization. Textile production records are among the earliest written documents.

The loom becomes a machine. Not yet mechanized, but systematized—division of labor, specialized tools, standardized output. The factory exists in embryo.`,
			imagePlaceholder: 'Ancient Mesopotamian textile workshop'
		},
		{
			id: 'beer-production-industrializes',
			date: '~5,600 years ago',
			title: 'Beer Production Industrializes',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Liquid bread.',
			content: `Brewing scales from household to institution. Temple breweries produce thousands of liters. Beer is nutrition (calories, vitamins from fermentation), hydration (safer than water), payment (workers receive beer rations), and sacrament (offerings to gods).

The "Hymn to Ninkasi" (goddess of beer) is also a brewing recipe—encoded in religious poetry, technical knowledge preserved through worship. The brewmistress is a respected professional. Beer varieties multiply: strong beer, filtered beer, sweet beer, aged beer.

Beer holds society together. The tavern is social space; the ration is labor contract; the offering is piety. Liquid bread feeds civilization.`,
			imagePlaceholder: 'Sumerian beer production scene'
		},
		{
			id: 'uruk-period',
			date: '~5,500 years ago',
			title: 'Uruk Period Begins',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The first true city.',
			content: `Uruk reaches 40,000+ inhabitants—the largest human settlement in history. The temple of Inanna dominates the skyline on its massive platform. A second temple complex honors Anu, sky god, father of gods.

The three-body orbit stabilizes: WHAT (the gods hold the mysteries—creation, death, fate), WHY (the temple interprets, mediates, explains—priests read omens, perform rituals), HOW (the state executes—irrigation, warfare, trade, taxation).

The Uruk expansion spreads influence across Mesopotamia and beyond—colonies or trading posts in Syria, Iran, Anatolia. A shared cultural package: cylinder seals, pottery styles, administrative practices. This is the first "world system."`,
			imagePlaceholder: 'Reconstruction of Uruk with ziggurat and temple complex'
		},
		{
			id: 'cylinder-seals',
			date: '~5,500 years ago',
			title: 'Cylinder Seals',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Identity made reproducible.',
			content: `Small stone cylinders carved with intricate scenes—rolled across wet clay to leave an impression. Each seal is unique. The impression marks ownership, authority, authenticity.

The seal functions as signature (identifies owner), security (shows tampering), property marker (stamps ownership), authority (validates documents). Cylinder seals are miniature masterpieces—complex scenes carved in reverse on curved surfaces 2-3 centimeters tall.

Cylinder seals persist for 3,000 years in Mesopotamia. One technology, essentially unchanged, serving bureaucratic identification across the entire span of ancient civilization.`,
			imagePlaceholder: 'Cylinder seal and its clay impression showing intricate scenes'
		},
		{
			id: 'faience-production',
			date: '~5,500 years ago',
			title: 'Faience Production',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The first synthetic material.',
			content: `Faience—crusite quartz particles bound with alkali and lime, glazed with copper compounds—produces brilliant blue-green objects. Not quite glass, but the precursor. The first material humans create rather than merely shape.

Faience beads, amulets, vessels, tiles spread across the ancient world. The blue-green color evokes water, sky, fertility. The material itself demonstrates mastery—transforming sand into jewel-like objects through controlled fire.

The technology requires precise temperature control, specific mineral mixtures, understanding of chemical reactions. The faience-maker is proto-chemist, transforming matter through knowledge.`,
			imagePlaceholder: 'Faience beads and amulets'
		},
		{
			id: 'donkey-domestication-completes',
			date: '~5,500 years ago',
			title: 'Donkey Domestication Completes',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The first beast of burden.',
			content: `The donkey—domesticated earlier from African wild ass—becomes the standard transport animal. Donkeys carry loads across terrain too rough for carts, survive on poor fodder, tolerate heat.

A donkey carries 70 kg, walks 30 km daily, and requires less water than cattle. Donkey caravans make overland trade viable. The routes that will become the Silk Road begin as donkey trails.

The donkey also pulls plows, turns mills, carries the poor. Neither as prestigious as horse nor as powerful as ox, the donkey does the work that holds trade networks together.`,
			imagePlaceholder: 'Donkey caravan in ancient trade route'
		},
		{
			id: 'bronze-metallurgy',
			date: '~5,400 years ago',
			title: 'Bronze Metallurgy',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The alloy age begins.',
			content: `Copper mixed with tin (or arsenic) produces bronze—harder, more durable, better-edged than pure copper. The Bronze Age begins.

Tin is rare. Mesopotamia has none. Egypt has none. Tin must come from Afghanistan, Cornwall, or Southeast Asia—thousands of kilometers away. Bronze requires trade networks. No civilization can be self-sufficient in bronze. International exchange becomes structural necessity.

Bronze weapons surpass stone and copper. Bronze tools—axes, chisels, saws—increase productive capacity. Bronze vessels become prestige items. Status, military power, and productivity correlate with bronze access.`,
			imagePlaceholder: 'Bronze weapons and tools from early Bronze Age'
		},
		{
			id: 'lapis-lazuli-trade',
			date: '~5,400 years ago',
			title: 'Lapis Lazuli Trade Networks',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Blue from the mountains.',
			content: `Lapis lazuli—deep blue stone veined with gold pyrite—comes from one source: the mountains of Afghanistan, specifically Badakhshan. Yet lapis appears in royal graves from Egypt to Mesopotamia to the Indus Valley.

This means trade networks spanning 3,000+ kilometers operate by 3400 BCE. Middlemen, caravans, exchange protocols, trust systems across languages and cultures. The desire for beauty drives infrastructure.

Lapis becomes associated with divinity. The blue of heaven, the night sky scattered with golden stars. The stone's rarity and distant origin add to its power. Value is constructed from scarcity, difficulty, and meaning.`,
			imagePlaceholder: 'Lapis lazuli artifacts and trade routes'
		},
		{
			id: 'potters-wheel-fast',
			date: '~5,300 years ago',
			title: "Potter's Wheel (Fast Wheel)",
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Mass production begins.',
			content: `The slow wheel (tournette) gives way to the fast wheel—a flywheel kicked or spun to maintain rotation while both hands shape clay.

A skilled potter with a fast wheel produces 10x more vessels per hour than hand-building. Pottery becomes cheap, abundant, standardized. Specialized potters replace household production. Pottery districts emerge in cities. Standardized forms persist recognizably across centuries. Pottery becomes trade good.

Wheel-thrown pottery is so distinctive that archaeologists use pottery typology as chronological markers. The technology spreads across the Old World within centuries.`,
			imagePlaceholder: "Potter using fast wheel to shape clay vessels"
		},
		{
			id: 'bitumen-waterproofing',
			date: '~5,300 years ago',
			title: 'Bitumen Waterproofing',
			tags: ['expansion', 'tech', 'gain'],
			summary: "Nature's sealant.",
			content: `Bitumen—natural asphalt seeping from the ground in Mesopotamia—is systematically exploited for waterproofing. Boats are caulked, baskets sealed, bricks set in bitumen mortar, drainage channels lined.

The technology of waterproofing enables the technology of water management. Irrigation canals that don't leak. Boats that don't sink. Storage vessels that preserve contents. Bitumen is Mesopotamia's petroleum—a natural advantage other regions lack.

Bitumen also provides adhesive, mortar, and eventually decorative inlay. One material, multiple applications. Mesopotamia's gift from the ground.`,
			imagePlaceholder: 'Bitumen waterproofing applications'
		},
		{
			id: 'invention-writing',
			date: '~5,200 years ago',
			title: 'Invention of Writing (Cuneiform)',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Speech made permanent.',
			content: `Writing emerges from temple accounting. The clay tokens sealed in envelopes become marks pressed into clay tablets. The marks become stylized. The stylized marks become cuneiform—wedge-shaped impressions made with a reed stylus.

The first texts are inventories, receipts, allocations. "30 sheep from Ur-Nammu to the temple of Inanna." Writing begins as HOW—administrative mechanism.

Within centuries, writing captures WHY. The first literature: hymns to gods, king lists, mythological narratives. The spoken becomes written. The temporary becomes permanent. Cultural memory externalizes. The clay tablet survives millennia. Thoughts of people dead 5,000 years remain readable.`,
			imagePlaceholder: 'Cuneiform tablet showing early writing evolution from pictographs'
		},
		{
			id: 'numerical-notation',
			date: '~5,200 years ago',
			title: 'Numerical Notation Systems',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Counting becomes abstract.',
			content: `Distinct from writing words, numerical notation develops—symbols representing quantities independent of language. A number written in Sumerian means the same thing whether you speak Sumerian, Akkadian, or Elamite.

The Mesopotamian system is sexagesimal (base-60) for large numbers, decimal for small. Place notation emerges—the same symbol means different values depending on position. This enables mathematics impossible with simple tallying.

Numerical notation is the first universal language. Numbers transcend speech. The merchant and the scribe share meaning across linguistic boundaries.`,
			imagePlaceholder: 'Mesopotamian numerical notation tablet'
		},
		{
			id: 'sailboat-development',
			date: '~5,200 years ago',
			title: 'Sailboat Development',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Wind harnessed.',
			content: `Sails appear on Mesopotamian and Egyptian boats—square sails catching prevailing winds. Human muscle supplemented by wind energy.

A human rower produces perhaps 75 watts sustained. A modest sail in good wind captures kilowatts. The multiplier is enormous—and the wind doesn't tire. The Nile flows north; prevailing winds blow south. Sail upstream, float downstream. The Nile becomes a highway.

Bulk goods—grain, timber, stone—become moveable over water. Trade shifts from luxury goods (portable value) to staples (bulk value). Economies integrate across distance.`,
			imagePlaceholder: 'Ancient Egyptian sailboat on the Nile'
		},
		{
			id: 'elamite-civilization',
			date: '~5,200 years ago',
			title: 'Elamite Civilization (Proto-Elamite)',
			tags: ['parallel', 'expansion'],
			summary: 'The parallel experiment.',
			content: `In southwest Iran, Elam develops independently—cities, writing (Proto-Elamite script, still undeciphered), monumental architecture, complex administration. A parallel experiment in civilization adjacent to Mesopotamia.

Elam and Mesopotamia trade, war, influence each other for 2,500 years. Sometimes Elam dominates parts of Mesopotamia; sometimes Mesopotamia dominates Elam. Neither absorbs the other. Proto-Elamite writing emerges around the same time as Sumerian cuneiform—possibly influenced, possibly independent. It remains undeciphered.

An entire civilization's WHY-framework—their gods, their stories, their understanding—locked in unreadable symbols.`,
			imagePlaceholder: 'Proto-Elamite tablet with undeciphered script'
		},
		{
			id: 'kiln-technology-advances',
			date: '~5,200 years ago',
			title: 'Kiln Technology Advances',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Fire precisely controlled.',
			content: `Pottery kilns evolve into sophisticated structures—updraft kilns with separate fire chambers, controlled air flow, predictable temperature zones. Temperatures reach 1,000°C+ reliably.

Advanced kilns enable better pottery (stronger, thinner, more varied glazes), more efficient metal smelting, and eventually glass production. The kiln is a machine—an engineered environment for transformation.

Kiln-masters become specialists. Generations of accumulated knowledge: which clays, which temperatures, which fuels, which conditions. The craft becomes profession becomes science.`,
			imagePlaceholder: 'Ancient pottery kiln cross-section'
		},
		{
			id: 'sumerian-pantheon',
			date: '~5,150 years ago',
			title: 'The Sumerian Pantheon Codifies',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The gods take shape.',
			content: `The Sumerian religious system crystallizes—a pantheon of gods with defined relationships, functions, myths. An (sky god, father of gods). Enlil (wind, executive of divine will, grants kingship). Enki (wisdom, water, magic, the trickster). Inanna (love, war, fertility—complex, dangerous). Utu (sun, justice). Nanna (moon, calendar).

Gods own cities. Enlil owns Nippur. Enki owns Eridu. Inanna owns Uruk. The temple is the god's house; the city is the god's estate; the people are the god's servants.

This is organized WHAT—the mysteries held in personified form. Why does the river flood? Enlil wills it. Why do crops grow? Enki's waters, Ninhursag's earth. Chaos organized into navigable narrative.`,
			imagePlaceholder: 'Sumerian cylinder seal depicting major deities'
		},
		{
			id: 'temple-economy',
			date: '~5,150 years ago',
			title: 'Temple Economy Emerges',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The gods as landlords.',
			content: `The temple becomes economic institution. Temple estates own land, employ workers, manage flocks, operate workshops. The god is the ultimate owner; priests administer on divine behalf.

Temple economy redistributes: grain stored against famine, rations distributed to workers, surplus traded. The temple is bank, warehouse, employer, social safety net. This is WHY-institution becoming HOW-infrastructure.

The system has advantages: central coordination, risk pooling, long-term planning. It has costs: hierarchy, dependency, loss of individual autonomy. The temple economy model will shape Mesopotamian civilization for millennia.`,
			imagePlaceholder: 'Sumerian temple economy administration'
		},
		{
			id: 'wheeled-vehicles',
			date: '~5,100 years ago',
			title: 'Wheeled Vehicles',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The cart transforms transport.',
			content: `Solid wooden wheels attached to axles, pulled by oxen or donkeys. Carts and wagons appear in Mesopotamia, spreading rapidly.

A human carries perhaps 30 kg overland. A donkey carries 70 kg. An ox-cart carries 500+ kg. Bulk overland transport becomes viable. Wheels require roads—cleared, relatively flat paths. Road-building begins as a state function. The king who maintains roads enables trade, moves armies, projects power.

Early wheels are solid—heavy, prone to breaking, slow. Spoked wheels won't appear for another millennium. But even solid wheels transform logistics.`,
			imagePlaceholder: 'Early Mesopotamian cart with solid wooden wheels'
		},
		{
			id: 'egypt-unification',
			date: '~5,100 years ago',
			title: 'Unification of Egypt (Narmer/Menes)',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The god-king emerges.',
			content: `Upper and Lower Egypt unite under one ruler—traditionally Narmer or Menes (possibly the same person). The Two Lands become One.

Unlike Mesopotamia where gods are above kings, in Egypt the pharaoh IS the god. Horus incarnate. Son of Ra. Living divinity. The three-body problem collapses toward Containment—WHAT, WHY, and HOW held in a single person.

This model produces remarkable durability. Egypt as unified civilization persists for 3,000 years. The Containment strategy works—but at the cost of dynamism. The Nile creates natural unity—easy to travel, easy to control. Geography enables what theology justifies.`,
			imagePlaceholder: 'Narmer Palette showing unification of Upper and Lower Egypt'
		},
		{
			id: 'hieroglyphic-writing',
			date: '~5,100 years ago',
			title: 'Hieroglyphic Writing',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The sacred carvings.',
			content: `Egyptian writing emerges—hieroglyphics ("sacred carvings"). Whether invented independently or inspired by awareness of Sumerian writing is debated. The system is distinct: logographic and alphabetic elements combined.

Hieroglyphics for monuments, tombs, sacred texts—full pictorial. Hieratic for daily writing—cursive simplification. Like cuneiform, Egyptian writing serves administration first, then captures literature, religion, history. But the pictorial nature gives hieroglyphics aesthetic dimension.

"Be a scribe! Your limbs will be sleek, your hands will grow soft. You will go forth in white clothes, honored." Scribal training takes years; scribal status is enviable.`,
			imagePlaceholder: 'Hieroglyphic inscription with pictorial symbols'
		},
		{
			id: 'cosmetics-perfume',
			date: '~5,100 years ago',
			title: 'Cosmetics and Perfume Production',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Beauty becomes industry.',
			content: `Cosmetics production scales up—kohl for eyes (antimony and lead compounds), ochre for lips and cheeks, oils for skin. Perfume from pressed flowers, resins, oils. Beauty becomes tradeable commodity.

Cosmetics serve practical functions (kohl reduces glare, repels flies), social functions (status display, identity marking), and religious functions (preparation for ritual, offerings to gods). The body becomes canvas for meaning.

Perfume trade connects Arabia (frankincense, myrrh), India (sandalwood), Egypt (lotus), and Mesopotamia. Scent moves across continents. The desire for beauty drives commerce.`,
			imagePlaceholder: 'Egyptian cosmetics and perfume containers'
		},
		{
			id: 'maat-established',
			date: '~5,050 years ago',
			title: "Ma'at Established",
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Cosmic order as governing principle.',
			content: `Ma'at—truth, justice, cosmic order, balance—becomes the central concept of Egyptian civilization. Ma'at is both goddess and principle. Pharaoh's primary duty: maintain ma'at.

Ma'at is the order preventing return to primordial chaos. Pharaoh maintains ma'at by just rule. Individuals maintain ma'at by right action. Courts enforce ma'at. The dead are judged—the heart weighed against ma'at's feather.

Ma'at integrates WHAT (cosmic order exists), WHY (it matters because chaos is the alternative), and HOW (specific behaviors maintain it). A complete operating system for civilization.`,
			imagePlaceholder: "Weighing of the heart against Ma'at's feather"
		},
		{
			id: 'egyptian-mathematics',
			date: '~5,000 years ago',
			title: 'Egyptian Mathematics Develops',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Practical calculation.',
			content: `Egyptian mathematics emerges for practical purposes—surveying (re-establishing field boundaries after Nile floods), construction (pyramid geometry), accounting, calendar-keeping.

Base-10 with distinct symbols for powers of 10. Fractions as sums of unit fractions. Accurate calculation of areas and volumes. Slope calculations for pyramid construction. Calendar of 365 days—the first to approach true year length.

Egyptian mathematics is computational, not theoretical. They solve problems; they don't prove theorems. The "why" of mathematics waits for Greece. But the calculations work.`,
			imagePlaceholder: 'Egyptian mathematical papyrus with calculations'
		},
		{
			id: 'medical-practices-codify',
			date: '~5,000 years ago',
			title: 'Medical Practices Codify',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Healing becomes profession.',
			content: `Medical knowledge accumulates in written form. The Edwin Smith Papyrus (later copy of earlier text) describes surgical procedures. The Ebers Papyrus catalogs remedies. Rational observation mixes with magical incantation.

Some treatments work: wound cleaning, bone setting, some herbal remedies. Some are magical: incantations, amulets, ritual. The distinction between medicine and magic isn't yet drawn. Both address the mystery of suffering; both claim to help.

Physicians become professionals—trained, paid, respected. Medical specialization appears: eye doctors, bone doctors, internal doctors. The body becomes object of systematic knowledge.`,
			imagePlaceholder: 'Egyptian medical papyrus'
		},
		{
			id: 'calendar-systems-mature',
			date: '~5,000 years ago',
			title: 'Calendar Systems Mature',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Time becomes structure.',
			content: `Calendar systems crystallize. Egypt: 365-day year (12 months of 30 days plus 5 epagomenal days). Mesopotamia: lunar months with intercalation to align with solar year. Both require astronomical observation, mathematical calculation, and institutional authority to promulgate.

The calendar structures society: when to plant, when to harvest, when to pay taxes, when festivals occur. Religious and agricultural calendars interweave. Time itself becomes institutional—not natural rhythm but administrative framework.

Calendar-keeping requires specialists. Priests observe stars, calculate dates, declare seasons. Control of the calendar is control of time—and time is power.`,
			imagePlaceholder: 'Ancient calendar systems'
		},
		{
			id: 'egyptian-pantheon',
			date: '~4,900 years ago',
			title: 'Egyptian Pantheon Elaborates',
			tags: ['expansion', 'cognitive'],
			summary: 'The gods multiply.',
			content: `The Egyptian religious system grows in complexity—local gods, national gods, merged gods, aspects of gods. Ra (sun, supreme creator). Osiris (dead, resurrection, afterlife). Isis (magic, motherhood). Horus (sky, pharaoh's patron). Set (chaos, desert). Thoth (wisdom, writing). Ptah (creator through thought). Anubis (mummification, death guide).

The Osiris myth structures understanding: Osiris murdered by Set, resurrected by Isis, avenged by Horus. Pharaoh is Horus living; Pharaoh becomes Osiris dead. The narrative organizes death, kingship, cosmic order.

Different cities have different patron gods, different creation myths, different priorities. Egyptian religion synthesizes rather than standardizes—multiple truths coexist.`,
			imagePlaceholder: 'Egyptian gods depicted in tomb painting'
		},
		{
			id: 'copper-mining-industrializes',
			date: '~4,900 years ago',
			title: 'Copper Mining Industrializes',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Extraction at scale.',
			content: `Copper mining moves from surface collection to systematic extraction. Shafts dug into hillsides. Ore crushed, sorted, smelted on site. Mining communities emerge at ore sources—Sinai, Cyprus, Oman.

Mining is brutal work. Cramped tunnels, toxic fumes, crushing labor. Who does this work? Prisoners, slaves, the desperate. The luxury objects of civilization rest on invisible suffering in remote mountains.

Copper production increases orders of magnitude. Bronze becomes more available—still precious, but no longer rare. The scale of armies, the ambition of monuments, the reach of trade all expand with copper supply.`,
			imagePlaceholder: 'Ancient copper mining operation'
		},
		{
			id: 'stone-masonry-perfection',
			date: '~4,800 years ago',
			title: 'Stone Masonry Perfection',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Precision in granite.',
			content: `Egyptian stone-working reaches extraordinary precision. Blocks cut to tolerances of fractions of a millimeter. Joints so tight a knife blade won't fit. Granite—one of the hardest stones—worked with copper tools and abrasive sand.

Copper doesn't cut granite directly. Copper tools loaded with abrasive sand act as carriers for the cutting medium. The sand cuts; the copper guides. The precision maintains across massive scale—the Great Pyramid's base is level to within 2.1 centimeters across 230 meters.

Stone masonry at this level requires quarrying specialists, transport logistics, cutting specialists, finishing specialists, surveying specialists, quality inspectors. An industry in service of eternity.`,
			imagePlaceholder: 'Precision-cut granite blocks at Giza'
		},
		{
			id: 'imhotep-step-pyramid',
			date: '~4,700 years ago',
			title: 'Imhotep and the Step Pyramid',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Architecture reaches for the sky.',
			content: `Imhotep—vizier, architect, physician, priest—designs the Step Pyramid at Saqqara for Pharaoh Djoser. The first monumental stone structure in history. Six mastabas stacked in decreasing size. 62 meters tall.

Before Djoser, royal tombs were mastabas—flat-topped, single-story. Imhotep stacks them. The step pyramid bridges mastaba and true pyramid. The concept: the king ascends to the stars.

Imhotep is the first architect known by name. Later deified. Worshipped as god of medicine and wisdom for millennia. A human who became a god through achievement. The precedent matters: excellence can achieve immortality.`,
			imagePlaceholder: 'Step Pyramid of Djoser at Saqqara'
		},
		{
			id: 'ramp-lever-engineering',
			date: '~4,700 years ago',
			title: 'Ramp and Lever Engineering',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Moving mountains.',
			content: `The engineering of massive stone construction matures: ramps (earthen inclines for hauling), levers (multiplying force), rollers (reducing friction), sledges (distributing weight). Thousands of workers coordinated through these simple machines move millions of tons.

No single technique suffices. Ramps alone would require more material than the pyramid itself if extending to full height. Multiple techniques combine: ramps for lower courses, internal ramps, levers for fine positioning. The combination of simple machines enables the impossible.

The knowledge is empirical—accumulated through generations of building. No theoretical treatises survive (if any existed). The pyramids are the proof that the knowledge worked.`,
			imagePlaceholder: 'Pyramid construction techniques'
		},
		{
			id: 'pyramid-age',
			date: '~4,600 years ago',
			title: 'Old Kingdom Egypt / Pyramid Age',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Monuments to the Containment model.',
			content: `The Fourth Dynasty produces the Great Pyramids of Giza—the largest, most precisely constructed monuments of the ancient world. Great Pyramid (Khufu): 146 meters tall, 2.3 million blocks, 20 years to build. Pyramid of Khafre: slightly shorter but appears taller on higher foundation. Pyramid of Menkaure: smallest of the three but still massive.

The pyramid is a machine for pharaoh's eternal life. The shape matters: the pyramid as primordial mound, as sunray captured in stone, as stairway to heaven.

Building pyramids requires organizational capacity beyond anything before. The pyramid proves state capacity—and drains it. By the Fifth Dynasty, pyramids are smaller, sloppier. The Containment model works but exhausts itself.`,
			imagePlaceholder: 'Pyramids of Giza at sunset with the Sphinx'
		},
		{
			id: 'papyrus-production',
			date: '~4,600 years ago',
			title: 'Papyrus Production',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The paper of antiquity.',
			content: `Papyrus—writing material made from the papyrus reed—becomes standardized and widespread. The pith is sliced, layered crosswise, pressed, dried. A flexible, durable writing surface.

Papyrus is lighter than clay tablets, portable (rolls into scrolls), writable with brush and ink, reusable (scrape and rewrite). But papyrus decays in damp conditions—vast libraries of the ancient world are lost because papyrus doesn't last.

Egypt controls papyrus production. Export creates revenue and dependency. "Paper" enters other languages from "papyrus." Egypt holds an information technology monopoly for millennia.`,
			imagePlaceholder: 'Papyrus scrolls and reed processing'
		},
		{
			id: 'ink-writing-implements',
			date: '~4,600 years ago',
			title: 'Ink and Writing Implements',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The technology of text.',
			content: `Ink—carbon black (soot) or red ochre mixed with gum and water—enables writing on papyrus. Reed brushes allow expressive, cursive writing impossible with cuneiform styluses.

The toolkit: reed pen (cut and split), ink cake (moistened as needed), palette (mixing surface), water pot, papyrus roll. The scribe carries everything needed. Writing becomes portable, personal, rapid.

Different inks for different purposes: black for text, red for headings, emphasis, corrections. The conventions of document formatting begin. Visual organization of information—not just content but presentation.`,
			imagePlaceholder: 'Egyptian scribal toolkit'
		},
		{
			id: 'indus-valley-peak',
			date: '~4,600 years ago',
			title: 'Indus Valley Civilization Peak',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The third great civilization.',
			content: `While Egypt builds pyramids and Mesopotamia builds ziggurats, the Indus Valley develops differently—planned cities, standardized weights, sophisticated drainage, and writing we cannot read.

Mohenjo-daro: 40,000+ inhabitants, grid layout, citadel and lower town, the "Great Bath." Harappa: similar scale, similar layout. Dholavira: water management masterpiece capturing monsoon rains.

The puzzle: No monumental temples that we recognize. No clear palaces. No royal tombs filled with gold. No kings named in inscriptions. Where is the power? How is this organized? The Indus Valley challenges assumptions about what civilization requires.`,
			imagePlaceholder: 'Mohenjo-daro with Great Bath and grid layout'
		},
		{
			id: 'indus-urban-planning',
			date: '~4,600 years ago',
			title: 'Indus Valley Urban Planning',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The first grid cities.',
			content: `Indus cities are planned before they're built. Streets run north-south and east-west. City blocks are standardized. Houses face inward onto courtyards, blank walls to streets.

Every house connects to covered drains running under streets to soak pits or outflows. The most sophisticated sanitation until Roman sewers 2,000 years later. This isn't organic growth—someone planned these cities, enforced standards, maintained infrastructure.

The HOW is visible; the authority behind it is invisible. The Indus Valley demonstrates that complexity doesn't require visible hierarchy—or perhaps that we simply can't see the hierarchy that existed.`,
			imagePlaceholder: 'Indus Valley drainage system and street grid'
		},
		{
			id: 'indus-script',
			date: '~4,600 years ago',
			title: 'Indus Script',
			tags: ['expansion', 'tech', 'lost'],
			summary: 'The writing we cannot read.',
			content: `The Indus script appears on seals, tablets, pottery—short inscriptions, typically 4-5 symbols. Over 400 distinct signs identified. We cannot read it.

No bilingual texts. No clear descendants. The Indus Valley civilization leaves written records we cannot decode. Is it a language? Which language family? Logo-syllabic? Purely logographic? Scholars disagree.

An entire civilization's WHAT and WHY may be preserved in these inscriptions. When the civilization declines, the script dies. We have the texts; we cannot read them. The loss haunts: what did they believe? What did they know?`,
			imagePlaceholder: 'Indus seals with undeciphered script'
		},
		{
			id: 'sumerian-city-states',
			date: '~4,600 years ago',
			title: 'Sumerian City-States Flourish',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The competitive plurality.',
			content: `Mesopotamia isn't unified—it's a competitive system of city-states: Ur, Uruk, Lagash, Nippur, Eridu, Kish. Each city has its patron god, its king. They trade, war, form alliances, break alliances.

Unlike Egypt's unity, Mesopotamia's plurality generates competition. Innovation is rewarded—a better army conquers; a better economy grows. The fragmentation that makes Mesopotamia vulnerable also makes it dynamic.

When cities war, their gods war. If Ur defeats Uruk, Nanna has defeated Inanna. Theology tracks politics. Victory proves divine favor. The constant competition drains resources but drives development.`,
			imagePlaceholder: 'Map of Sumerian city-states in competition'
		},
		{
			id: 'indus-standardization',
			date: '~4,500 years ago',
			title: 'Indus Valley Standardization',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Precision across empire.',
			content: `Weights, measures, brick sizes—standardized across the entire Indus civilization spanning 1,500 kilometers.

Weights: Cubical chert weights in binary progression (1, 2, 4, 8, 16, 32, 64 units). Base unit approximately 0.86 grams. Precision remarkable—weights accurate to less than 1% deviation.

Bricks: Standard ratio 1:2:4. Sun-dried for houses, fired for drains. Uniform across sites hundreds of kilometers apart.

Who enforces standards? Mesopotamia has kings who decree measures. Egypt has pharaohs. Indus has... what? The mystery of authority without visible authoritarians.`,
			imagePlaceholder: 'Indus standardized weights and bricks'
		},
		{
			id: 'boat-building-advances',
			date: '~4,500 years ago',
			title: 'Boat-Building Technology Advances',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Ships for sea and river.',
			content: `Boat construction matures: planked hulls (boards fastened edge-to-edge), ribs for structural strength, multiple masts, deeper keels. The sail-and-oar combination enables long-distance maritime trade.

Mesopotamian ships reach the Indus Valley via the Persian Gulf. Egyptian ships venture into the Mediterranean, down the Red Sea to Punt. Boats transform geography—coasts become connected; interiors become isolated.

Shipbuilding requires specialized knowledge: wood selection, shaping, joining, caulking, rigging. The shipwright is elite craftsman. The ship itself becomes property worth insuring—maritime law emerges.`,
			imagePlaceholder: 'Ancient merchant vessels'
		},
		{
			id: 'early-minoan',
			date: '~4,500 years ago',
			title: 'Early Minoan Civilization',
			tags: ['parallel', 'expansion'],
			summary: "Europe's first civilization.",
			content: `On Crete, the Minoan civilization emerges—palaces, writing (Cretan hieroglyphics, later Linear A), sophisticated art, extensive trade.

Minoan culture is remarkably different from Near Eastern models. No evident military emphasis (palace walls are thin). Bull imagery dominates. Women prominent in art and possibly society. Sea-focused rather than river-focused.

Linear A remains undeciphered. We can read Linear B (later, Greek language) but not the earlier script. The Minoans' own words are locked. Minoan ships connect Egypt, Anatolia, the Aegean. Crete is a hub.`,
			imagePlaceholder: 'Minoan palace fresco with bull-leaping scene'
		},
		{
			id: 'stonehenge-phase-iii',
			date: '~4,500 years ago',
			title: 'Stonehenge Phase III',
			tags: ['parallel', 'tech', 'cognitive'],
			summary: 'Megalithic astronomy.',
			content: `Stonehenge reaches its final form—the sarsen circle and trilithons. Stones transported from 240 kilometers away. Precisely aligned to summer solstice sunrise, winter solstice sunset.

Moving 25-ton stones 240 kilometers without wheels or draft animals. Erecting 40-ton trilithons. Shaping stones with stone hammers. The labor investment is staggering for a non-urban society.

Astronomical alignment is clear, but why? Calendar keeping? Religious ritual? Ancestor worship? The builders left no texts. Stonehenge is WHAT without accessible WHY—the meaning lost, the monument remains.`,
			imagePlaceholder: 'Stonehenge at summer solstice sunrise'
		},
		{
			id: 'norte-chico',
			date: '~4,500 years ago',
			title: 'Norte Chico / Caral (Americas)',
			tags: ['parallel', 'expansion'],
			summary: 'Civilization without Old World contact.',
			content: `In coastal Peru, Norte Chico civilization develops—monumental architecture, irrigation agriculture, complex society—completely independently.

Caral, Áspero, Huaricanga—temple mounds, plazas, residential areas. Population in thousands. No pottery. No writing (though possible quipu precursors). No grain (cotton and squash, later maize). No wheels.

Civilization is not a single invention that diffused from one source. Given sufficient conditions, complex society emerges independently. Norte Chico proves the pattern is deep in human possibility.`,
			imagePlaceholder: 'Caral pyramid complex in Peru'
		},
		{
			id: 'sumerian-literature',
			date: '~4,400 years ago',
			title: 'Sumerian Literature Flowers',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The first literature.',
			content: `The earliest literary texts crystallize—not just administrative records but narrative, poetry, wisdom. The Kesh Temple Hymn (religious poetry). Instructions of Shuruppak (wisdom literature). Enmerkar and the Lord of Aratta (epic conflict).

The edubba ("tablet house") emerges—schools training scribes. Students copy texts for practice; the copies preserve literature. The school creates the canon.

Writing has crossed from HOW (accounting) to WHY (meaning-making). The spoken traditions of thousands of years now have permanent form. Literature begins.`,
			imagePlaceholder: 'Cuneiform tablet with literary text'
		},
		{
			id: 'seeder-plow',
			date: '~4,400 years ago',
			title: 'Seeder Plow',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Planting mechanized.',
			content: `The seeder plow appears—a plow with attached funnel dropping seeds into the freshly cut furrow. Plowing and planting in one pass. Labor efficiency increases.

The seeder plow is depicted in Sumerian art, described in Sumerian texts ("Farmer's Almanac"). It requires calibration—seed rate, plow speed, furrow depth must coordinate. But once calibrated, it increases productivity significantly.

Agricultural technology rarely appears in histories obsessed with war and kings. But the seeder plow matters more than most conquests—it feeds the armies that fight, the cities that kings rule.`,
			imagePlaceholder: 'Sumerian seeder plow'
		},
		{
			id: 'sargon-akkad',
			date: '~4,350 years ago',
			title: 'Sargon of Akkad',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The first empire.',
			content: `Sargon rises from obscurity (birth legend: set adrift in a basket, rescued, raised as gardener) to conquer all of Mesopotamia and beyond. The Akkadian Empire—the first true empire—stretches from the Persian Gulf to the Mediterranean.

Previous kings ruled city-states. Sargon rules empire—multiple peoples, multiple languages, multiple gods under one ruler. He doesn't replace local structures; he supersedes them. Professional army loyal to the king. Akkadian language imposed for administration. Akkadian governors installed.

Sargon isn't a god (like Pharaoh) but claims divine mandate. Enlil grants him universal rule. The king is below gods but above all humans. The empire lasts ~180 years. Brief by Egyptian standards. But the model—empire rather than city-state—is established.`,
			imagePlaceholder: 'Bronze head of Akkadian ruler, possibly Sargon'
		},
		{
			id: 'road-network-development',
			date: '~4,350 years ago',
			title: 'Road Network Development',
			tags: ['expansion', 'tech', 'gain'],
			summary: "The empire's arteries.",
			content: `Empire requires roads. Sargon's realm demands communication across 1,500 kilometers. Royal roads emerge—maintained routes with stations, provisions, protection.

Roads enable: rapid military deployment, tax collection, trade, messenger systems, administrative control. The road is infrastructure of power. Who controls roads controls movement.

Road-building becomes state function. Corvée labor conscripted. Standards emerge: width, surface, drainage. The road network is empire made physical—lines of power drawn across landscape.`,
			imagePlaceholder: 'Ancient Mesopotamian road network'
		},
		{
			id: 'enheduanna',
			date: '~4,300 years ago',
			title: 'Enheduanna',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The first author known by name.',
			content: `Enheduanna—daughter of Sargon, high priestess of Nanna at Ur—writes hymns. Not just transcribed oral tradition but signed, authored compositions. The Exaltation of Inanna. Temple Hymns.

The first author in history whose name we know, whose works we can read, whose biography we can reconstruct. A woman. A princess. A priestess. A poet.

Enheduanna writes about herself—her devotion, her suffering, her vindication. This is reflexive literature. The author is present in the text. Individual voice emerges from collective tradition.`,
			imagePlaceholder: 'Disk of Enheduanna showing her in ritual pose'
		},
		{
			id: 'lost-wax-casting',
			date: '~4,300 years ago',
			title: 'Lost-Wax Casting Develops',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Bronze made complex.',
			content: `Lost-wax casting (cire perdue) enables complex bronze sculptures. A wax model is coated in clay, heated (wax melts out), molten bronze poured into the cavity. The clay broken away reveals the bronze object.

Lost-wax allows hollow castings (less metal, lighter), complex shapes (undercuts impossible with mold casting), fine detail (wax can be carved precisely), large scale (hollow means feasible weight).

Bronze statues become possible—divine images, royal portraits, ritual objects. The technology enables the art.`,
			imagePlaceholder: 'Bronze sculpture created through lost-wax casting'
		},
		{
			id: 'glass-precursors',
			date: '~4,300 years ago',
			title: 'Glass Precursors (Vitreous Materials)',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Transformation approaches glass.',
			content: `Vitreous materials—glazes on pottery and faience, occasional glass beads—become more sophisticated. True glass (sand melted with alkali flux) appears sporadically, probably as accidental byproduct of faience production.

Controlled glass production is still centuries away, but the understanding accumulates. High-temperature pyrochemistry advances. The transformation of sand into transparent solid—one of matter's more magical transformations—approaches mastery.`,
			imagePlaceholder: 'Early vitreous materials and glass beads'
		},
		{
			id: 'naram-sin-apotheosis',
			date: '~4,280 years ago',
			title: "Naram-Sin's Apotheosis",
			tags: ['expansion', 'cognitive'],
			summary: 'A king becomes god.',
			content: `Naram-Sin, grandson of Sargon, declares himself a god. Not just favored by gods, not just divine mandate, but divinity itself. "Naram-Sin, god of Akkad."

The Victory Stele shows him towering over enemies, wearing the horned helmet of divinity, ascending toward stars. The king literally rises above mortals.

This is theologically radical. Mesopotamian kings are not gods—they serve gods. Later tradition blames Naram-Sin for Akkad's fall: the gods punished his arrogance. But divine kingship doesn't disappear. The door opened won't fully close.`,
			imagePlaceholder: 'Victory Stele of Naram-Sin'
		},
		{
			id: 'diplomatic-systems',
			date: '~4,250 years ago',
			title: 'Diplomatic Systems Emerge',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Treaties and ambassadors.',
			content: `Inter-state relations formalize. Treaties carved in stone, sealed with oaths to gods, witnessed by divine images. Ambassadors travel between courts with diplomatic immunity. Gift exchange establishes relationships.

The earliest treaties survive: boundary agreements, mutual defense pacts, trade rights, marriage alliances. International law begins—customs governing relations between states.

Diplomacy requires shared frameworks. Gods witness oaths; violators face divine punishment. The international order rests on shared WHY—common understanding of what oaths mean, what gods enforce.`,
			imagePlaceholder: 'Ancient treaty tablet'
		},
		{
			id: '4.2-kiloyear-event',
			date: '~4,200 years ago',
			title: '4.2 Kiloyear Event',
			tags: ['hammerfall', 'external', 'climate'],
			summary: 'Global climate catastrophe.',
			content: `A megadrought strikes—century-scale aridification affecting the entire northern hemisphere. The Akkadian Empire collapses. Egyptian Old Kingdom collapses. Indus Valley civilization begins decline. Urbanization contracts across the ancient world.

The mechanism is debated—volcanic eruptions, ocean circulation shifts. The effects are clear: crop yields fall, populations migrate, empires fragment.

Mesopotamian texts describe disaster: "For the first time since cities were built and founded, the great agricultural tracts produced no grain, the inundated tracts produced no fish, the irrigated orchards produced neither syrup nor wine, the gathered clouds did not rain..."

Civilization is fragile. Climate doesn't negotiate.`,
			imagePlaceholder: 'Map showing simultaneous collapse across ancient civilizations'
		},
		{
			id: 'gutian-interregnum',
			date: '~4,150 years ago',
			title: 'Gutian Interregnum',
			tags: ['collapse', 'lost'],
			summary: 'The dark age.',
			content: `The Akkadian Empire collapses. The Gutians—mountain people from the Zagros—overrun lowland Mesopotamia. The historical record goes dark. City-states fragment. Trade networks break.

~100 years of disorder. Few inscriptions, unclear political structure. A "dark age" in the technical sense: we know little. Later Mesopotamians remember the Gutians as archetypal barbarians—chaos incarnate.

The Gutians are eventually expelled. But the Akkadian model is broken. What emerges next is different—recovery, not restoration.`,
			imagePlaceholder: 'Fragmenting Mesopotamian territory during Gutian period'
		},
		{
			id: 'old-kingdom-egypt-collapses',
			date: '~4,150 years ago',
			title: 'Old Kingdom Egypt Collapses',
			tags: ['collapse', 'lost'],
			summary: 'The First Intermediate Period.',
			content: `Simultaneously with Mesopotamia's troubles, Egypt fragments. The Old Kingdom ends. Regional governors (nomarchs) become independent. Multiple claimants to kingship compete. Central authority dissolves.

The causes: Climate (Nile flood failures during the 4.2 kiloyear event). Administrative overextension. Accumulated costs of pyramid building. Once the center weakens, the periphery asserts independence.

For ~140 years, Egypt is disunited. The First Intermediate Period. Local strongmen rule nomes. The Two Lands are many lands. Ma'at is broken—but the concept survives. The pieces remember what unity meant.`,
			imagePlaceholder: 'Fragmented Egypt during First Intermediate Period'
		},
		{
			id: 'ur-iii-dynasty',
			date: '~4,112 years ago',
			title: 'Ur III Dynasty',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The Sumerian renaissance.',
			content: `Ur-Namma founds the Third Dynasty of Ur—the "Sumerian Renaissance." He rebuilds cities, restores temples, and creates the first known law code (predating Hammurabi by 300 years).

Ur-Namma builds the Great Ziggurat of Ur—a stepped temple platform 30 meters tall. The ziggurat as architectural form reaches mature expression. The mountain that connects earth and heaven.

Ur III is history's first bureaucratic state. Tens of thousands of administrative tablets survive. Every transaction recorded. Every worker tracked. Every sheep counted. The HOW-state perfected—and also its costs: rigidity, overhead, loss of flexibility that contributed to eventual collapse.`,
			imagePlaceholder: 'Great Ziggurat of Ur reconstruction'
		},
		{
			id: 'ur-namma-law-code',
			date: '~4,112 years ago',
			title: "Ur-Namma's Law Code",
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Justice written.',
			content: `Ur-Namma's law code establishes: fines instead of "eye for an eye," protection for widows and orphans, standardized weights and measures. Compensation over retaliation. Civilization codified.

The code is royal propaganda as much as practical law—demonstrating the king's justice, his maintenance of cosmic order. But it's also real: courts reference written standards. Disputes have predetermined resolutions.

Written law changes everything. Custom varies; written law is consistent. Custom is debatable; written law is quotable. The law code doesn't replace custom immediately—but it provides an appeal beyond local variation.`,
			imagePlaceholder: 'Ur-Namma law code tablet'
		},
		{
			id: 'sumerian-mathematics',
			date: '~4,100 years ago',
			title: 'Sumerian Mathematics Advances',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The base-60 system.',
			content: `Sumerian/Babylonian mathematics matures—the sexagesimal (base-60) system that gives us 60 minutes, 60 seconds, 360 degrees.

Why 60? Highly divisible (by 2, 3, 4, 5, 6, 10, 12, 15, 20, 30). Fractions are manageable. 1/3 in base-60 is clean (20); in base-10 it's infinite (0.333...).

Achievements: Pythagorean triples (known 1,000 years before Pythagoras), quadratic equations solved, square and cube roots calculated. Mathematical problems solved through algorithms—step-by-step procedures. Practical calculation, not abstract proof. But the algorithms work.`,
			imagePlaceholder: 'Babylonian mathematical tablet with base-60 calculations'
		},
		{
			id: 'astronomical-observation',
			date: '~4,100 years ago',
			title: 'Astronomical Observation Systematizes',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The sky becomes text.',
			content: `Systematic astronomical observation begins—recording planetary positions, lunar phases, stellar risings. Initially for omens: the sky reveals divine will. But regular observation accumulates data.

Venus tablets record the planet's appearances over decades. Eclipse predictions become possible (roughly). The zodiac takes form—twelve constellations marking the sun's annual path.

Astronomy serves astrology—the WHY of cosmic meaning. But the observations accumulate—the HOW of data collection. The tension between meaning-seeking and data-gathering will eventually produce science.`,
			imagePlaceholder: 'Mesopotamian astronomical tablet'
		},
		{
			id: 'middle-kingdom-egypt',
			date: '~4,050 years ago',
			title: 'Middle Kingdom Egypt Begins',
			tags: ['recovery', 'expansion', 'gain'],
			summary: 'Restoration after chaos.',
			content: `After the First Intermediate Period, Egypt reunifies under Mentuhotep II. The Middle Kingdom begins. Egypt has fallen and risen again.

The Middle Kingdom differs from the Old Kingdom. Less pyramid obsession. More literature. More concern for justice. The pharaoh is still divine but also responsible. The Tale of Sinuhe, Instructions of Amenemhat—literary masterpieces. Writing moves beyond administration to entertainment and reflection.

The lesson: Egypt collapsed but didn't end. The pieces remembered unity. The structure reconstituted. The remainder persisted.`,
			imagePlaceholder: 'Middle Kingdom temple relief showing Mentuhotep II'
		},
		{
			id: 'chariot-precursors',
			date: '~4,050 years ago',
			title: 'Chariot Precursors',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Speed approaches.',
			content: `Four-wheeled wagons pulled by equids (donkeys, onagers) become faster, lighter. Not yet the chariot (that requires spoked wheels and horses, still centuries away), but the concept of wheeled military transport develops.

Battle wagons appear in art—platforms for archers or spearmen. Clumsy by later standards, but introducing the idea: mobility as military advantage. Speed will transform warfare once horses and spoked wheels combine.`,
			imagePlaceholder: 'Early battle wagon'
		},
		{
			id: 'horse-domestication-spreads',
			date: '~4,000 years ago',
			title: 'Horse Domestication Spreads South',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The game-changer arrives.',
			content: `Horses—domesticated earlier on the Eurasian steppe—begin appearing in Near Eastern contexts. Still rare, still exotic. Not yet the dominant military animal (that takes another 500 years). But the potential is recognized.

Horses are faster than donkeys, stronger than onagers, more trainable than either. Combined with wheeled vehicles, horses will create the chariot. Combined with riders, horses will create cavalry. The transformation approaches.`,
			imagePlaceholder: 'Early domesticated horses'
		},
		{
			id: 'longshan-culture',
			date: '~4,000 years ago',
			title: 'Longshan Culture (China)',
			tags: ['parallel', 'expansion'],
			summary: 'Approaching the first Chinese dynasty.',
			content: `In China, the Longshan culture develops—walled towns, scapulimancy (oracle bones), sophisticated black pottery, jade working, social stratification. The precursor to the Xia dynasty.

China's development parallels but doesn't contact Near Eastern civilizations. Similar trajectory—villages to towns to cities, chiefs to kings—but distinct material culture, distinct ecology, distinct solutions.

What begins here continues recognizably for 4,000 years. The continuity of Chinese civilization is remarkable—and begins now.`,
			imagePlaceholder: 'Longshan black pottery and jade artifacts'
		},
		{
			id: 'era-4-closes',
			date: '~4,000 years ago',
			title: 'Era IV Closes',
			tags: ['transition'],
			summary: 'The foundations are laid.',
			content: `By 2000 BCE, the foundations of ancient civilization are established:

Writing: Cuneiform, hieroglyphics, (undeciphered Indus script), emerging Chinese oracle bone precursors. Speech captured. Memory externalized.

Metal: Bronze standard for weapons, tools, prestige. Trade networks for tin span continents.

Cities: Urban populations in tens of thousands. Specialized labor. Monumental architecture.

States: Empires have risen and fallen. Models established: Pharaonic divine kingship, Mesopotamian divine mandate, Indus (unknown), Chinese dynastic cycle.

Religion: Pantheons codified. Temples institutionalized. Priesthoods specialized.

Law: Written law codes. Administration by record. Bureaucracy as technology.

The three-body system orbits: WHAT held by gods, WHY mediated by temples, HOW executed by states. The next era will see these foundations tested—by new peoples, new gods, new challenges.`,
			imagePlaceholder: 'Composite of civilization achievements: pyramid, ziggurat, Indus seal, oracle bone'
		}
	]
};
