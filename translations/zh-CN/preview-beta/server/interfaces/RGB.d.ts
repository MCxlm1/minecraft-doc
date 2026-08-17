/**
 * 表示 Minecraft 内一个完全可自定义的颜色。
 */
export interface RGB {
    /**
     * @remarks
     * 决定颜色的蓝色分量。有效值为 0 到 1.0 之间。
     *
     */
    blue: number;
    /**
     * @remarks
     * 决定颜色的绿色分量。有效值为 0 到 1.0 之间。
     *
     */
    green: number;
    /**
     * @remarks
     * 决定颜色的红色分量。有效值为 0 到 1.0 之间。
     *
     */
    red: number;
}