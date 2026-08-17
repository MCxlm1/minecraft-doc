/**
 * 添加此移动控制后，生物会向两侧摇摆，模拟游泳时的动作。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 摆动运动的幅度。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * 摆动频率的数值。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}