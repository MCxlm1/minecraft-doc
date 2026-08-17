/**
 * 表示方块实例的可配置状态值。
 * 例如，楼梯的朝向方向可作为方块状态访问。
 */
export class BlockStateType {
    private constructor();
    /**
     * @remarks
     * 方块属性的标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 该方块属性的一组有效值。
     *
     */
    readonly validValues: (boolean | number | string)[];
}