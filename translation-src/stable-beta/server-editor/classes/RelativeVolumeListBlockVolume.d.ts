export class RelativeVolumeListBlockVolume extends minecraftserver.BlockVolumeBase {
    readonly isEmpty: boolean;
    /**
     * @remarks
     * @privilege restricted-execution-read-only - This property can't be edited in restricted-execution mode.
     *
     */
    origin?: minecraftserver.Vector3;
    readonly volumeCount: number;
    constructor(origin?: minecraftserver.Vector3);
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    add(
        toAdd:
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    clear(): void;
    clone(): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    getVolumeList(): minecraftserver.BlockVolume[];
    hasAdjacent(location: minecraftserver.Vector3, normalizedOffset: minecraftserver.Vector3): boolean;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    moveTo(location: minecraftserver.Vector3): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    remove(
        toRemove:
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    set(
        toSet:
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     */
    translate(offset: minecraftserver.Vector3): void;
}
