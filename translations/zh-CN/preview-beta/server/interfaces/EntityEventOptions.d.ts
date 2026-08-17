/**
 * 包含用于注册实体事件的可选参数。
 */
export interface EntityEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则仅当事件影响的实体与此集合中的实体匹配时，才会触发该事件。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则仅当受影响实体的类型与此参数匹配时，才会触发该事件。
     *
     */
    entityTypes?: string[];
}