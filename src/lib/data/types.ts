export type EventType =
	// Core Event Types (7)
	| 'hammerfall'  // Global catastrophic event, 95%+ humanity affected, HOW fails completely
	| 'collapse'    // Local/regional hammerfall, geographically bounded HOW-failure
	| 'stress'      // Pressure without breaking, proto-hammerfall, selection pressure builds
	| 'expansion'   // Capability increase, new territory/technique/cognitive capacity
	| 'transition'  // Phase shift, fundamental category change
	| 'recovery'    // Rebuilding after collapse/hammerfall
	| 'parallel'    // Other human lineages (Neanderthals, Denisovans)
	// Domain Tags (5)
	| 'tech'        // Tools, techniques, material manipulation
	| 'cognitive'   // Brain/mind capacity changes, symbolic behavior, abstraction
	| 'climate'     // Environmental/climate drivers
	| 'migration'   // Movement of populations
	| 'external'    // Forces outside human control (cosmic, geological)
	// Outcome Tags (2)
	| 'gain'        // Permanent acquisition that persists
	| 'lost'        // Technology, knowledge, or lineage that didn't survive
	// Legacy types (for backward compatibility with existing content)
	| 'fragmentation' // Legacy: similar to collapse
	| 'tension'       // Legacy: similar to stress
	| 'adaptation'    // Legacy: similar to transition
	| 'collision';    // Legacy: WHY-collision events

export interface TimelineEvent {
	id: string;
	date: string;
	title: string;
	type?: EventType;       // Legacy single type (optional, for backward compatibility)
	tags?: EventType[];     // New multi-tag array (optional during migration)
	summary: string;
	content: string;
	imagePlaceholder?: string;
}

export interface EraSummary {
	discovered: string;
	recoverable: string;
	permanentlyLost: string;
	whyLost: string[];
	whatsRecoverable: string[];
	whatAICouldFind?: string[];
	whatsGoneForever: string[];
}

export interface Era {
	id: string;
	number: string;
	title: string;
	timespan: string;
	description: string;
	events: TimelineEvent[];
	summary?: EraSummary;
}