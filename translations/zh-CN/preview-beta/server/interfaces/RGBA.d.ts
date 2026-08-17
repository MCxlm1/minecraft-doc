/**
 * 表示 Minecraft 中一个完全可自定义的颜色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface RGBA extends RGB {
    /**
     * @remarks
     * 确定颜色的透明度（alpha）分量。有效值介于 0（完全透明）和 1.0（完全不透明）之间。
     *
     */
    alpha: number;
}