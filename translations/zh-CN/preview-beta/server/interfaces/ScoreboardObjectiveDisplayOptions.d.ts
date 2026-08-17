/**
 * 包含记分板在其显示槽中显示方式的附加选项。
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * @remarks
     * 要显示的目标。
     *
     */
    objective: ScoreboardObjective;
    /**
     * @remarks
     * 目标项目的显示排序顺序。
     *
     */
    sortOrder?: ObjectiveSortOrder;
}