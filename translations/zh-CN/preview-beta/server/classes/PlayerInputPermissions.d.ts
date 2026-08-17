/**
 * Contains APIs to enable/disable player input permissions.
 */
export class PlayerInputPermissions {
    private constructor();
    /**
     * @remarks
     * 如果某个输入权限已启用，则返回 true。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param permissionCategory - 要检查的输入权限类别。
     * @returns 如果输入权限已启用，返回 true；否则返回 false。
     * @throws 在受限执行模式下调用此函数时抛出错误；如果权限类别无效，也可能抛出错误。
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @remarks
     * 启用或禁用某个输入权限。启用后输入将生效，禁用后则不生效。
     *
     * 此函数无法在受限执行模式下调用。
     *
     * @param permissionCategory - 要设置或切换的输入权限类别。
     * @param isEnabled - 是否启用该权限。true 表示启用，false 表示禁用。
     * @throws 在受限执行模式下调用此函数时抛出错误；如果权限类别无效，也可能抛出错误。
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}