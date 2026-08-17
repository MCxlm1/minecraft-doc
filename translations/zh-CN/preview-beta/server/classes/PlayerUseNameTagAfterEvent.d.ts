/**
 * @beta
 * 包含当玩家使用命名名称标签物品成功为实体命名时的相关信息。
 */
export class PlayerUseNameTagAfterEvent {
    private constructor();
    /**
     * @remarks
     * 被玩家命名的实体。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    entityNamed: Entity;
    /**
     * @remarks
     * 玩家赋予该实体的新名称。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    newName: string;
    /**
     * @remarks
     * 使用名称标签的玩家句柄。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    player: Player;
    /**
     * @remarks
     * 玩家使用名称标签之前实体的旧名称。如果实体之前未被命名，则为 undefined。
     *
     * This property can't be edited in restricted-execution mode.
     *
     */
    previousName?: string;
}