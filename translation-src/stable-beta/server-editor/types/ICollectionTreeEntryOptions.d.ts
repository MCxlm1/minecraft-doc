/**
 * Options to create an entry in a collection tree folder
 */
export type ICollectionTreeEntryOptions = {
    selected?: boolean;
    image?: ImageResourceData;
    selectable?: boolean;
    removable?: boolean;
    color?: minecraftserver.RGBA;
    userData?: unknown;
    onSelectedChange?: (selected: boolean, folder: ICollectionTreeEntry) => void;
    onBeforeRelocated?: (toFolder: ICollectionTreeFolder, toIndex: number, entry: ICollectionTreeEntry) => boolean;
};
