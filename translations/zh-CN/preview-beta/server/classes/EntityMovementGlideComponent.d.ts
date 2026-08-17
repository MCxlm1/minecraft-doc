/**
 * 添加后，此移动控制将使该生物能够滑翔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * 实体转向时生效的速度。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * 滑翔过程中的起始速度。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}