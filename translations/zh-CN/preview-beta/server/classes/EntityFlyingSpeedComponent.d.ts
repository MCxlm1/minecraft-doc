/**
 * 表示实体的飞行速度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 关联实体的当前飞行速度值。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:flying_speed';
}