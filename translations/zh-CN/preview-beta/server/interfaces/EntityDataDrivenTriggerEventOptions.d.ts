/**
 * 指定用于注册实体数据驱动触发事件时的附加筛选条件。
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则事件仅在与该集合中的实体匹配的实体上触发。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的实体类型与此参数匹配时触发事件。
     *
     */
    entityTypes?: string[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响的触发事件与此参数中列出的事件之一匹配时触发事件。
     *
     */
    eventTypes?: string[];
}