/**
 * 代表玩家的光标物品栏。
 * 用于在物品栏界面中的容器之间移动物品。
 * 不用于触控操作。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 当前位于玩家光标物品栏中的物品实例。
     *
     * @throws 使用此属性时可能抛出错误。
     */
    readonly item?: ItemStack;
    static readonly componentId = 'minecraft:cursor_inventory';
    /**
     * @remarks
     * 清除玩家的光标物品栏。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能抛出错误。
     */
    clear(): void;
}