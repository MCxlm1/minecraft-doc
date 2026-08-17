/**
 * 关于使用 {@link
 * ItemBookComponent} 时产生的错误原因枚举。
 */
export enum BookErrorReason {
    /**
     * @remarks
     * 请求的页面内容超过了最大页面长度
     * 256。
     *
     */
    ExceedsMaxPageLength = 'ExceedsMaxPageLength',
    /**
     * @remarks
     * 无法创建页面，因为它会超过最大
     * 页数 50。
     *
     */
    ExceedsMaxPages = 'ExceedsMaxPages',
    /**
     * @remarks
     * 签署的标题超过了最大标题长度
     * 16。
     *
     */
    ExceedsTitleLength = 'ExceedsTitleLength',
}