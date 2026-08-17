/**
 * 当添加此移动控制时，允许生物滑翔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 实体转弯时的速度。
     *
     * @throws 当使用此属性时可能抛出异常。
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * 滑翔开始时的速度。
     *
     * @throws 当使用此属性时可能抛出异常。
     */
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}