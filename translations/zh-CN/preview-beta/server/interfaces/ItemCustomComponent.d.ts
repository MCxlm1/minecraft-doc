/**
 * 包含一组将为物品引发的事件。必须使用 ItemComponentRegistry 绑定此对象。
 */
export interface ItemCustomComponent {
    /**
     * @remarks
     * 当包含此组件的物品击中实体并即将承受耐久度伤害时，将调用此函数。
     *
     * @param arg0 - 本次耐久度伤害事件的对象。
     * @param arg1 - 自定义组件的参数。
     */
    onBeforeDurabilityDamage?: (
        arg0: ItemComponentBeforeDurabilityDamageEvent,
        arg1: CustomComponentParameters,
    ) => void;
    /**
     * @remarks
     * 当包含此组件的物品完成使用持续时间时，将调用此函数。
     *
     * @param arg0 - 完成使用事件的对象。
     * @param arg1 - 自定义组件的参数。
     */
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当实体吃掉包含此组件的物品时，将调用此函数。
     *
     * @param arg0 - 食物消耗事件的对象。
     * @param arg1 - 自定义组件的参数。
     */
    onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当使用包含此组件的物品击中另一个实体时，将调用此函数。
     *
     * @param arg0 - 击中实体事件的对象。
     * @param arg1 - 自定义组件的参数。
     */
    onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当使用包含此组件的物品挖掘方块时，将调用此函数。
     *
     * @param arg0 - 挖掘方块事件的对象。
     * @param arg1 - 自定义组件的参数。
     */
    onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当玩家使用包含此组件的物品时，将调用此函数。
     *
     * @param arg0 - 使用事件的对象。
     * @param arg1 - 自定义组件的参数。
     */
    onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当在方块上使用包含此组件的物品时，将调用此函数。
     *
     * @param arg0 - 在方块上使用事件的对象。
     * @param arg1 - 自定义组件的参数。
     */
    onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;
}