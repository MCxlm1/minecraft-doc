/**
 * 用于访问所有可用的维度类型，
 * 目前仅适用于原版维度。
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * 使用字符串标识符获取维度类型。
     * 目前仅适用于原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @param dimensionTypeId - 维度类型的字符串标识符。
     * @returns 如果找到维度类型，则返回 DimensionType 对象，否则返回 undefined。
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * 获取所有维度类型的数组。
     * 目前仅适用于原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     * @returns 包含所有维度类型的 DimensionType 数组。
     */
    static getAll(): DimensionType[];
}