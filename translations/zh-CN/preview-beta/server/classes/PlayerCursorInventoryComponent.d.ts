/**
 * 表示玩家的光标背包。在物品UI中，在容器之间移动物品时使用。不适用于触摸控制。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当前玩家光标背包中的物品实例。
     *
     * @throws 该属性在使用时可能抛出错误。
     */
    readonly item?: ItemStack;
    static readonly componentId = 'minecraft:cursor_inventory';
    /**
     * @remarks
     * 清空玩家光标背包。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    clear(): void;
}