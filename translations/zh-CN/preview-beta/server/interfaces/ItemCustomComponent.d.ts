/**
 * 包含将为物品引发的一组事件。
 * 此对象必须使用 ItemComponentRegistry 进行绑定。
 */
export interface ItemCustomComponent {
    /**
     * @remarks
     * 当包含此组件的物品正在击中实体并即将承受耐久度伤害时，将调用此函数。
     *
     * @param arg0 耐久度伤害前事件对象。
     * @param arg1 自定义组件参数。
     */
    onBeforeDurabilityDamage?: (
        arg0: ItemComponentBeforeDurabilityDamageEvent,
        arg1: CustomComponentParameters,
    ) => void;
    /**
     * @remarks
     * 当包含此组件的物品的使用时长完成时，将调用此函数。
     *
     * @param arg0 完成使用事件对象。
     * @param arg1 自定义组件参数。
     */
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被实体吃掉时，将调用此函数。
     *
     * @param arg0 消耗事件对象。
     * @param arg1 自定义组件参数。
     */
    onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被用来击中另一个实体时，将调用此函数。
     *
     * @param arg0 击中实体事件对象。
     * @param arg1 自定义组件参数。
     */
    onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被用来挖掘方块时，将调用此函数。
     *
     * @param arg0 挖掘方块事件对象。
     * @param arg1 自定义组件参数。
     */
    onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被玩家使用时，将调用此函数。
     *
     * @param arg0 使用事件对象。
     * @param arg1 自定义组件参数。
     */
    onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被用在方块上时，将调用此函数。
     *
     * @param arg0 在方块上使用事件对象。
     * @param arg1 自定义组件参数。
     */
    onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;
}