/**
 * 包含将针对某个物品引发的一组事件。
 * 此对象必须使用 ItemComponentRegistry 进行绑定。
 */
export interface ItemCustomComponent {
    /**
     * @remarks
     * 当包含此组件的物品击中实体并即将损失耐久度时，将调用此函数。
     *
     * @param arg0 - 耐久度损失前的物品组件事件。
     * @param arg1 - 自定义组件的参数。
     */
    onBeforeDurabilityDamage?: (
        arg0: ItemComponentBeforeDurabilityDamageEvent,
        arg1: CustomComponentParameters,
    ) => void;
    /**
     * @remarks
     * 当包含此组件的物品使用时长完成时，将调用此函数。
     *
     * @param arg0 - 物品使用完成事件。
     * @param arg1 - 自定义组件的参数。
     */
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被实体食用时，将调用此函数。
     *
     * @param arg0 - 物品食用事件。
     * @param arg1 - 自定义组件的参数。
     */
    onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品用于击中另一个实体时，将调用此函数。
     *
     * @param arg0 - 物品击中实体事件。
     * @param arg1 - 自定义组件的参数。
     */
    onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品用于挖掘方块时，将调用此函数。
     *
     * @param arg0 - 物品挖掘方块事件。
     * @param arg1 - 自定义组件的参数。
     */
    onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被玩家使用时，将调用此函数。
     *
     * @param arg0 - 物品使用事件。
     * @param arg1 - 自定义组件的参数。
     */
    onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被用在方块上时，将调用此函数。
     *
     * @param arg0 - 物品在方块上使用的事件。
     * @param arg1 - 自定义组件的参数。
     */
    onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;
}