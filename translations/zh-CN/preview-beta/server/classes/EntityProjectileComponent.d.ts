/**
 * 投射物组件控制投射物实体的属性，并允许其朝给定方向发射。
 * 当实体具有 minecraft:projectile 组件时，该组件存在。
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
     * 投射物在空气中飞行时，每 tick 保持的速度比例。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    airInertia: number;
    /**
     * @remarks
     * 如果为 true，实体在受到伤害时会被点燃。默认燃烧时间为 5 秒。
     * 可通过 onFireTime 属性修改此持续时间。如果实体免疫火焰或处于湿润状态，则不会着火。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks
     * 如果为 true，当投射物被玩家击中时会产生暴击粒子。例如：玩家攻击潜影贝子弹。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks
     * 如果为 true，投射物在受到伤害时会被摧毁。例如：玩家攻击潜影贝子弹。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks
     * 应用于投射物的重力。当实体不在地面上时，每 tick 从投射物的垂直位置变化中减去该值。
     * 数值越大，投射物下落越快。如果为负值，实体将上升而非下降。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    gravity: number;
    /**
     * @remarks
     * 投射物击中实体时播放的声音。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    hitEntitySound?: string;
    /**
     * @remarks
     * 投射物击中方块时播放的声音。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    hitGroundSound?: string;
    /**
     * @remarks
     * 投射物击中物体时生成的粒子。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    hitParticle?: string;
    /**
     * @remarks
     * 如果为 true，且天气为雷暴，实体能够看到天空，则实体在被击中时会被闪电击中。
     * 例如：带有引雷附魔的三叉戟。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks
     * 投射物在液体中移动时，每 tick 保持的速度比例。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    liquidInertia: number;
    /**
     * @remarks
     * 当 catchFireOnHurt 设置为 true 时，被击中的实体着火持续的秒数。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    onFireTime: number;
    /**
     * @remarks
     * 投射物的所有者。用于确定投射物能碰撞和伤害的对象，也决定哪个实体被指定为攻击者。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    owner?: Entity;
    /**
     * @remarks
     * 如果为 true，投射物在未造成伤害时会从生物身上弹开。例如：生成中的凋灵。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks
     * 如果为 true，投射物在击中实体时会停止移动，如同被阻挡一样。例如：三叉戟投出后的击中行为。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    /**
     * @remarks
     * 以给定的速度发射投射物。投射物将从其当前位置发射。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param velocity
     * 发射投射物的速度。这同时控制投射物被发射时的速度和方向。
     * @param options
     * 发射的可选配置。
     * @throws
     * 如果组件或实体已不存在，则抛出异常。
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}