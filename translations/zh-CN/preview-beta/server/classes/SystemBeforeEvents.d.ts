/**
 * 一组在实际动作发生之前触发的事件。在
 * 大多数情况下，你可以取消或修改
 * 即将发生的事件。请注意，在before事件中，任何
 * 修改游戏状态的API都将无法运行并会抛出
 * 错误。
 */
export class SystemBeforeEvents {
    private constructor();
    /**
     * @remarks
     * 此属性可以在早期执行模式下读取。
     *
     */
    readonly shutdown: ShutdownBeforeEventSignal;
    /**
     * @remarks
     * 此属性可以在早期执行模式下读取。
     *
     */
    readonly startup: StartupBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 当脚本看门狗关闭服务器时触发。这
     * 可能是因为使用了过多内存，或导致了
     * 显著的缓慢或挂起。
     * 要防止关闭，请将事件的cancel属性设置为
     * true。
     *
     * 此属性可以在早期执行模式下读取。
     *
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}