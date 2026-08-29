/**
 * Contains a description of a vector.
 */
export class Vector {
    /**
     * X component of this vector.
     */
    "x": number;
    /**
     * Y component of this vector.
     */
    "y": number;
    /**
     * Z component of this vector.
     */
    "z": number;
    /**
     * A constant vector that represents (0, 0, -1).
     */
    static readonly "back": Vector;
    /**
     * A constant vector that represents (0, -1, 0).
     */
    static readonly "down": Vector;
    /**
     * A constant vector that represents (0, 0, 1).
     */
    static readonly "forward": Vector;
    /**
     * A constant vector that represents (-1, 0, 0).
     */
    static readonly "left": Vector;
    /**
     * A constant vector that represents (1, 1, 1).
     */
    static readonly "one": Vector;
    /**
     * A constant vector that represents (1, 0, 0).
     */
    static readonly "right": Vector;
    /**
     * A constant vector that represents (0, 1, 0).
     */
    static readonly "up": Vector;
    /**
     * A constant vector that represents (0, 0, 0).
     */
    static readonly "zero": Vector;
    /**
     * @remarks
     * Returns the addition of these vectors.
     * @param a
     * @param b
     */
    static add(a: Vector, b: Vector): Vector;
    /**
     * @remarks
     * Creates a new instance of an abstract vector.
     * @param x
     * X component of the vector.
     * @param y
     * Y component of the vector.
     * @param z
     * Z component of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Returns the cross product of these two vectors.
     * @param a
     * @param b
     */
    static cross(a: Vector, b: Vector): Vector;
    /**
     * @remarks
     * Returns the distance between two vectors.
     * @param a
     * @param b
     */
    static distance(a: Vector, b: Vector): number;
    /**
     * @remarks
     * Returns the component-wise division of these vectors.
     * @param a
     * @param b
     */
    static divide(a: Vector, b: number | Vector): Vector;
    /**
     * @remarks
     * Compares this vector and another vector to one another.
     * @param other
     * Other vector to compare this vector to.
     * @returns
     * True if the two vectors are equal.
     */
    equals(other: Vector): boolean;
    /**
     * @remarks
     * Returns the length of this vector.
     */
    length(): number;
    /**
     * @remarks
     * Returns the squared length of this vector.
     */
    lengthSquared(): number;
    /**
     * @remarks
     * Returns the linear interpolation between a and b using t as
     * the control.
     * @param a
     * @param b
     * @param t
     */
    static lerp(a: Vector, b: Vector, t: number): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the largest components of
     * two vectors.
     * @param a
     * @param b
     */
    static max(a: Vector, b: Vector): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the smallest components
     * of two vectors.
     * @param a
     * @param b
     */
    static min(a: Vector, b: Vector): Vector;
    /**
     * @remarks
     * Returns the component-wise product of these vectors.
     * @param a
     * @param b
     */
    static multiply(a: Vector, b: number | Vector): Vector;
    /**
     * @remarks
     * Returns this vector as a normalized vector.
     */
    normalized(): Vector;
    /**
     * @remarks
     * Returns the spherical linear interpolation between a and b
     * using s as the control.
     * @param a
     * @param b
     * @param s
     */
    static slerp(a: Vector, b: Vector, s: number): Vector;
    /**
     * @remarks
     * Returns the subtraction of these vectors.
     * @param a
     * @param b
     */
    static subtract(a: Vector, b: Vector): Vector;
}
