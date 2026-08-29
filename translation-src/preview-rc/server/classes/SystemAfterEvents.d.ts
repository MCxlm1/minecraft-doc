/**
 * Provides a set of events that fire within the broader
 * scripting system within Minecraft.
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * An event that fires when a /scriptevent command is set. This
     * provides a way for commands and other systems to trigger
     * behavior within script.
     *
     * This property can be read in early-execution mode.
     *
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}
