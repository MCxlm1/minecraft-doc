/**
 * 当添加此移动控制时，会使生物左右摇摆，给人一种正在游泳的感觉。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 摇摆运动的幅度。
     *
     * @throws
     * 此属性在使用时可能抛出异常。
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * 摇摆频率的量。
     *
     * @throws
     * 此属性在使用时可能抛出异常。
     */
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}