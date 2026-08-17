/**
 * 指定用于为实体注册数据驱动触发事件时使用的附加过滤器。
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的实体与此集合中的实体匹配时，
     * 此事件才会触发。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的实体类型
     * 与此参数匹配时，此事件才会触发。
     *
     */
    entityTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的触发事件
     * 与此参数中列出的事件之一匹配时，
     * 此事件才会触发。
     *
     */
    eventTypes?: string[];
}