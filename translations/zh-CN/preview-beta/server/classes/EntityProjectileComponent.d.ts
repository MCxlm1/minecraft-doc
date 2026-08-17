/**
 * 弹射物组件控制弹射物实体的属性，并允许以给定方向发射。
 * 当实体拥有 minecraft:projectile 组件时，该组件存在。
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
     * 弹射物在空中飞行时，每刻保留的速度比例。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    airInertia: number;
    /**
     * @remarks
     * 如果为 true，实体在受伤时会被点燃。默认燃烧持续时间为 5 秒。该持续时间可通过 onFireTime 属性修改。如果实体免疫或处于潮湿状态，则不会着火。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks
     * 如果为 true，弹射物在被玩家击中时会产生暴击粒子。例如：玩家攻击潜影贝子弹。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks
     * 如果为 true，弹射物在受到伤害时会被销毁。例如：玩家攻击潜影贝子弹。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks
     * 施加于弹射物的重力。当实体未在地面上时，每刻从弹射物的垂直位置变化中减去该值。值越大，弹射物下落越快。如果为负值，实体将上升而非下落。
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
     * 弹射物击中方块时播放的声音。
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
     * 如果为 true，且天气为雷暴，且实体对天空有视线，则击中时实体将被闪电击中。例如：带有引雷附魔的投掷三叉戟。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks
     * 弹射物在液体中飞行时，每刻保留的速度比例。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    liquidInertia: number;
    /**
     * @remarks
     * 当 catchFireOnHurt 设置为 true 时，被击中的实体着火持续的时间（秒）。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    onFireTime: number;
    /**
     * @remarks
     * 弹射物的所有者。用于确定弹射物可以与哪些对象碰撞并造成伤害，以及指定哪个实体作为攻击者。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    owner?: Entity;
    /**
     * @remarks
     * 如果为 true，弹射物在未造成伤害时会从生物身上弹开。例如：生成中的凋灵。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks
     * 如果为 true，弹射物在击中实体时会停止移动，如同被阻挡一样。例如：投掷三叉戟击中时的行为。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    /**
     * @remarks
     * 以给定速度发射弹射物。弹射物将从其当前位置发射。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param velocity
     * 发射弹射物的速度。这同时控制弹射物发射的速度和方向。
     * @param options
     * 发射的可选配置。
     * @throws
     * 如果组件或实体不再存在，则抛出错误。
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}