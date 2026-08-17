/**
 * 当添加此组件时，该移动控制允许生物进行滑翔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 实体转弯时的生效速度。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * 滑翔期间的起始速度。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}