/**
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 */
export class EntityBreathableComponent extends IEntityComponent {
    /**
     * List of blocks this entity can breathe in, in addition to
     * the separate properties for classes of blocks.
     * @throws This property can throw when used.
     */
    readonly "breatheBlocks": BlockPermutation[];
    /**
     * If true, this entity can breathe in air.
     * @throws This property can throw when used.
     */
    readonly "breathesAir": boolean;
    /**
     * If true, this entity can breathe in lava.
     * @throws This property can throw when used.
     */
    readonly "breathesLava": boolean;
    /**
     * If true, this entity can breathe in solid blocks.
     * @throws This property can throw when used.
     */
    readonly "breathesSolids": boolean;
    /**
     * If true, this entity can breathe in water.
     * @throws This property can throw when used.
     */
    readonly "breathesWater": boolean;
    /**
     * If true, this entity will have visible bubbles while in
     * water.
     * @throws This property can throw when used.
     */
    readonly "generatesBubbles": boolean;
    /**
     * Time in seconds to recover breath to maximum.
     * @throws This property can throw when used.
     */
    readonly "inhaleTime": number;
    /**
     * List of blocks this entity can't breathe in.
     * @throws This property can throw when used.
     */
    readonly "nonBreatheBlocks": BlockPermutation[];
    /**
     * Time in seconds between suffocation damage.
     * @throws This property can throw when used.
     */
    readonly "suffocateTime": number;
    /**
     * Time in seconds the entity can hold its breath.
     * @throws This property can throw when used.
     */
    readonly "totalSupply": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:breathable.
     */
    static readonly "id" = "minecraft:breathable";
    /**
     * @remarks
     * Sets the current air supply of the entity.
     * @param value
     * New air supply for the entity.
     * @throws This function can throw errors.
     */
    setAirSupply(value: number): void;
    protected constructor();
}
