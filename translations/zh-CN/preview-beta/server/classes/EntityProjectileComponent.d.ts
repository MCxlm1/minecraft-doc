/**
 * 弹射物组件控制弹射物实体的属性，并允许其向指定方向射击。
 * 当实体拥有 minecraft:projectile 组件时，此组件存在。
 * @example shootArrow.ts
 * ```typescript
 * import { DimensionLocation, EntityProjectileComponent } from '@minecraft/server';
 *
 * function shootArrow(targetLocation: DimensionLocation) {
 *   const velocity = { x: 0, y: 1, z: 5 };
 *
 *   const arrow = targetLocation.dimension.spawnEntity('minecraft:arrow', {
 *     x: targetLocation.x,
 *     y: targetLocation.y + 2,
 *     z: targetLocation.z,
 *   });
 *
 *   const projectileComp = arrow.getComponent('minecraft:projectile') as EntityProjectileComponent;
 *
 *   projectileComp?.shoot(velocity);
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 弹射物在空气中飞行时，每 tick 保持的速度比例。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    airInertia: number;
    /**
     * @remarks
     * 如果为 true，实体受伤时将着火。默认燃烧持续时间为 5 秒。可通过 onFireTime 属性修改此持续时间。如果实体免疫或处于潮湿状态，则不会着火。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks
     * 如果为 true，弹射物被玩家击中时会生成暴击粒子。例如：玩家攻击潜影贝子弹。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks
     * 如果为 true，弹射物受到伤害时会被销毁。例如：玩家攻击潜影贝子弹。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks
     * 应用于弹射物的重力。当实体不在地面上时，每 tick 从弹射物的垂直位置变化中减去此值。值越大，弹射物下落越快。如果为负数，实体将上升而非下降。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    gravity: number;
    /**
     * @remarks
     * 弹射物击中实体时播放的声音。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    hitEntitySound?: string;
    /**
     * @remarks
     * 弹射物击中地面时播放的声音。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    hitGroundSound?: string;
    /**
     * @remarks
     * 弹射物击中物体时生成的粒子。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    hitParticle?: string;
    /**
     * @remarks
     * 如果为 true，且天气为雷暴，实体与天空有视线通路，则实体被击中时将被闪电击中。例如：投掷的带有引雷附魔的三叉戟。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks
     * 弹射物在液体中飞行时，每 tick 保持的速度比例。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    liquidInertia: number;
    /**
     * @remarks
     * 当 catchFireOnHurt 设置为 true 时，被击中的实体着火的持续时间（秒）。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    onFireTime: number;
    /**
     * @remarks
     * 弹射物的所有者。用于确定弹射物可以碰撞和伤害的对象。它还决定了哪个实体被指定为攻击者。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    owner?: Entity;
    /**
     * @remarks
     * 如果为 true，弹射物在未造成伤害时会在生物身上弹跳。例如：生成时的凋灵。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks
     * 如果为 true，弹射物击中实体时将停止移动，如同被格挡。例如：投掷三叉戟的击中行为。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    /**
     * @remarks
     * 以给定的速度射击弹射物。弹射物将从其当前位置射出。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param velocity
     * 射击弹射物的速度。这控制弹射物射击的速度和方向。
     * @param options
     * 射击的可选配置。
     * @throws
     * 如果组件或实体不再存在，则抛出错误。
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}