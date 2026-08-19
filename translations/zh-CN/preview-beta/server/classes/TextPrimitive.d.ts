/**
 * 一个原始形状类，表示世界中
 * 带有背景的文本标签。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TextPrimitive extends PrimitiveShape {
    /**
     * @remarks
     * 如果设置为 true，文本原始形状将渲染背景的背面。
     * 默认为 true，但若 'useRotation' 设置为 false，则始终为 false。
     *
     */
    backfaceVisible: boolean;
    /**
     * @remarks
     * 文本背景板的颜色。如果设置为 undefined，则使用默认颜色。
     *
     */
    backgroundColorOverride?: RGBA;
    /**
     * @remarks
     * 如果设置为 true，文本将被方块或实体遮挡。
     * 默认设置为 false（始终渲染）。
     *
     */
    depthTest: boolean;
    /**
     * @beta
     * @remarks
     * 该值决定 TextPrimitive 的行间距。
     * 默认行间距高度为 0。
     *
     */
    lineGapHeight: number;
    /**
     * @remarks
     * 获取调试文本形状的文本。如果 `setText` 是以 RawMessage 或
     * RawText 对象调用的，则返回相应 RawText，否则返回字符串。
     *
     */
    readonly text: RawMessage | string;
    /**
     * @remarks
     * 如果设置为 true，文本原始形状将渲染文本的背面。
     * 默认为 true，但若 'useRotation' 设置为 false，则始终为 false。
     *
     */
    textBackfaceVisible: boolean;
    /**
     * @remarks
     * 如果设置为 true，文本将不会面向摄像机，
     * 而是使用形状的旋转。
     *
     */
    useRotation: boolean;
    /**
     * @param location - 文本原始形状的位置。
     * @param text - 要显示的文本。
     */
    constructor(location: DimensionLocation | Vector3, text: RawMessage | string);
    /**
     * @remarks
     * 设置要显示的文本。
     *
     * @param text - 要显示的文本。
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link RawMessageError}
     */
    setText(text: RawMessage | string): void;
}