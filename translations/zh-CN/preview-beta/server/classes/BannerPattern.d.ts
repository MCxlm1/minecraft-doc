/**
 * @beta
 * 描述单个旗帜图案，包括颜色和图案类型。
 */
export class BannerPattern {
    private constructor();
    /**
     * @remarks
     * 应用于此旗帜图案的颜色。
     *
     */
    readonly color: string;
    /**
     * @remarks
     * 应用于旗帜的图案类型（例如渐变、V形、十字等）。
     *
     */
    readonly pattern: string;
}