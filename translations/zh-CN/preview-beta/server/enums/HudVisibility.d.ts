/**
 * 用于指定如何处理 HUD 元素可见性的枚举。
 */
export enum HudVisibility {
    /**
     * @remarks
     * 指定该 HUD 元素应被隐藏。
     *
     */
    Hide = 0,
    /**
     * @remarks
     * 指定该 HUD 元素应重置为其默认状态（虽然大多数 HUD 元素可见，但部分 HUD 元素可被玩家通过设置隐藏）。
     *
     */
    Reset = 1,
}