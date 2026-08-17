/**
 * 包含一组附加变量值，用于进一步
 * 定义渲染和动画的工作方式。
 */
export class MolangVariableMap {
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.r` - 红色值 [0-1]
     * - `<variable_name>.g` - 绿色值 [0-1]
     * - `<variable_name>.b` - 蓝色值 [0-1]
     *
     * @param variableName
     * 要设置的变量名称。
     * @param color
     * RGB 颜色值。
     * @throws 此函数可能抛出错误。
     */
    setColorRGB(variableName: string, color: RGB): void;
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.r` - 红色值 [0-1]
     * - `<variable_name>.g` - 绿色值 [0-1]
     * - `<variable_name>.b` - 蓝色值 [0-1]
     * - `<variable_name>.a` - Alpha（透明度）颜色值
     * [0-1]
     *
     * @param variableName
     * 要设置的变量名称。
     * @param color
     * RGBA 颜色值。
     * @throws 此函数可能抛出错误。
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /**
     * @remarks
     * 在 Molang 变量映射中设置一个数值（小数）。
     *
     * @param variableName
     * 要设置的基于浮点数的变量名称。
     * @param number
     * 要设置的基于 Molang 的变量值。
     * @throws 此函数可能抛出错误。
     */
    setFloat(variableName: string, number: number): void;
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.speed` - 提供的速度值
     * - `<variable_name>.direction_x` - 来自所提供 {@link
     * Vector3} 的 X 值
     * - `<variable_name>.direction_y` - 来自所提供 {@link
     * Vector3} 的 Y 值
     * - `<variable_name>.direction_z` - 来自所提供 {@link
     * Vector3} 的 Z 值
     *
     * @param variableName
     * 要设置的变量名称。
     * @param speed
     * 速度值。
     * @param direction
     * 方向向量。
     * @throws 此函数可能抛出错误。
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.x` - 来自所提供 {@link Vector3}
     * 的 X 值
     * - `<variable_name>.y` - 来自所提供 {@link Vector3}
     * 的 Y 值
     * - `<variable_name>.z` - 来自所提供 {@link Vector3}
     * 的 Z 值
     *
     * @param variableName
     * 要设置的变量名称。
     * @param vector
     * 三维向量。
     * @throws 此函数可能抛出错误。
     */
    setVector3(variableName: string, vector: Vector3): void;
}