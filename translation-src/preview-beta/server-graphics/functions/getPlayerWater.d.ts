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
