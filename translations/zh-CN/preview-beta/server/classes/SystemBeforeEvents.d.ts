/**
 * 一组在实际动作发生前触发的事件。在大多数情况下，您可以取消或修改即将发生的事件。注意，在before事件中，任何修改游戏状态的API将无法工作并会抛出错误。
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
     * 当脚本看门狗关闭服务器时触发。可能是由于使用过多内存，或导致显著减速或挂起。要阻止关闭，请将事件的cancel属性设置为true。
     *
     * 此属性可在早期执行模式下读取。
     *
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}