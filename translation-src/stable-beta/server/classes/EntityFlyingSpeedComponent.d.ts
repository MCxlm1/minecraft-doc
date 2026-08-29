/**
 * Represents the flying speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of the flying speed of the associated entity.
     *
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:flying_speed';
}
