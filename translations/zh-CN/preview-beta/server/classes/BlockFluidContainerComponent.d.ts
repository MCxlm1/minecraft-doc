/**
 * 表示世界中方块的流体容器。用于如炼药锅等方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 流体容器的相对填充液位。
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
     * 向流体中添加染料。染料颜色会与任何现有自定义颜色混合。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     */
    addDye(dye: ItemType): void;
    /**
     * @remarks
     * 获取容器中的当前流体类型。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     */
    getFluidType(): FluidType;
    /**
     * @remarks
     * 设置容器中的当前流体类型。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     */
    setFluidType(fluidType: FluidType): void;
    /**
     * @remarks
     * 在容器中设置药水物品。将容器的流体类型更改为药水。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @throws 此函数可能会抛出错误。
     */
    setPotion(itemStack: ItemStack): void;
}