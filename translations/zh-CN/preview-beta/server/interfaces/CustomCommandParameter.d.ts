/**
 * 自定义命令所期望的每个参数的定义。
 */
export interface CustomCommandParameter {
    /**
     * @beta
     * @remarks
     * 当 {@link CustomCommandParamType} 为 'Enum' 时，可用于引用枚举名称。
     * 允许参数名称与枚举名称不同。
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