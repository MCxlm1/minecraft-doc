/**
 * 包含关于已更改的 world.gameRules 属性的信息。
 */
export class GameRuleChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 与已更改的 world.gameRules 属性相关的规则标识符。
     *
     */
    readonly rule: GameRule;
    /**
     * @remarks
     * 已更改后的 world.gameRules 属性的值。
     *
     */
    readonly value: boolean | number;
}