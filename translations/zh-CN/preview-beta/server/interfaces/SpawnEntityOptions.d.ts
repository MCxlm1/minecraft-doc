/**
 * 包含生成实体的附加选项。
 */
export interface SpawnEntityOptions {
    /**
     * @remarks
     * 可选的布尔值，决定此实体是否应在游戏世界中持久存在。持久性可防止实体自动消失。
     *
     */
    initialPersistence?: boolean;
    /**
     * @remarks
     * 可选初始旋转角度（以度为单位），在实体生成时设置。
     *
     */
    initialRotation?: number;
    /**
     * @remarks
     * 可选生成事件，在实体生成后发送给实体。
     *
     */
    spawnEvent?: string;
}