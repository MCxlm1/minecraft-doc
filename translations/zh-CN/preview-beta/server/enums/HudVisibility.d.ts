/**
 * 枚举，用于指定如何处理 HUD 元素的可见性。
 */
export enum HudVisibility {
    /**
     * @remarks
     * 指定应隐藏此 HUD 元素。
     *
     */
    Hide = 0,
    /**
     * @remarks
     * 指定此 HUD 元素应重置为其默认状态（虽然大多数 HUD 元素可见，但部分 HUD 元素可由玩家通过设置隐藏）。
     *
     */
    Reset = 1,
}