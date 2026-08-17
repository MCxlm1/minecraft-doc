/**
 * 包含关于记分板在其显示槽位中如何显示的额外选项。
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
     * 显示目标项时的排序顺序。
     *
     */
    sortOrder?: ObjectiveSortOrder;
}