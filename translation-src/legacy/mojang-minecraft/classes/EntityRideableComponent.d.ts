/**
 * When added, this component adds the capability that an
 * entity can be ridden by another entity.
 */
export class EntityRideableComponent extends IEntityComponent {
    /**
     * Zero-based index of the seat that can used to control this
     * entity.
     * @throws This property can throw when used.
     */
    readonly "controllingSeat": number;
    /**
     * Determines whether interactions are not supported if the
     * entity is crouching.
     * @throws This property can throw when used.
     */
    readonly "crouchingSkipInteract": boolean;
    /**
     * A string-list of entity types that this entity can support
     * as riders.
     * @throws This property can throw when used.
     */
    readonly "familyTypes": string[];
    /**
     * Set of text that should be displayed when a player is
     * looking to ride on this entity (commonly with touch-screen
     * controls).
     * @throws This property can throw when used.
     */
    readonly "interactText": string;
    /**
     * If true, this entity will pull in entities that are in the
     * correct family_types into any available seat.
     * @throws This property can throw when used.
     */
    readonly "pullInEntities": boolean;
    /**
     * If true, this entity will be picked when looked at by the
     * rider.
     * @throws This property can throw when used.
     */
    readonly "riderCanInteract": boolean;
    /**
     * Number of seats for riders defined for this entity.
     * @throws This property can throw when used.
     */
    readonly "seatCount": number;
    /**
     * The list of positions and number of riders for each position
     * for entities riding this entity.
     * @throws This property can throw when used.
     */
    readonly "seats": Seat[];
    /**
     * Identifier of this component. Should always be
     * minecraft:rideable.
     */
    static readonly "id" = "minecraft:rideable";
    /**
     * @remarks
     * Adds an entity to this entity as a rider.
     * @param rider
     * Entity that will become the rider of this entity.
     * @returns
     * True if the rider entity was successfully added.
     * @throws This function can throw errors.
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * Ejects the specified rider of this entity.
     * @param rider
     * Entity that should be ejected from this entity.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * Ejects all riders of this entity.
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    protected constructor();
}
