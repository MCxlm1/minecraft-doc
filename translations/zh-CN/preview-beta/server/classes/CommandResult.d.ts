/**
 * 包含命令执行结果返回数据。
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * 如果命令作用于多个实体、方块或物品，此值返回该命令成功应用的次数。
     *
     */
    readonly successCount: number;
}