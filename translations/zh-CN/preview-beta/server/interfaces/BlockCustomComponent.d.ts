/**
 * 包含一组将为方块触发的事件。
 * 必须使用BlockRegistry绑定此对象。
 */
export interface BlockCustomComponent {
    /**
     * @remarks
     * 此函数将在玩家放置方块前被调用。
     *
     */
    beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent, arg1: CustomComponentParameters) => void;
    onBlockStateChange?: (arg0: BlockComponentBlockStateChangeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在特定方块被破坏时被调用。
     * 方块变种的变化不会触发此事件。
     * 仅在破坏模式下使用填充命令和设置方块命令更改方块变种时，才会触发此事件。
     * 具有“minecraft:replaceable”组件的自定义方块在被替换时不会触发此事件。
     *
     */
    onBreak?: (arg0: BlockComponentBlockBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体向世界中的该方块触发事件时被调用。
     *
     */
    onEntity?: (arg0: BlockComponentEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体落到此自定义组件所绑定的方块上时被调用。
     *
     */
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在放置此自定义组件所绑定的方块时被调用。
     *
     */
    onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters) => void;
    onPlayerBreak?: (arg0: BlockComponentPlayerBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在玩家成功与此自定义组件所绑定的方块交互时被调用。
     *
     */
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在方块随机刻时被调用。
     *
     */
    onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 如果方块具有`minecraft:redstone_consumer`组件且红石信号强度大于等于该组件的`min_power`字段，当发生“onRedstoneUpdate”引擎事件时，此函数将被调用。
     *
     */
    onRedstoneUpdate?: (arg0: BlockComponentRedstoneUpdateEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体离开此自定义组件所绑定的方块时被调用。
     *
     */
    onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体踏入此自定义组件所绑定的方块时被调用。
     *
     */
    onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在方块刻时被调用。
     *
     */
    onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters) => void;
}