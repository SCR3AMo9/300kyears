import type { EraSummary } from './types';

export const eraSummaries: Record<string, EraSummary> = {
	'era-1': {
		discovered: '<0.01%',
		recoverable: '0.1-1%',
		permanentlyLost: '99%+',
		whyLost: [
			'No writing, no durable records',
			'Knowledge was embodied—in brains, in hands, in practice',
			'When a lineage died, their knowledge died with them',
			'Organic materials (wood tools, baskets, clothing) decompose completely',
			'Stone tools survive but tell us almost nothing about meaning, language, social structure',
			'Glaciers ground sites to dust. Erosion scattered remains across continents.'
		],
		whatsRecoverable: [
			'More stone tool assemblages (tells us HOW, not WHY)',
			'Ancient DNA from bones and sediment (population movements, interbreeding)',
			'Sealed caves with preserved organics (rare)',
			'Underwater coastal sites (expensive but possible)'
		],
		whatsGoneForever: [
			'Languages. Every single one.',
			'Songs, stories, myths, beliefs',
			'Social structures, kinship systems',
			'The actual experience of being human then',
			'99.99% of the people who ever lived left zero trace'
		]
	},
	'era-2': {
		discovered: '<0.1%',
		recoverable: '1-5%',
		permanentlyLost: '95-99%',
		whyLost: [
			'Cave art survives in sealed environments',
			'More sophisticated burials with grave goods',
			'Larger populations = more sites',
			'Some symbolic systems repeated across regions (Venus figurines)'
		],
		whatsRecoverable: [
			'Underwater archaeology of Ice Age coastlines (major potential)',
			'More cave systems (LiDAR, ground-penetrating radar)',
			'Ancient DNA revolution ongoing—population histories',
			'Sealed rock shelters in arid regions'
		],
		whatAICouldFind: [
			'Automated survey of continental shelves',
			'Pattern recognition across known sites to predict unknown ones',
			'Micro-excavation of sediment layers (robotic precision)',
			'Real-time DNA/protein analysis during excavation'
		],
		whatsGoneForever: [
			'Oral traditions (no writing)',
			'The meaning of the cave art (we see it, can\'t read it)',
			'Music (bone flutes survive; what they played—gone)',
			'The Laschamp experience itself—what it felt like when the sky turned red',
			'Neanderthal knowledge (entire species\' accumulated wisdom—zero)'
		]
	},
	'era-3': {
		discovered: '1-2%',
		recoverable: '10-20%',
		permanentlyLost: '80-90%',
		whyLost: [
			'Permanent settlements = concentrated remains',
			'Tells are visible on the surface (thousands identified, not excavated)',
			'Mud brick preserves impressions, plant remains, seeds',
			'More burials with context',
			'Proto-writing systems (tokens, symbols) starting to appear'
		],
		whatsRecoverable: [
			'Göbekli Tepe is 5% excavated. Dozens of similar sites likely exist.',
			'Fertile Crescent has thousands of known, unexcavated tells',
			'Sahara\'s Green Period sites—under sand, accessible',
			'Amazonian settlements (LiDAR revealing geometric earthworks)',
			'Lake-bottom sites in Anatolia (preserved organics)'
		],
		whatAICouldFind: [
			'Satellite/LiDAR survey of entire Fertile Crescent',
			'Robotic excavation of deep tells (currently too expensive)',
			'Ground-penetrating radar mapping before digging',
			'Automated flotation and seed analysis'
		],
		whatsGoneForever: [
			'Still pre-literate, so: languages, detailed beliefs, social rules',
			'The transition moment itself—how did someone decide to plant seeds?',
			'Oral histories that explained the temples',
			'The names of the gods at Göbekli Tepe',
			'Why they buried it deliberately'
		]
	},
	'era-4': {
		discovered: '5-10%',
		recoverable: '30-50%',
		permanentlyLost: '50-70%',
		whyLost: [
			'Writing begins—now we can recover actual thought, not just objects',
			'But early writing is administrative—grain counts, not philosophy',
			'Literature comes later'
		],
		whatsRecoverable: [
			'Thousands of cuneiform tablets sit untranslated in museums',
			'Sumerian cities—most unexcavated',
			'Indus Valley script (if we crack it, entire civilization opens up)',
			'Egyptian delta—underwater/waterlogged but preserves organics',
			'Akkadian/Babylonian archives barely scratched'
		],
		whatAICouldFind: [
			'Machine translation of cuneiform (already starting)',
			'Pattern recognition to crack Indus Valley script',
			'Robotic excavation of waterlogged delta sites',
			'3D reconstruction of fragmentary tablets'
		],
		whatsGoneForever: [
			'Oral traditions that contextualized the writing',
			'Early versions of myths (what we have is late copies)',
			'Indus Valley meaning without script decipherment',
			'Administrative records on perishable materials (most of them)',
			'The 95% of people who never interacted with writing'
		]
	},
	'era-5': {
		discovered: '10-15%',
		recoverable: '35-50%',
		permanentlyLost: '50-60%',
		whyLost: [
			'More extensive writing systems',
			'Palace archives beginning to preserve literature',
			'But most written on perishable materials'
		],
		whatsRecoverable: [
			'Hittite archives (partially excavated, much remains)',
			'Ugaritic texts (breakthrough for understanding Canaanite religion)',
			'Egyptian temple libraries (many temples unexcavated)',
			'Mycenaean palace archives beyond Linear B',
			'Shang oracle bones (farmers still finding them)'
		],
		whatAICouldFind: [
			'Complete survey of Anatolian sites',
			'Deep excavation of Egyptian temple complexes',
			'Underwater archaeology of Bronze Age shipwrecks (trading knowledge)',
			'Decipherment assistance for fragmentary scripts'
		],
		whatsGoneForever: [
			'Early Vedic tradition (oral for centuries—what was lost before writing?)',
			'The actual Abraham, Moses, Zoroaster (if historical)—their original words',
			'Phoenician literature (almost nothing survives)',
			'Women\'s knowledge traditions (systematically unrecorded)'
		]
	},
	'era-6': {
		discovered: '10-15%',
		recoverable: '25-40%',
		permanentlyLost: '60-75%',
		whyLost: [
			'Collapse periods destroy disproportionately',
			'When palace economies fall: scribes die or disperse',
			'Writing systems lost (Linear B—gone for 400 years)',
			'Records stop being created',
			'Existing records not maintained',
			'Knowledge that survived orally—we have no access'
		],
		whatsRecoverable: [
			'Sea Peoples origin sites (somewhere in western Mediterranean)',
			'Destruction layer archaeology (tells us what was lost)',
			'Underwater harbors (many Bronze Age ports now submerged)',
			'Transitional period sites (how did writing return?)'
		],
		whatAICouldFind: [
			'Systematic survey of Mediterranean coastal sites',
			'Pattern analysis of destruction layers across regions',
			'Underwater archaeology automation',
			'Cross-referencing surviving texts for lost information'
		],
		whatsGoneForever: [
			'Four centuries of Greek Dark Age—almost no written records',
			'The oral traditions that bridged the gap (Homer preserves fragments)',
			'Technological knowledge that had to be reinvented',
			'Administrative systems, trade networks, diplomatic records',
			'What caused the collapse (we still argue about this)'
		]
	},
	'era-7': {
		discovered: '1-5% (texts), 15-20% (sites)',
		recoverable: '20-40%',
		permanentlyLost: '60-80%',
		whyLost: [
			'The golden zone for recovery—best ratio of what existed vs. what we could find',
			'~95% of Greek tragedies lost (32 survive of 300+)',
			'~97.5% of Greek historians lost',
			'Aristotle\'s dialogues (his "popular" works)—all gone',
			'Most pre-Socratic philosophy (fragments only)',
			'Library of Alexandria contents'
		],
		whatsRecoverable: [
			'Herculaneum scrolls—600+ found, thousands more buried. AI can now read carbonized papyrus.',
			'Oxyrhynchus papyri—500,000+ fragments, 80% unpublished. New texts appearing yearly.',
			'Desert monastery libraries—Syriac, Coptic, Arabic manuscripts with Greek translations',
			'Palimpsests—Multispectral imaging revealing erased texts',
			'Central Asian caves—Dunhuang yielded 40,000+ manuscripts; more caves exist'
		],
		whatAICouldFind: [
			'Reading carbonized scrolls without unrolling (already happening)',
			'Pattern matching across manuscript fragments',
			'Reconstructing texts from quotations in other works',
			'Translating unpublished papyri at scale',
			'Virtual excavation of still-buried Herculaneum villas'
		],
		whatsGoneForever: [
			'Oral teaching traditions (Socrates wrote nothing—Plato\'s version is Plato\'s)',
			'Performance context (Greek plays were musical theater—music lost)',
			'Texts that were never copied even once',
			'Works actively suppressed and burned',
			'The debates, arguments, counterarguments that didn\'t make it to text'
		]
	},
	'era-8': {
		discovered: '10-20% (texts), 20-25% (sites)',
		recoverable: '30-50%',
		permanentlyLost: '50-60%',
		whyLost: [
			'The selective copying problem',
			'Monks copied what fit Christian curricula',
			'What didn\'t fit—not copied, dies',
			'This is active loss through selection, not accident'
		],
		whatsRecoverable: [
			'Palimpsests (we keep finding erased texts under medieval manuscripts)',
			'Coptic and Syriac archives (less picked over than Greek/Latin)',
			'Nag Hammadi-style caches (sealed jars in Egyptian desert)',
			'Roman archaeological sites under modern cities',
			'Underwater harbors (Caesarea, Alexandria)'
		],
		whatAICouldFind: [
			'Palimpsest reading at scale (currently painstaking one-by-one)',
			'Cross-referencing quotations to reconstruct lost works',
			'Excavation under Rome, Constantinople (ground-penetrating radar)',
			'Marine archaeology automation'
		],
		whatsGoneForever: [
			'"Heretical" texts systematically destroyed',
			'Pagan philosophical traditions that weren\'t useful to Christians',
			'Gnostic diversity (Nag Hammadi is a fraction)',
			'Roman administrative archives (mostly not preserved)',
			'The losing side of theological debates'
		]
	},
	'era-9': {
		discovered: '30-40%',
		recoverable: '50-70%',
		permanentlyLost: '30-50%',
		whyLost: [
			'Two separate knowledge pools: Islamic/Eastern (better preserved, less studied) and European (heavily studied, selective)',
			'Islamic golden age texts understudied by Western scholars',
			'European copying was selective to Christian curriculum'
		],
		whatsRecoverable: [
			'Timbuktu manuscripts—300,000+ in private collections, deteriorating',
			'Islamic scientific texts—vast, understudied',
			'Central Asian archives—Silk Road trade records, multilingual texts',
			'Maya/Aztec hidden codices—oral traditions suggest more exist',
			'Chinese local archives—barely catalogued'
		],
		whatAICouldFind: [
			'Automated cataloguing of Islamic manuscript collections',
			'Translation at scale from Arabic, Persian, Ottoman Turkish',
			'Pattern matching to find hidden texts in private collections',
			'Preservation and digitization at speed'
		],
		whatsGoneForever: [
			'Pre-Columbian American libraries (deliberately burned)',
			'Mongol destruction of Baghdad\'s House of Wisdom',
			'Books that existed in single copies, burned in local fires',
			'Oral traditions of non-literate cultures',
			'Women\'s knowledge traditions (herbal medicine, midwifery—rarely written)'
		]
	},
	'era-10': {
		discovered: '50-70%',
		recoverable: '80-90%',
		permanentlyLost: '10-20%',
		whyLost: [
			'The printing press changes everything',
			'After ~1450, texts exist in multiple copies',
			'Harder to destroy completely',
			'Loss becomes exception, not rule'
		],
		whatsRecoverable: [
			'Archives exist but are overwhelming (Vatican: 85km of shelving)',
			'Private collections not yet catalogued',
			'Colonial records scattered across empires',
			'Scientific correspondence, notes, drafts',
			'Classified government documents (eventual declassification)'
		],
		whatAICouldFind: [
			'Automated archive processing at scale',
			'Handwriting recognition for manuscript collections',
			'Cross-referencing to find "lost" works hiding in plain sight',
			'Digitization of deteriorating paper records'
		],
		whatsGoneForever: [
			'Indigenous knowledge systems (colonialism actively destroyed)',
			'Slave narratives (oral, rarely recorded)',
			'Working class / peasant perspectives (rarely literate)',
			'Suppressed political movements (records destroyed by regimes)',
			'Personal correspondence that was never saved'
		]
	},
	'era-11': {
		discovered: '~90%',
		recoverable: '95-98%',
		permanentlyLost: '2-5% (but growing)',
		whyLost: [
			'The inversion: We don\'t have a loss problem. We have an abundance problem.',
			'Too much to process',
			'But digital decay is real: early websites gone, proprietary formats unreadable',
			'Social media platforms that shut down—data lost',
			'Personal digital archives—unorganized, will die with owners'
		],
		whatsRecoverable: [
			'Government archives (classified → declassified pipeline)',
			'Corporate records (as companies fail, archives surface)',
			'Digital archaeology (recovering old formats)',
			'Personal collections donated to institutions'
		],
		whatAICouldFind: [
			'Automated processing of massive digital archives',
			'Format conversion and recovery at scale',
			'Pattern recognition across distributed data sources',
			'Preservation of ephemeral content before platform death'
		],
		whatsGoneForever: [
			'Deleted digital content with no backups',
			'Encrypted data whose keys are lost',
			'Platforms that shut down without data export',
			'The context of digital communication (what did emojis mean in 2010?)',
			'Ephemeral content (Snapchat, stories, disappearing messages)'
		]
	}
};
