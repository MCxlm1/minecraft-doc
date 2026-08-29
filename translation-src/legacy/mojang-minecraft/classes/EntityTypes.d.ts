/**
 * Used for accessing all entity types currently available for
 * use within the world.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityTypes {
    /**
     * @remarks
     * Retrieves an entity type using a string-based identifier.
     * @param identifier
     */
    static get(identifier: string): EntityType;
    /**
     * @remarks
     * Retrieves an iterator of all entity types within this world.
     */
    static getAll(): EntityTypeIterator;
    protected constructor();
}
