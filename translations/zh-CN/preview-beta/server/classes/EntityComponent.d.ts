/**
 * 下游实体组件的基类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
    private constructor();
    /**
     * @remarks
     * 拥有此组件的实体。如果该实体已被移除，则此实体将为 undefined。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly entity: Entity;
}