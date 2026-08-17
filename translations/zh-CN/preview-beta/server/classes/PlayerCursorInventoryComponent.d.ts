/**
 * 表示玩家的光标栏物品栏。用于在物品栏用户界面中在不同容器之间移动物品。不适用于触摸控制。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当前玩家光标栏物品栏中的物品实例。
     *
     * @throws 此属性在使用时可能抛出异常。
     */
    readonly item?: ItemStack;
    static readonly componentId = 'minecraft:cursor_inventory';
    /**
     * @remarks
     * 清空玩家的光标栏物品栏。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    clear(): void;
}