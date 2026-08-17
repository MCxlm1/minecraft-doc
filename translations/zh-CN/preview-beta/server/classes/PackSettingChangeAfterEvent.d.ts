/**
 * @beta
 * 已更改的资源包设置名称和值。
 */
export class PackSettingChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * 该设置的名称。
     *
     */
    readonly settingName: string;
    /**
     * @remarks
     * 该设置的值。
     *
     */
    readonly settingValue: boolean | number | string;
}