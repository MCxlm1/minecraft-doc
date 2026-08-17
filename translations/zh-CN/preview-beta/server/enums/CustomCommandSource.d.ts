/**
 * 命令的执行者。
 */
export enum CustomCommandSource {
    /**
     * @remarks
     * 命令来自命令方块。
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * 命令来自实体或玩家。
     *
     */
    Entity = 'Entity',
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * 命令来自服务器。
     *
     */
    Server = 'Server',
}