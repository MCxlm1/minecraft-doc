/**
 * 包含一组附加变量值，用于进一步定义渲染和动画的工作方式。
 */
export class MolangVariableMap {
    /**
     * @remarks
     * 将以下变量添加到 Molang：
     * - `<variable_name>.r` - 红色颜色值 [0-1]
     * - `<variable_name>.g` - 绿色颜色值 [0-1]
     * - `<variable_name>.b` - 蓝色颜色值 [0-1]
     *
     * @param variableName - 要设置的变量名称。
     * @param color - 要设置的 RGB 颜色值。
     * @throws 此函数可能会抛出错误。
     */
    setColorRGB(variableName: string, color: RGB): void;
    /**
     * @remarks
     * 将以下变量添加到 Molang：
     * - `<variable_name>.r` - 红色颜色值 [0-1]
     * - `<variable_name>.g` - 绿色颜色值 [0-1]
     * - `<variable_name>.b` - 蓝色颜色值 [0-1]
     * - `<variable_name>.a` - Alpha（透明度）颜色值 [0-1]
     *
     * @param variableName - 要设置的变量名称。
     * @param color - 要设置的 RGBA 颜色值。
     * @throws 此函数可能会抛出错误。
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /**
     * @remarks
     * 在 Molang 变量映射中设置一个数值（小数）。
     *
     * @param variableName - 要设置的浮点数变量名称。
     * @param number - 要为该 Molang 变量设置的值。
     * @throws 此函数可能会抛出错误。
     */
    setFloat(variableName: string, number: number): void;
    /**
     * @remarks
     * 将以下变量添加到 Molang：
     * - `<variable_name>.speed` - 提供的速度数值
     * - `<variable_name>.direction_x` - 提供的 {@link Vector3} 中的 X 值
     * - `<variable_name>.direction_y` - 提供的 {@link Vector3} 中的 Y 值
     * - `<variable_name>.direction_z` - 提供的 {@link Vector3} 中的 Z 值
     *
     * @param variableName - 要设置的变量名称。
     * @param speed - 要设置的速度数值。
     * @param direction - 要设置的方向 {@link Vector3}。
     * @throws 此函数可能会抛出错误。
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /**
     * @remarks
     * 将以下变量添加到 Molang：
     * - `<variable_name>.x` - 提供的 {@link Vector3} 中的 X 值
     * - `<variable_name>.y` - 提供的 {@link Vector3} 中的 Y 值
     * - `<variable_name>.z` - 提供的 {@link Vector3} 中的 Z 值
     *
     * @param variableName - 要设置的变量名称。
     * @param vector - 要设置的 {@link Vector3} 向量。
     * @throws 此函数可能会抛出错误。
     */
    setVector3(variableName: string, vector: Vector3): void;
}