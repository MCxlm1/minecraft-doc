/**
 * 表示记分板中的一个目标及其参与者。
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * 返回此记分板目标的玩家可见名称。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly displayName: string;
    /**
     * @remarks
     * 记分板目标的标识符。
     *
     * @throws 此属性在使用时可能抛出错误。
     */
    readonly id: string;
    /**
     * @remarks
     * 返回 ScoreboardObjective 引用是否仍然有效。
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * 向指定参与者与目标添加分数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param participant 要对其应用记分板分数加值的参与者。
     * @param scoreToAdd 要添加的分数值。
     * @returns 添加后该参与者的新分数。
     * @throws 如果目标无效、参与者无效或无法访问记分板时抛出错误。
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * 获取该目标的所有参与者身份。
     *
     * @returns 该目标的所有参与者身份数组。
     * @throws 如果目标无效或无法访问记分板时抛出错误。
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 获取指定参与者的分数。
     *
     * @param participant 要获取分数的参与者标识符。
     * @returns 该参与者的分数；如果参与者不存在或没有分数，则返回 undefined。
     * @throws 如果目标无效或参与者标识无效时抛出错误。
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @remarks
     * 获取该目标中所有参与者的分数。
     *
     * @returns 包含该目标每个参与者分数的 ScoreboardScoreInfo 数组。
     * @throws 如果目标无效或无法访问记分板时抛出错误。
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * 返回指定标识是否为此目标的参与者。
     *
     * @param participant 要检查的参与者标识。
     * @returns 如果该参与者是该目标的一部分，则返回 true；否则返回 false。
     * @throws 如果目标无效或参与者标识无效时抛出错误。
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 从该记分板目标中移除一个参与者。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param participant 要从该目标的追踪中移除的参与者。
     * @returns 如果参与者被成功移除，则返回 true；否则返回 false。
     * @throws 如果目标无效、参与者标识无效或在受限执行模式下调用时抛出错误。
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * 设置参与者的分数。
     *
     * 此函数不能在受限执行模式下调用。
     *
     * @param participant 参与者的身份。
     * @param score 新的分数值。
     * @throws 如果目标无效、参与者标识无效或在受限执行模式下调用时抛出错误。
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}