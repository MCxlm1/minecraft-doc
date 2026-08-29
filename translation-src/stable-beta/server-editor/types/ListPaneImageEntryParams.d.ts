/**
 * List Pane Image entry creation parameter
 */
export type ListPaneImageEntryParams = {
    type: ListPaneEntryType.Image;
    value: IObservableProp<ImageResourceData>;
    visible?: boolean;
};
