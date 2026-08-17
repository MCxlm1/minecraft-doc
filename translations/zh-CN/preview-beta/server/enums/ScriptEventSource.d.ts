/**
 * 描述脚本事件起源于何处。
 */
export enum ScriptEventSource {
    /**
     * @remarks
     * 脚本事件源于方块，如命令方块。
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * 脚本事件源于实体，如玩家、命令方块矿车或动画控制器。
     *
     */
    Entity = 'Entity',
    /**
     * @remarks
     * 脚本事件源于NPC对话。
     *
     */
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * 脚本事件源于服务器，如来自 runCommand API 调用或专用服务器控制台。
     *
     */
    Server = 'Server',
}