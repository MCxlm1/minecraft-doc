/**
 * 包含用于注册实体治疗事件
 * 的可选参数。
 */
export interface EntityHealEventOptions {
    /**
     * @remarks
     * 若设置此值，则仅当治疗原因
     * 匹配时触发此事件。
     *
     */
    allowedHealCauses?: EntityHealCause[];
    /**
     * @remarks
     * 若设置此值，则仅当实体
     * 匹配时触发此事件。
     *
     */
    entityFilter?: EntityFilter;
}