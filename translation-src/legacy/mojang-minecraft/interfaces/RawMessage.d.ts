/**
 * An interface that describes the signature of a message that
 * is passed into a say/tell API request.
 */
export interface RawMessage {
    /**
     * A list of text objects used to build a message.
     */
    rawtext: RawMessage | string[];
    /**
     * Contains plain text to display directly. Only valid when
     * used as a sub member in a parent _rawtext_ or _with_ member.
     */
    text?: string;
    /**
     * Contains a resource pack translation identifier that can be
     * used to translate text in the player's selected language.
     */
    translate?: string;
    /**
     * A list of text object arguments that can be used to fill
     * values in the _translate_ text. Ignored when _translate_ is
     * not present.
     */
    with: RawMessage | string[];
}
