/**
 * 表示一个用于触发事件的触发器。
 */
export class Trigger {
    /**
     * @remarks
     * 触发器的事件名称。
     *
     */
    eventName: string;
    /**
     * @remarks
     * 创建一个新的触发器。
     * @param eventName 事件名称。
     */
    constructor(eventName: string);
}