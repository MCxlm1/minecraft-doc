/**
 * 执行自定义命令所需的权限等级。
 */
export enum CommandPermissionLevel {
    /**
     * @remarks
     * 任何实体都可以执行此等级。
     *
     */
    Any = 0,
    /**
     * @remarks
     * 任何操作员都可以执行此命令，包括命令方块。
     *
     */
    GameDirectors = 1,
    /**
     * @remarks
     * 任何操作员都可以执行此命令，但不包括命令方块。
     *
     */
    Admin = 2,
    /**
     * @remarks
     * 任何服务器主机都可以执行此命令。
     *
     */
    Host = 3,
    /**
     * @remarks
     * 只有专用服务器可以执行此命令。
     *
     */
    Owner = 4,
}