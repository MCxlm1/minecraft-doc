/**
 * @beta
 */
export type VanillaEntityIdentifier =
    | EntityType
    | minecraftvanilladata.MinecraftEntityTypes
    | `${minecraftvanilladata.MinecraftEntityTypes}`
    | `${minecraftvanilladata.MinecraftEntityTypes}<${string}>`;
