/**
 * 包含一组额外的变量值，用于进一步定义渲染和动画的工作原理。
 */
export class MolangVariableMap {
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.r` - 红色颜色值 [0-1]
     * - `<variable_name>.g` - 绿色颜色值 [0-1]
     * - `<variable_name>.b` - 蓝色颜色值 [0-1]
     *
     * @param variableName 变量名称。
     * @param color RGB 颜色对象，包含红、绿、蓝颜色值。
     * @throws
     * 此函数可能抛出错误。
     */
    setColorRGB(variableName: string, color: RGB): void;
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.r` - 红色颜色值 [0-1]
     * - `<variable_name>.g` - 绿色颜色值 [0-1]
     * - `<variable_name>.b` - 蓝色颜色值 [0-1]
     * - `<variable_name>.a` - Alpha（透明度）颜色值 [0-1]
     *
     * @param variableName 变量名称。
     * @param color RGBA 颜色对象，包含红、绿、蓝和 Alpha（透明度）颜色值。
     * @throws
     * 此函数可能抛出错误。
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /**
     * @remarks
     * 在 Molang 变量地图中设置一个数值（十进制）变量。
     *
     * @param variableName 要设置的浮点数变量的名称。
     * @param number 要设置的 Molang 变量的值。
     * @throws
     * 此函数可能抛出错误。
     */
    setFloat(variableName: string, number: number): void;
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.speed` - 提供的速度数值
     * - `<variable_name>.direction_x` - 由提供的 {@link Vector3} 的 X 值
     * - `<variable_name>.direction_y` - 由提供的 {@link Vector3} 的 Y 值
     * - `<variable_name>.direction_z` - 由提供的 {@link Vector3} 的 Z 值
     *
     * @param variableName 变量名称。
     * @param speed 速度数值。
     * @param direction 方向向量。
     * @throws
     * 此函数可能抛出错误。
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /**
     * @remarks
     * 向 Molang 添加以下变量：
     * - `<variable_name>.x` - 由提供的 {@link Vector3} 的 X 值
     * - `<variable_name>.y` - 由提供的 {@link Vector3} 的 Y 值
     * - `<variable_name>.z` - 由提供的 {@link Vector3} 的 Z 值
     *
     * @param variableName 变量名称。
     * @param vector 三维向量。
     * @throws
     * 此函数可能抛出错误。
     */
    setVector3(variableName: string, vector: Vector3): void;
}