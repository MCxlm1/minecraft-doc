/**
 * Describes a particular seating position on this rideable
 * entity.
 */
export class Seat {
    /**
     * If specified, contains a forced rotation that the riders in
     * this seat are facing.
     */
    readonly "lockRiderRotation": number;
    /**
     * A maximum number of riders that this seat can support.
     */
    readonly "maxRiderCount": number;
    /**
     * A minimum number of riders that can be placed in this seat
     * position, if this seat is to be filled.
     */
    readonly "minRiderCount": number;
    /**
     * Physical location of this seat, relative to the entity's
     * location.
     */
    readonly "position": Location;
    protected constructor();
}
