// Re-export types
export type { EventType, TimelineEvent, Era } from './types';

// Import all eras
import { theHardwarePeriod } from './era01-the-hardware-period';
import { theLaschampTrigger } from './era02-the-laschamp-trigger';
import { theAgriculturalRevolution } from './era03-the-agricultural-revolution';
import { theFirstCivilizations } from './era04-the-first-civilizations';
import { thePatriarchalFoundations } from './era05-the-patriarchal-foundations';
import { theBronzeAgeCollapse } from './era06-the-bronze-age-collapse';
import { theAxialAge } from './era07-the-axial-age';
import { christianityAndLateAntiquity } from './era08-christianity-and-late-antiquity';
import { theMedievalWorld } from './era09-the-medieval-world';
import { earlyModernity } from './era10-early-modernity';
import { thePresentTurning } from './era11-the-present-turning';

// Export individual eras for direct access
export {
	theHardwarePeriod,
	theLaschampTrigger,
	theAgriculturalRevolution,
	theFirstCivilizations,
	thePatriarchalFoundations,
	theBronzeAgeCollapse,
	theAxialAge,
	christianityAndLateAntiquity,
	theMedievalWorld,
	earlyModernity,
	thePresentTurning
};

// Export combined timeline
export const timelineData = [
	theHardwarePeriod,
	theLaschampTrigger,
	theAgriculturalRevolution,
	theFirstCivilizations,
	thePatriarchalFoundations,
	theBronzeAgeCollapse,
	theAxialAge,
	christianityAndLateAntiquity,
	theMedievalWorld,
	earlyModernity,
	thePresentTurning
];
