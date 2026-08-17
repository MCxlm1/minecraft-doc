/**
 * 包含一组将为物品触发的事件。
 * 此对象必须使用 ItemComponentRegistry 进行绑定。
 */
export interface ItemCustomComponent {
    /**
     * @remarks
     * 当包含此组件的物品正在击中一个实体并即将承受耐久伤害时，将调用此函数。
     *
     */
    onBeforeDurabilityDamage?: (
        arg0: ItemComponentBeforeDurabilityDamageEvent,
        arg1: CustomComponentParameters,
    ) => void;
    /**
     * @remarks
     * 当包含此组件的物品的使用持续时间完成时，将调用此函数。
     *
     */
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被实体食用时，将调用此函数。
     *
     */
    onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被用于击打另一个实体时，将调用此函数。
     *
     */
    onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被用于挖掘一个方块时，将调用此函数。
     *
     */
    onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品被玩家使用时，将调用此函数。
     *
     */
    onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * 当包含此组件的物品在一个方块上使用时，将调用此函数。
     *
     */
    onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;
}