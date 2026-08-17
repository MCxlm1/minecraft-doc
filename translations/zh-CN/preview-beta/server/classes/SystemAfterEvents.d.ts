/**
 * 提供一组在 Minecraft 更广泛的脚本系统内
 * 触发的事件。
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * 当 /scriptevent 命令被设置时触发的事件。这
     * 为命令和其他系统提供了一种在脚本内触发
     * 行为的方式。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}