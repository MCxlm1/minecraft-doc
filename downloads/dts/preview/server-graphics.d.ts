// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * The `@minecraft/server-graphics` module contains APIs to
 * change graphics and rendering settings.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-graphics",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserver from '@minecraft/server';
/**
 * Used to affect atmospheric scattering for Vibrant Visuals
 */
export class Atmospherics {
    private constructor();
    /**
     * @remarks
     * Resets the horizon blend max to the value set by resource
     * packs
     *
     * This function can't be called in read-only mode.
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * horizon blend max overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMax(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Resets the horizon blend mie start to the value set by
     * resource packs
     *
     * This function can't be called in read-only mode.
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * horizon blend mie start overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMieStart(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Resets the horizon blend min to the value set by resource
     * packs
     *
     * This function can't be called in read-only mode.
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * horizon blend min overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMin(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Resets the horizon blend start to the value set by resource
     * packs
     *
     * This function can't be called in read-only mode.
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * horizon blend start overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendStart(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Resets the moon mie strength to the value set by resource
     * packs
     *
     * This function can't be called in read-only mode.
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * moon mie strength overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMoonMieStrength(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Resets the rayleigh strength to the value set by resource
     * packs
     *
     * This function can't be called in read-only mode.
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its
     * rayleigh strength overriden using scripting, then the
     * override value will be removed and the biome will use the
     * value provided by json
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetRayleighStrength(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Resets the sky horizon color to the color set by resource
     * packs
     *
     * This function can't be called in read-only mode.
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its sky
     * horizon color overriden using scripting, then the override
     * value will be removed and the biome will use the value
     * provided by json
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSkyHorizonColor(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Resets the sky zenith color to the color set by resource
     * packs
     *
     * This function can't be called in read-only mode.
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its sky
     * zenith color overriden using scripting, then the override
     * value will be removed and the biome will use the value
     * provided by json
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSkyZenithColor(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Resets the sun glare shape to the value set by resource
     * packs
     *
     * This function can't be called in read-only mode.
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its sun
     * glare shape overriden using scripting, then the override
     * value will be removed and the biome will use the value
     * provided by json
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunGlareShape(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Resets the sun mie strength to the value set by resource
     * packs
     *
     * This function can't be called in read-only mode.
     *
     * @param biomeIdentifier
     * Biome Identifier. If the corresponding biome has had its sun
     * mie strength overriden using scripting, then the override
     * value will be removed and the biome will use the value
     * provided by json
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunMieStrength(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Sets the horizon blend max for atmospheric scattering in
     * Vibrant Visuals
     *
     * This function can't be called in read-only mode.
     *
     * @param blendMax
     * Either a number (range [0,1]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1])
     * @param biomeIdentifier
     * Biome Identifier. The horizon blend max will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMax(blendMax: number | Record<number, number>, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Sets the horizon blend mie start for atmospheric scattering
     * in Vibrant Visuals
     *
     * This function can't be called in read-only mode.
     *
     * @param blendMieStart
     * Either a number (range [0,1.2]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1.2])
     * @param biomeIdentifier
     * Biome Identifier. The horizon blend mie start will be set
     * for the specified biome.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMieStart(
        blendMieStart: number | Record<number, number>,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks
     * Sets the horizon blend min for atmospheric scattering in
     * Vibrant Visuals
     *
     * This function can't be called in read-only mode.
     *
     * @param blendMin
     * Either a number (range [0,1]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1])
     * @param biomeIdentifier
     * Biome Identifier. The horizon blend min will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMin(blendMin: number | Record<number, number>, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Sets the horizon blend start for atmospheric scattering in
     * Vibrant Visuals
     *
     * This function can't be called in read-only mode.
     *
     * @param blendStart
     * Either a number (range [0,1]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1])
     * @param biomeIdentifier
     * Biome Identifier. The horizon blend start will be set for
     * the specified biome.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendStart(blendStart: number | Record<number, number>, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Sets the moon mie strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * This function can't be called in read-only mode.
     *
     * @param moonMieStrength
     * Either a number (range [0,60]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,60])
     * @param biomeIdentifier
     * Biome Identifier. The moon mie strength will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMoonMieStrength(
        moonMieStrength: number | Record<number, number>,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks
     * Sets the rayleigh strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * This function can't be called in read-only mode.
     *
     * @param rayleighStrength
     * Either a number (range [0,11]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,11])
     * @param biomeIdentifier
     * Biome Identifier. The rayleigh strength will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setRayleighStrength(
        rayleighStrength: number | Record<number, number>,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks
     * Sets the sky horizon color for atmospheric scattering in
     * Vibrant Visuals
     *
     * This function can't be called in read-only mode.
     *
     * @param color
     * Either a RGB triplet or a set of keyframes. The keyframes
     * are composed of key value pairs. The key is a number (range
     * [0,1]) to signify a time of day (0.0 and 1.0 are noon, 0.25
     * is sunset, 0.5 is midnight, and 0.75 is sunrise). The value
     * is a RGB triplet
     * @param biomeIdentifier
     * Biome Identifier. The sky horizon color will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSkyHorizonColor(
        color: Record<number, minecraftserver.RGB> | minecraftserver.RGB,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks
     * Sets the sky zenith color for atmospheric scattering in
     * Vibrant Visuals
     *
     * This function can't be called in read-only mode.
     *
     * @param color
     * Either a RGB triplet or a set of keyframes. The keyframes
     * are composed of key value pairs. The key is a float in the
     * range 0-1 to signify a time of day and the value is a RGB
     * triplet
     * @param biomeIdentifier
     * Biome Identifier. The sky zenith color will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSkyZenithColor(
        color: Record<number, minecraftserver.RGB> | minecraftserver.RGB,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks
     * Sets the sun glare shape for atmospheric scattering in
     * Vibrant Visuals
     *
     * This function can't be called in read-only mode.
     *
     * @param sunGlareShape
     * Either a number (range [0,50]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,50])
     * @param biomeIdentifier
     * Biome Identifier. The sun glare shape will be set for the
     * specified biome.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunGlareShape(sunGlareShape: number | Record<number, number>, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks
     * Sets the sun mie strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * This function can't be called in read-only mode.
     *
     * @param sunMieStrength
     * Either a number (range [0,60]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,60])
     * @param biomeIdentifier
     * Biome Identifier. The sun mie will be set for the specified
     * biome.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunMieStrength(
        sunMieStrength: number | Record<number, number>,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
}

export const atmosphere: Atmospherics;
