/**
 * 一个仅包含 `rawtext` 属性的 `RawMessage`。当序列化 `RawMessage` 时，内容会被放入 rawtext 属性中，因此在读取已保存的 RawMessage 时很有用。参见 `BlockSignComponent.setText` 和 `BlockSignComponent.getRawText` 示例。
 */
export interface RawText {
    /**
     * @remarks
     * 关联告示牌当前值的序列化表示。
     *
     */
    rawtext?: RawMessage[];
}