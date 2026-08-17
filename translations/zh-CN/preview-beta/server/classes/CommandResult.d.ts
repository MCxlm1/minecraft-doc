/**
 * 包含命令执行结果的数据。
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * 如果命令作用于多个实体、方块或物品，则返回此命令成功应用的次数。
     *
     */
    readonly successCount: number;
}