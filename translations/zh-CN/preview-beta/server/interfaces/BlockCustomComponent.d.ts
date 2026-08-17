/**
 * 包含一组将为方块触发的事件。
 * 此对象必须使用 BlockRegistry 进行绑定。
 */
export interface BlockCustomComponent {
    /**
     * @remarks
     * 此函数将在玩家放置方块前被调用。
     * @param arg0 玩家放置方块前的事件对象。
     * @param arg1 自定义组件参数。
     */
    beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @param arg0 方块状态变更事件对象。
     * @param arg1 自定义组件参数。
     */
    onBlockStateChange?: (arg0: BlockComponentBlockStateChangeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在某个方块被破坏时被调用。
     * 方块置换的变化不会触发此事件。
     * Fill 命令和 SetBlock 命令仅在破坏模式下更改方块置换时才能触发此事件。
     * 带有“minecraft:replaceable”组件的自定义方块在被替换时不会触发此事件。
     * @param arg0 方块破坏事件对象。
     * @param arg1 自定义组件参数。
     */
    onBreak?: (arg0: BlockComponentBlockBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体在世界中向此方块触发事件时被调用。
     * @param arg0 实体事件对象。
     * @param arg1 自定义组件参数。
     */
    onEntity?: (arg0: BlockComponentEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体落到此自定义组件所绑定的方块上时被调用。
     * @param arg0 实体落到方块上的事件对象。
     * @param arg1 自定义组件参数。
     */
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在绑定了此自定义组件的方块被放置时被调用。
     * @param arg0 方块放置事件对象。
     * @param arg1 自定义组件参数。
     */
    onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters) => void;
    /**
     * @param arg0 玩家破坏方块事件对象。
     * @param arg1 自定义组件参数。
     */
    onPlayerBreak?: (arg0: BlockComponentPlayerBreakEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在玩家成功与绑定了此自定义组件的方块交互时被调用。
     * @param arg0 玩家交互事件对象。
     * @param arg1 自定义组件参数。
     */
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在方块随机刻（random tick）时被调用。
     * @param arg0 随机刻事件对象。
     * @param arg1 自定义组件参数。
     */
    onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在以下情况被调用：当方块具有 `minecraft:redstone_consumer` 组件且红石信号强度大于等于该组件的 `min_power` 字段时，发生“onRedstoneUpdate”引擎事件。
     * @param arg0 红石更新事件对象。
     * @param arg1 自定义组件参数。
     */
    onRedstoneUpdate?: (arg0: BlockComponentRedstoneUpdateEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体离开此自定义组件所绑定的方块时被调用。
     * @param arg0 实体离开方块事件对象。
     * @param arg1 自定义组件参数。
     */
    onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在实体踏上此自定义组件所绑定的方块时被调用。
     * @param arg0 实体踏上方块事件对象。
     * @param arg1 自定义组件参数。
     */
    onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 此函数将在方块刻（tick）时被调用。
     * @param arg0 方块刻事件对象。
     * @param arg1 自定义组件参数。
     */
    onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters) => void;
}