/**
 * 包含用于注册实体治疗事件的可选参数。
 */
export interface EntityHealEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅针对匹配的治疗原因触发。
     *
     */
    allowedHealCauses?: EntityHealCause[];
    /**
     * @remarks
     * 如果设置了此值，则此事件将仅针对匹配的实体触发。
     *
     */
    entityFilter?: EntityFilter[];
}