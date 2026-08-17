/**
 * @beta
 * 包含与脚本看门狗终止相关的信息。
 */
export class WatchdogTerminateBeforeEvent {
    private constructor();
    /**
     * @remarks
     * 如果设置为 true，则取消脚本运行时的终止。请注意，根据服务器配置设置，可能不允许取消终止。
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * 包含脚本运行时将被终止的原因。
     *
     */
    readonly terminateReason: WatchdogTerminateReason;
}