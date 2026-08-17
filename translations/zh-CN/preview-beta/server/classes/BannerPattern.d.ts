/**
 * @beta
 * 描述一个单独的旗帜图案，包括颜色和图案类型。
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
     * 应用于旗帜的图案类型（例如渐变、人字形、十字形等）。
     *
     */
    readonly pattern: string;
}