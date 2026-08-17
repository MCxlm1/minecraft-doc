/**
 * 关于命令起源的详细信息。
 */
export class CustomCommandOrigin {
    private constructor();
    /**
     * @remarks
     * 如果此命令是通过 NPC 发起的，则返回发起 NPC 对话的实体。
     *
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * 如果此命令是通过方块（例如命令方块）触发的，则为源方块。
     *
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * 如果此命令是由实体（例如 NPC）触发的，则为源实体。
     *
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * 返回触发此命令的源类型。
     *
     */
    readonly sourceType: CustomCommandSource;
}