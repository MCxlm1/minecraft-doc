/**
 * 指定用于为实体注册数据驱动触发事件时的附加筛选器。
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks
     * 若设置此值，则此事件将仅对与此集合中的实体匹配的实体触发。
     */
    entities?: Entity[];
    /**
     * @remarks
     * 若设置此值，则仅当受影响的实体类型与此参数匹配时，此事件才会触发。
     */
    entityTypes?: string[];
    /**
     * @remarks
     * 若设置此值，则仅当受影响的触发事件与此参数中列出的事件之一匹配时，此事件才会触发。
     */
    eventTypes?: string[];
}