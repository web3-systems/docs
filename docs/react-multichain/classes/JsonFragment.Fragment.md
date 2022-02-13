# Class: Fragment

[JsonFragment](../modules/JsonFragment.md).Fragment

## Hierarchy

- **`Fragment`**

  ↳ [`ConstructorFragment`](JsonFragment.ConstructorFragment.md)

  ↳ [`ErrorFragment`](JsonFragment.ErrorFragment.md)

  ↳ [`EventFragment`](JsonFragment.EventFragment.md)

## Table of contents

### Constructors

- [constructor](JsonFragment.Fragment.md#constructor)

### Properties

- [\_isFragment](JsonFragment.Fragment.md#_isfragment)
- [inputs](JsonFragment.Fragment.md#inputs)
- [name](JsonFragment.Fragment.md#name)
- [type](JsonFragment.Fragment.md#type)

### Methods

- [format](JsonFragment.Fragment.md#format)
- [from](JsonFragment.Fragment.md#from)
- [fromObject](JsonFragment.Fragment.md#fromobject)
- [fromString](JsonFragment.Fragment.md#fromstring)
- [isFragment](JsonFragment.Fragment.md#isfragment)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Fragment**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:44

## Properties

### <a id="_isfragment" name="_isfragment"></a> \_isFragment

• `Readonly` **\_isFragment**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:43

___

### <a id="inputs" name="inputs"></a> inputs

• `Readonly` **inputs**: [`ParamType`](JsonFragment.ParamType.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:42

___

### <a id="name" name="name"></a> name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:41

___

### <a id="type" name="type"></a> type

• `Readonly` **type**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:40

## Methods

### <a id="format" name="format"></a> format

▸ `Abstract` **format**(`format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:45

___

### <a id="from" name="from"></a> from

▸ `Static` **from**(`value`): [`Fragment`](JsonFragment.Fragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`JsonFragment`](../interfaces/JsonFragment.JsonFragment-1.md) \| [`Fragment`](JsonFragment.Fragment.md) |

#### Returns

[`Fragment`](JsonFragment.Fragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:46

___

### <a id="fromobject" name="fromobject"></a> fromObject

▸ `Static` **fromObject**(`value`): [`Fragment`](JsonFragment.Fragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JsonFragment`](../interfaces/JsonFragment.JsonFragment-1.md) \| [`Fragment`](JsonFragment.Fragment.md) |

#### Returns

[`Fragment`](JsonFragment.Fragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:47

___

### <a id="fromstring" name="fromstring"></a> fromString

▸ `Static` **fromString**(`value`): [`Fragment`](JsonFragment.Fragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Fragment`](JsonFragment.Fragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:48

___

### <a id="isfragment" name="isfragment"></a> isFragment

▸ `Static` **isFragment**(`value`): value is Fragment

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Fragment

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:49
