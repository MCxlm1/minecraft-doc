/**
 * 表示一种效果类型 - 如毒药 - 可以应用到实体上。
 */
export class EffectType {
    private constructor();
    /**
     * @remarks
     * 此效果类型的标识符名称。
     *
     * @returns
     * 效果类型的标识符。
     */
    getName(): string;
}