/**
 * 表示 Minecraft 中可完全自定义的颜色。
 */
export interface RGB {
    /**
     * @remarks
     * 确定颜色的蓝色分量。有效值在 0 到 1.0 之间。
     *
     */
    blue: number;
    /**
     * @remarks
     * 确定颜色的绿色分量。有效值在 0 到 1.0 之间。
     *
     */
    green: number;
    /**
     * @remarks
     * 确定颜色的红色分量。有效值在 0 到 1.0 之间。
     *
     */
    red: number;
}