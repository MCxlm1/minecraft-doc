/**
 * 表示 Minecraft 中一个完全可自定义的颜色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface RGBA extends RGB {
    /**
     * @remarks
     * 确定颜色的 alpha（不透明度）分量。有效值介于 0（透明）和 1.0（不透明）之间。
     *
     */
    alpha: number;
}