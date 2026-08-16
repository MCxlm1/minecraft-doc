[@minecraft/math](../globals.md) / Vector2Utils

# Class: Vector2Utils

Utilities operating on Vector2 objects. All methods are static and do not modify the input objects.

## Constructors

### new Vector2Utils()

> **new Vector2Utils**(): [`Vector2Utils`](Vector2Utils.md)

#### Returns

[`Vector2Utils`](Vector2Utils.md)

## Methods

### add()

<span class="mod-badge">static</span>

> **add**(`v1`, `v2`): `Vector2`

add

Add two vectors to produce a new vector

#### Parameters

• **v1**: `Vector2`

• **v2**: `Partial`\<`Vector2`\>

#### Returns

`Vector2`


***

### clamp()

<span class="mod-badge">static</span>

> **clamp**(`v`, `limits`?): `Vector2`

clamp

Clamps the components of a vector to limits to produce a new vector

#### Parameters

• **v**: `Vector2`

• **limits?**

• **limits.max?**: `Partial`\<`Vector2`\>

• **limits.min?**: `Partial`\<`Vector2`\>

#### Returns

`Vector2`


***

### distance()

<span class="mod-badge">static</span>

> **distance**(`a`, `b`): `number`

distance

Calculate the distance between two vectors

#### Parameters

• **a**: `Vector2`

• **b**: `Vector2`

#### Returns

`number`


***

### dot()

<span class="mod-badge">static</span>

> **dot**(`a`, `b`): `number`

dot

Calculate the dot product of two vectors

#### Parameters

• **a**: `Vector2`

• **b**: `Vector2`

#### Returns

`number`


***

### equals()

<span class="mod-badge">static</span>

> **equals**(`v1`, `v2`): `boolean`

equals

Check the equality of two vectors

#### Parameters

• **v1**: `Vector2`

• **v2**: `Vector2`

#### Returns

`boolean`


***

### floor()

<span class="mod-badge">static</span>

> **floor**(`v`): `Vector2`

floor

Floor the components of a vector to produce a new vector

#### Parameters

• **v**: `Vector2`

#### Returns

`Vector2`


***

### fromString()

<span class="mod-badge">static</span>

> **fromString**(`str`, `delimiter`?): `Vector2`

fromString

Gets a Vector2 from the string representation produced by [Vector2Utils.toString](Vector2Utils.md#tostring). If any numeric value is not a number
or the format is invalid, undefined is returned.

#### Parameters

• **str**: `string`

The string to parse

• **delimiter?**: `string`

The delimiter used to separate the components. Defaults to the same as the default for [Vector2Utils.toString](Vector2Utils.md#tostring)

#### Returns

`Vector2`


***

### lerp()

<span class="mod-badge">static</span>

> **lerp**(`a`, `b`, `t`): `Vector2`

lerp

Constructs a new vector using linear interpolation on each component from two vectors.

#### Parameters

• **a**: `Vector2`

• **b**: `Vector2`

• **t**: `number`

#### Returns

`Vector2`


***

### magnitude()

<span class="mod-badge">static</span>

> **magnitude**(`v`): `number`

magnitude

The magnitude of a vector

#### Parameters

• **v**: `Vector2`

#### Returns

`number`


***

### multiply()

<span class="mod-badge">static</span>

> **multiply**(`a`, `b`): `Vector2`

multiply

Element-wise multiplication of two vectors together.
Not to be confused with [Vector2Utils.dot](Vector2Utils.md#dot) product

#### Parameters

• **a**: `Vector2`

• **b**: `Vector2`

#### Returns

`Vector2`


***

### normalize()

<span class="mod-badge">static</span>

> **normalize**(`v`): `Vector2`

normalize

Takes a vector 3 and normalizes it to a unit vector

#### Parameters

• **v**: `Vector2`

#### Returns

`Vector2`


***

### scale()

<span class="mod-badge">static</span>

> **scale**(`v1`, `scale`): `Vector2`

scale

Multiple all entries in a vector by a single scalar value producing a new vector

#### Parameters

• **v1**: `Vector2`

• **scale**: `number`

#### Returns

`Vector2`


***

### slerp()

<span class="mod-badge">static</span>

> **slerp**(`a`, `b`, `t`): `Vector2`

slerp

Constructs a new vector using spherical linear interpolation on each component from two vectors.

#### Parameters

• **a**: `Vector2`

• **b**: `Vector2`

• **t**: `number`

#### Returns

`Vector2`


***

### subtract()

<span class="mod-badge">static</span>

> **subtract**(`v1`, `v2`): `Vector2`

subtract

Subtract two vectors to produce a new vector (v1-v2)

#### Parameters

• **v1**: `Vector2`

• **v2**: `Partial`\<`Vector2`\>

#### Returns

`Vector2`


***

### toString()

<span class="mod-badge">static</span>

> **toString**(`v`, `options`?): `string`

toString

Create a string representation of a vector2

#### Parameters

• **v**: `Vector2`

• **options?**

• **options.decimals?**: `number`

• **options.delimiter?**: `string`

#### Returns

`string`

