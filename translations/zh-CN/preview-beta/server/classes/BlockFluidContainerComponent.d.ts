/**
 * 表示世界中方块所包含的流体容器。用于如炼药锅等方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 流体容器的相对填充水平。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    fillLevel: number;
    /**
     * @remarks
     * 容器中流体的自定义颜色。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    fluidColor: RGBA;
    static readonly componentId = 'minecraft:fluid_container';
    /**
     * @remarks
     * 向流体中添加染料。染料颜色会与已有的自定义颜色混合。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param dye - 要添加的染料物品类型。
     * @throws 在受限执行模式下调用时抛出错误。
     */
    addDye(dye: ItemType): void;
    /**
     * @remarks
     * 获取容器中当前的流体类型。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 当前的流体类型。
     * @throws 在受限执行模式下调用时抛出错误。
     */
    getFluidType(): FluidType;
    /**
     * @remarks
     * 设置容器中当前的流体类型。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fluidType - 要设置的流体类型。
     * @throws 在受限执行模式下调用时抛出错误。
     */
    setFluidType(fluidType: FluidType): void;
    /**
     * @remarks
     * 在容器中设置一个药水物品。将容器的流体类型更改为药水。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param itemStack - 要设置的药水物品实例。
     * @throws 在受限执行模式下调用时抛出错误。
     */
    setPotion(itemStack: ItemStack): void;
}