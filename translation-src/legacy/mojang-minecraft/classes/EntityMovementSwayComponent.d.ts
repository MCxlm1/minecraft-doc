/**
 * When added, this move control causes the mob to sway side to
 * side giving the impression it is swimming.
 */
export class EntityMovementSwayComponent extends IEntityComponent {
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly "maxTurn": number;
    /**
     * Amplitude of the sway motion.
     * @throws This property can throw when used.
     */
    readonly "swayAmplitude": number;
    /**
     * Amount of sway frequency.
     * @throws This property can throw when used.
     */
    readonly "swayFrequency": number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.sway.
     */
    static readonly "id" = "minecraft:movement.sway";
    protected constructor();
}
