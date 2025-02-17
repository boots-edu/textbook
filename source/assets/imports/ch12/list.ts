/**
 * Implementation of a "List", which will just be a wrapper around an array.
 * This is redundant to the built-in array; it is just a pedagogical example.
 *
 * The type variable `T` is a generic type, which means that it can be any type, but it
 * will be the same type for all the items in the List and the same type for the parameter
 * of the callback functions.
 */
class MyList<T> {
	private items: T[];
	constructor(items: T[]) {
		this.items = items;
	}
	/**
		* This method will call the callback function for each item in the List.
		*
		* @param callback The function to call for each item. It will be passed the current item, the index, and the array.
		*               The index is optional, and the array is the data inside of the List itself.
		*/
	forEach(callback: (currentValue: T, index: number, array: T[]) => void): void {
		for (let i = 0; i < this.items.length; i++) {
			callback(this.items[i], i, this.items);
		}
	}
	/**
	* This method will create a new List with only the items that pass the test in the callback function.
	*
	* @param callback The function to call for each item. It should return true if the item should be included in the new List.
	* @returns A new List with only the items that pass the test.
	*/
	filter(callback: (currentValue: T, index: number, array: T[]) => boolean) {
		let result = new List<T>([]);
		for (let i = 0; i < this.items.length; i++) {
			if (callback(this.items[i], i, this.items)) {
				result.items.push(this.items[i]);
			}
		}
		return result;
	}

	/**
	 * This method will call the apply the callback function to each element, and return if ANY of them return true.
	 *
	 * @param callback The function to call for each item. It should return true if the item passes the test.
	 * @returns True if any of the items pass the test, false otherwise.
	 */
	some(callback: (currentValue: T, index: number, array: T[]) => boolean) {
		for (let i = 0; i < this.items.length; i++) {
			if (callback(this.items[i], i, this.items)) {
				return true;
			}
		}
		return false;
	}
	/**
  * This method will call the apply the callback function to each element, and return if ALL of them return true.
  *
  * @param callback The function to call for each item. It should return true if the item passes the test.
  * @returns True if all of the items pass the test, false otherwise.
  */
	every(callback: (currentValue: T, index: number, array: T[]) => boolean) {
		for (let i = 0; i < this.items.length; i++) {
			if (!callback(this.items[i], i, this.items)) {
				return false;
			}
		}
		return true;
	}
	map<U>(callback: (currentValue: T, index: number, array: T[]) => U) {
		let result = new List<U>([]);
		for (let i = 0; i < this.items.length; i++) {
			result.items.push(callback(this.items[i], i, this.items));
		}
		return result;
	}
	/**
 * This method will call the apply the callback function to each element ALONG with an accumulator value,
 * and return the final value of the accumulator. Unlike `reduce`, it will start from the right side of the
 * array and go to the left (aka backwards). This can be used to do the same things as `reduce`, but in reverse.
 * Note that the function ALSO takes an initial value for the accumulator.
 *
 * @param callback The function to call for each item. It should return the new value for the accumulator.
 * @param initialValue The initial value for the accumulator.
 * @returns The final value of the accumulator.
 */
	rightReduce<U>(
		callback: (
			accumulator: U,
			currentValue: T,
			index: number,
			array: T[],
		) => U,
		initialValue: U,
	) {
		let accumulator = initialValue;
		for (let i = this.items.length - 1; i >= 0; i--) {
			accumulator = callback(accumulator, this.items[i], i, this.items);
		}
	}
	/**
  * This method will call the apply the callback function to each element, and return the first item that
  * passes the test. If no item passes the test, it will return `undefined`.
  *
  * @param callback The function to call for each item. It should return true if the item passes the test.
  * @returns The first item that passes the test, or `undefined` if none do.
  */
	find(callback: (currentValue: T, index: number, array: T[]) => boolean) {
		for (let i = 0; i < this.items.length; i++) {
			if (callback(this.items[i], i, this.items)) {
				return this.items[i];
			}
		}
		return undefined;
	}

	/**
	 * This method will call the apply the callback function to each element, and return the index of the first item that
	 * passes the test. If no item passes the test, it will return `-1`.
	 *
	 * @param callback The function to call for each item. It should return true if the item passes the test.
	 * @returns The index of the first item that passes the test, or `-1` if none do.
	 */
	findIndex(
		callback: (currentValue: T, index: number, array: T[]) => boolean,
	) {
		for (let i = 0; i < this.items.length; i++) {
			if (callback(this.items[i], i, this.items)) {
				return i;
			}
		}
		return -1;
	}
	/**
 * This method will call the apply the callback function to each element, and return the last item that
 * passes the test. If no item passes the test, it will return `undefined`. This is the same as `find`,
 * but it starts from the end of the array and goes to the beginning.
 *
 * @param callback The function to call for each item. It should return true if the item passes the test.
 * @returns The last item that passes the test, or `undefined` if none do.
 */
	findLast(
		callback: (currentValue: T, index: number, array: T[]) => boolean,
	) {
		for (let i = this.items.length - 1; i >= 0; i--) {
			if (callback(this.items[i], i, this.items)) {
				return this.items[i];
			}
		}
		return undefined;
	}
	/**
* This method will call the apply the callback function to each element, and return the index of the last item that
* passes the test. If no item passes the test, it will return `-1`. This is the same as `findIndex`,
* but it starts from the end of the array and goes to the beginning.
*
* @param callback The function to call for each item. It should return true if the item passes the test.
* @returns The index of the last item that passes the test, or `-1` if none do.
*/
	findLastIndex(
		callback: (currentValue: T, index: number, array: T[]) => boolean,
	) {
		for (let i = this.items.length - 1; i >= 0; i--) {
			if (callback(this.items[i], i, this.items)) {
				return i;
			}
		}
		return -1;
	}
	/**
* This method will sort the items in the List using the given callback function to compare them.
* The callback function should return a negative number if `a` should come before `b`, a positive number
* if `a` should come after `b`, and 0 if they are equal.
*
* Unlike the built-in `sort` method, this will modify the original List.
*
* @param callback The function to compare two items. It should return a negative number if `a` should come before `b`, a positive number if `a` should come after `b`, and 0 if they are equal.
* @sideEffect This method will modify the original List.
*/
	sort(callback: (a: T, b: T) => number) {
		let len = this.items.length;
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len - i - 1; j++) {
				if (callback(this.items[j], this.items[j + 1]) > 0) {
					let temp = this.items[j];
					this.items[j] = this.items[j + 1];
					this.items[j + 1] = temp;
				}
			}
		}
	}
}