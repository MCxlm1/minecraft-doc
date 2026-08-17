/**
 * 提供一组在更广泛的
 * Minecraft 脚本系统内触发的事件。
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * 当 /scriptevent 命令被设置时触发的事件。这
     * 为命令和其他系统提供了一种在脚本中触发
     * 行为的方式。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}