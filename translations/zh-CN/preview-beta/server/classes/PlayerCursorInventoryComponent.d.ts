/**
 * 代表玩家的光标物品栏。用于在物品栏界面中在容器之间移动物品。不用于触控操作。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 玩家光标物品栏中当前的物品实例。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly item?: ItemStack;
    static readonly componentId = 'minecraft:cursor_inventory';
    /**
     * @remarks
     * 清空玩家的光标物品栏。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    clear(): void;
}