/**
 * Contains a set of events that are available across the scope
 * of the Minecraft add-on system.
 */
export class SystemEvents {
    /**
     * This event fires before a the performance watchdog
     * terminates scripting execution due to exceeding a
     * performance boundary. Depending on the configuration of the
     * runtime environment, this event can be canceled. For
     * example, on certain dedicated server environments the
     * ability to override termination events may be disabled.
     */
    readonly "beforeWatchdogTerminate": BeforeWatchdogTerminateEventSignal;
    protected constructor();
}
