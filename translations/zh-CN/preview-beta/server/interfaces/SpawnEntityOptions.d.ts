/**
 * 包含生成实体时的附加选项。
 */
export interface SpawnEntityOptions {
    /**
     * @remarks
     * 可选的布尔值，决定此实体是否应保留在游戏世界中。持久化可防止实体自动消失。
     *
     */
    initialPersistence?: boolean;
    /**
     * @remarks
     * 可选的初始旋转角度（以度为单位），在实体生成时设置。
     *
     */
    initialRotation?: number;
    /**
     * @remarks
     * 可选的生成事件，在实体生成后发送给实体。
     *
     */
    spawnEvent?: string;
}