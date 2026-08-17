/**
 * 一个基本形状类，表示世界中带有背景的文本标签。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TextPrimitive extends PrimitiveShape {
    /**
     * @remarks
     * 如果设置为 true，文本基本体将渲染背景的背面。默认为 true，但如果 'useRotation' 设置为 false，则始终为 false。
     *
     */
    backfaceVisible: boolean;
    /**
     * @remarks
     * 文本背景板的颜色。如果设置为 undefined，将使用默认颜色。
     *
     */
    backgroundColorOverride?: RGBA;
    /**
     * @remarks
     * 如果设置为 true，文本将隐藏在方块或实体后面。默认设置为 false（始终渲染）。
     *
     */
    depthTest: boolean;
    /**
     * @remarks
     * 获取调试文本形状的文本。如果 `setText` 使用 RawMessage 或 RawText 对象调用，则返回调试文本的 RawText，否则返回字符串。
     *
     */
    readonly text: RawMessage | string;
    /**
     * @remarks
     * 如果设置为 true，文本基本体将渲染文本的背面。默认为 true，但如果 'useRotation' 设置为 false，则始终为 false。
     *
     */
    textBackfaceVisible: boolean;
    /**
     * @remarks
     * 如果设置为 true，文本将不面向相机，而是使用形状的旋转。
     *
     */
    useRotation: boolean;
    constructor(location: DimensionLocation | Vector3, text: RawMessage | string);
    /**
     * @remarks
     * 设置要显示的文本。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link RawMessageError}
     */
    setText(text: RawMessage | string): void;
}