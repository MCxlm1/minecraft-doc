/**
 * Contains information related to a script watchdog
 * termination.
 */
export class BeforeWatchdogTerminateEvent {
    /**
     * If set to true, cancels the termination of the script
     * runtime. Note that depending on server configuration
     * settings, cancellation of the termination may not be
     * allowed.
     */
    "cancel": boolean;
    /**
     * Contains the reason why a script runtime is to be
     * terminated.
     */
    readonly "terminateReason": WatchdogTerminateReason;
    protected constructor();
}
