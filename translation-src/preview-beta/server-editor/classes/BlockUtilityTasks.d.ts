export class BlockUtilityTasks {
    private constructor();
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    createShapeVolume(
        options:
            | BlockUtilityShapeVolumeOptionsCone
            | BlockUtilityShapeVolumeOptionsCuboid
            | BlockUtilityShapeVolumeOptionsCylinder
            | BlockUtilityShapeVolumeOptionsEllipsoid
            | BlockUtilityShapeVolumeOptionsPyramid,
        maxBlocksPerTick?: number,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    extrude(
        location: minecraftserver.Vector3,
        direction?: BlockUtilityExtrudeDirection,
        faceRadius?: number,
        layerCount?: number,
        isShrink?: boolean,
        criteria?: BlockUtilityFloodMatchCriteria,
        customBlockList?: string[],
        maxBlocksPerTick?: number,
        buildGeometry?: boolean,
        tolerance?: number,
        faceVolume?: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    fillVolume(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        block?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string,
        maxBlocksPerTick?: number,
    ): NumberTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    findObscuredBlocksWithinVolume(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    floodSearch(
        location: minecraftserver.Vector3,
        criteria?: BlockUtilityFloodMatchCriteria,
        radius?: number,
        customBlockList?: string[],
        maxResultBlocks?: number,
        maxBlocksPerTick?: number,
        directionMask?: number,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    generateManifest(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): ManifestTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    replaceBlocksInSelection(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        fromBlockIdentifier: string,
        toBlock?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string,
        maxBlocksPerTick?: number,
    ): NumberTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    shrinkWrapVolume(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        maxBlocksPerTick?: number,
    ): VolumeTaskPromise;
    /**
     * @remarks
     * @privilege no-restricted-execution - This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    trimVolumeToFitContents(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        retainMarqueeAfterTrimming: boolean,
        ignoreLiquid: boolean,
        ignoreNoCollision: boolean,
        blockMask?: BlockMaskList,
        maxBlocksPerTick?: number,
    ): VolumeTaskPromise;
}
