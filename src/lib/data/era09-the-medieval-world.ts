import type { Era } from './types';

export const theMedievalWorld: Era = {
	id: 'era-9',
	number: 'IX',
	title: 'THE MEDIEVAL WORLD      (1 AI PASS, Placeholder Content)',
	timespan: '~1,400 - 690 years ago',
	description: 'Multiple three-body configurations compete and interact. Church provides WHY, Empire provides HOW, God provides WHAT.',
	events: [
		{
			id: 'sunni-shia',
			date: '~1,380 years ago (after 661 CE)',
			title: 'Sunni-Shia Split',
			type: 'fragmentation',
			summary: 'Political disagreement becoming theological.',
			content: `The succession dispute after Muhammad's death becomes permanent schism. Sunni: succession through community consensus. Shia: succession through Ali and his descendants.

This is political disagreement becoming theological. The WHY-frameworks diverge: different understandings of authority, of legitimate leadership, of history's meaning.`,
			imagePlaceholder: 'Map showing Sunni and Shia regions across Islamic world'
		},
		{
			id: 'islamic-golden-age',
			date: '~1,350 years ago (~750 CE)',
			title: 'Islamic Golden Age Begins',
			type: 'expansion',
			summary: 'HOW-explosion within WHY-framework.',
			content: `The Abbasid Caliphate centers at Baghdad. Translation movement: Greek philosophy, Persian science, Indian mathematics flow into Arabic. Algebra invented. Optics advanced. Medicine systematized.

This is HOW-explosion within WHY-framework. Islam provides the container; science provides the content. The three-body orbit is productive. Golden Age follows.`,
			imagePlaceholder: 'House of Wisdom in Baghdad with scholars translating texts'
		},
		{
			id: 'charlemagne',
			date: '~1,200 years ago (800 CE)',
			title: 'Charlemagne Crowned',
			type: 'expansion',
			summary: 'The Medieval synthesis begins.',
			content: `The Pope crowns a barbarian king "Emperor of the Romans." The claim: Rome never fell, it transformed. The Carolingian Renaissance briefly flowers. The Medieval synthesis begins: Church provides WHY, Empire provides HOW, God provides WHAT.`,
			imagePlaceholder: 'Pope Leo III crowning Charlemagne in Rome'
		},
		{
			id: 'great-schism',
			date: '~1,050 years ago (1054 CE)',
			title: 'Great Schism',
			type: 'fragmentation',
			summary: 'Two Christianities.',
			content: `Catholic West and Orthodox East formally split. Different languages (Latin vs. Greek), different authority structures (Pope vs. Patriarchs), different emphases (filioque clause).

Two Christianities now—two different three-body configurations, each claiming to be the original.`,
			imagePlaceholder: 'Pope and Patriarch with excommunication documents'
		},
		{
			id: 'neo-confucianism',
			date: '~1,000 years ago',
			title: 'Song Dynasty Neo-Confucianism',
			type: 'expansion',
			summary: 'A comprehensive WHY-framework for Chinese civilization.',
			content: `Confucianism absorbs Buddhist and Taoist elements, systematizes metaphysics. The "Great Learning," "Doctrine of the Mean" become central. A comprehensive WHY-framework for Chinese civilization crystallizes.`,
			imagePlaceholder: 'Neo-Confucian scholars in Song Dynasty academy'
		},
		{
			id: 'first-crusade',
			date: '~926 years ago (1099 CE)',
			title: 'First Crusade',
			type: 'collision',
			summary: 'WHY-collision at military scale.',
			content: `Christian armies capture Jerusalem. This is WHY-collision at military scale: Christendom vs. Islam over sacred geography. The effect: centuries of intermittent warfare, cultural exchange, mutual influence. Neither WHY defeats the other.`,
			imagePlaceholder: 'Crusader knights entering Jerusalem'
		},
		{
			id: 'mongol-conquests',
			date: '~800 years ago (1206-1368 CE)',
			title: 'Mongol Conquests',
			type: 'stress',
			summary: 'The WHY-frameworks survive the HOW-destruction.',
			content: `The Mongols shatter the Abbasid Caliphate (1258), threaten Christendom, nearly destroy Chinese civilization. The largest contiguous land empire in history—but remarkably tolerant religiously. Mongols adopt the religions of the conquered rather than imposing their own.

The WHY-frameworks survive the HOW-destruction. Islam persists after Baghdad burns. Buddhism persists after China is conquered. The frameworks are more resilient than the structures.`,
			imagePlaceholder: 'Mongol army sacking Baghdad'
		},
		{
			id: 'scholasticism',
			date: '~750 years ago (Thomas Aquinas, ~1274)',
			title: 'Scholasticism Peak',
			type: 'expansion',
			summary: 'The Medieval synthesis reaches its apex.',
			content: `Aristotle rediscovered through Arabic transmission. Thomas Aquinas synthesizes faith and reason. The great cathedrals built. The Medieval synthesis reaches its apex: philosophy serves theology, reason serves faith, HOW serves WHY.

But the seeds of conflict are planted: if Aristotelian logic is valid, it can be applied to any question—including questions the Church would rather not answer.`,
			imagePlaceholder: 'Thomas Aquinas writing Summa Theologica with cathedral in background'
		},
		{
			id: 'black-death',
			date: '~690 years ago (1347 CE)',
			title: 'Black Death Begins',
			type: 'hammerfall',
			summary: 'The theodicy problem in acute form.',
			content: `Bubonic plague kills 30-60% of Europe's population. The theodicy problem in acute form: why would God permit this? The WHY-frameworks strain. Some responses:

Flagellants: We are being punished. More piety, more pain.
Jews blamed: Scapegoating as meaning-making.
Carpe diem: If death comes regardless, live now.
Reform pressure: The Church has failed. Something must change.

The Medieval synthesis begins to crack. The certainties no longer hold.`,
			imagePlaceholder: 'Plague doctor amid Black Death devastation'
		}
	],
	// Links format: { "1": { url: "...", tag: "tech" }, "2": { url: "..." } }
	links: {}
};
