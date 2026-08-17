/**
 * 返回关于 /scriptevent 命令调用的
 * 附加数据。
 */
export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    /**
     * @remarks
     * 此 ScriptEvent 命令消息的标识符。
     *
     */
    readonly id: string;
    /**
     * @remarks
     * 如果此命令是通过 NPC 发起的，则返回
     * 发起 NPC 对话的实体。
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * 随脚本事件命令传入的
     * 可选附加数据。
     *
     */
    readonly message: string;
    /**
     * @remarks
     * 如果此命令是通过方块（例如命令方块）触发的，
     * 则为源方块。
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * 如果此命令是由实体（例如 NPC）触发的，
     * 则为源实体。
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * 返回触发此命令的源类型。
     *
     */
    readonly sourceType: ScriptEventSource;
}