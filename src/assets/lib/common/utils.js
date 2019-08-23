"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
function isDef(value) {
    return value !== undefined && value !== null;
}
exports.isDef = isDef;
function isObj(x) {
    var type = typeof x === "undefined" ? "undefined" : _typeof(x);
    return x !== null && (type === 'object' || type === 'function');
}
exports.isObj = isObj;
function isNumber(value) {
    return (/^\d+$/.test(value)
    );
}
exports.isNumber = isNumber;
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
exports.range = range;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiaXNEZWYiLCJ1bmRlZmluZWQiLCJpc09iaiIsIngiLCJ0eXBlIiwiaXNOdW1iZXIiLCJ0ZXN0IiwicmFuZ2UiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxTQUFTQyxLQUFULENBQWVELEtBQWYsRUFBc0I7QUFDbEIsV0FBT0EsVUFBVUUsU0FBVixJQUF1QkYsVUFBVSxJQUF4QztBQUNIO0FBQ0RELFFBQVFFLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0EsU0FBU0UsS0FBVCxDQUFlQyxDQUFmLEVBQWtCO0FBQ2QsUUFBSUMsY0FBY0QsQ0FBZCx5Q0FBY0EsQ0FBZCxDQUFKO0FBQ0EsV0FBT0EsTUFBTSxJQUFOLEtBQWVDLFNBQVMsUUFBVCxJQUFxQkEsU0FBUyxVQUE3QyxDQUFQO0FBQ0g7QUFDRE4sUUFBUUksS0FBUixHQUFnQkEsS0FBaEI7QUFDQSxTQUFTRyxRQUFULENBQWtCTixLQUFsQixFQUF5QjtBQUNyQixXQUFPLFNBQVFPLElBQVIsQ0FBYVAsS0FBYjtBQUFQO0FBQ0g7QUFDREQsUUFBUU8sUUFBUixHQUFtQkEsUUFBbkI7QUFDQSxTQUFTRSxLQUFULENBQWVDLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUMxQixXQUFPQyxLQUFLRixHQUFMLENBQVNFLEtBQUtELEdBQUwsQ0FBU0YsR0FBVCxFQUFjQyxHQUFkLENBQVQsRUFBNkJDLEdBQTdCLENBQVA7QUFDSDtBQUNEWixRQUFRUyxLQUFSLEdBQWdCQSxLQUFoQiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNEZWYodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNEZWYgPSBpc0RlZjtcbmZ1bmN0aW9uIGlzT2JqKHgpIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiB4O1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcbn1cbmV4cG9ydHMuaXNPYmogPSBpc09iajtcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIC9eXFxkKyQvLnRlc3QodmFsdWUpO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuZnVuY3Rpb24gcmFuZ2UobnVtLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG59XG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XG4iXX0=