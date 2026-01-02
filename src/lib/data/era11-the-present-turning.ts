import type { Era } from './types';

export const thePresentTurning: Era = {
	id: 'era-11',
	number: 'XI',
	title: 'THE PRESENT TURNING      (1 AI PASS, Placeholder Content)',
	timespan: '~80 years ago - now',
	description: 'The sky is breaking again—not physically, but informationally. The question: what new WHY-frameworks will emerge? Will they be adequate to the challenge?',
	events: [
		{
			id: 'cold-war',
			date: '~75 years ago',
			title: 'Cold War Begins',
			type: 'tension',
			summary: 'The three-body problem at global scale, nuclear-armed.',
			content: `Capitalism vs. Communism. Both claim universal WHY: freedom and progress vs. equality and justice. The three-body problem at global scale, nuclear-armed. The orbit holds, barely.`,
			imagePlaceholder: 'Cold War confrontation: US and Soviet flags, nuclear missiles'
		},
		{
			id: 'vatican-ii',
			date: '~55 years ago (1962-1965)',
			title: 'Vatican II',
			type: 'adaptation',
			summary: 'The institutional WHY adapts to post-WWII reality.',
			content: `The Catholic Church modernizes. Mass in vernacular. Religious liberty affirmed. Outreach to other religions. The institutional WHY adapts to post-WWII reality.`,
			imagePlaceholder: 'Vatican II council in session'
		},
		{
			id: 'cultural-revolution-six-day-war',
			date: '~50 years ago',
			title: 'Cultural Revolution (China) / Six Day War',
			type: 'collision',
			summary: 'Systematic destruction and sacred geography under new control.',
			content: `In China: systematic destruction of traditional WHY-structures. Temples destroyed, monks killed, Confucian tradition attacked. Maoism as replacement religion.

In Israel/Palestine: Israel captures Jerusalem, West Bank, Gaza, Sinai, Golan. The conflict intensifies. Sacred geography under new control. Messianic movements emerge on multiple sides.`,
			imagePlaceholder: 'Red Guards destroying temple; Israeli soldiers at Western Wall'
		},
		{
			id: 'iranian-revolution',
			date: '~35 years ago (1979)',
			title: 'Iranian Revolution',
			type: 'expansion',
			summary: 'A counter-Enlightenment at state scale.',
			content: `Political Islam as active force. The Shia clerics take power. Religion not privatized but governing. A counter-Enlightenment at state scale.`,
			imagePlaceholder: 'Ayatollah Khomeini returning to Iran amid crowds'
		},
		{
			id: 'soviet-afghan-war',
			date: '~34 years ago (1979)',
			title: 'Soviet-Afghan War Begins',
			type: 'stress',
			summary: 'The seeds of future conflict planted.',
			content: `The seeds of future conflict planted. The mujahideen—backed by US, Saudi Arabia, Pakistan—will become Al-Qaeda, Taliban, the matrix of contemporary jihadism.`,
			imagePlaceholder: 'Mujahideen fighters in Afghan mountains'
		},
		{
			id: 'cold-war-ends',
			date: '~34 years ago (1989-1991)',
			title: 'End of Cold War',
			type: 'collapse',
			summary: '"The End of History"—but premature.',
			content: `The Soviet Union falls. Communism as competing WHY collapses. "The End of History"—liberal democracy triumphant. But the victory is premature. The vacuum left by communism's collapse fills with other things.`,
			imagePlaceholder: 'Berlin Wall falling with crowds celebrating'
		},
		{
			id: 'september-11',
			date: '~24 years ago (2001)',
			title: 'September 11, 2001',
			type: 'collapse',
			summary: 'HAMMERFALL-SCALE TRAUMA (for the US)',
			content: `Al-Qaeda attacks New York and Washington. The response: the "War on Terror"—two decades of warfare that kills hundreds of thousands, destabilizes regions, and ultimately fails to establish stable order.

The WHY-frameworks of both sides intensify. Jihadism becomes more extreme; American civil religion (nation as sacred cause) is deployed to justify perpetual war.`,
			imagePlaceholder: 'Twin Towers with smoke, first responders'
		},
		{
			id: 'arab-spring',
			date: '~15 years ago (2011)',
			title: 'Arab Spring',
			type: 'collapse',
			summary: 'The hope: democracy. The result (mostly): civil war.',
			content: `Mass protests across the Arab world. Tunisia, Egypt, Libya, Syria, Yemen—regimes fall or fight. The hope: democracy. The result (mostly): civil war, new authoritarianism.`,
			imagePlaceholder: 'Tahrir Square protests and Syrian civil war destruction'
		},
		{
			id: 'ai-social-media',
			date: '~10 years ago - now',
			title: 'Rise of AI / Social Media Polarization',
			type: 'hammerfall',
			summary: 'THE CYBER-LASCHAMP',
			content: `The information flood. The super-HOW machine emerges. The attention economy fragments meaning-making. Social media creates epistemic tribalism—each group with its own WHY, unable to communicate with others.

This is where we are. The sky is breaking again—not physically, but informationally. The range (infinite WHAT from the internet) without context (fragmenting WHY) produces paradox (confusion, polarization, despair).

The question: what new WHY-frameworks will emerge? Will they be adequate to the challenge? Will they help us hold the tension, or collapse us into one of the failure modes?

**The wheel turns. The +1 remains.**`,
			imagePlaceholder: 'Social media feeds fragmenting, AI neural networks, digital chaos and light'
		}
	],
	// Links format: { "1": { url: "...", tag: "tech" }, "2": { url: "..." } }
	links: {}
};
