import type { Era } from './types';

export const theAgriculturalRevolution: Era = {
	id: 'era-3',
	number: 'III',
	title: 'THE AGRICULTURAL REVOLUTION      (3 AI PASSES, Manual Edits Required)',
	timespan: '~12,000 - 6,000 years ago',
	description: 'WHY came first. The need to gather for ritual created the conditions for sedentism. The need to feed the gatherers created pressure for agriculture. Göbekli Tepe proves it: the temple preceded the farm. But once agriculture began, HOW transformed everything—bodies, societies, landscapes, and the meaning-systems themselves. This era sees humanity lock itself into a new mode of existence from which there is no return.',
	events: [
		{
			id: 'younger-dryas-end',
			date: '~11,700 years ago',
			title: 'Younger Dryas Ends',
			tags: ['transition', 'climate', 'gain'],
			summary: 'The ice releases its grip.',
			content: `The Younger Dryas cold snap ends abruptly—within decades, temperatures rise 7°C. The ice retreats. Forests advance. The Fertile Crescent blooms.

After 1,300 years of cold, dry conditions, the world warms rapidly. Ice core data shows the transition happened in perhaps 40-50 years. Within a human lifetime, the landscape transforms. Cereals become abundant in the Levant. Animal populations recover. The Natufian experiments in sedentism, which had been stressed during the Younger Dryas, now have optimal conditions.

The WHY-frameworks developed under pressure can now flower. The Neolithic package has all its prerequisites in place.`,
			imagePlaceholder: 'Climate transition diagram showing rapid warming into Holocene'
		},
		{
			id: 'gobekli-tepe',
			date: '~11,600 years ago',
			title: 'Göbekli Tepe',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The temple before the farm.',
			content: `Göbekli Tepe is a monumental temple complex built by hunter-gatherers BEFORE agriculture. The standard narrative said: farming creates surplus creates cities creates temples creates religion. Göbekli Tepe says: religion creates temples creates organization creates farming.

T-shaped pillars up to 7 meters tall, weighing 10-20 tons. Carved with sophisticated reliefs: foxes, lions, scorpions, vultures, snakes. Multiple circular enclosures, each apparently deliberately buried and replaced. No domestic architecture—purely ceremonial. No evidence of permanent habitation.

WHY came first. The need to gather for ritual created the conditions for sedentism. The need to feed the gatherers created pressure for agriculture. Moving and carving these stones required hundreds of people coordinating over years. This coordination requires shared meaning—shared WHY. The temple is older than any city.`,
			imagePlaceholder: 'Göbekli Tepe T-shaped pillars with carved animal reliefs'
		},
		{
			id: 'wild-grain-harvesting',
			date: '~11,500 years ago',
			title: 'Wild Grain Harvesting Intensifies',
			tags: ['expansion', 'tech'],
			summary: 'HOW serves WHY.',
			content: `Sickles with flint blades. Stone grinding tools. Storage pits. The technology of grain processing becomes widespread across the Fertile Crescent.

This isn't the invention of agriculture. It's the intensification of wild harvesting—driven by need to feed larger gatherings. The ritual centers like Göbekli Tepe require provisioning. Sickle polish on flint tools—the distinctive sheen from cutting grass stems—appears before domesticated grains, showing intensive wild harvesting preceded domestication.

Feeding hundreds of people for ritual construction requires organized harvesting, processing, and storage. The HOW-infrastructure develops to serve WHY-purposes.`,
			imagePlaceholder: 'Neolithic sickle blades with visible sheen and grinding stones'
		},
		{
			id: 'grinding-stone-tech',
			date: '~11,500 years ago',
			title: 'Grinding Stone Technology',
			tags: ['tech', 'gain'],
			summary: 'Transforming grain into food.',
			content: `Saddle querns and grinding stones become ubiquitous. These are the food processors of the Neolithic—large stone slabs on which grain is ground with a smaller handstone, producing flour.

The labor is immense. Hours of grinding produce enough flour for a day's bread. This is predominantly women's work, and skeletal evidence shows it: arthritic knees from kneeling, worn teeth from stone-grit in flour, repetitive stress injuries in arms and shoulders.

The grinding stone anchors you to place. Heavy, immobile, representing investment—you don't abandon a good quern. The technology of processing creates the technology of staying.`,
			imagePlaceholder: 'Neolithic grinding stones and saddle querns'
		},
		{
			id: 'ppna-begins',
			date: '~11,500 years ago',
			title: 'Pre-Pottery Neolithic A (PPNA) Begins',
			tags: ['expansion', 'gain'],
			summary: 'The first permanent settlements.',
			content: `The Pre-Pottery Neolithic A period begins. Permanent villages appear across the Levant—Jericho, Mureybet, Jerf el Ahmar. These are the first true towns.

Round houses made of stone or mudbrick. Populations of several hundred. No pottery yet. Storage facilities for grain. Communal buildings for ritual. The famous walls of Jericho date to PPNA—not to keep out enemies but perhaps to manage flooding or mark the boundary between cultivated and wild. The tower, 8 meters tall, may have astronomical or ritual functions.

These are not just aggregations of houses. They have central spaces, ritual features, evidence of community coordination. Living together at this scale requires shared meaning—shared stories about who "we" are.`,
			imagePlaceholder: 'PPNA Jericho tower and walls reconstruction'
		},
		{
			id: 'storage-pit-tech',
			date: '~11,500 years ago',
			title: 'Storage Pit Technology',
			tags: ['tech', 'gain'],
			summary: 'Holding time in the ground.',
			content: `Underground storage pits—lined with plaster or stone, sealed against moisture and pests—become sophisticated. Grain stored properly can last years. This is the technology of delayed gratification, of investment, of future.

Storage changes everything. It decouples consumption from production. It enables surplus. It creates something worth stealing. It makes planning possible and necessary. The full pit is wealth; the empty pit is death.

Storage pits also require accounting. How much is there? How long will it last? Who contributed, who draws? The cognitive demands of storage management will eventually produce writing.`,
			imagePlaceholder: 'Underground storage pits lined with plaster'
		},
		{
			id: 'lime-plaster-tech',
			date: '~11,300 years ago',
			title: 'Lime Plaster Technology',
			tags: ['tech', 'gain'],
			summary: 'Transforming stone with fire.',
			content: `Lime plaster appears—calcium oxide produced by heating limestone to 900°C, then mixed with water and sand. This is pyrotechnology: using fire to transform materials into something new.

Lime plaster waterproofs storage pits, creates smooth house floors, and enables the skull cult (plastering faces onto ancestral skulls). The technology requires massive amounts of fuel—early deforestation begins around lime-producing settlements.

The knowledge that fire transforms stone into powder that transforms back into stone when wetted—this is proto-chemistry. The same understanding will later enable cement, concrete, civilization's bones.`,
			imagePlaceholder: 'Lime plaster production and application'
		},
		{
			id: 'mudbrick-invention',
			date: '~11,000 years ago',
			title: 'Mudbrick Invention',
			tags: ['tech', 'gain'],
			summary: 'Building the permanent world.',
			content: `The invention of mudbrick: shaped, dried clay bricks. Stone is heavy, scarce, and requires skilled labor. Mudbrick is abundant, shapeable, repairable.

Permanence becomes easier. Houses can be built, rebuilt, expanded. Villages can grow. The built environment can express meaning through form. Mud is transformed by human hands and sun—raw material becomes culture.

Mudbrick also standardizes. Bricks of consistent size allow modular construction. Walls can be planned, measured, replicated. Architecture becomes systematic.`,
			imagePlaceholder: 'Ancient mudbrick construction and early brick-making'
		},
		{
			id: 'basketry-elaborates',
			date: '~11,000 years ago',
			title: 'Basketry Elaborates',
			tags: ['tech'],
			summary: 'Weaving before weaving.',
			content: `Basketry—weaving plant fibers into containers—reaches new sophistication. Coiled baskets, twined baskets, plaited mats. Watertight baskets lined with bitumen. Baskets for storage, transport, winnowing grain.

Basketry is the conceptual precursor to textile weaving. The over-under pattern, the frame and weft, the transformation of linear fibers into planar surfaces—all principles that transfer to the loom. The hands that weave baskets are practicing for cloth.`,
			imagePlaceholder: 'Neolithic basketry techniques and examples'
		},
		{
			id: 'skull-cult',
			date: '~10,800 years ago',
			title: 'Skull Cult Emerges',
			tags: ['expansion', 'cognitive'],
			summary: 'The ancestors remain.',
			content: `Across the Levant, a distinctive practice emerges: skulls of the dead are removed, plastered, painted, and kept in houses. Eyes are inlaid with shells. Features are modeled to resemble the living. The dead don't leave.

Bodies are buried beneath house floors. After decomposition, skulls are exhumed. Plaster is applied to recreate facial features. These skulls are kept in the home, displayed, passed down.

The ancestors are present. The boundary between living and dead is permeable. The house is a tomb is a shrine. Identity extends beyond individual life into lineage. This WHY-framework legitimizes place: "We belong here because our dead are here."`,
			imagePlaceholder: 'Plastered skull from Jericho with shell eyes'
		},
		{
			id: 'ppnb-begins',
			date: '~10,500 years ago',
			title: 'Pre-Pottery Neolithic B (PPNB) Begins',
			tags: ['transition', 'gain'],
			summary: 'The Neolithic goes big.',
			content: `PPNB represents transformation in scale and complexity. Villages grow to thousands of people. Architecture shifts from round to rectangular houses—easier to subdivide, expand, aggregate. Long-distance trade networks expand dramatically.

Rectangular houses change social organization. Round houses are single-unit, egalitarian in implication. Rectangular houses can be divided into rooms, expanded, attached to neighbors. The architecture enables hierarchy, inheritance, accumulation.

PPNB settlements spread beyond the Levant into Anatolia, Cyprus, the Zagros. The Neolithic package begins its expansion.`,
			imagePlaceholder: 'PPNB rectangular houses and village layout'
		},
		{
			id: 'wheat-barley-domestication',
			date: '~10,500 years ago',
			title: 'Wheat and Barley Domestication',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The grains that changed everything.',
			content: `Wild wheat and barley are domesticated in the Fertile Crescent. The key mutation: non-shattering seed heads. Wild grains disperse their seeds; domesticated grains hold them for harvest.

Domestication wasn't a decision—it was selection pressure. Harvesting wild grains preferentially collects those that don't shatter. Plant those seeds, repeat for generations, and domestication emerges. Genetic evidence suggests domestication occurred independently in multiple locations.

Higher yields, but also dependence. Domesticated crops require human care—they've lost their ability to disperse and compete. Humans and grain become locked in mutual dependence.`,
			imagePlaceholder: 'Comparison of wild and domesticated wheat heads'
		},
		{
			id: 'legume-domestication',
			date: '~10,500 years ago',
			title: 'Legume Domestication (Lentils, Peas, Chickpeas)',
			tags: ['tech', 'gain'],
			summary: 'Protein from the ground.',
			content: `Alongside cereals, legumes are domesticated: lentils, peas, chickpeas, bitter vetch. These provide protein and fix nitrogen in soil, complementing grain agriculture.

The legume-grain combination is nutritionally powerful. Cereals lack lysine; legumes provide it. Legumes lack methionine; cereals provide it. Together they approximate complete protein. The combination appears independently wherever agriculture develops—beans and corn in Mesoamerica, soybeans and rice in China.

Legumes also store well when dried. A pantry of grain and legumes can sustain a family through winter, through drought, through siege.`,
			imagePlaceholder: 'Domesticated legumes - lentils, peas, chickpeas'
		},
		{
			id: 'sheep-goat-domestication',
			date: '~10,500 years ago',
			title: 'Sheep and Goat Domestication',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Animals join the covenant.',
			content: `Sheep and goats are domesticated in the Zagros Mountains. These are the first animals domesticated for food (dogs were earlier, for companionship and hunting).

Why sheep and goats first: Already gregarious, they follow a leader. Manageable size. Eat plants humans don't. Provide multiple resources: meat, milk, hides, later wool. They convert grass into protein, allowing humans to exploit landscapes unsuitable for farming.

The most docile animals are kept; the aggressive ones eaten. Over generations, animals become smaller, more manageable, more dependent. Their horns reduce, their brains shrink. Domestication is neurological change enforced by selection.`,
			imagePlaceholder: 'Early domesticated sheep and goats'
		},
		{
			id: 'flax-domestication',
			date: '~10,500 years ago',
			title: 'Flax Domestication',
			tags: ['tech', 'gain'],
			summary: 'Fiber for fabric.',
			content: `Flax is domesticated for its fibers and oil-rich seeds. The fibers, processed through retting (controlled rotting), become linen—the first plant-based textile.

Linen production is labor-intensive: grow, harvest, ret, scutch, hackle, spin, weave. But linen is lighter than leather, cooler than wool, takes dye well. Linen cloth becomes a trade good, a status marker, eventually a currency.

Flax seeds provide linseed oil—used for food, medicine, and later for paints and preservatives. One plant, multiple products.`,
			imagePlaceholder: 'Flax plant and linen production'
		},
		{
			id: 'obsidian-trade',
			date: '~10,300 years ago',
			title: 'Obsidian Trade Networks',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Value flows across distance.',
			content: `Obsidian—volcanic glass, razor-sharp, beautiful—becomes the prestige material of the Neolithic. Sources are rare and specific: central Anatolia (Göllü Dağ, Nenezi Dağ), Armenia, the Aegean islands. But obsidian appears hundreds of kilometers from source.

This requires trade networks. Someone travels to the source, or material passes hand to hand across communities. Ideas travel with obsidian. Techniques spread. The Neolithic expands along trade routes.

Obsidian sourcing through chemical analysis allows archaeologists to map ancient trade routes. The reach is remarkable—Anatolian obsidian in the Levant, Aegean obsidian in mainland Greece. The Neolithic world is connected.`,
			imagePlaceholder: 'Obsidian blades and trade route map'
		},
		{
			id: 'neolithic-revolution',
			date: '~10,000 years ago',
			title: 'Neolithic Revolution Proper',
			tags: ['transition', 'cognitive', 'gain'],
			summary: 'The human relationship with nature shifts.',
			content: `By 10,000 years ago, the full Neolithic package has emerged: domesticated crops, domesticated animals, permanent settlements, food storage, new social organization.

What changed: Diet narrows from wild variety to cultivated staples. Settlement shifts from mobility to permanence. Labor shifts from immediate acquisition to delayed returns. Society shifts from bands to villages. Time shifts from cyclical to invested.

This is HOW reclaiming dominance after the WHY-explosion of the Upper Paleolithic. But now HOW and WHY integrate: agriculture isn't just technique, it's covenant. The land gives because we tend it. The gods provide because we sacrifice.`,
			imagePlaceholder: 'Neolithic village with crops, animals, and storage'
		},
		{
			id: 'gobekli-tepe-buried',
			date: '~10,000 years ago',
			title: 'Göbekli Tepe Deliberately Buried',
			tags: ['expansion', 'cognitive'],
			summary: 'The temple is interred.',
			content: `Around 10,000 years ago, Göbekli Tepe is deliberately buried. The enclosures are filled with debris, not destroyed but covered. This is not abandonment—it's ritual closure.

Fill contains bones, stone tools, fragments of sculpture. No evidence of destruction or violence. Each enclosure was buried individually over time. The site was "closed" systematically.

Göbekli Tepe may have created the conditions for its own obsolescence. The gatherings it required led to agriculture. Agriculture led to dispersed villages. Dispersed villages no longer needed a central gathering point. The temple's success was its ending.`,
			imagePlaceholder: 'Göbekli Tepe enclosures during deliberate burial'
		},
		{
			id: 'cattle-domestication',
			date: '~10,000 years ago',
			title: 'Cattle Domestication',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'The great beast tamed.',
			content: `Wild aurochs—massive, aggressive, dangerous—are domesticated in the Near East. Aurochs stood nearly two meters at the shoulder, with long horns and fierce temperaments. Domesticating them required generations of selection for docility.

Cattle provide more than sheep or goats: more meat, more milk, more hide, and eventually traction power. The ox pulling a plow multiplies human labor. But cattle require more: more pasture, more water, more investment.

Cattle become wealth. Countable, tradeable, inheritable. The word "capital" derives from "capita"—heads of cattle. In many cultures, cattle become sacred—too valuable to be merely meat.`,
			imagePlaceholder: 'Aurochs compared to early domesticated cattle'
		},
		{
			id: 'pig-domestication',
			date: '~10,000 years ago',
			title: 'Pig Domestication',
			tags: ['tech', 'gain'],
			summary: 'The garbage converter.',
			content: `Pigs are domesticated from wild boar, probably in multiple locations: Anatolia, China, Europe. Pigs are different from sheep, goats, and cattle—they don't herd, don't provide milk or wool, can't pull plows. But they convert garbage into meat.

Pigs eat anything: kitchen scraps, fallen fruit, agricultural waste, forest mast. They thrive in sedentary environments with accumulated refuse. They breed quickly, produce large litters. Efficient protein.

But pigs also compete with humans for food and can't be herded long distances. Pig-keeping ties you to place. In mobile societies, pigs disappear. The animal that eats garbage becomes symbolically charged—unclean in some traditions, sacred in others.`,
			imagePlaceholder: 'Wild boar and early domesticated pig'
		},
		{
			id: 'catalhoyuk',
			date: '~9,500 years ago',
			title: 'Çatalhöyük Founded',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The first proto-city.',
			content: `Çatalhöyük in central Anatolia grows to perhaps 10,000 people—the largest settlement in the world at its time. Houses packed together without streets, entered through roof hatches. Walls painted with elaborate murals. Bulls' heads mounted on walls.

The dead are buried beneath the floors. The boundary between domestic and sacred dissolves—every house is a shrine. There's no central temple, no palace, no obvious hierarchy. Dense urbanism without apparent government.

How did they manage? Shared ritual, shared identity, shared meaning embedded in every wall, every burial, every painted image. WHY-frameworks so strong they coordinated thousands without visible coercion. Çatalhöyük lasted 1,400 years.`,
			imagePlaceholder: 'Çatalhöyük reconstruction showing rooftop entry and interior shrines'
		},
		{
			id: 'ain-ghazal-statues',
			date: '~9,500 years ago',
			title: "'Ain Ghazal Statues",
			tags: ['expansion', 'cognitive'],
			summary: 'The ancestors grow large.',
			content: `At 'Ain Ghazal in Jordan, large plaster statues are created—half life-size, with inlaid eyes, elaborate features. Some have two heads. They're found in pits, apparently deliberately buried.

These are not portable figurines but monumental sculpture. Creating them required skill, time, material investment. They may represent ancestors, gods, protective spirits. The scale suggests organized religion—community productions, shared symbols, collective meaning.

'Ain Ghazal at its peak houses perhaps 3,000 people—one of the largest PPNB settlements. The statues mark a community investing heavily in WHY-infrastructure.`,
			imagePlaceholder: "'Ain Ghazal plaster statues with inlaid eyes"
		},
		{
			id: 'bitumen-use',
			date: '~9,500 years ago',
			title: 'Bitumen Use',
			tags: ['tech', 'gain'],
			summary: "Nature's adhesive.",
			content: `Bitumen—natural asphalt seeping from the ground in Mesopotamia—is collected and used for waterproofing, adhesive, and construction. Baskets lined with bitumen hold water. Bricks set in bitumen resist moisture. Tools hafted with bitumen hold firm.

Bitumen is one of Mesopotamia's few natural resources. It will later waterproof boats, seal buildings, and (mixed with sand) pave roads. The technology of exploiting this sticky black substance prefigures the petroleum economy by eight millennia.`,
			imagePlaceholder: 'Bitumen seep and waterproofed containers'
		},
		{
			id: 'pottery-precursors',
			date: '~9,000 years ago',
			title: 'Pottery Precursors (Plaster Vessels)',
			tags: ['tech'],
			summary: 'Shaping earth for storage.',
			content: `Before fired pottery, people make "white ware"—vessels ofite (calcium aluminum silicate) or lime plaster. These can hold dry goods and some liquids.

Lime plaster requires heating limestone to 900°C—showing pyrotechnological knowledge existed before pottery firing. The skills for pottery were present; the need was not yet acute. Hunter-gatherers and early farmers didn't need pottery—baskets, skin bags, and gourds served well.`,
			imagePlaceholder: 'White ware vessels and lime plaster technology'
		},
		{
			id: 'kiln-tech',
			date: '~9,000 years ago',
			title: 'Kiln Technology Develops',
			tags: ['tech', 'gain'],
			summary: 'Controlling fire precisely.',
			content: `Kilns—enclosed firing chambers that control temperature and atmosphere—develop for lime production and eventually pottery. This is pyrotechnology maturing: not just using fire but engineering it.

A good kiln reaches higher temperatures than open fire, maintains them longer, and can create reducing atmospheres (low oxygen) for specific effects. Kiln technology will enable pottery, metallurgy, glass-making—the transformative industries of civilization.

The kiln-master becomes a specialist. Not everyone can build and operate a kiln. The technology creates the technologist.`,
			imagePlaceholder: 'Early kiln construction and operation'
		},
		{
			id: 'pottery-invented',
			date: '~8,500 years ago',
			title: 'Pottery Invented',
			tags: ['tech', 'gain'],
			summary: 'Fired clay transforms cooking and storage.',
			content: `Pottery firing becomes widespread. Clay vessels are shaped, dried, and fired at 600-800°C, creating durable containers.

What pottery enables: Cooking grains into porridge and bread. Storing liquids (water, milk, beer, oil). Fermentation and brewing. Long-term grain storage. New cooking methods (boiling, stewing).

Pottery is heavy and breakable—it anchors you to place. Mobile hunter-gatherers don't carry pots. Pottery implies sedentism. The technology and the lifestyle co-evolve. Pottery styles become cultural markers—decorations, shapes, and techniques identify groups.`,
			imagePlaceholder: 'Early Neolithic pottery vessels'
		},
		{
			id: 'pig-domestication-spreads',
			date: '~8,500 years ago',
			title: 'Pig Domestication Spreads',
			tags: ['expansion', 'tech'],
			summary: "The omnivore's utility.",
			content: `Pig domestication, occurring independently in Anatolia and China, spreads through agricultural communities. Pigs thrive wherever humans settle and accumulate waste.

The pig advantage: omnivores eating scraps, rapid reproduction, high meat yield, no need for pasture. The pig disadvantage: compete with humans for food, can't be herded, require settlement.

Pigs become symbolically complex. The animal that roots in garbage, that eats anything, becomes a marker of boundaries—clean versus unclean, settled versus mobile, us versus them.`,
			imagePlaceholder: 'Domesticated pigs in settlement context'
		},
		{
			id: 'cattle-domestication-consolidates',
			date: '~8,500 years ago',
			title: 'Cattle Domestication Consolidates',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Power, wealth, and the sacred bull.',
			content: `Cattle domestication spreads from initial centers. The challenges are immense—aurochs were dangerous—but the rewards are greater.

What cattle provide: Meat and leather (like hunted aurochs). Milk (new resource, requiring lactose tolerance to emerge). Traction power (plowing, cart-pulling). Wealth storage (cattle as capital). Dung for fuel and fertilizer.

Bulls are already symbolically potent—see Çatalhöyük's mounted horns. Domesticating the bull is domesticating power itself. Cattle become wealth, sacrifice, symbols of divine force.`,
			imagePlaceholder: 'Cattle herding and bull symbolism'
		},
		{
			id: 'dog-breeds-differentiate',
			date: '~8,500 years ago',
			title: 'Dog Breeds Differentiate',
			tags: ['tech'],
			summary: 'The first companion specializes.',
			content: `Dogs, domesticated since the Paleolithic, begin differentiating into specialized types. Herding dogs to manage sheep and goats. Guard dogs to protect settlements. Hunting dogs adapted to local prey.

This is artificial selection becoming intentional. Humans breed dogs for traits, creating varieties that could never emerge naturally. The dog becomes a tool—shaped by human needs, expressing human purposes.

The human-dog bond also deepens. Dogs live in houses, eat human food, are buried with care. The first domesticate remains the closest.`,
			imagePlaceholder: 'Different dog types in Neolithic context'
		},
		{
			id: 'chinese-agriculture',
			date: '~8,500 years ago',
			title: 'Chinese Agriculture Begins (Independent)',
			tags: ['parallel', 'expansion', 'gain'],
			summary: 'A second origin.',
			content: `In the Yangtze and Yellow River valleys, agriculture develops independently. Different crops: rice in the south, millet in the north. Different animals: pigs (independent domestication), water buffalo, chickens (later). Same pattern: intensification of wild harvesting, then domestication, then sedentism.

This is crucial: agriculture wasn't one invention that spread. It was a pattern that emerged wherever conditions permitted. China's Neolithic develops in parallel with the Near East's, with no contact between them. The same WHY-pressures, the same HOW-responses, different materials.

Rice cultivation requires water management—paddies, irrigation, collective labor. The Chinese Neolithic develops its own trajectory, leading to its own civilizations, its own writing, its own meaning-systems.`,
			imagePlaceholder: 'Early rice cultivation in China'
		},
		{
			id: 'kiloyear-event',
			date: '~8,200 years ago',
			title: '8.2 Kiloyear Event',
			tags: ['stress', 'external', 'climate'],
			summary: 'Climate strikes back.',
			content: `A catastrophic glacial lake outburst floods the North Atlantic with fresh water. Ocean circulation disrupts. Global temperatures drop 1-3°C for 200-400 years.

Lakes Agassiz and Ojibway, massive glacial meltwater reservoirs in North America, breach their ice dams. Trillions of liters of cold fresh water surge into the Atlantic. The thermohaline circulation weakens. Europe and the Middle East cool and dry rapidly.

Agricultural communities across the Fertile Crescent are stressed. Some settlements are abandoned. Populations contract. But unlike the Younger Dryas, established agricultural societies have resilience. Storage, irrigation, trade networks buffer the shock. The system bends but doesn't break.`,
			imagePlaceholder: 'Glacial lake outburst and climate disruption'
		},
		{
			id: 'ppnb-collapse',
			date: '~8,000 years ago',
			title: 'PPNB Collapse',
			tags: ['collapse', 'lost'],
			summary: 'The first Neolithic crisis.',
			content: `The great PPNB settlements contract or are abandoned. Çatalhöyük shrinks. 'Ain Ghazal is depopulated. Across the Levant and Anatolia, the early Neolithic system fails.

Why? Probably multiple factors: the 8.2 kiloyear climate event, soil exhaustion from early farming, deforestation for fuel and construction, social tensions from increasing inequality. The environment couldn't sustain the population the culture had produced.

This is the first lesson of agriculture: it enables population growth, but population growth can overshoot carrying capacity. The Neolithic doesn't fail—but this version of it does. What replaces it is smaller, more dispersed, differently organized.`,
			imagePlaceholder: 'Abandoned PPNB settlements'
		},
		{
			id: 'irrigation-begins',
			date: '~8,000 years ago',
			title: 'Irrigation Technology Begins',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Water where we need it.',
			content: `Simple irrigation—channels diverting river water to fields—appears in Mesopotamia. This is HOW-capacity reshaping landscapes.

Early irrigation is simple: channels dug from rivers to fields, small dams to control flow, levees to prevent flooding. But it requires coordination—water must be shared, schedules maintained, infrastructure repaired collectively.

Irrigation dramatically increases yields. Mesopotamia, with unreliable rainfall, becomes productive when irrigated. The population that can be supported explodes. But irrigation also requires cooperation beyond the household. Disputes must be resolved, labor organized. The connection between water management and social complexity is real.`,
			imagePlaceholder: 'Early irrigation channels and water management'
		},
		{
			id: 'ancestor-worship-codifies',
			date: '~8,000 years ago',
			title: 'Ancestor Worship Codifies',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The dead become foundation.',
			content: `Ancestor veneration, present since PPNB, becomes increasingly elaborate. Household shrines. Special treatment of founding ancestors. Multi-generational burial sequences beneath homes.

The ancestors are not merely remembered—they are present. They watch, they judge, they protect or punish. The living have obligations to the dead; the dead have power over the living.

This WHY-framework serves social functions: legitimizes occupation ("We belong here because our ancestors are here"), creates continuity ("We do this because they did"), establishes hierarchy (older lineages have more ancestors, more legitimacy), anchors identity ("We are the descendants of...").`,
			imagePlaceholder: 'Ancestor shrine with offerings'
		},
		{
			id: 'textile-tech-advances',
			date: '~8,000 years ago',
			title: 'Textile Technology Advances',
			tags: ['tech', 'gain'],
			summary: 'From fiber to fabric.',
			content: `Textile technology advances: sophisticated weaving, use of wool (from newly-woolly domesticated sheep), linen from flax. Spindle whorls and loom weights appear in the record.

Fibers are spun into thread; threads are woven on looms into fabric. The process is labor-intensive but produces strong, versatile material. Textiles become markers of status, gender, affiliation. Who weaves, who wears what, who controls textile production—these become social questions.

Weaving metaphors pervade language: the "fabric" of society, the "thread" of life. The technology shapes how people think.`,
			imagePlaceholder: 'Neolithic loom weights and spindle whorls'
		},
		{
			id: 'agriculture-europe',
			date: '~7,500 years ago',
			title: 'Agriculture Spreads to Europe',
			tags: ['expansion', 'migration', 'gain'],
			summary: 'The Neolithic package crosses continents.',
			content: `The Neolithic package spreads from Anatolia into Europe via two routes: the Mediterranean coast and the Danube valley. This is not just technology transfer but WHY-transfer—ancestor worship, property concepts, relationships with land and animals.

The spread is rapid—faster than population growth alone could explain. Ancient DNA suggests mostly population replacement with some admixture. The farmers arrived and largely replaced the hunter-gatherers.

Within 2,000 years, the Neolithic reaches Britain and Scandinavia. European hunter-gatherer populations decline dramatically. The calories win.`,
			imagePlaceholder: 'Map showing spread of agriculture to Europe'
		},
		{
			id: 'lbk-culture',
			date: '~7,500 years ago',
			title: 'Linear Pottery Culture (LBK)',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The first European farmers.',
			content: `The Linearbandkeramik culture spreads across central Europe—the first farming culture north of the Alps. Named for distinctive pottery decorated with linear patterns.

LBK settlements are remarkably uniform across thousands of kilometers: longhouses, specific pottery styles, similar burial practices. This uniformity suggests strong cultural transmission—shared WHY-frameworks spreading with the farming package.

The longhouses are massive—up to 45 meters long. They house extended families, their animals, their grain stores. The household becomes the economic and social unit. The architecture encodes values: family, accumulation, permanence.`,
			imagePlaceholder: 'LBK longhouse and pottery'
		},
		{
			id: 'violence-increases',
			date: '~7,500 years ago',
			title: 'Evidence of Violence Increases',
			tags: ['stress'],
			summary: 'The dark side of settlement.',
			content: `At Talheim in Germany, a mass grave: 34 people—men, women, children—killed by blows to the head, thrown into a pit. At Asparn-Schletz in Austria, similar evidence. Organized massacre appears.

Violence is not new—but sedentary farming creates new conditions. Mobile hunter-gatherers can flee conflict. Sedentary farmers are tied to land, to stored grain, to buried ancestors. Worth fighting for. Worth killing for.

The Neolithic doesn't invent violence, but it creates conditions for its intensification: storable wealth worth raiding, bounded territories worth defending, populations too invested to walk away.`,
			imagePlaceholder: 'Talheim massacre burial'
		},
		{
			id: 'black-sea-flood',
			date: '~7,000 years ago',
			title: 'Black Sea Flood (Hypothesis)',
			tags: ['stress', 'climate'],
			summary: 'Did the world drown?',
			content: `A controversial hypothesis: The rising Mediterranean breaches the Bosporus, flooding the freshwater Black Sea basin catastrophically. Coastal settlements are inundated. Populations flee.

During the Ice Age, the Black Sea was a smaller, freshwater lake. As glaciers melted, Mediterranean levels rose while the Bosporus land bridge held. Around 7,000 years ago, the sea may have broken through, flooding 60,000 square miles rapidly.

If this happened catastrophically, it may be the origin of flood myths—memories of waters rising, of a world drowned. Refugees would have moved into Mesopotamia, Anatolia, up the Danube. Did flood refugees carry the memory that became humanity's most widespread myth?`,
			imagePlaceholder: 'Black Sea flooding through Bosporus'
		},
		{
			id: 'copper-working-begins',
			date: '~7,000 years ago',
			title: 'Copper Working Begins',
			tags: ['expansion', 'tech'],
			summary: 'The first metal.',
			content: `Native copper—pure copper occurring naturally—is hammered into tools and ornaments. This is the Chalcolithic, the Copper Age.

Native copper can be worked cold—hammered into shape without melting. It's rare, soft, and not very useful for tools, but beautiful for ornaments. Copper objects become prestige items.

The recognition that certain rocks can be transformed—this is the conceptual breakthrough. The path to bronze, iron, and all metallurgy begins here. Metal requires specialists. Craft specialization intensifies. Social differentiation increases.`,
			imagePlaceholder: 'Native copper artifacts'
		},
		{
			id: 'secondary-products-revolution',
			date: '~7,000 years ago',
			title: 'Secondary Products Revolution Begins',
			tags: ['expansion', 'tech', 'gain'],
			summary: 'Animals give more than meat.',
			content: `A shift in animal exploitation: instead of raising animals just for meat (killing them), humans increasingly exploit "secondary products"—milk, wool, traction power.

Milking spreads (adults in some populations evolve lactose tolerance). Wool-bearing sheep are bred. Oxen pull plows and carts. Animals become living tools, renewable resources, force multipliers.

This transforms the economics of herding. A dairy cow is worth more alive than dead. A wool sheep produces value year after year. The logic shifts from slaughter to husbandry, from consumption to investment.`,
			imagePlaceholder: 'Milking, shearing, and plowing with animals'
		},
		{
			id: 'african-agriculture',
			date: '~7,000 years ago',
			title: 'African Agriculture Begins (Independent)',
			tags: ['parallel', 'expansion', 'gain'],
			summary: 'A third origin.',
			content: `In sub-Saharan Africa, independent domestication begins. Different crops: sorghum, pearl millet, African rice, yams. Different animals: guinea fowl, possibly cattle (disputed). Same pattern: local wild plants and animals brought under human management.

African agriculture develops its own trajectory. The Sahara, then green and wet, connects North Africa to the south. When the Sahara dries (around 5,500 years ago), populations concentrate along the Nile and in West Africa. The Neolithic revolution is not one event but many.`,
			imagePlaceholder: 'African crops - sorghum, millet, yams'
		},
		{
			id: 'sailing-tech',
			date: '~6,800 years ago',
			title: 'Sailing Technology',
			tags: ['tech', 'gain'],
			summary: 'Wind becomes power.',
			content: `The sail appears in Egypt and Mesopotamia—using wind to move boats. This is revolutionary: transport without muscle power. The energy is free, inexhaustible, powerful.

Rivers become highways. Coastal trade becomes feasible at scale. Goods can move that couldn't be carried overland. The Mediterranean opens. The Persian Gulf connects Mesopotamia to distant lands.

Sailing requires new knowledge: reading wind and water, navigation, vessel construction. The sailor becomes a specialist. Maritime communities develop distinct cultures. The sea, once a barrier, becomes a highway.`,
			imagePlaceholder: 'Early sailing vessels in Egypt'
		},
		{
			id: 'plow-development',
			date: '~6,500 years ago',
			title: 'Plow Development',
			tags: ['tech', 'gain'],
			summary: 'Turning the earth at scale.',
			content: `The ard, or scratch plow—a simple pointed stick dragged through soil by cattle—appears in Mesopotamia. Animal power applied to agriculture.

The ard doesn't turn soil like a moldboard plow—it scratches a furrow. But even this simple action prepares ground for planting far faster than hand cultivation. The plow requires domesticated cattle trained to pull, yokes, harnesses, coordination. It's a system, not just a tool.

Fields can be larger. More land cultivated per person. Surplus increases. But plowing is heavy work. In many societies, it becomes coded as men's work, shifting gender dynamics in agriculture.`,
			imagePlaceholder: 'Ard plow with cattle'
		},
		{
			id: 'ubaid-period',
			date: '~6,500 years ago',
			title: 'Ubaid Period in Mesopotamia',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'The temples rise.',
			content: `The Ubaid period sees the emergence of the first temples—not household shrines but public, monumental religious architecture.

At Eridu, the first temple is built on virgin sand—no earlier settlement beneath it. Later Sumerians consider Eridu the first city, where kingship descended from heaven. The temple is rebuilt and enlarged 17 times over millennia.

Religion moves from household to institution. The gods are no longer only family ancestors—they are community patrons, cosmic forces, requiring specialized intermediaries. Priesthoods differentiate. Temple administrators manage land, labor, redistribution. The seeds of institutional religion are planted.`,
			imagePlaceholder: 'Early temple at Eridu'
		},
		{
			id: 'indus-agriculture',
			date: '~6,500 years ago',
			title: 'Agriculture Reaches the Indus Valley',
			tags: ['expansion', 'migration'],
			summary: 'Mehrgarh flourishes.',
			content: `At Mehrgarh in present-day Pakistan, an agricultural community flourishes—one of the precursors to the later Indus Valley Civilization. Wheat, barley, cattle, sheep, goats. Craft specialization. Long-distance trade.

The Neolithic package adapts to new environments. The Indus region develops its own trajectory—different from Mesopotamia, different from China. Multiple centers of complexity emerge independently. The pattern repeats: agriculture enables population growth enables complexity enables civilization.`,
			imagePlaceholder: 'Mehrgarh settlement'
		},
		{
			id: 'copper-smelting',
			date: '~6,000 years ago',
			title: 'Copper Smelting',
			tags: ['tech', 'gain'],
			summary: 'Extracting metal from stone.',
			content: `The smelting of copper ore—extracting metal from rock using heat—is developed. This is fundamentally different from working native copper. It's transformation.

Copper ore (malachite, azurite) is heated with charcoal to 1,100°C in a reducing atmosphere. The copper separates, flows, can be cast into molds. The ore is destroyed; the metal is born. That greenish rock contains hidden copper—this is not obvious. The metallurgist becomes a specialist, almost a magician.

Smelting requires ore sources (often distant), fuel (massive charcoal), skill, time. Trade networks expand. Specialized communities emerge near ore sources.`,
			imagePlaceholder: 'Copper smelting process'
		},
		{
			id: 'lost-wax-casting',
			date: '~6,000 years ago',
			title: 'Lost-Wax Casting',
			tags: ['tech', 'gain'],
			summary: 'Complex forms in metal.',
			content: `Lost-wax casting appears—a technique for creating complex metal objects. A wax model is coated in clay, heated to melt out the wax, then filled with molten copper. The clay is broken away to reveal the metal object.

This enables shapes impossible to achieve by hammering or simple mold-casting: hollow objects, intricate details, undercuts. The technique will produce the great bronze sculptures of later millennia. HOW-capacity reaches new precision.`,
			imagePlaceholder: 'Lost-wax casting process'
		},
		{
			id: 'writing-precursors',
			date: '~6,000 years ago',
			title: 'Writing Precursors (Token Systems)',
			tags: ['expansion', 'cognitive', 'gain'],
			summary: 'Before writing, there were tokens.',
			content: `Clay tokens—small geometric shapes representing commodities—are used for accounting in temples and trade. Each token shape represents a commodity: cones for grain, spheres for animals.

Tokens are stored in clay envelopes (bullae), sealed with impressions pressed into the surface. Why put tokens in a ball and mark the ball? Eventually, why keep the tokens at all? Just mark the ball directly. The marks become pictographs. Pictographs become cuneiform.

The temple is WHY-space but also HOW-infrastructure. The economic function of religion drives the technology that will become humanity's greatest invention.`,
			imagePlaceholder: 'Clay tokens and bullae'
		},
		{
			id: 'proto-urban-centers',
			date: '~6,000 years ago',
			title: 'Proto-Urban Centers Emerge',
			tags: ['expansion', 'gain'],
			summary: 'The city prepares to be born.',
			content: `In Mesopotamia, settlements grow toward urban scale. Eridu, Ur, Uruk—population in the thousands. Specialized occupations. Monumental architecture.

Each development enables others. Trade brings wealth; wealth builds temples; temples require administrators; administrators need records; records require literacy; literacy enables law. The city is an engine of complexity.

These proto-cities have patron gods, creation myths, festival calendars, priestly hierarchies. The meaning-making apparatus of civilization is already in place. The city is not just population density—it's a new form of collective consciousness.`,
			imagePlaceholder: 'Proto-urban Ubaid settlement'
		},
		{
			id: 'fermentation-technology',
			date: '~6,000 years ago',
			title: 'Fermentation Technology Matures',
			tags: ['tech', 'gain'],
			summary: 'Beer, bread, and the gifts of rot.',
			content: `Controlled fermentation becomes widespread. The transformation of grain into alcohol and leavened bread is mastered.

Beer: grain mash fermented with wild or cultivated yeasts. Nutritious, safe to drink, mildly intoxicating. Bread: leavened dough using fermentation. Lighter, more digestible. Wine: grape juice fermented. Fermentation is transformation—rot becoming nutrition, grain becoming spirit.

Beer is democratic—everyone drinks it. Beer is payment: temple workers receive beer rations. Drinking together binds communities. The brewing industry becomes significant.`,
			imagePlaceholder: 'Ancient brewing vessels'
		},
		{
			id: 'mesoamerican-agriculture',
			date: '~6,000 years ago',
			title: 'Mesoamerican Agriculture Begins (Independent)',
			tags: ['parallel', 'expansion', 'gain'],
			summary: 'A fourth origin.',
			content: `In Mesoamerica, the domestication of maize from teosinte begins—one of the most dramatic transformations in agricultural history. Teosinte looks nothing like corn; the transformation required millennia of selection.

Squash and beans join maize to form the "Three Sisters"—a nutritionally complete combination. No draft animals (none suitable exist in the Americas), no wheel for transport (no draft animals to pull it). A different path to complexity, proving agriculture is a pattern, not a package.`,
			imagePlaceholder: 'Maize domestication from teosinte'
		},
		{
			id: 'potters-wheel',
			date: '~5,800 years ago',
			title: "Potter's Wheel Invented",
			tags: ['tech', 'gain'],
			summary: 'Rotation transforms craft.',
			content: `The potter's wheel appears—a rotating platform that allows symmetric, faster pottery production. The wheel precedes its transport application by centuries.

Wheel-thrown pottery is more uniform, faster to produce, and can achieve shapes impossible by hand. The technology enables mass production. Pottery becomes commodity rather than craft. Standardization increases.`,
			imagePlaceholder: "Potter's wheel in use"
		},
		{
			id: 'transport-wheel',
			date: '~5,500 years ago',
			title: 'Transport Wheel Invented',
			tags: ['tech', 'gain'],
			summary: 'Movement revolutionized.',
			content: `The wheel is applied to transport—carts and wagons pulled by oxen. Solid wooden wheels, heavy but functional.

The wheel requires axles, bearings, draft animals, and terrain where wheels are useful. Mesopotamia has all of these. The Americas never developed the wheel for transport—not because they couldn't, but because they lacked suitable draft animals.

The wheel becomes metaphor: wheel of time, wheel of fortune, the cycle of existence. Movement through rotation, eternal return.`,
			imagePlaceholder: 'Early wheeled cart'
		},
		{
			id: 'social-hierarchy-crystallizes',
			date: '~5,500 years ago',
			title: 'Social Hierarchy Crystallizes',
			tags: ['transition', 'cognitive'],
			summary: 'Inequality becomes structure.',
			content: `Burial evidence shows increasing differentiation. Some graves have rich goods; most have little. Houses vary in size and quality. Elite quarters emerge. Inequality is no longer incidental—it's systematic.

Why does hierarchy emerge? Surplus enables it. Storage requires management. Management requires managers. Managers accumulate power. Power seeks to perpetuate itself. Children inherit what parents accumulated.

The egalitarian ethic of hunter-gatherer bands doesn't disappear—it becomes ideology, deployed against visible inequality, invoked in rebellion. But the structure beneath is hierarchical.`,
			imagePlaceholder: 'Rich versus poor burials'
		},
		{
			id: 'agriculture-cost',
			date: '~5,500 years ago',
			title: 'The Cost of Agriculture',
			tags: ['stress'],
			summary: 'The body remembers.',
			content: `Skeletal evidence reveals agriculture's price. Neolithic farmers are shorter than hunter-gatherer ancestors. More dental cavities (carbohydrate diet). More anemia. More infectious disease (crowding, animal proximity).

The agricultural diet is narrower—dependence on few crops means vulnerability to their deficiencies. The agricultural lifestyle is harder—more labor hours than hunting-gathering. The agricultural disease environment is deadlier—zoonotic infections, crowd diseases, parasites.

Why adopt this? Because calories per acre. Agriculture supports more people per area, enabling population growth. But population growth consumes the surplus. More people means more labor needed means more children means more people. The trap closes.`,
			imagePlaceholder: 'Skeletal evidence of agricultural stress'
		},
		{
			id: 'specialized-priesthoods',
			date: '~5,500 years ago',
			title: 'Specialized Priesthoods Emerge',
			tags: ['expansion', 'cognitive'],
			summary: 'The sacred becomes profession.',
			content: `Temple personnel differentiate into hierarchies. High priests, ordinary priests, temple servants, scribes. The sacred becomes profession, requiring training, conferring status, accumulating power.

Priests control access to the divine. They interpret omens, perform sacrifices, manage temple wealth. They become literate (or soon will). They advise rulers. The integration of religious and political power begins.

The temple is WHY-institution becoming HOW-infrastructure: economic redistribution, record-keeping, social welfare, law. Religion and state are not yet separate—they emerge together, intertwined.`,
			imagePlaceholder: 'Temple hierarchy and priesthood'
		},
		{
			id: 'era-3-closes',
			date: '~5,500 years ago',
			title: 'Era III Closes',
			tags: ['transition'],
			summary: 'The village becomes the city.',
			content: `By 5,500 years ago, the stage is set. Agriculture is established across the Old World and developing in the New. Population has exploded. Settlements approach urban scale. Metallurgy, writing, the wheel—the technologies of civilization are in place or imminent.

The village era ends. The city era begins. Era IV will see the first states, the first writing, the first laws, the first empires. The WHY-frameworks developed in this era—property, hierarchy, ancestor worship, institutional religion—will structure human societies for the next five millennia.

The remainder persists. The agricultural trap is closing. There is no going back.`,
			imagePlaceholder: 'Transition from village to city'
		}
	]
};
