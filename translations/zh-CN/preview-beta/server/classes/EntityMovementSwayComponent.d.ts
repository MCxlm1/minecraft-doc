/**
 * 添加后，此移动控制会使生物左右摇摆，营造出它在游泳的印象。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 摇摆运动的幅度。
     *
     * @throws 使用时可能抛出异常。
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * 摇摆频率大小。
     *
     * @throws 使用时可能抛出异常。
     */
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}