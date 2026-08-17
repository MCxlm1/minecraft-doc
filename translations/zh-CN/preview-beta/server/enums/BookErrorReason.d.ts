/**
 * 与使用 {@link ItemBookComponent} 相关的错误原因枚举。
 */
export enum BookErrorReason {
    /**
     * @remarks
     * 请求的页面内容超过了最大页面长度 256。
     *
     */
    ExceedsMaxPageLength = 'ExceedsMaxPageLength',
    /**
     * @remarks
     * 无法创建该页面，因为它将超过最大页数 50。
     *
     */
    ExceedsMaxPages = 'ExceedsMaxPages',
    /**
     * @remarks
     * 正在签名的标题超过了最大标题长度 16。
     *
     */
    ExceedsTitleLength = 'ExceedsTitleLength',
}