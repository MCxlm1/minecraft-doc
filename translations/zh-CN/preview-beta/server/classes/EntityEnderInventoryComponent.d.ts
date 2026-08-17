/**
 * 表示此实体的末影箱物品属性。该组件始终存在于玩家身上，其容器中的任何物品都会在玩家打开末影箱时显示。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEnderInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 定义此实体的末影箱容器。如果实体已被移除，容器将为 undefined。
     *
     * @throws 此属性在使用时可能抛出错误。
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:ender_inventory';
}