# a-first
Returns the first n element of an array

## Install

```sh
$ npm install --save a-first
```

## Example

```js
var first = require('a-first');

var arr = [1, 2, 3, 4, 5];

console.log(first(arr, 2));
// -> [1, 2]

console.log(first(arr));
// -> 1
```

### `require('a-first')(array, n)`

**Arguments**:
- `array`: The array
- `n`: number of first n elements that wants to be returned
- If we do not mention argument n then function will return first element of array

**Returns**: Returns the first n element of an array

## License

&copy; 2016 vikram. MIT License
