/**
 * 提供一组在 Minecraft 更广泛的脚本系统内触发的事件。
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * 当 /scriptevent 命令被设置时触发的事件。这提供了一种方式，让命令和其他系统能够触发脚本内的行为。
     * 此属性可在早期执行模式下读取。
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}