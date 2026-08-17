/**
 * 用于访问所有可用的维度类型。目前仅支持原版维度。
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * 通过字符串标识符检索维度类型。目前仅支持原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param dimensionTypeId - 维度类型的字符串标识符。
     * @returns 如果找到则返回维度类型，否则返回 undefined。
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * 获取所有维度类型的数组。目前仅支持原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @returns 所有可用维度类型的数组。
     */
    static getAll(): DimensionType[];
}