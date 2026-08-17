/**
 * 下游实体组件的基类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 拥有此组件的实体。如果实体已被移除，则为 undefined。
     *
     * @throws
     * 使用此属性时可能会抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly entity: Entity;
}