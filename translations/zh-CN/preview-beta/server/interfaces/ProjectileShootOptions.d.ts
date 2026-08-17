/**
 * 供 @minecraft/server.EntityProjectileComponent.shoot 使用的可选参数。
 */
export interface ProjectileShootOptions {
    /**
     * @remarks
     * 控制射击的精度。值为 0 时表示完全精准。
     *
     */
    uncertainty?: number;
}