/**
 * 枚举，描述实体挥动的来源。作为 {@link PlayerSwingStartAfterEvent} 的一部分发送。
 */
export enum EntitySwingSource {
    /**
     * @remarks
     * 当实体作为攻击的一部分进行挥动时发送。
     *
     */
    Attack = 'Attack',
    /**
     * @remarks
     * 当实体作为建造动作的一部分进行挥动时发送。
     *
     */
    Build = 'Build',
    /**
     * @remarks
     * 当实体作为丢弃物品的一部分进行挥动时发送。
     *
     */
    DropItem = 'DropItem',
    /**
     * @remarks
     * 当实体作为事件响应的一部分进行挥动时发送。
     *
     */
    Event = 'Event',
    /**
     * @remarks
     * 当实体作为交互的一部分进行挥动时发送。
     *
     */
    Interact = 'Interact',
    /**
     * @remarks
     * 当实体作为挖掘动作的一部分进行挥动时发送。
     *
     */
    Mine = 'Mine',
    /**
     * @remarks
     * 当实体的挥动没有可确定的来源时发送。
     *
     */
    None = 'None',
    /**
     * @remarks
     * 当实体作为投掷物品的一部分进行挥动时发送。
     *
     */
    ThrowItem = 'ThrowItem',
    /**
     * @remarks
     * 当实体作为使用物品的一部分进行挥动时发送。
     *
     */
    UseItem = 'UseItem',
}