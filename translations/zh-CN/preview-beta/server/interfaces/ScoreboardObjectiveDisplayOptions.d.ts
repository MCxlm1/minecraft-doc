/**
 * 包含关于如何在显示槽中显示记分板的附加选项。
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
     * 显示目标项时使用的排序顺序。
     *
     */
    sortOrder?: ObjectiveSortOrder;
}