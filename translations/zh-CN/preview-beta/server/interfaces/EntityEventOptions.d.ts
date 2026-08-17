/**
 * 包含用于注册实体事件的可选参数。
 */
export interface EntityEventOptions {
    /**
     * @remarks
     * 若设置此值，则仅当实体与集合中的实体匹配时才会触发此事件。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 若设置此值，则仅当受影响的实体类型与此参数匹配时才会触发此事件。
     *
     */
    entityTypes?: string[];
}