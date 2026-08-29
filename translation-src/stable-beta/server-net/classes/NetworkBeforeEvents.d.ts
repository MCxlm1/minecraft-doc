export class NetworkBeforeEvents {
    private constructor();
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly packetReceive: PacketReceiveBeforeEventSignal;
    /**
     * @remarks
     * @privilege early-execution-readable - This property can be read in early-execution mode.
     *
     */
    readonly packetSend: PacketSendBeforeEventSignal;
}
