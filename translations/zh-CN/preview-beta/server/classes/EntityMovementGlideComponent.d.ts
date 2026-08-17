/**
 * 当添加此组件时，该移动控制允许生物滑翔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 实体转向时的有效速度。
     *
     * @throws 当使用该属性时可能会抛出错误。
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * 滑翔过程中的起始速度。
     *
     * @throws 当使用该属性时可能会抛出错误。
     */
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}