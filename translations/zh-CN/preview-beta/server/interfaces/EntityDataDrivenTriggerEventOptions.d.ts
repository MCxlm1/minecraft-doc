/**
 * 指定在注册实体数据驱动触发器事件时使用的附加过滤器。
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则事件只会为与此集合中的实体匹配的实体触发。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则事件只会在受影响的实体类型与此参数匹配时触发。
     *
     */
    entityTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则事件只会在受影响的触发事件与此参数中列出的事件之一匹配时触发。
     *
     */
    eventTypes?: string[];
}