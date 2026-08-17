/**
 * 当添加此移动控制时，会使生物左右摇摆，造成游泳的视觉效果。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 摆动幅度。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * 摆动频率。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}