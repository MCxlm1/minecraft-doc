/**
 * 枚举所有 {@link BlockStateType}。
 */
export class BlockStates {
    private constructor();
    /**
     * @remarks
     * 获取一个特定的方块状态实例。
     *
     * @param stateName - 要获取的方块状态名称。
     * @returns
     * 如果找到，返回该 {@link Block} 的状态实例。如果未找到，返回 undefined。
     */
    static get(stateName: string): BlockStateType | undefined;
    /**
     * @remarks
     * 获取所有可用方块状态的集合。
     *
     * @returns
     * 返回所有可用方块状态的数组。
     */
    static getAll(): BlockStateType[];
}