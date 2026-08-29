/**
 * Defines the rules for a mob to be tamed by the player.
 */
export class EntityTameableComponent extends IEntityComponent {
    /**
     * The chance of taming the entity with each item use between
     * 0.0 and 1.0, where 1.0 is 100%
     * @throws This property can throw when used.
     */
    readonly "probability": number;
    /**
     * Event to run when this entity becomes tamed.
     * @throws This property can throw when used.
     */
    readonly "tameEvent": Trigger;
    /**
     * The list of items that can be used to tame this entity.
     * @throws This property can throw when used.
     */
    readonly "tameItems": string[];
    /**
     * Identifier of this component. Should always be
     * minecraft:tameable.
     */
    static readonly "id" = "minecraft:tameable";
    /**
     * @remarks
     * Tames this entity.
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tame(): boolean;
    protected constructor();
}
