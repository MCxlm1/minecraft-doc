/**
 * Represents a handle to a sound that has been played. The
 * handle is required to control the sound while it is playing
 * (for example, to call `stop`, `setVolume`, `setPitch`,
 * `fade`, or `seekTo`). Infinitely-looping sounds (started
 * with `loop: -1`) stop automatically when the last
 * `SoundInstance` reference is dropped; retain the handle for
 * as long as the sound should keep playing.
 */
export class SoundInstance {
    private constructor();
    /**
     * @remarks
     * Stops this sound instance from playing.
     *
     * This function can't be called in restricted-execution mode.
     *
     */
    stop(): void;
}
