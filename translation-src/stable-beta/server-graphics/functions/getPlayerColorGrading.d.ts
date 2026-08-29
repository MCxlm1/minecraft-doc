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
