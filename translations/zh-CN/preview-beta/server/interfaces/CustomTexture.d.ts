export interface CustomTexture {
    /**
     * @remarks
     * 图标的高度，以相对单位表示。值必须介于 0.0 和 1.0 之间（含）。
     *
     * 范围：[0, 1]
     */
    iconHeight: number;
    /**
     * @remarks
     * 图标的宽度，以相对单位表示。值必须介于 0.0 和 1.0 之间（含）。
     *
     * 范围：[0, 1]
     */
    iconWidth: number;
    /**
     * @remarks
     * 自定义纹理的资源路径。应为指向纹理资源的有效字符串路径。
     *
     */
    path: string;
}