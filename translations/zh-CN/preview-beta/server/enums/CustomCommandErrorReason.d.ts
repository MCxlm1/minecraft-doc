/**
 * 自定义命令注册失败的原因。
 */
export enum CustomCommandErrorReason {
    /**
     * @remarks
     * 命令名称已注册。
     *
     */
    AlreadyRegistered = 'AlreadyRegistered',
    /**
     * @remarks
     * 自定义命令引用了一个尚未注册的枚举。
     *
     */
    EnumDependencyMissing = 'EnumDependencyMissing',
    /**
     * @remarks
     * 提供的自定义命令命名空间与该附加包之前的注册不匹配。
     *
     */
    NamespaceMismatch = 'NamespaceMismatch',
    /**
     * @remarks
     * 自定义命令中定义了过多的命令参数。
     *
     */
    ParameterLimit = 'ParameterLimit',
    /**
     * @remarks
     * 在世界初始化事件之后，无法访问自定义命令注册表。
     *
     */
    RegistryInvalid = 'RegistryInvalid',
    /**
     * @remarks
     * 重新加载期间不能重新定义命令参数。只有脚本闭包本身可以被更改。
     *
     */
    RegistryReadOnly = 'RegistryReadOnly',
    /**
     * @beta
     * @remarks
     * 非枚举类型的命令参数不能使用枚举名称。
     *
     */
    UnexpectedEnumName = 'UnexpectedEnumName',
}