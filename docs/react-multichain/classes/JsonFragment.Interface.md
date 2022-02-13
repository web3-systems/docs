# Class: Interface

[JsonFragment](../modules/JsonFragment.md).Interface

## Table of contents

### Constructors

- [constructor](JsonFragment.Interface.md#constructor)

### Properties

- [\_abiCoder](JsonFragment.Interface.md#_abicoder)
- [\_isInterface](JsonFragment.Interface.md#_isinterface)
- [deploy](JsonFragment.Interface.md#deploy)
- [errors](JsonFragment.Interface.md#errors)
- [events](JsonFragment.Interface.md#events)
- [fragments](JsonFragment.Interface.md#fragments)
- [functions](JsonFragment.Interface.md#functions)
- [structs](JsonFragment.Interface.md#structs)

### Methods

- [\_decodeParams](JsonFragment.Interface.md#_decodeparams)
- [\_encodeParams](JsonFragment.Interface.md#_encodeparams)
- [decodeErrorResult](JsonFragment.Interface.md#decodeerrorresult)
- [decodeEventLog](JsonFragment.Interface.md#decodeeventlog)
- [decodeFunctionData](JsonFragment.Interface.md#decodefunctiondata)
- [decodeFunctionResult](JsonFragment.Interface.md#decodefunctionresult)
- [encodeDeploy](JsonFragment.Interface.md#encodedeploy)
- [encodeErrorResult](JsonFragment.Interface.md#encodeerrorresult)
- [encodeEventLog](JsonFragment.Interface.md#encodeeventlog)
- [encodeFilterTopics](JsonFragment.Interface.md#encodefiltertopics)
- [encodeFunctionData](JsonFragment.Interface.md#encodefunctiondata)
- [encodeFunctionResult](JsonFragment.Interface.md#encodefunctionresult)
- [format](JsonFragment.Interface.md#format)
- [getError](JsonFragment.Interface.md#geterror)
- [getEvent](JsonFragment.Interface.md#getevent)
- [getEventTopic](JsonFragment.Interface.md#geteventtopic)
- [getFunction](JsonFragment.Interface.md#getfunction)
- [getSighash](JsonFragment.Interface.md#getsighash)
- [parseError](JsonFragment.Interface.md#parseerror)
- [parseLog](JsonFragment.Interface.md#parselog)
- [parseTransaction](JsonFragment.Interface.md#parsetransaction)
- [getAbiCoder](JsonFragment.Interface.md#getabicoder)
- [getAddress](JsonFragment.Interface.md#getaddress)
- [getEventTopic](JsonFragment.Interface.md#geteventtopic)
- [getSighash](JsonFragment.Interface.md#getsighash)
- [isInterface](JsonFragment.Interface.md#isinterface)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Interface**(`fragments`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragments` | `string` \| readonly (`string` \| [`JsonFragment`](../interfaces/JsonFragment.JsonFragment-1.md) \| [`Fragment`](JsonFragment.Fragment.md))[] |

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:52

## Properties

### <a id="_abicoder" name="_abicoder"></a> \_abiCoder

• `Readonly` **\_abiCoder**: [`AbiCoder`](JsonFragment.AbiCoder.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:50

___

### <a id="_isinterface" name="_isinterface"></a> \_isInterface

• `Readonly` **\_isInterface**: `boolean`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:51

___

### <a id="deploy" name="deploy"></a> deploy

• `Readonly` **deploy**: [`ConstructorFragment`](JsonFragment.ConstructorFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:49

___

### <a id="errors" name="errors"></a> errors

• `Readonly` **errors**: `Object`

#### Index signature

▪ [name: `string`]: [`ErrorFragment`](JsonFragment.ErrorFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:37

___

### <a id="events" name="events"></a> events

• `Readonly` **events**: `Object`

#### Index signature

▪ [name: `string`]: [`EventFragment`](JsonFragment.EventFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:40

___

### <a id="fragments" name="fragments"></a> fragments

• `Readonly` **fragments**: readonly [`Fragment`](JsonFragment.Fragment.md)[]

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:36

___

### <a id="functions" name="functions"></a> functions

• `Readonly` **functions**: `Object`

#### Index signature

▪ [name: `string`]: [`FunctionFragment`](JsonFragment.FunctionFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:43

___

### <a id="structs" name="structs"></a> structs

• `Readonly` **structs**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:46

## Methods

### <a id="_decodeparams" name="_decodeparams"></a> \_decodeParams

▸ **_decodeParams**(`params`, `data`): [`Result`](../interfaces/JsonFragment.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly [`ParamType`](JsonFragment.ParamType.md)[] |
| `data` | `BytesLike` |

#### Returns

[`Result`](../interfaces/JsonFragment.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:63

___

### <a id="_encodeparams" name="_encodeparams"></a> \_encodeParams

▸ **_encodeParams**(`params`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly [`ParamType`](JsonFragment.ParamType.md)[] |
| `values` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:64

___

### <a id="decodeerrorresult" name="decodeerrorresult"></a> decodeErrorResult

▸ **decodeErrorResult**(`fragment`, `data`): [`Result`](../interfaces/JsonFragment.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`ErrorFragment`](JsonFragment.ErrorFragment.md) |
| `data` | `BytesLike` |

#### Returns

[`Result`](../interfaces/JsonFragment.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:66

___

### <a id="decodeeventlog" name="decodeeventlog"></a> decodeEventLog

▸ **decodeEventLog**(`eventFragment`, `data`, `topics?`): [`Result`](../interfaces/JsonFragment.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| [`EventFragment`](JsonFragment.EventFragment.md) |
| `data` | `BytesLike` |
| `topics?` | readonly `string`[] |

#### Returns

[`Result`](../interfaces/JsonFragment.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:77

___

### <a id="decodefunctiondata" name="decodefunctiondata"></a> decodeFunctionData

▸ **decodeFunctionData**(`functionFragment`, `data`): [`Result`](../interfaces/JsonFragment.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](JsonFragment.FunctionFragment.md) |
| `data` | `BytesLike` |

#### Returns

[`Result`](../interfaces/JsonFragment.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:68

___

### <a id="decodefunctionresult" name="decodefunctionresult"></a> decodeFunctionResult

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](../interfaces/JsonFragment.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](JsonFragment.FunctionFragment.md) |
| `data` | `BytesLike` |

#### Returns

[`Result`](../interfaces/JsonFragment.Result.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:70

___

### <a id="encodedeploy" name="encodedeploy"></a> encodeDeploy

▸ **encodeDeploy**(`values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:65

___

### <a id="encodeerrorresult" name="encodeerrorresult"></a> encodeErrorResult

▸ **encodeErrorResult**(`fragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`ErrorFragment`](JsonFragment.ErrorFragment.md) |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:67

___

### <a id="encodeeventlog" name="encodeeventlog"></a> encodeEventLog

▸ **encodeEventLog**(`eventFragment`, `values`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | [`EventFragment`](JsonFragment.EventFragment.md) |
| `values` | readonly `any`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `topics` | `string`[] |

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:73

___

### <a id="encodefiltertopics" name="encodefiltertopics"></a> encodeFilterTopics

▸ **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | [`EventFragment`](JsonFragment.EventFragment.md) |
| `values` | readonly `any`[] |

#### Returns

(`string` \| `string`[])[]

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:72

___

### <a id="encodefunctiondata" name="encodefunctiondata"></a> encodeFunctionData

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](JsonFragment.FunctionFragment.md) |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:69

___

### <a id="encodefunctionresult" name="encodefunctionresult"></a> encodeFunctionResult

▸ **encodeFunctionResult**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](JsonFragment.FunctionFragment.md) |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:71

___

### <a id="format" name="format"></a> format

▸ **format**(`format?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string` \| `string`[]

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:53

___

### <a id="geterror" name="geterror"></a> getError

▸ **getError**(`nameOrSignatureOrSighash`): [`ErrorFragment`](JsonFragment.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

[`ErrorFragment`](JsonFragment.ErrorFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:60

___

### <a id="getevent" name="getevent"></a> getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): [`EventFragment`](JsonFragment.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | `string` |

#### Returns

[`EventFragment`](JsonFragment.EventFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:59

___

### <a id="geteventtopic" name="geteventtopic"></a> getEventTopic

▸ **getEventTopic**(`eventFragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| [`EventFragment`](JsonFragment.EventFragment.md) |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:62

___

### <a id="getfunction" name="getfunction"></a> getFunction

▸ **getFunction**(`nameOrSignatureOrSighash`): [`FunctionFragment`](JsonFragment.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

[`FunctionFragment`](JsonFragment.FunctionFragment.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:58

___

### <a id="getsighash" name="getsighash"></a> getSighash

▸ **getSighash**(`fragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`ErrorFragment`](JsonFragment.ErrorFragment.md) \| [`FunctionFragment`](JsonFragment.FunctionFragment.md) |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:61

___

### <a id="parseerror" name="parseerror"></a> parseError

▸ **parseError**(`data`): `ErrorDescription`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BytesLike` |

#### Returns

`ErrorDescription`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:86

___

### <a id="parselog" name="parselog"></a> parseLog

▸ **parseLog**(`log`): [`LogDescription`](JsonFragment.LogDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `Object` |
| `log.data` | `string` |
| `log.topics` | `string`[] |

#### Returns

[`LogDescription`](JsonFragment.LogDescription.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:82

___

### <a id="parsetransaction" name="parsetransaction"></a> parseTransaction

▸ **parseTransaction**(`tx`): [`TransactionDescription`](JsonFragment.TransactionDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.data` | `string` |
| `tx.value?` | `BigNumberish` |

#### Returns

[`TransactionDescription`](JsonFragment.TransactionDescription.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:78

___

### <a id="getabicoder" name="getabicoder"></a> getAbiCoder

▸ `Static` **getAbiCoder**(): [`AbiCoder`](JsonFragment.AbiCoder.md)

#### Returns

[`AbiCoder`](JsonFragment.AbiCoder.md)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:54

___

### <a id="getaddress" name="getaddress"></a> getAddress

▸ `Static` **getAddress**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:55

___

### <a id="geteventtopic" name="geteventtopic"></a> getEventTopic

▸ `Static` **getEventTopic**(`eventFragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | [`EventFragment`](JsonFragment.EventFragment.md) |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:57

___

### <a id="getsighash" name="getsighash"></a> getSighash

▸ `Static` **getSighash**(`fragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | [`ErrorFragment`](JsonFragment.ErrorFragment.md) \| [`FunctionFragment`](JsonFragment.FunctionFragment.md) |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:56

___

### <a id="isinterface" name="isinterface"></a> isInterface

▸ `Static` **isInterface**(`value`): value is Interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Interface

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:87
