/**
 * 可选参数，用于
 * @minecraft/server.EntityProjectileComponent.shoot.
 */
export interface ProjectileShootOptions {
    /**
     * @remarks
     * 控制射击的精度。值为0时表示完美
     * 精度。
     *
     */
    uncertainty?: number;
}