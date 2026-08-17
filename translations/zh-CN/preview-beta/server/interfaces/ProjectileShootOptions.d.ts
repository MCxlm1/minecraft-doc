/**
 * 用于 @minecraft/server.EntityProjectileComponent.shoot 的可选参数。
 */
export interface ProjectileShootOptions {
    /**
     * @remarks
     * 控制射击的精度。值为0表示完美精度。
     *
     */
    uncertainty?: number;
}