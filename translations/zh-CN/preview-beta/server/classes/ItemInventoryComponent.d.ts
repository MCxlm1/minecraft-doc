/**
 * 此组件用于添加了“储物物品”组件的物品。
 * 可以访问和修改该物品的库存容器。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemInventoryComponent extends ItemComponent {
    private constructor();
    /**
     * @throws 使用时此属性可能抛出异常。
     *
     * {@link InvalidContainerError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:inventory';
}