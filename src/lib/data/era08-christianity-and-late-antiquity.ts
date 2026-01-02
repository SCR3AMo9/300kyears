import type { Era } from './types';

export const christianityAndLateAntiquity: Era = {
	id: 'era-8',
	number: 'VIII',
	title: 'CHRISTIANITY AND LATE ANTIQUITY      (1 AI PASS, Placeholder Content)',
	timespan: '~2,000 - 1,400 years ago',
	description: 'The WHAT enters the HOW. The mystery becomes mechanism. The Word becomes flesh. The three-body problem answered by Containment: Father (WHAT), Son (HOW), Spirit (WHY) are one.',
	events: [
		{
			id: 'jesus-birth',
			date: '~2,025 years ago',
			title: 'Birth of Jesus (traditional)',
			type: 'expansion',
			summary: 'God incarnate.',
			content: `Whatever the historical facts, the narrative that emerges: God incarnate. The WHAT enters the HOW. The mystery becomes mechanism. The Word becomes flesh.

This is a move beyond anything previous religions attempted: not god-king (Pharaoh), not god-possessed (shamanism), but God-as-human. The three-body problem answered by Containment: Father (WHAT), Son (HOW), Spirit (WHY) are one.`,
			imagePlaceholder: 'Nativity scene with stable and star'
		},
		{
			id: 'crucifixion',
			date: '~1,990 years ago',
			title: 'Crucifixion and Resurrection (traditional)',
			type: 'expansion',
			summary: 'Failure transformed into victory.',
			content: `The death of the God-man should end the movement. Instead it accelerates it. The cross becomes the central symbol—failure transformed into victory, death into life. The WHY-framework can metabolize the worst thing (god dying) into the best thing (god conquering death).`,
			imagePlaceholder: 'Empty cross at dawn with empty tomb in background'
		},
		{
			id: 'temple-destruction',
			date: '~1,955 years ago (70 CE)',
			title: 'Destruction of the Second Temple',
			type: 'collapse',
			summary: 'Massive collapse + branching.',
			content: `Rome crushes the Jewish revolt. The Temple burns. The sacrificial system that had defined Judaism for a millennium ends.

This forces two adaptations:

1. **Rabbinic Judaism**: The Pharisaic interpretation survives. Torah study replaces sacrifice. The portable religion becomes even more portable. The Mishnah and later Talmud develop as portable Temple—the law as sacred space.

2. **Christianity**: Already spreading, now definitively separates. If the Temple is destroyed, God has moved. The new covenant supersedes the old. The Church becomes the temple; Christ the eternal sacrifice.

Both are brilliant WHY-adaptations to catastrophe. Neither could have developed as they did without the destruction.`,
			imagePlaceholder: 'Burning of the Second Temple by Roman soldiers'
		},
		{
			id: 'gnosticism',
			date: '~1,920 years ago',
			title: 'Emergence of Gnosticism',
			type: 'expansion',
			summary: 'A WHY-framework for empire\'s injustice.',
			content: `Gnostic movements proliferate: the material world is evil, created by a false god (demiurge). The true God is hidden. Salvation through secret knowledge (gnosis).

This is a WHY-framework for empire's injustice: the world is unfair because the world is run by a blind, evil power. The true power is elsewhere. This appeals to those crushed by Rome, by fate, by circumstance.`,
			imagePlaceholder: 'Gnostic cosmological diagram with demiurge and divine light'
		},
		{
			id: 'mishnah',
			date: '~1,850 years ago (~200 CE)',
			title: 'Rabbinic Judaism Crystallizes (Mishnah)',
			type: 'expansion',
			summary: 'The WHY-framework is now textual, portable, infinitely interpretable.',
			content: `Rabbi Judah the Prince compiles the Mishnah—oral traditions organized into systematic law. This is the foundation of Rabbinic Judaism as it will exist until today. The WHY-framework is now textual, portable, infinitely interpretable.`,
			imagePlaceholder: 'Rabbi studying Torah scrolls and Mishnah'
		},
		{
			id: 'manicheanism',
			date: '~1,800 years ago',
			title: 'Rise of Manicheanism',
			type: 'expansion',
			summary: 'The religion of light vs. dark.',
			content: `Mani synthesizes Zoroastrian dualism, Christian redemption, Buddhist discipline. The religion of light vs. dark. For centuries, Manicheanism competes with Christianity and Zoroastrianism as a major world religion. Augustine is a Manichean before his conversion.`,
			imagePlaceholder: 'Manichean cosmological painting of light and darkness'
		},
		{
			id: 'nicaea',
			date: '~1,700 years ago (325 CE)',
			title: 'Council of Nicaea',
			type: 'expansion',
			summary: 'WHY-consolidation by political power.',
			content: `Constantine convenes the bishops. The Nicene Creed defines orthodox Christianity: the Son is "of one substance" with the Father. Arianism (Christ as created, subordinate) is rejected.

This is WHY-consolidation by political power. The empire needs religious unity. The theological question (is Christ fully God?) has political stakes (can the emperor use the Church for cohesion?).`,
			imagePlaceholder: 'Constantine presiding over Council of Nicaea'
		},
		{
			id: 'theodosius',
			date: '~1,645 years ago (380 CE)',
			title: 'Edict of Theodosius',
			type: 'collapse',
			summary: 'The old gods die.',
			content: `Christianity becomes the state religion of Rome. Pagan temples closed, sacrifices banned. The old gods die—not overnight, but their institutional support is removed.

This is HOW (state power) enforcing WHY (Christian theology). The three-body problem is resolved through force: one religion, one empire, one truth.`,
			imagePlaceholder: 'Pagan temple being converted to Christian church'
		},
		{
			id: 'egyptian-religion-ends',
			date: '~1,600 years ago (~550 CE)',
			title: 'Last Activity of Egyptian Religion',
			type: 'collapse',
			summary: 'The gods do die.',
			content: `The temple of Isis at Philae is closed. The last hieroglyphic inscription is carved. The religion that endured 3,000 years ends. The gods do die. But they leave remainders—Isis becomes Mary, Horus becomes Christ, the ankh becomes the cross.`,
			imagePlaceholder: 'Temple of Isis at Philae with last hieroglyphic inscription'
		},
		{
			id: 'rome-falls',
			date: '~1,545 years ago (476 CE)',
			title: 'Fall of Western Rome',
			type: 'collapse',
			summary: 'The Church persists.',
			content: `The last Western emperor deposed. But the Church persists. The institution that was intended to support the empire outlasts the empire. The Pope inherits Rome's WHY-authority as the emperors lose HOW-power.`,
			imagePlaceholder: 'Romulus Augustulus surrendering to Odoacer'
		},
		{
			id: 'talmud',
			date: '~1,500 years ago (~500 CE)',
			title: 'Compilation of Babylonian Talmud',
			type: 'expansion',
			summary: 'WHY-pluralism built into the foundation.',
			content: `Rabbinic discussion and argumentation preserved. The Talmud is not a law code but a record of debate—multiple opinions, minority views, dissent. This is WHY-pluralism built into the foundation. The Jewish tradition can metabolize disagreement because disagreement is the method.`,
			imagePlaceholder: 'Page of Talmud showing central text and surrounding commentary'
		},
		{
			id: 'islam-founded',
			date: '~1,400 years ago (610-632 CE)',
			title: 'Muhammad and the Founding of Islam',
			type: 'expansion',
			summary: 'The final Abrahamic synthesis.',
			content: `Muhammad receives revelation. The Quran is recited, memorized, later written. Islam emerges as the final Abrahamic synthesis:

- **WHAT**: Allah, the God of Abraham, Moses, Jesus—but no Trinity, no incarnation. Pure unity.
- **WHY**: The Quran as final revelation, completing and correcting previous scriptures.
- **HOW**: Sharia, the comprehensive law covering all aspects of life.

Within a century, Islam conquers from Spain to India. The speed is unprecedented. A new three-body orbit achieves stable configuration and expands explosively.`,
		}
	],
	// Links format: { "1": { url: "...", tag: "tech" }, "2": { url: "..." } }
	links: {}
};
