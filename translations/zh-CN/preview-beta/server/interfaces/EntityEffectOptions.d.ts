/**
 * 包含实体效果的附加选项。
 */
export interface EntityEffectOptions {
    /**
     * @remarks
     * 效果的强度。
     *
     */
    amplifier?: number;
    /**
     * @remarks
     * 如果为 true，当效果作用于实体时，将显示粒子。
     *
     */
    showParticles?: boolean;
}