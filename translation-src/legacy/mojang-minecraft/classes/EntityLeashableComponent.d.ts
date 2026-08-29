/**
 * Allows this entity to be leashed and defines the conditions
 * and events for this entity when is leashed.
 */
export class EntityLeashableComponent extends IEntityComponent {
    /**
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     * @throws This property can throw when used.
     */
    readonly "softDistance": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:leashable.
     */
    static readonly "id" = "minecraft:leashable";
    /**
     * @remarks
     * Leashes this entity to another entity.
     * @param leashHolder
     * The entity to leash this entity to.
     * @throws This function can throw errors.
     */
    leash(leashHolder: Entity): void;
    /**
     * @remarks
     * Unleashes this entity if it is leashed to another entity.
     * @throws This function can throw errors.
     */
    unleash(): void;
    protected constructor();
}
