/**
 * 投射物组件控制投射物实体的属性，并允许将其沿给定方向射出。
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
     * 投射物在空气中飞行时，每 tick 保留的速度比例。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    airInertia: number;
    /**
     * @remarks
     * 若为 true，则实体在受伤时会被点燃。默认燃烧时间为 5 秒，可通过 onFireTime 属性修改。若实体免疫或处于潮湿状态，则不会着火。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks
     * 若为 true，则投射物在被玩家击中时会产生暴击粒子。例如，玩家攻击潜影贝子弹。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks
     * 若为 true，则投射物在受到伤害时会被销毁。例如，玩家攻击潜影贝子弹。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks
     * 应用于投射物的重力。当实体不在地面上时，每 tick 从投射物的垂直位置变化中减去该值。值越大，投射物下落越快。若为负值，则实体将上升而非下落。
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
     * 投射物击中某物时生成的粒子。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    hitParticle?: string;
    /**
     * @remarks
     * 若为 true，且天气为雷暴，实体与天空有视线相通，则被击中时会被闪电击中。例如，附有引雷附魔的三叉戟。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks
     * 投射物在液体中飞行时，每 tick 保留的速度比例。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    liquidInertia: number;
    /**
     * @remarks
     * 当 catchFireOnHurt 设为 true 时，被击中的实体着火的持续时间（秒）。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    onFireTime: number;
    /**
     * @remarks
     * 投射物的所有者。用于确定投射物可以与哪些物体碰撞并造成伤害，以及确定哪个实体被指定为攻击者。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    owner?: Entity;
    /**
     * @remarks
     * 若为 true，则投射物在未造成伤害时会从生物身上弹开。例如，生成中的凋灵。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks
     * 若为 true，则投射物在击中实体时停止移动，如同被阻挡。例如，投掷三叉戟的击中行为。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    stopOnHit: boolean;
    static readonly componentId = 'minecraft:projectile';
    /**
     * @remarks
     * 以给定速度射出投射物。投射物将从其当前位置射出。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param velocity
     * 发射投射物的速度，控制投射物发射的速度和方向。
     * @param options
     * 发射的可选配置。
     * @throws
     * 如果组件或实体不再存在，则抛出异常。
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}