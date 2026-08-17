/**
 * 包含一组将为方块触发的事件。此对象必须使用BlockRegistry绑定。
 */
export interface BlockCustomComponent {
    /**
     * @remarks
     * 此函数将在玩家放置方块之前被调用。
     *
     */
    beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent, arg1: CustomComponentParameters) => void;
    onBlockStateChange?: (arg0: BlockComponentBlockStateChangeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在特定方块被破坏时调用。方块变种的变化不会触发此事件。填充命令和设置方块命令仅在破坏模式下改变方块变种时才会触发此事件。具有"minecraft:replaceable"组件的自定义方块在被替换时不会触发此事件。
     *
     */
    onBreak?: (arg0: BlockComponentBlockBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体向世界中的此方块触发事件时调用。
     *
     */
    onEntity?: (arg0: BlockComponentEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体落到此自定义组件绑定的方块上时调用。
     *
     */
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在放置此自定义组件绑定的方块时调用。
     *
     */
    onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters) => void;
    onPlayerBreak?: (arg0: BlockComponentPlayerBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在玩家成功与此自定义组件绑定的方块交互时调用。
     *
     */
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在方块随机刻时调用。
     *
     */
    onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在方块具有`minecraft:redstone_consumer`组件且红石信号强度大于等于组件的`min_power`字段时，引擎触发'onRedstoneUpdate'事件时调用。
     *
     */
    onRedstoneUpdate?: (arg0: BlockComponentRedstoneUpdateEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体离开此自定义组件绑定的方块时调用。
     *
     */
    onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体踏上此自定义组件绑定的方块时调用。
     *
     */
    onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在方块刻时调用。
     *
     */
    onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters) => void;
}