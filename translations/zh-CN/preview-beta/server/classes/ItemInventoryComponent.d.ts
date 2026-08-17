/**
 * 该组件添加到带有 `Storage Item` 组件的物品上。
 * 可以访问和修改此物品的库存容器。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemInventoryComponent extends ItemComponent {
    private constructor();
    /**
     * @throws 使用此属性时可能抛出错误。
     *
     * {@link InvalidContainerError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:inventory';
}