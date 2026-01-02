import type { Era } from './types';

export const earlyModernity: Era = {
	id: 'era-10',
	number: 'X',
	title: 'EARLY MODERNITY      (1 AI PASS, Placeholder Content)',
	timespan: '~690 - 80 years ago',
	description: 'The scientific method emerges. HOW begins its long march to dominance. The question: if the universe is a machine, what role for God?',
	events: [
		{
			id: 'constantinople-falls',
			date: '~600 years ago (1453)',
			title: 'Ottoman Conquest of Constantinople',
			type: 'collapse',
			summary: 'The second Rome falls.',
			content: `The Byzantine Empire finally ends. The second Rome falls. Greek scholars flee west, bringing manuscripts that will fuel the Renaissance. The Eastern Christian heartland becomes Muslim.`,
			imagePlaceholder: 'Ottoman cannon breaching Constantinople walls'
		},
		{
			id: 'columbus',
			date: '~530 years ago (1492)',
			title: 'Columbus / Spanish Reconquista',
			type: 'expansion',
			summary: 'The provincialism of medieval Christianity becomes unsustainable.',
			content: `Spain unified, expels Jews and Muslims, reaches the Americas. Christendom expands globally. But it also encounters: indigenous religions in America, eventually Buddhism, Hinduism, Confucianism in Asia. The provincialism of medieval Christianity becomes unsustainable.`,
			imagePlaceholder: 'Columbus ships arriving in the Americas'
		},
		{
			id: 'reformation',
			date: '~508 years ago (1517)',
			title: 'Protestant Reformation',
			type: 'fragmentation',
			summary: 'WHY-democratization at mass scale.',
			content: `Luther's 95 Theses. The Church splits. Sola scriptura—the Bible alone, interpreted by the individual believer (in theory). The printing press spreads the Reformation faster than any previous religious movement.

This is WHY-democratization at mass scale. The priestly monopoly on meaning breaks definitively. The result: 150 years of religious warfare.`,
			imagePlaceholder: 'Luther nailing 95 Theses to church door'
		},
		{
			id: 'scientific-revolution',
			date: '~400 years ago',
			title: 'Scientific Revolution (Galileo, Newton)',
			type: 'expansion',
			summary: 'HOW begins its long march to dominance.',
			content: `Galileo condemned for heliocentrism. But the method spreads regardless. Newton's laws: the universe operates by mathematics, predictable, mechanical. HOW begins its long march to dominance.

The tension: if the universe is a machine, what role for God? The deism of the Enlightenment is one answer—God as clockmaker. But if God wound the clock and walked away, what's the point of prayer, of revelation, of religion?`,
			imagePlaceholder: 'Galileo with telescope and Newton with prism'
		},
		{
			id: 'enlightenment',
			date: '~300 years ago',
			title: 'Enlightenment Peak',
			type: 'expansion',
			summary: 'Reason as the measure of all things.',
			content: `Voltaire, Rousseau, Hume, Kant. Reason as the measure of all things. Religion subjected to rational critique. "Dare to know."

But the Enlightenment is double-edged. It produces both secular humanism and the Terror, both scientific medicine and industrial warfare, both constitutional democracy and totalitarian ideology.`,
			imagePlaceholder: 'Enlightenment salon with philosophers debating'
		},
		{
			id: 'revolutions',
			date: '~250 years ago',
			title: 'American and French Revolutions',
			type: 'expansion',
			summary: 'Political order remade on Enlightenment principles.',
			content: `Political order remade on Enlightenment principles. The American experiment separates church and state. The French Revolution tries to replace Christianity with the Cult of Reason. The results diverge.`,
			imagePlaceholder: 'Declaration of Independence signing and storming of Bastille'
		},
		{
			id: 'napoleon-defeat',
			date: '~210 years ago (1815)',
			title: 'Napoleon\'s Defeat',
			type: 'stress',
			summary: 'Romanticism as counter-Enlightenment.',
			content: `Romanticism as counter-Enlightenment. The recovery of myth, feeling, tradition. Religion doesn't die—it adapts. The 19th century is both secular advance and religious revival (Great Awakenings, missions movements, Mormon founding, Bahá'í founding).`,
			imagePlaceholder: 'Romantic painting of nature sublime and Napoleon\'s exile'
		},
		{
			id: 'darwin',
			date: '~165 years ago (1859)',
			title: 'Darwin (Origin of Species)',
			type: 'stress',
			summary: 'The deepest blow to traditional WHY since Copernicus.',
			content: `Evolution by natural selection. Life explains itself without purpose. The deepest blow to traditional WHY since Copernicus. The question: if humans are evolved animals, what happens to the soul, to sin, to salvation?

The responses fragment further: fundamentalism (reject Darwin), liberal theology (reinterpret), scientism (religion is done), neo-orthodoxy (preserve the core, concede the periphery).`,
			imagePlaceholder: 'Darwin\'s tree of life diagram and HMS Beagle'
		},
		{
			id: 'wwi',
			date: '~110 years ago (1914-1918)',
			title: 'World War I',
			type: 'hammerfall',
			summary: 'The Great War destroys 19th-century optimism.',
			content: `The Great War destroys the 19th-century optimism. Progress is not inevitable. Christian civilization can commit industrial slaughter. The Ottoman Empire falls. The map of the Middle East is redrawn by colonial powers.

The WHY-crisis: if Europe is Christian, and Europe did this, what is Christianity worth?`,
			imagePlaceholder: 'WWI trenches and devastated landscape'
		},
		{
			id: 'wwii',
			date: '~80 years ago (1945)',
			title: 'World War II / Atomic Age',
			type: 'hammerfall',
			summary: 'The theodicy problem in ultimate form.',
			content: `The Holocaust: industrial murder of six million Jews. Systematic, mechanized evil. The theodicy problem in ultimate form: where was God at Auschwitz?

Hiroshima and Nagasaki: humanity now has the power to end itself. HOW reaches its terrifying apex. The question: if we can destroy everything, should anything exist?

The founding of Israel: the ancient WHY-framework reconstitutes as modern nation-state. The return after 1,900 years. But also the Nakba—another people's catastrophe. The conflict continues.`,
			imagePlaceholder: 'Auschwitz gates and atomic bomb mushroom cloud'
		}
	],
	// Links format: { "1": { url: "...", tag: "tech" }, "2": { url: "..." } }
	links: {}
};
