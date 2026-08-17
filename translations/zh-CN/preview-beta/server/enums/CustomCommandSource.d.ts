/**
 * Who executed the command.
 */
export enum CustomCommandSource {
    /**
     * @remarks
     * 命令源自命令方块。
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * 命令源自实体或玩家。
     *
     */
    Entity = 'Entity',
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * 命令源自服务器。
     *
     */
    Server = 'Server',
}