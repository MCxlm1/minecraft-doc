/**
 * Used to affect lighting for Vibrant Visuals
 */
export class BiomeLighting {
    private constructor();
    /**
     * @remarks
     * Resets the ambient color to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetAmbientColor(): void;
    /**
     * @remarks
     * Resets the ambient illuminance to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetAmbientIlluminance(): void;
    /**
     * @remarks
     * Resets the emissive desaturation to the value set by
     * resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetEmissiveDesaturation(): void;
    /**
     * @remarks
     * Resets the flash color to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetFlashColor(): void;
    /**
     * @remarks
     * Resets the flash illuminance to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetFlashIlluminance(): void;
    /**
     * @remarks
     * Resets the moon color to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMoonColor(): void;
    /**
     * @remarks
     * Resets the moon illuminance to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMoonIlluminance(): void;
    /**
     * @remarks
     * Resets the orbital offset to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetOrbitalOffsetDegrees(): void;
    /**
     * @remarks
     * Resets the sky intensity to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSkyIntensity(): void;
    /**
     * @remarks
     * Resets the sun color to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunColor(): void;
    /**
     * @remarks
     * Resets the sun illuminance to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunIlluminance(): void;
    /**
     * @remarks
     * Sets the ambient color for lighting in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setAmbientColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks
     * Sets the ambient illuminance for lighting in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setAmbientIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the emissive desaturation for lighting in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setEmissiveDesaturation(value: number): void;
    /**
     * @remarks
     * Sets the flash color for lighting in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setFlashColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks
     * Sets the flash illuminance for lighting in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setFlashIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the moon color for lighting in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMoonColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks
     * Sets the moon illuminance for lighting in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMoonIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the orbital offset for lighting in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setOrbitalOffsetDegrees(degrees: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the sky intensity for lighting in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSkyIntensity(intensity: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the sun color for lighting in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks
     * Sets the sun illuminance for lighting in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunIlluminance(illuminance: number | Record<number, number>): void;
}
