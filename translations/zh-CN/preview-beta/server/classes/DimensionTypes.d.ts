/**
 * 用于访问所有可用的维度类型。当前
 * 仅适用于原版维度。
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * 通过字符串标识符检索维度类型。
     * 当前仅适用于原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param dimensionTypeId 维度类型的字符串标识符。
     * @returns 返回对应的维度类型，若未找到则返回 undefined。
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * 检索所有维度类型的数组。当前仅
     * 适用于原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @returns 所有维度类型的数组。
     */
    static getAll(): DimensionType[];
}