/**
 * 包含有关已更改的 world.gameRules 属性的信息。
 */
export class GameRuleChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 已更改的 world.gameRules 属性对应的规则标识符。
     *
     */
    readonly rule: GameRule;
    /**
     * @remarks
     * 更改后的 world.gameRules 属性的值。
     *
     */
    readonly value: boolean | number;
}