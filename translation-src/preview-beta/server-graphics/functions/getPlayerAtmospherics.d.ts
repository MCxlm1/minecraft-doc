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
