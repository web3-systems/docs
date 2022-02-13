# Class: EventFragment

[JsonFragment](../modules/JsonFragment.md).EventFragment

## Hierarchy

- [`Fragment`](JsonFragment.Fragment.md)

  ↳ **`EventFragment`**

## Table of contents

### Constructors

- [constructor](JsonFragment.EventFragment.md#constructor)

### Properties

- [\_isFragment](JsonFragment.EventFragment.md#_isfragment)
- [anonymous](JsonFragment.EventFragment.md#anonymous)
- [inputs](JsonFragment.EventFragment.md#inputs)
- [name](JsonFragment.EventFragment.md#name)
- [type](JsonFragment.EventFragment.md#type)

### Methods

- [format](JsonFragment.EventFragment.md#format)
- [from](JsonFragment.EventFragment.md#from)
- [fromObject](JsonFragment.EventFragment.md#fromobject)
- [fromString](JsonFragment.EventFragment.md#fromstring)
- [isEventFragment](JsonFragment.EventFragment.md#iseventfragment)
- [isFragment](JsonFragment.EventFragment.md#isfragment)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new EventFragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[constructor](JsonFragment.Fragment.md#constructor)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### <a id="_isfragment" name="_isfragment"></a> \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[_isFragment](JsonFragment.Fragment.md#_isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### <a id="anonymous" name="anonymous"></a> anonymous

• `Readonly` **anonymous**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:52

___

### <a id="inputs" name="inputs"></a> inputs

• `Readonly` **inputs**: [`ParamType`](JsonFragment.ParamType.md)[]

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[inputs](JsonFragment.Fragment.md#inputs)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### <a id="name" name="name"></a> name

• `Readonly` **name**: `string`

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[name](JsonFragment.Fragment.md#name)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### <a id="type" name="type"></a> type

• `Readonly` **type**: `string`

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[type](JsonFragment.Fragment.md#type)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:40

## Methods

### <a id="format" name="format"></a> format

▸ **format**(`format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string`

#### Overrides

[Fragment](JsonFragment.Fragment.md).[format](JsonFragment.Fragment.md#format)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:53

___

### <a id="from" name="from"></a> from

▸ `Static` **from**(`value`): [`EventFragment`](JsonFragment.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/JsonFragment.JsonFragment-1.md) \| [`EventFragment`](JsonFragment.EventFragment.md) |

#### Returns

[`EventFragment`](JsonFragment.EventFragment.md)

#### Overrides

[Fragment](JsonFragment.Fragment.md).[from](JsonFragment.Fragment.md#from)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:54

___

### <a id="fromobject" name="fromobject"></a> fromObject

▸ `Static` **fromObject**(`value`): [`EventFragment`](JsonFragment.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/JsonFragment.JsonFragment-1.md) \| [`EventFragment`](JsonFragment.EventFragment.md) |

#### Returns

[`EventFragment`](JsonFragment.EventFragment.md)

#### Overrides

[Fragment](JsonFragment.Fragment.md).[fromObject](JsonFragment.Fragment.md#fromobject)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:55

___

### <a id="fromstring" name="fromstring"></a> fromString

▸ `Static` **fromString**(`value`): [`EventFragment`](JsonFragment.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`EventFragment`](JsonFragment.EventFragment.md)

#### Overrides

[Fragment](JsonFragment.Fragment.md).[fromString](JsonFragment.Fragment.md#fromstring)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:56

___

### <a id="iseventfragment" name="iseventfragment"></a> isEventFragment

▸ `Static` **isEventFragment**(`value`): value is EventFragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is EventFragment

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:57

___

### <a id="isfragment" name="isfragment"></a> isFragment

▸ `Static` **isFragment**(`value`): value is Fragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Fragment

#### Inherited from

[Fragment](JsonFragment.Fragment.md).[isFragment](JsonFragment.Fragment.md#isfragment)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:49
