/**
 * 表示此实体的末影箱库存属性。此组件始终存在于玩家身上，当玩家访问末影箱时，其容器中的任何物品都会显示给玩家。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEnderInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 定义此实体的末影箱库存容器。如果实体已被移除，则容器将为 undefined。
     *
     * @throws 此属性在使用时可能抛出异常。
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:ender_inventory';
}