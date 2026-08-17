/**
 * 用于访问所有可用的维度类型。目前仅适用于原版维度。
 */
export class DimensionTypes {
    private constructor();
    /**
     * @param dimensionTypeId - 要检索的维度类型的标识符。
     * @returns 返回对应的维度类型，如果未找到则返回undefined。
     * @remarks
     * 使用基于字符串的标识符检索维度类型。目前仅适用于原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @returns 返回所有维度类型的数组。
     * @remarks
     * 检索所有维度类型的数组。目前仅适用于原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     */
    static getAll(): DimensionType[];
}