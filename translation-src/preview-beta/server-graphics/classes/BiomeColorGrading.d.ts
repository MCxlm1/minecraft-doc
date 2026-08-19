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
