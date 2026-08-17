/**
 * 一个仅包含 `rawtext` 属性的 `RawMessage`。当 `RawMessage` 被序列化时，内容会被放入 rawtext 属性，因此在读取已保存的 RawMessage 时非常有用。有关示例，请参见 `BlockSignComponent.setText` 和 `BlockSignComponent.getRawText`。
 */
export interface RawText {
    /**
     * @remarks
     * 关联告示牌当前值的序列化。
     *
     */
    rawtext?: RawMessage[];
}