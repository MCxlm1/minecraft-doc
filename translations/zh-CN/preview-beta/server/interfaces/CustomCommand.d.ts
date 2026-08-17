/**
 * 定义自定义命令，包括名称、权限和
 * 参数。
 */
export interface CustomCommand {
    /**
     * @remarks
     * 必须启用作弊才能运行此命令。默认为
     * true。
     *
     */
    cheatsRequired?: boolean;
    /**
     * @remarks
     * 命令描述，在命令行中显示。
     *
     */
    description: string;
    /**
     * @remarks
     * 必选命令参数列表。
     *
     */
    mandatoryParameters?: CustomCommandParameter[];
    /**
     * @remarks
     * 命令的名称。需要命名空间。
     *
     */
    name: string;
    /**
     * @remarks
     * 可选命令参数列表。
     *
     */
    optionalParameters?: CustomCommandParameter[];
    /**
     * @remarks
     * 执行命令所需的权限级别。
     *
     */
    permissionLevel: CommandPermissionLevel;
}