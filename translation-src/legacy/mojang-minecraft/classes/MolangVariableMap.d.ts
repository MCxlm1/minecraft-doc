/**
 * Contains a set of additional variable values for further
 * defining how rendering and animations function.
 */
export class MolangVariableMap {
    /**
     * @remarks
     * Sets a Molang rendering/animation variable with the value of
     * a Red/Green/Blue color.
     * @param variableName
     * @param color
     */
    setColorRGB(variableName: string, color: Color): MolangVariableMap;
    /**
     * @remarks
     * Sets a Molang rendering/animation variable with the value of
     * a Red/Green/Blue color + Alpha (transparency) value.
     * @param variableName
     * @param color
     */
    setColorRGBA(variableName: string, color: Color): MolangVariableMap;
    /**
     * @remarks
     * Sets the speed and direction for a Molang (rendering and
     * animation) variable.
     * @param variableName
     * @param speed
     * @param direction
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap;
    /**
     * @remarks
     * Sets a vector value for a Molang (rendering and animation)
     * variable.
     * @param variableName
     * @param vector
     */
    setVector3(variableName: string, vector: Vector): MolangVariableMap;
}
