/**
 * An event that fires as players enter chat messages.
 */
export class ChatEvent {
    /**
     * Message that is being broadcast. In a beforeChat event
     * handler, _message_ can be updated with edits before the
     * message is displayed to players.
     */
    "message": string;
    /**
     * Player that sent the chat message.
     */
    "sender": Player;
    /**
     * If true, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     */
    "sendToTargets": boolean;
    /**
     * List of players that will receive this message.
     */
    "targets": Player[];
    protected constructor();
}
