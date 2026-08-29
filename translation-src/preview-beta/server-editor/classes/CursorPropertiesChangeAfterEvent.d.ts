export class CursorPropertiesChangeAfterEvent {
    private constructor();
    readonly identifier?: string;
    readonly position?: CursorPosition;
    readonly properties: CursorProperties;
}
