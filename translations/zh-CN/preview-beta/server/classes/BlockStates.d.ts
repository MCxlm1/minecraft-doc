/**
 * 枚举所有 {@link BlockStateType}。
 */
export class BlockStates {
    private constructor();
    /**
     * @remarks
     * 检索特定的方块状态实例。
     *
     * @param stateName - 要检索的方块状态的名称。
     * @returns
     * 如果找到，返回 {@link Block} 状态实例。如果未找到方块状态实例，则返回 undefined。
     */
    static get(stateName: string): BlockStateType | undefined;
    /**
     * @remarks
     * 检索所有可用方块状态的集合。
     *
     * @returns 所有可用方块状态的数组。
     */
    static getAll(): BlockStateType[];
}