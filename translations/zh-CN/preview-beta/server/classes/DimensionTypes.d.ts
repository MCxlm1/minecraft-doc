/**
 * 用于访问所有可用的维度类型。目前仅适用于原版（Vanilla）维度。
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * 使用字符串标识符检索维度类型。目前仅适用于原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * 检索所有维度类型的数组。目前仅适用于原版维度。
     *
     * 此函数可在早期执行模式下调用。
     *
     */
    static getAll(): DimensionType[];
}