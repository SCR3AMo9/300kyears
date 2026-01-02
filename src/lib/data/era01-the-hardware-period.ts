import type { Era } from './types';

export const theHardwarePeriod: Era = {
	id: 'era-1',
	number: 'I',
	title: 'THE HARDWARE PERIOD      (4 AI PASSES, Manual Edits Required, Verification in Progress)',
	timespan: '~300,000 - 42,000 years ago',
	description: 'The hardware exists. Brain capacity sufficient for everything that follows. But the WHY-brain is not yet online. HOW dominates—tools improve, fire is mastered, hunting strategies develop. WHAT exists (death, weather, predators) but is processed purely through mechanism.',
	events: [
  {
    id: "controlled-fire",
    date: "~400,000 years ago",
    title: "Controlled Fire (Pre-Sapiens Inheritance)",
    tags: [
      "expansion",
      "tech",
      "gain"
    ],
    summary: "The first captured entropy.",
    content: "Before Homo sapiens exists, Homo erectus and early Homo heidelbergensis master fire. Not just opportunistic use—controlled hearths, maintained flames, cooking. This is inherited technology: by the time anatomically modern humans emerge, fire is already old.\n\nHumans at one point figured out this \"thing\" they feared for so long, could be controlled. Someone notices embers stay warm longer in a pile. Someone else notices the embers light up when you breathe on it. Each insight wordless, passed on through imitation, through watching, through doing-together. Over time their \"What\", their first principles view of the world in their head, changed. ",
    imagePlaceholder: "Controlled hearth with early humans gathered around fire"
  },
  {
    id: "anatomical-modernity",
    date: "~300,000 years ago",
    title: "Anatomical Modernity",
    tags: [
      "transition",
      "cognitive"
    ],
    summary: "The hardware exists.",
    content: "Brain capacity sufficient for everything that follows. But the WHY-brain is not yet online. HOW dominates—tools improve, fire is mastered, hunting strategies develop. WHAT exists (death, weather, predators) but is processed purely through mechanism.\n\nJebel Irhoud (Morocco) provides the earliest dated Homo sapiens remains at ~300,000 ya. The skull shows the flat face and small brow of modernity, though the braincase is still slightly elongated. This is hardware in transition—anatomically emerging, cognitively latent.",
    imagePlaceholder: "Early human skull reconstruction showing modern brain capacity"
  },
  {
    id: "ochre-processing",
    date: "~300,000 years ago",
    title: "Ochre Processing",
    tags: [
      "tech",
      "gain"
    ],
    summary: "The first chemical industry.",
    content: "Ochre—iron oxide—is systematically mined, ground, and processed. At Twin Rivers (Zambia), multiple colors are collected and worked. The processing requires tools: grindstones, containers, possibly heat treatment to change color.\n\nWhy ochre? Multiple uses, all HOW-adjacent: adhesive ingredient (mixed with plant gum, it makes stronger hafting glue), hide processing (tanning agent), sunscreen, insect repellent, medicine (antimicrobial), and—eventually—symbolic marking. Ochre is the first commodity: valued enough to transport, processed enough to require technique, versatile enough to become essential. The ochre trade will persist for 200,000 years.\n\nWho: African populations primarily. Ochre use spreads with human migration.",
    imagePlaceholder: "Ochre processing with grindstones and pigment"
  },
  {
    id: "levallois-technique",
    date: "~300,000 years ago",
    title: "Levallois Technique",
    tags: [
      "tech",
      "cognitive",
      "gain"
    ],
    summary: "The prepared core.",
    content: "A revolution in stone tool production emerges across Africa and Eurasia: the Levallois technique. Instead of simply knapping flakes off a core, the toolmaker first shapes the core into a specific form—a \"tortoise\" shape—then strikes a single precise blow to detach a predetermined flake.\n\nThis is HOW-capacity requiring mental template. The toolmaker must see the finished flake inside the unshaped stone. The core is prepared through multiple steps for a single payoff. This is planning. This is imagination applied to mechanism. The Levallois technique spreads because it works—more cutting edge per pound of stone, more efficient use of raw material. It will dominate for 250,000 years.\n\nWho: Multiple populations independently—Africa, Neanderthals in Europe, possibly Denisovans in Asia. Convergent evolution of technique.",
    imagePlaceholder: "Levallois core and flake production sequence"
  },
  {
    id: "hafting-begins",
    date: "~280,000 years ago",
    title: "Hafting Begins",
    tags: [
      "tech",
      "gain"
    ],
    summary: "Two becomes one.",
    content: "The first evidence of hafting—binding stone tools to wooden handles using natural adhesives and plant fibers. A handaxe is powerful. A handaxe on a handle is leverage, reach, force multiplication.\n\nThis is composite tool thinking: combining materials with different properties into systems greater than their parts. X + X > 2X in material form. Hafting requires planning across time—gather resin, prepare binding, shape handle, attach stone—and across materials—understanding that wood flexes, stone cuts, binding holds. The first supply chains: different materials sourced from different locations, combined at a third.\n\nWho: Early Homo sapiens and Neanderthals both develop hafting. The technique is robust enough to emerge independently.",
    imagePlaceholder: "Hafted stone tools with natural adhesives"
  },
  {
    id: "pringle-falls",
    date: "~211,000 years ago",
    title: "Pringle Falls Geomagnetic Excursion",
    tags: [
      "external",
      "climate"
    ],
    summary: "The field weakens.",
    content: "A significant geomagnetic excursion occurs—Earth's magnetic field weakens and partially shifts. Not a full reversal like Laschamp will be, but a substantial weakening of the protective magnetosphere.\n\nDuring excursions, cosmic ray flux increases. The effects on early humans are unknown but the correlation between magnetic events and evolutionary pressure points is notable. Pringle Falls occurs during a period of cognitive stasis—the hardware exists but behavioral modernity hasn't emerged. Whether magnetic events influence mutation rates, neurological development, or simply correlate with climate shifts remains unclear. But the pattern will repeat.",
    imagePlaceholder: "Earth magnetic field visualization during excursion"
  },
  {
    id: "genetic-integration",
    date: "~200,000 years ago",
    title: "Genetic Integration Threshold",
    tags: [
      "transition",
      "cognitive"
    ],
    summary: "Mitochondrial Eve / Y-chromosomal Adam.",
    content: "Not literal first humans but population bottlenecks that establish the neural architecture that will later support symbolic thought. The wiring is laid but not activated.\n\nMitochondrial Eve (~200,000 ya) and Y-chromosomal Adam (~200,000-300,000 ya) represent not individuals but convergence points—the most recent common ancestors from whom all living humans inherit specific genetic lineages. These bottlenecks concentrated certain traits, including neural architecture variations that would later enable symbolic cognition.",
    imagePlaceholder: "DNA helix visualization representing genetic bottleneck"
  },
  {
    id: "neanderthal-birch-tar",
    date: "~200,000 years ago",
    title: "Neanderthal Birch Tar Production",
    tags: [
      "parallel",
      "tech",
      "lost"
    ],
    summary: "Distillation before chemistry.",
    content: "Neanderthals in Europe produce birch bark tar—a sophisticated adhesive requiring controlled pyrolysis. Birch bark must be heated in the absence of oxygen to extract tar. This requires either buried containers or carefully controlled fires with oxygen exclusion.\n\nThis is chemical engineering before the concept exists. The process cannot be discovered by accident—it requires intentional experimentation, observation of failed attempts, iterative refinement. Neanderthals understood that certain processes require specific conditions: temperature, atmosphere, timing. They transmitted this knowledge across generations.\n\nWho: Neanderthals in Northern Europe. This technology will be lost with them.\n\nLost: When Neanderthals go extinct (~40,000 ya), birch tar production disappears from the archaeological record for thousands of years. Sapiens eventually rediscover it independently—but there's a gap. Technology can die with its practitioners.",
    imagePlaceholder: "Birch bark tar production process"
  },
  {
    id: "iceland-basin",
    date: "~188,000 years ago",
    title: "Iceland Basin Geomagnetic Excursion",
    tags: [
      "external",
      "climate"
    ],
    summary: "Another magnetic weakening.",
    content: "A second major geomagnetic excursion during the emergence period of Homo sapiens. The Iceland Basin event shows Earth's magnetic field is not stable—it fluctuates, weakens, partially reverses on timescales of thousands of years.\n\nThese magnetic instabilities correlate loosely with glacial-interglacial transitions. Whether they drive climate change or respond to it remains debated. For early humans, the practical effect is increased cosmic radiation exposure during excursions. The biological significance is uncertain but the timing—during the period when anatomically modern humans exist but behavioral modernity hasn't emerged—is suggestive.",
    imagePlaceholder: "Magnetic field fluctuation diagram"
  },
  {
    id: "omo-kibish",
    date: "~195,000 years ago",
    title: "Omo Kibish (Ethiopia)",
    tags: [
      "transition"
    ],
    summary: "The hardware dated.",
    content: "The oldest definitively dated Homo sapiens fossils with fully modern anatomy—skulls from the Omo River valley in Ethiopia. This is the physical timestamp: by this point, the brain case is modern, the facial structure recognizable. The hardware exists in its final form.\n\nBut hardware is not software. These are anatomically modern humans living behaviorally archaic lives. HOW dominates—stone tools, fire use, hunting coordination. The capacity for WHAT and WHY exists in the neural architecture, but it lies dormant. The wiring is complete; the activation will take another 150,000 years.\n\nRecent studies suggest this fossil might be even older, approximately 230,000 years old",
    imagePlaceholder: "Omo Kibish skull fossils from Ethiopia"
  },
  {
    id: "clothing-emerges",
    date: "~170,000 years ago",
    title: "Clothing Emerges",
    tags: [
      "tech",
      "gain"
    ],
    summary: "The body extended.",
    content: "Genetic analysis of body lice (which live in clothing) versus head lice suggests divergence around this time—indirect evidence that humans began wearing clothing. In Africa, clothing is optional (protection from sun, insects). But clothing enables something critical: expansion into colder climates.\n\nThis is environment-shaping rather than environment-adapting. Instead of evolving fur (slow, generational), humans manufacture insulation (fast, individual). Clothing is the first wearable technology—the first time humans carry their tools as part of their bodies. The material substrate matters: animal hides require hunting, processing, cutting, sewing. Each garment represents accumulated HOW-steps.\n\nWho: African populations. Clothing technology travels with the Out of Africa migrations.",
    imagePlaceholder: "Early clothing made from animal hides"
  },
  {
    id: "pinnacle-point",
    date: "~164,000 years ago",
    title: "Pinnacle Point (South Africa)",
    tags: [
      "expansion",
      "tech"
    ],
    summary: "The sea becomes a resource.",
    content: "Humans at Pinnacle Point develop something new: systematic coastal exploitation. Shellfish harvesting. Heat-treated stone tools—silcrete deliberately heated to make it easier to knap. This requires understanding cause and effect across time, planning ahead, teaching techniques.\n\nThis is HOW-capacity deepening. Not yet symbolic thought, but sophisticated mechanism: \"If I heat this stone, then cool it, it will flake better.\" The cognitive infrastructure for sequential reasoning is being exercised. The coast also provides stable calories, freeing cognitive resources from constant survival pressure. Abundance creates space for what comes next.",
    imagePlaceholder: "Pinnacle Point coastal caves with shellfish remains and heat-treated tools"
  },
  {
    id: "heat-treatment-stone",
    date: "~164,000 years ago",
    title: "Heat Treatment of Stone",
    tags: [
      "tech",
      "cognitive",
      "gain"
    ],
    summary: "Fire meets lithics.",
    content: "At Pinnacle Point, humans deliberately heat silcrete stone before knapping it. The heat transforms the stone's crystalline structure, making it easier to flake with greater control. This requires precise temperature management—too cool and nothing changes, too hot and the stone shatters.\n\nThis is process knowledge: understanding that materials can be transformed, not just shaped. The stone you start with is not the stone you work with. Fire isn't just for cooking and warmth—it's an industrial tool. This insight will take 150,000 years to reach metallurgy, but the conceptual seed is planted here.\n\nWho: South African coastal populations. The technique appears, disappears, and reappears—suggesting either independent reinvention or fragile transmission.",
    imagePlaceholder: "Heat treatment of silcrete stone tools"
  },
  {
    id: "blake-excursion",
    date: "~120,000 years ago",
    title: "Blake Geomagnetic Excursion",
    tags: [
      "external",
      "climate"
    ],
    summary: "Field instability continues.",
    content: "The Blake excursion—another significant weakening of Earth's magnetic field. This event occurs during the Eemian interglacial, a warm period when early Homo sapiens were making their first attempts to leave Africa.\n\nThe correlation between magnetic events and human dispersal attempts is intriguing. The Blake excursion coincides roughly with the timing of the first Out of Africa attempt (~120,000 ya). Whether increased cosmic radiation during magnetic weakening affects human biology, climate, or both—or whether the correlation is coincidental—remains an open question. But the pattern of magnetic instability punctuating human evolution is now established.",
    imagePlaceholder: "Magnetic field lines during Blake excursion"
  },
  {
    id: "systematic-hunting",
    date: "~135,000 years ago",
    title: "Systematic Hunting Strategies",
    tags: [
      "tech",
      "cognitive"
    ],
    summary: "The coordinated kill.",
    content: "Evidence of organized hunting increases: kill sites with multiple animals, strategic landscape use (driving animals toward cliffs or water), possible evidence of fire drives. This isn't opportunistic scavenging—it's planned extraction.\n\nCoordinated hunting requires communication, role assignment, prediction of animal behavior, and trust that others will perform their function. The hunting party is an organization—the first team-based problem-solving at scale. Each member's HOW must integrate with others' HOW. The individual hunter is capable; the hunting party is formidable.\n\nWho: Multiple populations across Africa. Neanderthals in Europe develop equally sophisticated ambush hunting.",
    imagePlaceholder: "Coordinated hunting scene with multiple hunters"
  },
  {
    id: "first-burials",
    date: "~130,000 years ago",
    title: "First Burials (Qafzeh, Skhul caves)",
    tags: [
      "expansion",
      "cognitive"
    ],
    summary: "Death becomes a problem requiring response.",
    content: "Burial is the first evidence that WHAT (death) demands WHY (what does it mean?). Bodies positioned deliberately. Ochre applied. Something persists—the first intuition of the +1.\n\nAt Qafzeh Cave in Israel, a child is buried with deer antlers placed on the body. At Skhul, bodies are positioned with care, some with grave goods. These aren't disposal—they're ritual. The dead matter. Their disposition matters. Something is being communicated, preserved, honored.\n\nThis is the earliest evidence of death-as-concept rather than death-as-event. The body is not simply abandoned or consumed—it is treated according to pattern. Pattern implies meaning. Meaning implies the first stirrings of WHY-capacity.",
    imagePlaceholder: "Archaeological site showing deliberate burial with ochre remains"
  },
  {
    id: "first-out-of-africa",
    date: "~120,000 years ago",
    title: "First Out of Africa Attempt",
    tags: [
      "expansion",
      "migration"
    ],
    summary: "The door opens, then closes.",
    content: "During a wet period, the Sahara greens and the Levantine corridor opens. Humans push north into the Near East—the Qafzeh and Skhul populations. For a time, Homo sapiens and Neanderthals occupy adjacent territories.\n\nThen climate shifts. The corridor closes. The northern populations either die out or are absorbed. The expansion fails—not from lack of capability but from environmental gate-keeping. This is the first lesson: movement requires both capacity AND conditions. The HOW was sufficient; the context wasn't. The successful Out of Africa will wait another 50,000 years, and it will require something the first attempt lacked—cognitive tools for adapting to anything.",
    imagePlaceholder: "Map showing Levantine corridor and early human migration routes"
  },
  {
    id: "eemian-interglacial",
    date: "~115,000 years ago",
    title: "Eemian Interglacial Peak",
    tags: [
      "climate"
    ],
    summary: "A window of warmth.",
    content: "The Eemian interglacial reaches its peak—global temperatures slightly warmer than today, sea levels 6-9 meters higher. Hippos in the Thames. Forests where tundra will return. This is the climate window that enabled the first Out of Africa attempt.\n\nBut interglacials are temporary. The warmth is a pause, not a destination. Within 10,000 years, ice will advance again. The lesson encoded in the bones of failed expansions: climate is the gate. Populations that cannot adapt to shifting conditions do not persist. The Eemian warmth is a stress test—those who thrive in abundance must also survive scarcity. Structure preservation requires flexibility, not just optimization for current conditions.",
    imagePlaceholder: "Eemian landscape with warm climate fauna"
  },
  {
    id: "beads-ochre",
    date: "~100,000 years ago",
    title: "Beads and Ochre (Blombos Cave)",
    tags: [
      "expansion",
      "cognitive",
      "gain"
    ],
    summary: "Identity exists.",
    content: "Self-decoration implies self-concept. The beads are not functional—they are symbolic. \"I am here. I am distinct. I can be marked.\" This is proto-WHAT capacity: the ability to hold an abstraction (identity) without immediate resolution.\n\nAt Blombos Cave, marine shell beads are found—perforated, strung, worn. The shells were transported from the coast, selected for specific properties, modified with intent. This is decoration: communication through adornment. \"I am part of this group.\" \"I have achieved this status.\" \"I choose to present myself this way.\"\n\nIdentity as concept. Self as object of attention. The foundations of symbolic thought emerging.",
    imagePlaceholder: "Shell beads and ochre pieces from Blombos Cave"
  },
  {
    id: "stillbay-tradition",
    date: "~100,000 years ago",
    title: "Stillbay Tradition (South Africa)",
    tags: [
      "tech",
      "lost"
    ],
    summary: "The bifacial renaissance.",
    content: "A new tool tradition emerges in South Africa: Stillbay. Characterized by finely made bifacial points—worked on both sides with pressure flaking, thin and symmetric. These require exceptional skill: one mistake ruins hours of work.\n\nStillbay points are over-engineered for pure function. A simpler point kills just as effectively. The care invested suggests either aesthetic standards (doing it right matters beyond utility) or social signaling (my points demonstrate my skill/status). HOW-capacity is developing internal standards—quality beyond necessity.\n\nWho: South African populations, concentrated in the southern Cape.\n\nLost: Stillbay disappears from the record around ~70,000 years ago. The tradition ends. Whether through population collapse, cultural shift, or replacement by other techniques—the knowledge stops transmitting. Technology is fragile.",
    imagePlaceholder: "Stillbay bifacial points with fine pressure flaking"
  },
  {
    id: "bone-tool-industry",
    date: "~90,000 years ago",
    title: "Bone Tool Industry",
    tags: [
      "tech",
      "gain"
    ],
    summary: "New material, new possibilities.",
    content: "Systematic bone tool production intensifies. Bone awls, points, possibly needles. Bone behaves differently than stone—it can be carved, ground, polished, shaped incrementally rather than through fracture.\n\nWorking bone requires different mental models than working stone. Stone knapping is subtractive and irreversible—each strike removes material permanently. Bone working allows additive refinement—grinding, polishing, adjustment. This is a different relationship to material: patient shaping rather than decisive striking. The cognitive mode shifts.\n\nWho: African populations initially, spreading globally with migration.",
    imagePlaceholder: "Bone awls and points from early production"
  },
  {
    id: "aterian-culture",
    date: "~82,000 years ago",
    title: "Aterian Culture (North Africa)",
    tags: [
      "expansion",
      "tech"
    ],
    summary: "Tools with intention.",
    content: "Across North Africa, a new tool tradition emerges: the Aterian. Distinctive tanged points—stones shaped with a stem for hafting onto wooden shafts. Probably projectile weapons: spears thrown rather than thrust, perhaps the first arrows.\n\nThis is HOW-capacity reaching a new threshold. Composite tools require holding multiple steps in mind: shape the point, shape the tang, prepare the shaft, bind them together. The tool exists in imagination before it exists in hand. The Aterian also spreads across vast distances—from Morocco to Egypt—suggesting either population movement or idea transmission. Either way: connection across space, knowledge persisting across time. Proto-networks forming.",
    imagePlaceholder: "Aterian tanged points and hafted spear reconstruction"
  },
  {
    id: "geometric-patterns",
    date: "~77,000 years ago",
    title: "Geometric Patterns",
    tags: [
      "expansion",
      "cognitive",
      "gain"
    ],
    summary: "Abstract symbol manipulation.",
    content: "The marks on ochre blocks at Blombos are not representational—they are pure pattern. The brain can now manipulate symbols divorced from referents. This is the cognitive infrastructure for language, mathematics, religion.\n\nCrosshatched lines. Repeated geometric motifs. These are not pictures of things—they are pure abstraction. Pattern for pattern's sake. The same cognitive capacity that will eventually produce writing, mathematics, and musical notation is here in embryonic form.\n\nThe question: are these meaningful marks or idle doodling? The answer: it doesn't matter. The capacity to make systematic abstract marks—whether meaningful to their makers or not—demonstrates symbolic cognition. The hardware is online, even if the full software hasn't loaded.",
    imagePlaceholder: "Engraved ochre block with geometric crosshatch patterns"
  },
  {
    id: "toba-eruption",
    date: "~74,000 years ago",
    title: "Toba Eruption (Possible Bottleneck)",
    tags: [
      "collapse",
      "external",
      "climate"
    ],
    summary: "Global volcanic winter.",
    content: "The Toba supervolcano erupts in Sumatra—one of the largest volcanic events in the past 2 million years. Approximately 2,800 cubic kilometers of material ejected. Global temperatures may have dropped 3-5°C for years. Volcanic winter.\n\nHuman population potentially reduced to 10,000-30,000 individuals. This is controversial—some genetic evidence supports a severe bottleneck, archaeological evidence is more ambiguous. But if it occurred, it was a selection event—those who survived had the cognitive flexibility to adapt to catastrophic environmental shift.\n\nFirst \"Hammerfall\" in human experience? The sky darkens. The world changes. Some survive. The bottleneck hypothesis suggests that all humans alive today descend from a small population that made it through this filter. Survival of the adaptable.",
    imagePlaceholder: "Volcanic eruption with ash cloud darkening the sky"
  },
  {
    id: "howiesons-poort",
    date: "~71,000 years ago",
    title: "Howiesons Poort Industry",
    tags: [
      "tech",
      "lost"
    ],
    summary: "Geometric precision.",
    content: "Following Stillbay's disappearance, a new tradition emerges in South Africa: Howiesons Poort. Characterized by geometric backed tools—crescent shapes, trapezoids—designed for hafting into composite weapons. Small, standardized, efficient.\n\nThis is modular thinking. Instead of one specialized tool, create small interchangeable components that can be combined into different configurations. A broken point can be replaced without remaking the entire spear. Standardization emerges: shapes consistent enough to be interchangeable. The first steps toward industrial logic.\n\nWho: South African populations. Howiesons Poort shows remarkable standardization across sites—suggesting either tight cultural transmission or shared templates.\n\nLost: Like Stillbay before it, Howiesons Poort disappears around ~60,000 years ago. Two sophisticated traditions, both gone. South African stone tool technology actually regresses for a period. Progress is not guaranteed.",
    imagePlaceholder: "Howiesons Poort geometric backed tools"
  },
  {
    id: "out-of-africa-success",
    date: "~70,000 years ago",
    title: "Out of Africa (Successful Migration)",
    tags: [
      "transition",
      "migration",
      "expansion"
    ],
    summary: "The survivors spread.",
    content: "After Toba's potential bottleneck, a population begins the migration that will populate the world. They carry with them the genetic diversity that all non-African humans will inherit. One lineage. One departure. Everyone outside Africa descends from this moment.\n\nWhy did this attempt succeed where others failed? Several factors converge: climate (another wet period opens corridors), technology (coastal adaptation enables movement along shorelines), demography (population pressure in Africa), and possibly cognition (accumulated cultural complexity provides adaptive flexibility). The coastal route hypothesis suggests humans moved along shorelines—exploiting marine resources, following the coast from Africa through Arabia to India to Southeast Asia.\n\nThe successful migration isn't a single event but a process spanning thousands of years and multiple routes. But the genetic signature is clear: a founder effect, a small population expanding into vast empty territories.",
    imagePlaceholder: "Map showing successful Out of Africa migration routes"
  },
  {
    id: "south-african-regression",
    date: "~65,000 years ago",
    title: "The South African Technological Regression",
    tags: [
      "collapse",
      "lost"
    ],
    summary: "Progress reversed.",
    content: "After 40,000 years of increasing sophistication—Stillbay, Howiesons Poort, bone tools, backed blades—South African technology simplifies. Cruder tools. Less standardization. The elaborate traditions vanish.\n\nWhy? Possibly population collapse (smaller groups can't maintain specialized knowledge). Possibly environmental shift (resources changed, old techniques became irrelevant). Possibly cultural discontinuity (traditions failed to transmit). The lesson: technology requires population density, transmission networks, and continuous practice. Lose any element and capability degrades. HOW-knowledge is not automatically preserved. It must be actively maintained.\n\nWho: This affects South African populations specifically. Other regions continue on different trajectories.",
    imagePlaceholder: "Comparison of sophisticated vs simplified stone tools"
  },
  {
    id: "denisovans",
    date: "~65,000 years ago",
    title: "Denisovans",
    tags: [
      "parallel",
      "cognitive"
    ],
    summary: "Another branch, another mind.",
    content: "In the Altai Mountains, another human lineage thrives: the Denisovans. Known primarily from DNA extracted from finger bones and teeth, they remain mysterious—but the genetics tell a story. They interbred with Neanderthals. They interbred with Homo sapiens. Modern Melanesians carry up to 6% Denisovan DNA.\n\nThis is another parallel experiment in consciousness. Like Neanderthals, Denisovans had the hardware for complex cognition. Like Neanderthals, they developed sophisticated tool traditions. The question that haunts all parallel lineages: what did they lack that we possessed? Or was it simply contingency—the wrong place when the climate shifted, the wrong population density when the bottleneck hit? The +1 persists in their genes, woven into us. They are not entirely gone.",
    imagePlaceholder: "Denisova Cave and reconstructed Denisovan appearance"
  },
  {
    id: "neanderthal-art",
    date: "~65,000 years ago",
    title: "Neanderthal Cave Art (Spain)",
    tags: [
      "parallel",
      "cognitive"
    ],
    summary: "They weren't just us.",
    content: "In caves across Spain, art predating Homo sapiens arrival in Europe. Hand stencils. Red geometric marks. Dated to at least 65,000 years ago—20,000 years before modern humans reached Western Europe. This is Neanderthal symbolic behavior.\n\nThe implications are profound. Neanderthals independently developed symbolic capacity. They weren't just mimicking Sapiens—they created abstract representations on their own. The cognitive potential for WHY-capacity existed in multiple human lineages. Neanderthals were not \"missing\" something we had; they were on a parallel path.\n\nThe question shifts: why did their line end and ours continue? Not cognitive deficiency—the art proves that. Perhaps population dynamics, disease exposure, climate timing, or simply contingency. Multiple paths to symbolic thought existed. Only one persists.",
    imagePlaceholder: "Neanderthal hand stencil from Spanish cave"
  },
  {
    id: "australia-arrival",
    date: "~65,000 years ago",
    title: "Arrival in Australia",
    tags: [
      "expansion",
      "migration",
      "tech"
    ],
    summary: "The first deliberate crossing.",
    content: "Humans reach Australia. This requires crossing the Wallace Line—open ocean, out of sight of land. Even at lowest sea levels, the journey demanded watercraft, navigation, and the decision to launch into the unknown.\n\nThis is the first unambiguous evidence of WHAT-capacity in action: the ability to imagine what cannot be seen, to hold possibility without resolution, to act on faith in structure not yet encountered. No other hominin crossed the Wallace Line. Neanderthals, Denisovans, Homo erectus—all stopped at water's edge. Sapiens built boats and pushed into the void.\n\nRecent dating pushes Australian arrival back to ~65,000 ya, earlier than previously thought. This means the cognitive capacity for open-ocean navigation existed before the Upper Paleolithic \"revolution.\" The arrival in Australia is proof that something had changed. Not yet the full WHY-brain activation of Laschamp, but the preconditions: imagination sufficient to conceive of elsewhere, social coordination sufficient to attempt it together.",
    imagePlaceholder: "Ancient watercraft crossing to Australia, Wallace Line map"
  },
  {
    id: "watercraft",
    date: "~65,000 years ago",
    title: "Watercraft",
    tags: [
      "tech",
      "gain"
    ],
    summary: "The ocean crossed.",
    content: "Humans reach Australia, requiring sea crossings of 90+ kilometers—out of sight of land. This demands watercraft: rafts, boats, some constructed vessel. No direct evidence survives (wood doesn't preserve), but the crossing is proof.\n\nWatercraft construction is HOW-capacity at a new scale: large structures, multiple materials, understanding of buoyancy and stability. Navigation requires reading currents, stars, wind. The decision to launch requires WHAT-capacity (imagining unseen destinations) integrated with HOW (the mechanism to reach them). This is the first technology that makes the impossible possible—humans cannot swim 90 kilometers, but humans with boats can cross oceans.\n\nWho: Coastal populations moving through Island Southeast Asia to Sahul (Australia/New Guinea).",
    imagePlaceholder: "Reconstructed prehistoric watercraft"
  },
  {
    id: "music-art-tools",
    date: "~50,000 years ago",
    title: "Music, Figurative Art, Complex Tools",
    tags: [
      "expansion",
      "cognitive",
      "tech"
    ],
    summary: "The Upper Paleolithic begins early.",
    content: "Bone flutes. First unambiguous representational art. Complex multi-component tools. The Upper Paleolithic \"revolution\" is underway, though it will accelerate dramatically after Laschamp.\n\nAt Hohle Fels (Germany), a bone flute dated to ~40,000 ya, but the tradition likely extends earlier. Music is pattern in time—structured sound, rhythm, melody. It serves no survival function yet emerges universally. Music is WHY-capacity in auditory form: meaning encoded in temporal sequence.\n\nFigurative art—representations of animals, humans, abstract concepts—appears across multiple sites. The Lion-Man of Hohlenstein-Stadel (~40,000 ya) depicts a human-lion hybrid: pure imagination, an entity that doesn't exist, carved in ivory. This is WHAT-capacity crystallized: holding something impossible in mind long enough to render it in permanent form.\n\nThe narrative capacity emerges—the ability to tell stories, to sequence events, to project into future and past. WHY-capacity is developing but not yet dominant.",
    imagePlaceholder: "Ancient bone flute and early figurative carved art"
  },
  {
    id: "projectile-revolution",
    date: "~50,000 years ago",
    title: "The Projectile Revolution",
    tags: [
      "tech",
      "gain"
    ],
    summary: "Death at distance.",
    content: "Spear-throwers (atlatls) and possibly early bows emerge. The ability to kill at distance transforms hunting and warfare. An atlatl extends the arm's length, multiplying velocity. A bow stores energy mechanically, releasing it on demand.\n\nThis is stored energy technology—HOW that accumulates force over time and releases it instantaneously. The physics are sophisticated: leverage, elastic potential, aerodynamics. Projectile weapons also change social dynamics: a weaker individual with a bow can kill a stronger individual with a club. Technology as equalizer. Technology as force multiplier. The implications will echo for 50,000 years.\n\nWho: Multiple populations independently develop projectile weapons. By 20,000 ya, they're universal.",
    imagePlaceholder: "Atlatl and early projectile weapons"
  },
  {
    id: "bone-needles",
    date: "~50,000 years ago",
    title: "Bone Needles",
    tags: [
      "tech",
      "gain"
    ],
    summary: "Tailored survival.",
    content: "Fine bone needles with eyes appear—enabling stitched clothing. Not just draped hides but fitted garments: sleeves, hoods, boots. Tailored clothing is dramatically more efficient than wrapped furs.\n\nThe needle is a small tool with enormous implications. Fitted clothing enables Arctic survival. It allows specialization: different garments for different conditions. It creates fashion: clothes as identity marker. The needle requires exceptional fine motor control and precision manufacturing—the eye must be drilled without breaking the bone. Small technology, civilization-enabling consequences.\n\nWho: Widespread across Eurasia by 40,000 ya. Essential for northern expansion.",
    imagePlaceholder: "Bone needles with eyes for thread"
  },
  {
    id: "neanderthal-tech-extinction",
    date: "~45,000 years ago",
    title: "Neanderthal Technology at Extinction",
    tags: [
      "parallel",
      "lost"
    ],
    summary: "What was lost.",
    content: "At their end, Neanderthals possessed: Levallois technique, hafted tools, birch tar adhesives, controlled fire, clothing (probable), symbolic objects (feathers, pigments), medicinal plant use, and possibly watercraft (Mediterranean island evidence).\n\nWhen the last Neanderthals died—around 40,000 years ago—this technological lineage ended. Some knowledge transferred through interbreeding and contact. Most did not. An entire branch of human HOW-development terminated. The birch tar technique. Specific hunting strategies adapted to European megafauna. Unknown innovations we'll never recover.\n\nLost forever: We cannot know what Neanderthal technology we lost because it left no practitioners and often no trace. Estimated: 300,000 years of accumulated HOW-knowledge, gone.",
    imagePlaceholder: "Neanderthal tools and artifacts before extinction"
  },
  {
    id: "laschamp-approach",
    date: "~43,000 years ago",
    title: "Approaching Laschamp",
    tags: [
      "external",
      "transition"
    ],
    summary: "The field begins to weaken.",
    content: "Earth's magnetic field begins its decline toward the Laschamp excursion. Over the next 2,000 years, field strength will drop to approximately 5% of normal. The magnetosphere—Earth's shield against cosmic radiation—is failing.\n\nAs the field weakens, cosmic ray flux increases. Atmospheric chemistry changes. Aurora borealis becomes visible at equatorial latitudes. The sky itself transforms—stable patterns that had persisted for generations begin to shift.\n\nFor humans at this moment, the world is about to change in ways their HOW-capacity cannot process. Mechanism provides no explanation for skies that glow, for patterns that shift without cause. The stage is set for WHY to emerge—not as luxury but as necessity.\n\nThe hardware has existed for 250,000 years. The software is about to activate.",
    imagePlaceholder: "Weakening magnetic field visualization approaching Laschamp"
  }
],
	// Links format: { "1": { url: "...", tag: "tech" }, "2": { url: "..." } }
	// Tag is optional - only add if relevant (e.g., "tech", "cognitive", "climate", etc.)
	links: {
		// Example entries (replace with real links):
		// "1": { url: "https://example.com/article1", tag: "tech" },
		// "2": { url: "https://example.com/article2" }
    "1": { url: "https://en.wikipedia.org/wiki/Control_of_fire_by_early_humans", tag: "tech" },
    "2": { url: "https://en.wikipedia.org/wiki/Behavioral_modernity, https://en.wikipedia.org/wiki/Jebel_Irhoud" },
    "3": { url: "https://en.wikipedia.org/wiki/Ochre, https://en.wikipedia.org/wiki/Middle_Stone_Age, https://en.wikipedia.org/wiki/Lupemban_culture", tag: "tech" },
    "4": { url: "https://en.wikipedia.org/wiki/Levallois_technique", tag: "tech"},
    "5": { url: "https://en.wikipedia.org/wiki/Hafting", tag: "tech"},
	}
};
