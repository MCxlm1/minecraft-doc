[@minecraft/math](../globals.md) / Vector3Utils

# Class: Vector3Utils

Utilities operating on Vector3 objects. All methods are static and do not modify the input objects.

## Constructors

### new Vector3Utils()

> **new Vector3Utils**(): [`Vector3Utils`](Vector3Utils.md)

#### Returns

[`Vector3Utils`](Vector3Utils.md)

## Methods

### add()

<span class="mod-badge">static</span>

> **add**(`v1`, `v2`): `Vector3`

add

Add two vectors to produce a new vector

#### Parameters

• **v1**: `Vector3`

• **v2**: `Partial`\<`Vector3`\>

#### Returns

`Vector3`


***

### ceil()

<span class="mod-badge">static</span>

> **ceil**(`v`): `Vector3`

ceil

Ceil the components of a vector to produce a new vector

#### Parameters

• **v**: `Vector3`

#### Returns

`Vector3`


***

### clamp()

<span class="mod-badge">static</span>

> **clamp**(`v`, `limits`?): `Vector3`

clamp

Clamps the components of a vector to limits to produce a new vector

#### Parameters

• **v**: `Vector3`

• **limits?**

• **limits.max?**: `Partial`\<`Vector3`\>

• **limits.min?**: `Partial`\<`Vector3`\>

#### Returns

`Vector3`


***

### cross()

<span class="mod-badge">static</span>

> **cross**(`a`, `b`): `Vector3`

cross

Calculate the cross product of two vectors. Returns a new vector.

#### Parameters

• **a**: `Vector3`

• **b**: `Vector3`

#### Returns

`Vector3`


***

### distance()

<span class="mod-badge">static</span>

> **distance**(`a`, `b`): `number`

distance

Calculate the distance between two vectors

#### Parameters

• **a**: `Vector3`

• **b**: `Vector3`

#### Returns

`number`


***

### dot()

<span class="mod-badge">static</span>

> **dot**(`a`, `b`): `number`

dot

Calculate the dot product of two vectors

#### Parameters

• **a**: `Vector3`

• **b**: `Vector3`

#### Returns

`number`


***

### equals()

<span class="mod-badge">static</span>

> **equals**(`v1`, `v2`): `boolean`

equals

Check the equality of two vectors

#### Parameters

• **v1**: `Vector3`

• **v2**: `Vector3`

#### Returns

`boolean`


***

### floor()

<span class="mod-badge">static</span>

> **floor**(`v`): `Vector3`

floor

Floor the components of a vector to produce a new vector

#### Parameters

• **v**: `Vector3`

#### Returns

`Vector3`


***

### fromString()

<span class="mod-badge">static</span>

> **fromString**(`str`, `delimiter`?): `Vector3`

fromString

Gets a Vector3 from the string representation produced by [Vector3Utils.toString](Vector3Utils.md#tostring). If any numeric value is not a number
or the format is invalid, undefined is returned.

#### Parameters

• **str**: `string`

The string to parse

• **delimiter?**: `string`

The delimiter used to separate the components. Defaults to the same as the default for [Vector3Utils.toString](Vector3Utils.md#tostring)

#### Returns

`Vector3`


***

### lerp()

<span class="mod-badge">static</span>

> **lerp**(`a`, `b`, `t`): `Vector3`

lerp

Constructs a new vector using linear interpolation on each component from two vectors.

#### Parameters

• **a**: `Vector3`

• **b**: `Vector3`

• **t**: `number`

#### Returns

`Vector3`


***

### magnitude()

<span class="mod-badge">static</span>

> **magnitude**(`v`): `number`

magnitude

The magnitude of a vector

#### Parameters

• **v**: `Vector3`

#### Returns

`number`


***

### max()

<span class="mod-badge">static</span>

> **max**(`a`, `b`): `Vector3`

max

Max the components of two vectors to produce a new vector

#### Parameters

• **a**: `Vector3`

• **b**: `Vector3`

#### Returns

`Vector3`


***

### min()

<span class="mod-badge">static</span>

> **min**(`a`, `b`): `Vector3`

min

Min the components of two vectors to produce a new vector

#### Parameters

• **a**: `Vector3`

• **b**: `Vector3`

#### Returns

`Vector3`


***

### multiply()

<span class="mod-badge">static</span>

> **multiply**(`a`, `b`): `Vector3`

multiply

Element-wise multiplication of two vectors together.
Not to be confused with [Vector3Utils.dot](Vector3Utils.md#dot) product or [Vector3Utils.cross](Vector3Utils.md#cross) product

#### Parameters

• **a**: `Vector3`

• **b**: `Vector3`

#### Returns

`Vector3`


***

### normalize()

<span class="mod-badge">static</span>

> **normalize**(`v`): `Vector3`

normalize

Takes a vector 3 and normalizes it to a unit vector

#### Parameters

• **v**: `Vector3`

#### Returns

`Vector3`


***

### rotateX()

<span class="mod-badge">static</span>

> **rotateX**(`v`, `a`): `Vector3`

rotateX

Rotates the vector around the x axis counterclockwise (left hand rule)

#### Parameters

• **v**: `Vector3`

• **a**: `number`

Angle in radians

#### Returns

`Vector3`


***

### rotateY()

<span class="mod-badge">static</span>

> **rotateY**(`v`, `a`): `Vector3`

rotateY

Rotates the vector around the y axis counterclockwise (left hand rule)

#### Parameters

• **v**: `Vector3`

• **a**: `number`

Angle in radians

#### Returns

`Vector3`


***

### rotateZ()

<span class="mod-badge">static</span>

> **rotateZ**(`v`, `a`): `Vector3`

rotateZ

Rotates the vector around the z axis counterclockwise (left hand rule)

#### Parameters

• **v**: `Vector3`

• **a**: `number`

Angle in radians

#### Returns

`Vector3`


***

### scale()

<span class="mod-badge">static</span>

> **scale**(`v1`, `scale`): `Vector3`

scale

Multiple all entries in a vector by a single scalar value producing a new vector

#### Parameters

• **v1**: `Vector3`

• **scale**: `number`

#### Returns

`Vector3`


***

### slerp()

<span class="mod-badge">static</span>

> **slerp**(`a`, `b`, `t`): `Vector3`

slerp

Constructs a new vector using spherical linear interpolation on each component from two vectors.

#### Parameters

• **a**: `Vector3`

• **b**: `Vector3`

• **t**: `number`

#### Returns

`Vector3`


***

### subtract()

<span class="mod-badge">static</span>

> **subtract**(`v1`, `v2`): `Vector3`

subtract

Subtract two vectors to produce a new vector (v1-v2)

#### Parameters

• **v1**: `Vector3`

• **v2**: `Partial`\<`Vector3`\>

#### Returns

`Vector3`


***

### toString()

<span class="mod-badge">static</span>

> **toString**(`v`, `options`?): `string`

toString

Create a string representation of a vector3

#### Parameters

• **v**: `Vector3`

• **options?**

• **options.decimals?**: `number`

• **options.delimiter?**: `string`

#### Returns

`string`

