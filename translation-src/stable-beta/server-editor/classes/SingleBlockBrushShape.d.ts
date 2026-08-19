export declare class SingleBlockBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `SingleBlockBrushShape`
     * class
     *
     */
    constructor();
    applySetting(_settings: BrushShapeSettings): void;
    calculateBounds(): minecraftserver.BlockBoundingBox;
    createSettingsPane(): undefined;
    createShape(): RelativeVolumeListBlockVolume;
    createShapeAsync(
        _cancelToken?: {
            cancelled: boolean;
        },
        _yieldInterval?: number,
    ): Promise<RelativeVolumeListBlockVolume>;
    createShapeAsyncTask(_blockUtils: BlockUtilityTasks, _yieldInterval?: number): BrushShapeTaskRequest;
    estimateBlockCount(): number;
    getSettings(): BrushShapeSettings;
}
