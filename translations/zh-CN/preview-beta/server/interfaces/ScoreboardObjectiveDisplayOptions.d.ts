/**
 * 包含关于记分板在其显示槽内如何显示的
 * 额外选项。
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * @remarks
     * 要显示的记分项。
     *
     */
    objective: ScoreboardObjective;
    /**
     * @remarks
     * 显示记分项条目所用的排序顺序。
     *
     */
    sortOrder?: ObjectiveSortOrder;
}