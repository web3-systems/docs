# Class: AbiCoder

[JsonFragment](../modules/JsonFragment.md).AbiCoder

## Table of contents

### Constructors

- [constructor](JsonFragment.AbiCoder.md#constructor)

### Properties

- [coerceFunc](JsonFragment.AbiCoder.md#coercefunc)

### Methods

- [\_getCoder](JsonFragment.AbiCoder.md#_getcoder)
- [\_getReader](JsonFragment.AbiCoder.md#_getreader)
- [\_getWordSize](JsonFragment.AbiCoder.md#_getwordsize)
- [\_getWriter](JsonFragment.AbiCoder.md#_getwriter)
- [decode](JsonFragment.AbiCoder.md#decode)
- [encode](JsonFragment.AbiCoder.md#encode)
- [getDefaultValue](JsonFragment.AbiCoder.md#getdefaultvalue)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new AbiCoder**(`coerceFunc?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coerceFunc?` | [`CoerceFunc`](../modules/JsonFragment.md#coercefunc) |

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:7

## Properties

### <a id="coercefunc" name="coercefunc"></a> coerceFunc

• `Readonly` **coerceFunc**: [`CoerceFunc`](../modules/JsonFragment.md#coercefunc)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:6

## Methods

### <a id="_getcoder" name="_getcoder"></a> \_getCoder

▸ **_getCoder**(`param`): `Coder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ParamType`](JsonFragment.ParamType.md) |

#### Returns

`Coder`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:8

___

### <a id="_getreader" name="_getreader"></a> \_getReader

▸ **_getReader**(`data`, `allowLoose?`): `Reader`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `allowLoose?` | `boolean` |

#### Returns

`Reader`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:10

___

### <a id="_getwordsize" name="_getwordsize"></a> \_getWordSize

▸ **_getWordSize**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:9

___

### <a id="_getwriter" name="_getwriter"></a> \_getWriter

▸ **_getWriter**(): `Writer`

#### Returns

`Writer`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:11

___

### <a id="decode" name="decode"></a> decode

▸ **decode**(`types`, `data`, `loose?`): [`Result`](../interfaces/JsonFragment.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](JsonFragment.ParamType.md))[] |
| `data` | `BytesLike` |
| `loose?` | `boolean` |

#### Returns

[`Result`](../interfaces/JsonFragment.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:14

___

### <a id="encode" name="encode"></a> encode

▸ **encode**(`types`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](JsonFragment.ParamType.md))[] |
| `values` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:13

___

### <a id="getdefaultvalue" name="getdefaultvalue"></a> getDefaultValue

▸ **getDefaultValue**(`types`): [`Result`](../interfaces/JsonFragment.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | readonly (`string` \| [`ParamType`](JsonFragment.ParamType.md))[] |

#### Returns

[`Result`](../interfaces/JsonFragment.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/abi-coder.d.ts:12
