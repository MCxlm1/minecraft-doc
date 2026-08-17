/**
 * 一个图元形状类，用于表示世界中带背景的文本标签。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TextPrimitive extends PrimitiveShape {
    /**
     * @remarks
     * 若设为 true，文本图元将渲染背景的背面。默认为 true，
     * 但如果 'useRotation' 设为 false，则始终为 false。
     *
     */
    backfaceVisible: boolean;
    /**
     * @remarks
     * 文本背景板的颜色。若设为 undefined，则使用默认颜色。
     *
     */
    backgroundColorOverride?: RGBA;
    /**
     * @remarks
     * 若设为 true，文本将被方块或实体遮挡。默认值为 false（始终渲染）。
     *
     */
    depthTest: boolean;
    /**
     * @remarks
     * 获取调试文本图元的文本。如果 `setText` 调用时传入的是 RawMessage 或 RawText 对象，则返回调试文本的 RawText；否则返回字符串。
     *
     */
    readonly text: RawMessage | string;
    /**
     * @remarks
     * 若设为 true，文本图元将渲染文本的背面。默认为 true，
     * 但如果 'useRotation' 设为 false，则始终为 false。
     *
     */
    textBackfaceVisible: boolean;
    /**
     * @remarks
     * 若设为 true，文本将不会面向相机，而是使用形状的旋转。
     *
     */
    useRotation: boolean;
    /**
     * @param location 文本所在的位置。
     * @param text 要显示的文本。
     */
    constructor(location: DimensionLocation | Vector3, text: RawMessage | string);
    /**
     * @remarks
     * 设置要显示的文本。
     *
     * @param text 要显示的文本。
     * @throws 当文本参数超出允许范围时抛出 {@link minecraftcommon.ArgumentOutOfBoundsError}。
     * @throws 当文本无效时抛出 {@link RawMessageError}。
     */
    setText(text: RawMessage | string): void;
}