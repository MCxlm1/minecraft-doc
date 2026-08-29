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
 *   "version": "1.1.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserver from '@minecraft/server';
/**
 * Used to affect atmospheric scattering per biome for Vibrant
 * Visuals
 */
export class BiomeAtmospherics {
    private constructor();
    /**
     * @remarks
     * Resets the horizon blend max to the value set by resource
     * packs or via the 'setHorizonBlendMax' API in behavior packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMax(): void;
    /**
     * @remarks
     * Resets the horizon blend mie start to the value set by
     * resource packs or via the 'setHorizonBlendMieStart' API in
     * behavior packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMieStart(): void;
    /**
     * @remarks
     * Resets the horizon blend min to the value set by resource
     * packs or via the 'setHorizonBlendMin' API in behavior packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMin(): void;
    /**
     * @remarks
     * Resets the horizon blend start to the value set by resource
     * packs or via the 'setHorizonBlendStart' API in behavior
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendStart(): void;
    /**
     * @remarks
     * Resets the moon mie strength to the value set by resource
     * packs or via the 'setMoonMieStrength' API in behavior packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMoonMieStrength(): void;
    /**
     * @remarks
     * Resets the rayleigh strength to the value set by resource
     * packs or via the 'setRayleighStrength' API in behavior packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetRayleighStrength(): void;
    /**
     * @remarks
     * Resets the sky horizon color to the color set by resource
     * packs or via the 'setSkyHorizonColor' API in behavior packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSkyHorizonColor(): void;
    /**
     * @remarks
     * Resets the sky zenith color to the color set by resource
     * packs or via the 'setSkyZenithColor' API in behavior packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSkyZenithColor(): void;
    /**
     * @remarks
     * Resets the sun glare shape to the value set by resource
     * packs or via the 'setSunGlareShape' API in behavior packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunGlareShape(): void;
    /**
     * @remarks
     * Resets the sun mie strength to the value set by resource
     * packs or via the 'setSunMieStrength' API in behavior packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunMieStrength(): void;
    /**
     * @remarks
     * Sets the horizon blend max for atmospheric scattering in
     * Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param blendMax
     * Either a number (range [0,1]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1])
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMax(blendMax: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the horizon blend mie start for atmospheric scattering
     * in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param blendMieStart
     * Either a number (range [0,1.2]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1.2])
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMieStart(blendMieStart: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the horizon blend min for atmospheric scattering in
     * Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param blendMin
     * Either a number (range [0,1]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1])
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMin(blendMin: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the horizon blend start for atmospheric scattering in
     * Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param blendStart
     * Either a number (range [0,1]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,1])
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendStart(blendStart: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the moon mie strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param moonMieStrength
     * Either a number (range [0,60]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,60])
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMoonMieStrength(moonMieStrength: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the rayleigh strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param rayleighStrength
     * Either a number (range [0,11]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,11])
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setRayleighStrength(rayleighStrength: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the sky horizon color for atmospheric scattering in
     * Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param color
     * Either a RGB triplet or a set of keyframes. The keyframes
     * are composed of key value pairs. The key is a number (range
     * [0,1]) to signify a time of day (0.0 and 1.0 are noon, 0.25
     * is sunset, 0.5 is midnight, and 0.75 is sunrise). The value
     * is a RGB triplet
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSkyHorizonColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks
     * Sets the sky zenith color for atmospheric scattering in
     * Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param color
     * Either a RGB triplet or a set of keyframes. The keyframes
     * are composed of key value pairs. The key is a float in the
     * range 0-1 to signify a time of day and the value is a RGB
     * triplet
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSkyZenithColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks
     * Sets the sun glare shape for atmospheric scattering in
     * Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param sunGlareShape
     * Either a number (range [0,50]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,50])
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunGlareShape(sunGlareShape: number | Record<number, number>): void;
    /**
     * @remarks
     * Sets the sun mie strength for atmospheric scattering in
     * Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param sunMieStrength
     * Either a number (range [0,60]) or a set of keyframes. The
     * keyframes are composed of key value pairs. The key is a
     * number (range [0,1]) to signify a time of day (0.0 and 1.0
     * are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
     * sunrise). The value is also a number (range [0,60])
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunMieStrength(sunMieStrength: number | Record<number, number>): void;
}

/**
 * Used to affect color grading for Vibrant Visuals
 */
export class BiomeColorGrading {
    private constructor();
    /**
     * @remarks
     * Resets the contrast of highlights to the value set by
     * resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsContrast(): void;
    /**
     * @remarks
     * Resets the gain of highlights to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsGain(): void;
    /**
     * @remarks
     * Resets the gamma of highlights to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsGamma(): void;
    /**
     * @remarks
     * Resets the highlights min to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsMin(): void;
    /**
     * @remarks
     * Resets the offset of highlights to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsOffset(): void;
    /**
     * @remarks
     * Resets the saturation of highlights to the value set by
     * resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsSaturation(): void;
    /**
     * @remarks
     * Resets the contrast of midtones to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesContrast(): void;
    /**
     * @remarks
     * Resets the gain of midtones to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesGain(): void;
    /**
     * @remarks
     * Resets the gamma of midtones to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesGamma(): void;
    /**
     * @remarks
     * Resets the offset of midtones to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesOffset(): void;
    /**
     * @remarks
     * Resets the saturation of midtones to the value set by
     * resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesSaturation(): void;
    /**
     * @remarks
     * Resets the contrast of shadows to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsContrast(): void;
    /**
     * @remarks
     * Resets the gain of shadows to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsGain(): void;
    /**
     * @remarks
     * Resets the gamma of shadows to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsGamma(): void;
    /**
     * @remarks
     * Resets the shadows max to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsMax(): void;
    /**
     * @remarks
     * Resets the offset of shadows to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsOffset(): void;
    /**
     * @remarks
     * Resets the saturation of shadows to the value set by
     * resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsSaturation(): void;
    /**
     * @remarks
     * Resets the temperature to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetTemperature(): void;
    /**
     * @remarks
     * Sets the contrast of highlights for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param highlightsContrast
     * A Vector3 (range [0.0f, 4.0f]). Used to set the contrast of
     * highlights. Describes the tonal range, the difference in
     * luminance between the bright and dark pixels in an image. An
     * image with high contrast will have pixels with a wide range
     * of luminance values, whereas an image with low contrast will
     * have pixels of a relatively small luminance range. A value
     * of 1.0 results in no change in contrast to the original
     * image. A value of 0.0 results in a completely washed-out,
     * gray image. Values > 1.0 increase the brightness of
     * highlights while darkening the shadows in the final image.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsContrast(highlightsContrast: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the gain of highlights for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param highlightsGain
     * A Vector3 (range [0.0f, 10.0f]). Used to set the gain of
     * highlights. A multiplication factor applied to each color
     * channel to adjust the overall luminance intensity of the
     * highlight range. A value of 1.0 results in no change to the
     * original image. Values < 1.0 darken the image while values >
     * 1.0 brighten it. A value of 0.0 cancels out the color
     * channel completely. Gain is multiplicative and therefore has
     * a stronger effect on brighter pixels than darker pixels.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsGain(highlightsGain: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the gamma of highlights for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param highlightsGamma
     * A Vector3 (range [0.0f, 4.0f]). Used to set the gamma of
     * highlights. An exponential factor applied to the final color
     * after both color grading and tone mapping to adjust the
     * overall luminance intensity of the image. The standard value
     * for gamma is 2.2. Lower values darken the final image,
     * whereas higher values brighten it. Too high a gamma will
     * cause the final image to appear washed-out.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsGamma(highlightsGamma: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the highlights min for color grading in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param highlightsMin
     * A number (range [1.0f, 20.0f]). Used to set the highlights
     * min. A factor multiplied by the average luminance of the
     * scene to determine which pixels are considered highlights.
     * Pixels with luminance greater than HighlightsMin *
     * AverageLuminance will have the highlights set of color
     * grading values applied. A value of 1.0 indicates highlights
     * occupy the entire range of values including and above the
     * average luminance. Higher values will cause the minimum
     * required luminance value for a pixel to be considered a
     * highlight to rise. This value should not be equal to
     * ShadowsMax.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsMin(highlightsMin: number): void;
    /**
     * @remarks
     * Sets the offset of highlights for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param highlightsOffset
     * A Vector3 (range [-1.0f, 1.0f]). Used to set the offset of
     * highlights. An additive factor that is multiplied by the
     * average luminance of the scene and then added to a given
     * color channel to adjust the overall luminance intensity of
     * the image. A value of 0.0 results in no change. Values > 0.0
     * brighten the image, values < 0.0 darken it. Offset is
     * additive and therefore has a stronger effect on darker
     * pixels than brighter pixels.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsOffset(highlightsOffset: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the saturation of highlights for color grading in
     * Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param highlightsSaturation
     * A Vector3 (range [0.0f, 10.0f]). Used to set the saturation
     * of highlights. Determines the hue intensity of colors. A
     * value of 1.0 results in no change in saturation to the
     * original image. A value of 0.0 results in a grayscale image.
     * Values > 1.0 increase the intensity of colors.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsSaturation(highlightsSaturation: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the contrast of midtones for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param midtonesContrast
     * A Vector3 (range [0.0f, 4.0f]). Used to set the contrast of
     * midtones. Describes the tonal range, the difference in
     * luminance between the bright and dark pixels in an image. An
     * image with high contrast will have pixels with a wide range
     * of luminance values, whereas an image with low contrast will
     * have pixels of a relatively small luminance range. A value
     * of 1.0 results in no change in contrast to the original
     * image. A value of 0.0 results in a completely washed-out,
     * gray image. Values > 1.0 increase the brightness of
     * highlights while darkening the shadows in the final image.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesContrast(midtonesContrast: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the gain of midtones for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param midtonesGain
     * A Vector3 (range [0.0f, 10.0f]). Used to set the gain of
     * midtones. A multiplication factor applied to each color
     * channel to adjust the overall luminance intensity of the
     * midtone range. A value of 1.0 results in no change to the
     * original image. Values < 1.0 darken the image while values >
     * 1.0 brighten it. A value of 0.0 cancels out the color
     * channel completely. Gain is multiplicative and therefore has
     * a stronger effect on brighter pixels than darker pixels.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesGain(midtonesGain: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the gamma of midtones for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param midtonesGamma
     * A Vector3 (range [0.0f, 4.0f]). Used to set the gamma of
     * midtones. An exponential factor applied to the final color
     * after both color grading and tone mapping to adjust the
     * overall luminance intensity of the image. The standard value
     * for gamma is 2.2. Lower values darken the final image,
     * whereas higher values brighten it. Too high a gamma will
     * cause the final image to appear washed-out.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesGamma(midtonesGamma: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the offset of midtones for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param midtonesOffset
     * A Vector3 (range [-1.0f, 1.0f]). Used to set the offset of
     * midtones. An additive factor that is multiplied by the
     * average luminance of the scene and then added to a given
     * color channel to adjust the overall luminance intensity of
     * the image. A value of 0.0 results in no change. Values > 0.0
     * brighten the image, values < 0.0 darken it. Offset is
     * additive and therefore has a stronger effect on darker
     * pixels than brighter pixels.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesOffset(midtonesOffset: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the saturation of midtones for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param midtonesSaturation
     * A Vector3 (range [0.0f, 10.0f]). Used to set the saturation
     * of midtones. Determines the hue intensity of colors. A value
     * of 1.0 results in no change in saturation to the original
     * image. A value of 0.0 results in a grayscale image. Values >
     * 1.0 increase the intensity of colors.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesSaturation(midtonesSaturation: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the contrast of shadows for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param shadowsContrast
     * A Vector3 (range [0.0f, 4.0f]). Used to set the contrast of
     * shadows. Describes the tonal range, the difference in
     * luminance between the bright and dark pixels in an image. An
     * image with high contrast will have pixels with a wide range
     * of luminance values, whereas an image with low contrast will
     * have pixels of a relatively small luminance range. A value
     * of 1.0 results in no change in contrast to the original
     * image. A value of 0.0 results in a completely washed-out,
     * gray image. Values > 1.0 increase the brightness of
     * highlights while darkening the shadows in the final image.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsContrast(shadowsContrast: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the gain of shadows for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param shadowsGain
     * A Vector3 (range [0.0f, 10.0f]). Used to set the gain of
     * shadows. A multiplication factor applied to each color
     * channel to adjust the overall luminance intensity of the
     * shadow range. A value of 1.0 results in no change to the
     * original image. Values < 1.0 darken the image while values >
     * 1.0 brighten it. A value of 0.0 cancels out the color
     * channel completely. Gain is multiplicative and therefore has
     * a stronger effect on brighter pixels than darker pixels.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsGain(shadowsGain: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the gamma of shadows for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param shadowsGamma
     * A Vector3 (range [0.0f, 4.0f]). Used to set the gamma of
     * shadows. An exponential factor applied to the final color
     * after both color grading and tone mapping to adjust the
     * overall luminance intensity of the image. The standard value
     * for gamma is 2.2. Lower values darken the final image,
     * whereas higher values brighten it. Too high a gamma will
     * cause the final image to appear washed-out.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsGamma(shadowsGamma: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the shadows max for color grading in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param shadowsMax
     * A number (range [0.0f, 1.0f]). Used to set the shadows max.
     * A factor multiplied by the average luminance of the scene to
     * determine which pixels are considered shadows. Pixels with
     * luminance less than ShadowsMax * AverageLuminance will have
     * the shadows set of color grading values applied. A value of
     * 1.0 indicates shadows occupy the entire range of values
     * including and up to the average luminance. Lower values will
     * cause the maximum required luminance value for a pixel to be
     * considered a shadow to drop. This value should not be equal
     * to HighlightsMin.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsMax(shadowsMax: number): void;
    /**
     * @remarks
     * Sets the offset of shadows for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param shadowsOffset
     * A Vector3 (range [-1.0f, 1.0f]). Used to set the offset of
     * shadows. An additive factor that is multiplied by the
     * average luminance of the scene and then added to a given
     * color channel to adjust the overall luminance intensity of
     * the image. A value of 0.0 results in no change. Values > 0.0
     * brighten the image, values < 0.0 darken it. Offset is
     * additive and therefore has a stronger effect on darker
     * pixels than brighter pixels.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsOffset(shadowsOffset: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the saturation of shadows for color grading in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param shadowsSaturation
     * A Vector3 (range [0.0f, 10.0f]). Used to set the saturation
     * of shadows. Determines the hue intensity of colors. A value
     * of 1.0 results in no change in saturation to the original
     * image. A value of 0.0 results in a grayscale image. Values >
     * 1.0 increase the intensity of colors.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsSaturation(shadowsSaturation: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets the temperature for color grading in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param temperature
     * A number (range [1000.0f, 15000.0f]). Used to set the
     * temperature. The overall image temperature measured in
     * Kelvin. The default value is 6500.0, the standard "daylight"
     * illumination.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setTemperature(temperature: number): void;
}

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

/**
 * Used to affect water for Vibrant Visuals
 */
export class BiomeWater {
    private constructor();
    /**
     * @remarks
     * Resets the CDOM  to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetCDOM(): void;
    /**
     * @remarks
     * Resets the chlorophyll concentration to the value set by
     * resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetChlorophyll(): void;
    /**
     * @remarks
     * Resets the suspended sediment  to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSuspendedSediment(): void;
    /**
     * @remarks
     * Resets the wave depth to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesDepth(): void;
    /**
     * @remarks
     * Resets the wave direction increment to the value set by
     * resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesDirectionIncrement(): void;
    /**
     * @remarks
     * Resets the wave frequency to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesFrequency(): void;
    /**
     * @remarks
     * Resets the wave frequency scaling to the value set by
     * resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesFrequencyScaling(): void;
    /**
     * @remarks
     * Resets the wave mix to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesMix(): void;
    /**
     * @remarks
     * Resets the wave octaves to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesOctaves(): void;
    /**
     * @remarks
     * Resets the wave pull to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesPull(): void;
    /**
     * @remarks
     * Resets the wave shape to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesShape(): void;
    /**
     * @remarks
     * Resets the wave speed to the value set by resource packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesSpeed(): void;
    /**
     * @remarks
     * Resets the wave speed scaling to the value set by resource
     * packs
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesSpeedScaling(): void;
    /**
     * @remarks
     * Sets the CDOM for water in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param cdom
     * A number (range [0,15]). Used to set the CDOM. High
     * concentrations produce yellow to yellow-brown colors, due to
     * CDOM strongly absorbing blue wavelengths. Open oceans
     * typically have little to no CDOM, and thus retain a blue
     * appearance; fresh water sources, like rivers, tend to have
     * higher concentrations.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setCDOM(cdom: number): void;
    /**
     * @remarks
     * Sets the chlorophyll concentration for water in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param chlorophyll
     * A number (range [0,10]). Used to set the chlorophyll
     * concentration. High concentrations produce green colors, due
     * to chlorophyll strongly absorbing blue and red wavelengths.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setChlorophyll(chlorophyll: number): void;
    /**
     * @remarks
     * Sets the suspended sediment for water in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param suspendedSediment
     * A number (range [0,300]). Used to set the suspended
     * sediment.  High concentrations produce red to red-brown
     * colors, due to suspended sediment strongly absorbing blue
     * and green wavelengths. Suspended sediment, like clay and
     * silt, tend to be concentrated in rivers and can indicate
     * recent floods or sources of pollution.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSuspendedSediment(suspendedSediment: number): void;
    /**
     * @remarks
     * Sets the wave depth for water in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param wavesDepth
     * A number (range [0,10]). Used to set the wave depth.
     * Determines how much waves displace the water surface. Larger
     * values will result in deeper waves, whereas smaller values
     * will produce shallower waves.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesDepth(wavesDepth: number): void;
    /**
     * @remarks
     * Sets the wave direction increment for water in Vibrant
     * Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param wavesDirectionIncrement
     * A number (range [0.0f, 360.0f]). Used to set the wave
     * direction increment. An angle, in degrees, that controls how
     * much the heading changes between each octave.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesDirectionIncrement(wavesDirectionIncrement: number): void;
    /**
     * @remarks
     * Sets the wave frequency for water in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param wavesFrequency
     * A number (range [0,10]). Used to set the wave frequency.
     * Determines how many waves there are per water block. Can
     * also be thought of as the size of the waves. Larger values
     * will create more tightly packed waves, whereas smaller
     * values will spread waves out over a wider area.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesFrequency(wavesFrequency: number): void;
    /**
     * @remarks
     * Sets the wave frequency scaling for water in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param wavesFrequencyScaling
     * A number (range [0,2]). Used to set the wave frequency
     * scaling. Specifies how much wave frequency changes between
     * octaves. A value of 1 will result in no change between
     * octaves. Values higher than 1 will cause frequencies to
     * increase while values less than 1 will cause frequencies to
     * decrease.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesFrequencyScaling(wavesFrequencyScaling: number): void;
    /**
     * @remarks
     * Sets the wave mix for water in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param wavesMix
     * A number (range [0.0, 1.0]). Used to set the wave mix.
     * Controls how much each octave is blended into the
     * neighboring octave.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesMix(wavesMix: number): void;
    /**
     * @remarks
     * Sets the wave octaves for water in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param wavesOctaves
     * A number (range [1.0, 10]). Used to set the wave octaves.
     * Determines how many layers of waves to simulate; high values
     * result in more complex waves
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesOctaves(wavesOctaves: number): void;
    /**
     * @remarks
     * Sets the wave pull for water in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param wavesPull
     * A number (range [-1.0f, 1.0f]). Used to set the wave pull.
     * Controls how much smaller waves are pulled into larger
     * waves. A value of 0 results in no pull. Values larger than 0
     * will pull waves in a standard concave fashion, whereas
     * values less than 0 will pull waves in a convex fashion,
     * resulting in more pillowing waves as opposed to cresting
     * waves.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesPull(wavesPull: number): void;
    /**
     * @remarks
     * Sets the wave shape for water in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param wavesShape
     * A number (range [1.0, 10]). Used to set the wave shape.
     * Adjusts the core shape of waves. A value of 1 results in a
     * pure sine wave, whereas values larger than 1 will produce
     * sharper waves.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesShape(wavesShape: number): void;
    /**
     * @remarks
     * Sets the wave speed for water in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param wavesSpeed
     * A number (range [0.01,10]). Used to set the wave speed.
     * etermines the movement speed of the first wave and the
     * starting value of the Speed Scaling parameter.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesSpeed(wavesSpeed: number): void;
    /**
     * @remarks
     * Sets the wave speed scaling for water in Vibrant Visuals
     *
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @param wavesSpeedScaling
     * A number (range [0.0,2]). Used to set the wave speed
     * scaling. Controls how much faster each subsequent octave
     * moves. A value of 1 will result in no change between
     * octaves. Values higher than 1 will cause speeds to increase
     * while values less than 1 will cause speeds to decrease.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesSpeedScaling(wavesSpeedScaling: number): void;
}

/**
 * @remarks
 * Retrieves the BiomeAtmospherics component to control
 * atmoshperic scattering for Vibrant Visuals.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 */
export function getBiomeAtmospherics(biome: minecraftserver.BiomeType): BiomeAtmospherics;
/**
 * @remarks
 * Retrieves the BiomeColorGrading component to control color
 * grading for Vibrant Visuals.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 */
export function getBiomeColorGrading(biome: minecraftserver.BiomeType): BiomeColorGrading;
/**
 * @remarks
 * Retrieves the BiomeLighting component to control lighting
 * for Vibrant Visuals.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 */
export function getBiomeLighting(biome: minecraftserver.BiomeType): BiomeLighting;
/**
 * @remarks
 * Retrieves the BiomeWater component to control water for
 * Vibrant Visuals
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 */
export function getBiomeWater(biome: minecraftserver.BiomeType): BiomeWater;
/**
 * @remarks
 * Retrieves the PlayerAtmospherics component to control
 * atmospheric scattering for a particular player in Vibrant
 * Visuals. This offers the same controls as BiomeAtmospherics,
 * but PlayerAtmospherics controls will always take precedence
 * over BiomeAtmospherics.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 */
export function getPlayerAtmospherics(
    biome: minecraftserver.BiomeType,
    player: minecraftserver.Player,
): BiomeAtmospherics;
/**
 * @remarks
 * Retrieves the PlayerColorGrading component to control color
 * grading for a particular player in Vibrant Visuals. This
 * offers the same controls as BiomeColorGrading, but
 * PlayerColorGrading controls will always take precedence over
 * BiomeColorGrading.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 */
export function getPlayerColorGrading(
    biome: minecraftserver.BiomeType,
    player: minecraftserver.Player,
): BiomeColorGrading;
/**
 * @remarks
 * Retrieves the PlayerLighting component to control lighting
 * for a particular player in Vibrant Visuals. This offers the
 * same controls as BiomeLighting, but PlayerLighting controls
 * will always take precedence over BiomeLighting.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 */
export function getPlayerLighting(biome: minecraftserver.BiomeType, player: minecraftserver.Player): BiomeLighting;
/**
 * @remarks
 * Retrieves the PlayerWater component to control water for a
 * particular player in Vibrant Visuals. This offers the same
 * controls as BiomeWater, but PlayerWater controls will always
 * take precedence over BiomeWater.
 *
 * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
 *
 */
export function getPlayerWater(biome: minecraftserver.BiomeType, player: minecraftserver.Player): BiomeWater;
