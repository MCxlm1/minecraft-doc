/**
 * 一组在实际动作发生之前触发的事件。
 * 在大多数情况下，你有可能取消或修改
 * 即将发生的事件。请注意，在 before 事件中，
 * 任何修改游戏状态的 API 都不会生效，
 * 并且会抛出错误。
 */
export class SystemBeforeEvents {
    private constructor();
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly shutdown: ShutdownBeforeEventSignal;
    /**
     * @remarks
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly startup: StartupBeforeEventSignal;
    /**
     * @beta
     * @remarks
     * 当脚本看门狗关闭服务器时触发。
     * 这可能是由于使用了过多内存，或导致了
     * 严重的减速或挂起。
     * 要阻止关闭，请将事件的 cancel 属性设置为
     * true。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}