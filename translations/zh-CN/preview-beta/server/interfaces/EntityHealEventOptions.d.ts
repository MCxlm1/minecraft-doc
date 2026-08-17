/**
 * 包含注册实体治疗事件的可选参数。
 */
export interface EntityHealEventOptions {
    /**
     * @remarks
     * 如果设置了此值，则该事件仅在治疗原因匹配时触发。
     *
     */
    allowedHealCauses?: EntityHealCause[];
    /**
     * @remarks
     * 如果设置了此值，则该事件仅在实体匹配时触发。
     *
     */
    entityFilter?: EntityFilter;
}