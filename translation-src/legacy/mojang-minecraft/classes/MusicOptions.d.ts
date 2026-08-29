/**
 * Additional configuration options for
 * {@link mojang-minecraft.World.playMusic}/{@link mojang-minecraft.World.queueMusic}
 * methods.
 */
export class MusicOptions {
    /**
     * Specifies a fade overlap for music at the end of play.
     */
    "fade": number;
    /**
     * If set to true, this music track will play repeatedly.
     */
    "loop": boolean;
    /**
     * Relative volume level of the music.
     */
    "volume": number;
}
