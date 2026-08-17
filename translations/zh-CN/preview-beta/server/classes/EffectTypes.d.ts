/**
 * 表示一种可以应用于实体的效果类型，如中毒。
 */
export class EffectTypes {
    private constructor();
    /**
     * @remarks
     * 给定标识符对应的效果类型。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @param identifier
     * 效果的标识符。
     * @returns
     * 给定标识符对应的效果类型；如果效果不存在，
     * 则返回 undefined。
     */
    static get(identifier: string): EffectType | undefined;
    /**
     * @remarks
     * 获取所有效果。
     *
     * This function can't be called in restricted-execution mode.
     *
     * @returns
     * 所有效果的列表。
     */
    static getAll(): EffectType[];
}