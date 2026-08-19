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
