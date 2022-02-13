# Class: ParamType

[JsonFragment](../modules/JsonFragment.md).ParamType

## Table of contents

### Constructors

- [constructor](JsonFragment.ParamType.md#constructor)

### Properties

- [\_isParamType](JsonFragment.ParamType.md#_isparamtype)
- [arrayChildren](JsonFragment.ParamType.md#arraychildren)
- [arrayLength](JsonFragment.ParamType.md#arraylength)
- [baseType](JsonFragment.ParamType.md#basetype)
- [components](JsonFragment.ParamType.md#components)
- [indexed](JsonFragment.ParamType.md#indexed)
- [name](JsonFragment.ParamType.md#name)
- [type](JsonFragment.ParamType.md#type)

### Methods

- [format](JsonFragment.ParamType.md#format)
- [from](JsonFragment.ParamType.md#from)
- [fromObject](JsonFragment.ParamType.md#fromobject)
- [fromString](JsonFragment.ParamType.md#fromstring)
- [isParamType](JsonFragment.ParamType.md#isparamtype)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ParamType**(`constructorGuard`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `params` | `any` |

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:32

## Properties

### <a id="_isparamtype" name="_isparamtype"></a> \_isParamType

• `Readonly` **\_isParamType**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:31

___

### <a id="arraychildren" name="arraychildren"></a> arrayChildren

• `Readonly` **arrayChildren**: [`ParamType`](JsonFragment.ParamType.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:30

___

### <a id="arraylength" name="arraylength"></a> arrayLength

• `Readonly` **arrayLength**: `number`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:29

___

### <a id="basetype" name="basetype"></a> baseType

• `Readonly` **baseType**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:26

___

### <a id="components" name="components"></a> components

• `Readonly` **components**: [`ParamType`](JsonFragment.ParamType.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:28

___

### <a id="indexed" name="indexed"></a> indexed

• `Readonly` **indexed**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:27

___

### <a id="name" name="name"></a> name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:24

___

### <a id="type" name="type"></a> type

• `Readonly` **type**: `string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:25

## Methods

### <a id="format" name="format"></a> format

▸ **format**(`format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:33

___

### <a id="from" name="from"></a> from

▸ `Static` **from**(`value`, `allowIndexed?`): [`ParamType`](JsonFragment.ParamType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| [`ParamType`](JsonFragment.ParamType.md) \| [`JsonFragmentType`](../interfaces/JsonFragment.JsonFragmentType.md) |
| `allowIndexed?` | `boolean` |

#### Returns

[`ParamType`](JsonFragment.ParamType.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:34

___

### <a id="fromobject" name="fromobject"></a> fromObject

▸ `Static` **fromObject**(`value`): [`ParamType`](JsonFragment.ParamType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ParamType`](JsonFragment.ParamType.md) \| [`JsonFragmentType`](../interfaces/JsonFragment.JsonFragmentType.md) |

#### Returns

[`ParamType`](JsonFragment.ParamType.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:35

___

### <a id="fromstring" name="fromstring"></a> fromString

▸ `Static` **fromString**(`value`, `allowIndexed?`): [`ParamType`](JsonFragment.ParamType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `allowIndexed?` | `boolean` |

#### Returns

[`ParamType`](JsonFragment.ParamType.md)

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:36

___

### <a id="isparamtype" name="isparamtype"></a> isParamType

▸ `Static` **isParamType**(`value`): value is ParamType

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is ParamType

#### Defined in

node_modules/@ethersproject/abi/lib/fragments.d.ts:37
