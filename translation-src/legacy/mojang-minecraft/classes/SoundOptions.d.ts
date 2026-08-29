/**
 * Additional configuration options for the
 * {@link mojang-minecraft.Player.playSound}/{@link mojang-minecraft.World.playSound}
 * method.
 */
export class SoundOptions {
    /**
     * Specifies a location of where to play a particular sound.
     */
    "location"?: Location;
    /**
     * Pitch adjustment level for the sound.
     */
    "pitch": number;
    /**
     * Relative volume level of the sound.
     */
    "volume": number;
}
