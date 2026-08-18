/**
 * @beta
 * 包含世界时钟事件的参数，用于筛选将哪些事件传递给提供的回调函数。
 */
export interface WorldClockEventOptions {
    /**
     * @remarks
     * 此事件应针对的时钟名称。
     *
     */
    clock: string;
}