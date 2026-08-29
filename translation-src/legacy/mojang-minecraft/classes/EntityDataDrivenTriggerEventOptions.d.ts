/**
 * Specifies additional filters that are used in registering a
 * data driven trigger event for entities.
 */
export class EntityDataDrivenTriggerEventOptions {
    /**
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     */
    "entities": Entity[];
    /**
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     */
    "entityTypes": string[];
    /**
     * If this value is set, this event will only fire if the
     * impacted triggered event matches one of the events listed in
     * this parameter.
     */
    "eventTypes": string[];
}
