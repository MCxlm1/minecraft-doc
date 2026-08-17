/**
 * 描述脚本事件的来源。
 */
export enum ScriptEventSource {
    /**
     * @remarks
     * 脚本事件源自方块，例如命令方块。
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * 脚本事件源自实体，例如玩家、命令方块矿车或动画控制器。
     *
     */
    Entity = 'Entity',
    /**
     * @remarks
     * 脚本事件源自 NPC 对话。
     *
     */
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * 脚本事件源自服务器端，例如来自 runCommand API 调用或专用服务器控制台。
     *
     */
    Server = 'Server',
}