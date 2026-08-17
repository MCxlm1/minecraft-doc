/**
 * 注册实体事件时使用的可选参数。
 */
export interface EntityEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则只有在实体匹配此集合中的实体时，才会触发该事件。
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * 如果设置了此值，则只有受影响的实体类型与此参数匹配时，才会触发该事件。
     *
     */
    entityTypes?: string[];
}