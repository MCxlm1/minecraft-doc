/**
 * 谁执行了命令。
 */
export enum CustomCommandSource {
    /**
     * @remarks
     * 命令来源于命令方块。
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * 命令来源于实体或玩家。
     *
     */
    Entity = 'Entity',
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * 命令来源于服务器。
     *
     */
    Server = 'Server',
}