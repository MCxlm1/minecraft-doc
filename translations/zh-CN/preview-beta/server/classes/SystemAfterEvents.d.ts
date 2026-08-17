/**
 * 提供一组在Minecraft的更广泛脚本系统中触发的事件。
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * 当设置/scriptevent命令时触发的事件。这为命令和其他系统提供了一种在脚本中触发行为的方式。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}