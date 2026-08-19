/**
 * @rc
 * Provides duration and playback information for a sound whose
 * definition declares a duration.
 */
export class SoundDurationInfo {
    private constructor();
    /**
     * @remarks
     * Gets the total duration of the sound in seconds.
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * Gets whether the sound is still being tracked.
     *
     */
    readonly isActive: boolean;
    /**
     * @remarks
     * Returns the current playback position within the sound, in
     * seconds, measured from the beginning of the sound.
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @returns
     * Current playback position in seconds, measured from the
     * beginning of the sound.
     */
    getPlaybackPosition(): number;
}
