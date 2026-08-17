/**
 * 包含用于注册实体治愈事件的可选参数。
 */
export interface EntityHealEventOptions {
    /**
     * @remarks
     * 如果设置了该值，则此事件仅在治愈原因匹配时触发。
     *
     */
    allowedHealCauses?: EntityHealCause[];
    /**
     * @remarks
     * 如果设置了该值，则此事件仅在与实体匹配时触发。
     *
     */
    entityFilter?: EntityFilter;
}