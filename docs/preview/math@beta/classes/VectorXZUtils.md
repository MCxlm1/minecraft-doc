[@minecraft/math](../globals.md) / VectorXZUtils

# Class: VectorXZUtils

Utilities operating on VectorXZ objects. All methods are static and do not modify the input objects.

## Constructors

### new VectorXZUtils()

> **new VectorXZUtils**(): [`VectorXZUtils`](VectorXZUtils.md)

#### Returns

[`VectorXZUtils`](VectorXZUtils.md)

## Methods

### add()

<span class="mod-badge">static</span>

> **add**(`v1`, `v2`): `VectorXZ`

add

Add two vectors to produce a new vector

#### Parameters

• **v1**: `VectorXZ`

• **v2**: `Partial`\<`VectorXZ`\>

#### Returns

`VectorXZ`


***

### clamp()

<span class="mod-badge">static</span>

> **clamp**(`v`, `limits`?): `VectorXZ`

clamp

Clamps the components of a vector to limits to produce a new vector

#### Parameters

• **v**: `VectorXZ`

• **limits?**

• **limits.max?**: `Partial`\<`VectorXZ`\>

• **limits.min?**: `Partial`\<`VectorXZ`\>

#### Returns

`VectorXZ`


***

### distance()

<span class="mod-badge">static</span>

> **distance**(`a`, `b`): `number`

distance

Calculate the distance between two vectors

#### Parameters

• **a**: `VectorXZ`

• **b**: `VectorXZ`

#### Returns

`number`


***

### dot()

<span class="mod-badge">static</span>

> **dot**(`a`, `b`): `number`

dot

Calculate the dot product of two vectors

#### Parameters

• **a**: `VectorXZ`

• **b**: `VectorXZ`

#### Returns

`number`


***

### equals()

<span class="mod-badge">static</span>

> **equals**(`v1`, `v2`): `boolean`

equals

Check the equality of two vectors

#### Parameters

• **v1**: `VectorXZ`

• **v2**: `VectorXZ`

#### Returns

`boolean`


***

### floor()

<span class="mod-badge">static</span>

> **floor**(`v`): `VectorXZ`

floor

Floor the components of a vector to produce a new vector

#### Parameters

• **v**: `VectorXZ`

#### Returns

`VectorXZ`


***

### fromString()

<span class="mod-badge">static</span>

> **fromString**(`str`, `delimiter`?): `VectorXZ`

fromString

Gets a VectorXZ from the string representation produced by [VectorXZUtils.toString](VectorXZUtils.md#tostring). If any numeric value is not a number
or the format is invalid, undefined is returned.

#### Parameters

• **str**: `string`

The string to parse

• **delimiter?**: `string`

The delimiter used to separate the components. Defaults to the same as the default for [VectorXZUtils.toString](VectorXZUtils.md#tostring)

#### Returns

`VectorXZ`


***

### lerp()

<span class="mod-badge">static</span>

> **lerp**(`a`, `b`, `t`): `VectorXZ`

lerp

Constructs a new vector using linear interpolation on each component from two vectors.

#### Parameters

• **a**: `VectorXZ`

• **b**: `VectorXZ`

• **t**: `number`

#### Returns

`VectorXZ`


***

### magnitude()

<span class="mod-badge">static</span>

> **magnitude**(`v`): `number`

magnitude

The magnitude of a vector

#### Parameters

• **v**: `VectorXZ`

#### Returns

`number`


***

### multiply()

<span class="mod-badge">static</span>

> **multiply**(`a`, `b`): `VectorXZ`

multiply

Element-wise multiplication of two vectors together.
Not to be confused with [VectorXZUtils.dot](VectorXZUtils.md#dot) product

#### Parameters

• **a**: `VectorXZ`

• **b**: `VectorXZ`

#### Returns

`VectorXZ`


***

### normalize()

<span class="mod-badge">static</span>

> **normalize**(`v`): `VectorXZ`

normalize

Takes a vector 3 and normalizes it to a unit vector

#### Parameters

• **v**: `VectorXZ`

#### Returns

`VectorXZ`


***

### scale()

<span class="mod-badge">static</span>

> **scale**(`v1`, `scale`): `VectorXZ`

scale

Multiple all entries in a vector by a single scalar value producing a new vector

#### Parameters

• **v1**: `VectorXZ`

• **scale**: `number`

#### Returns

`VectorXZ`


***

### slerp()

<span class="mod-badge">static</span>

> **slerp**(`a`, `b`, `t`): `VectorXZ`

slerp

Constructs a new vector using spherical linear interpolation on each component from two vectors.

#### Parameters

• **a**: `VectorXZ`

• **b**: `VectorXZ`

• **t**: `number`

#### Returns

`VectorXZ`


***

### subtract()

<span class="mod-badge">static</span>

> **subtract**(`v1`, `v2`): `VectorXZ`

subtract

Subtract two vectors to produce a new vector (v1-v2)

#### Parameters

• **v1**: `VectorXZ`

• **v2**: `Partial`\<`VectorXZ`\>

#### Returns

`VectorXZ`


***

### toString()

<span class="mod-badge">static</span>

> **toString**(`v`, `options`?): `string`

toString

Create a string representation of a vectorxz

#### Parameters

• **v**: `VectorXZ`

• **options?**

• **options.decimals?**: `number`

• **options.delimiter?**: `string`

#### Returns

`string`

