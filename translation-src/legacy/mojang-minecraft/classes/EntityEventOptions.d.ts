/**
 * Contains optional parameters for registering an entity
 * event.
 */
export class EntityEventOptions {
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
}
