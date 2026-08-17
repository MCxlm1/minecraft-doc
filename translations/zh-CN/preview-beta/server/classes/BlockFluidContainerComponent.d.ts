/**
 * 表示世界中某个方块的流体容器。用于类似炼药锅的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 流体容器的相对填充等级。
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
     * 向流体中添加染料。染料颜色将与任何已有的自定义颜色混合。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param dye 要添加的染料物品类型。
     * @throws 此函数可能抛出错误。
     */
    addDye(dye: ItemType): void;
    /**
     * @remarks
     * 获取容器中当前的流体类型。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns 容器中当前的流体类型。
     * @throws 此函数可能抛出错误。
     */
    getFluidType(): FluidType;
    /**
     * @remarks
     * 设置容器中当前的流体类型。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param fluidType 要设置的流体类型。
     * @throws 此函数可能抛出错误。
     */
    setFluidType(fluidType: FluidType): void;
    /**
     * @remarks
     * 在容器中设置一个药水物品。将容器的流体类型更改为药水。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param itemStack 要设置的药水物品实例。
     * @throws 此函数可能抛出错误。
     */
    setPotion(itemStack: ItemStack): void;
}