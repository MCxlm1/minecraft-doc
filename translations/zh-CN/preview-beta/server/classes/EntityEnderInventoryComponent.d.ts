/**
 * 表示此实体的末影物品栏属性。该组件始终存在于玩家身上，当玩家访问末影箱时，其容器中的任何物品都会显示给玩家。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEnderInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 为此实体定义末影物品栏容器。如果实体已被移除，则该容器将未定义。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:ender_inventory';
}