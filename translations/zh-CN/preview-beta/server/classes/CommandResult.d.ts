/**
 * 包含命令执行结果返回的数据。
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * 如果命令作用于多个实体、方块或物品，则返回此命令成功应用的数量。
     *
     */
    readonly successCount: number;
}