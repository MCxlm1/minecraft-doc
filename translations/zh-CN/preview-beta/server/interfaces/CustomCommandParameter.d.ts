/**
 * 自定义命令每个参数
 * 的定义。
 */
export interface CustomCommandParameter {
    /**
     * @beta
     * @remarks
     * 可用于引用枚举名称，当 {@link
     * CustomCommandParamType} 为 'Enum' 时。允许参数名称
     * 与枚举名称不同。
     *
     */
    enumName?: string;
    /**
     * @remarks
     * 参数在命令行中显示的名称。
     *
     */
    name: string;
    /**
     * @remarks
     * 参数的数据类型。
     *
     */
    type: CustomCommandParamType;
}