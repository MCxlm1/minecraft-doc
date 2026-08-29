export declare class CuboidBrushShape extends BrushShape {
    /**
     * @remarks
     * Constructs a new instance of the `CuboidBrushShape` class
     *
     */
    constructor(settings?: {
        uniform?: boolean;
        length?: number;
        width?: number;
        height?: number;
        depth?: number;
        minLength?: number;
        maxLength?: number;
        xRotation?: number;
        yRotation?: number;
        zRotation?: number;
        hollow?: boolean;
        thickness?: number;
        enableHollowSettings?: boolean;
        hideRotation?: boolean;
    });
    applySetting(brushSettings: CuboidBrushShapeSettings): void;
    calculateBounds(): minecraftserver.BlockBoundingBox;
    createSettingsPane(
        parentPane: IPropertyPane,
        onSettingsChange?: () => void,
        flatLayout?: boolean,
    ): ISubPanePropertyItem;
    createShape(): RelativeVolumeListBlockVolume;
    createShapeAsync(
        cancelToken?: {
            cancelled: boolean;
        },
        yieldInterval?: number,
    ): Promise<RelativeVolumeListBlockVolume>;
    createShapeAsyncTask(blockUtils: BlockUtilityTasks, yieldInterval?: number): BrushShapeTaskRequest;
    estimateBlockCount(): number;
    getSettings(): CuboidBrushShapeSettings;
}
