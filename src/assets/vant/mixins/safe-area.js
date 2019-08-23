"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cache = null;
function getSafeArea() {
    return new Promise(function (resolve, reject) {
        if (cache != null) {
            resolve(cache);
        } else {
            wx.getSystemInfo({
                success: function success(_a) {
                    var model = _a.model,
                        screenHeight = _a.screenHeight,
                        statusBarHeight = _a.statusBarHeight;
                    var iphoneX = /iphone x/i.test(model);
                    var iphoneNew = /iPhone11/i.test(model) && screenHeight === 812;
                    cache = {
                        isIPhoneX: iphoneX || iphoneNew,
                        statusBarHeight: statusBarHeight
                    };
                    resolve(cache);
                },
                fail: reject
            });
        }
    });
}
exports.safeArea = function (_a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.safeAreaInsetBottom,
        safeAreaInsetBottom = _c === void 0 ? true : _c,
        _d = _b.safeAreaInsetTop,
        safeAreaInsetTop = _d === void 0 ? false : _d;
    return Behavior({
        properties: {
            safeAreaInsetTop: {
                type: Boolean,
                value: safeAreaInsetTop
            },
            safeAreaInsetBottom: {
                type: Boolean,
                value: safeAreaInsetBottom
            }
        },
        created: function created() {
            var _this = this;
            getSafeArea().then(function (_a) {
                var isIPhoneX = _a.isIPhoneX,
                    statusBarHeight = _a.statusBarHeight;
                _this.set({ isIPhoneX: isIPhoneX, statusBarHeight: statusBarHeight });
            });
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZmUtYXJlYS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNhY2hlIiwiZ2V0U2FmZUFyZWEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJfYSIsIm1vZGVsIiwic2NyZWVuSGVpZ2h0Iiwic3RhdHVzQmFySGVpZ2h0IiwiaXBob25lWCIsInRlc3QiLCJpcGhvbmVOZXciLCJpc0lQaG9uZVgiLCJmYWlsIiwic2FmZUFyZWEiLCJfYiIsIl9jIiwic2FmZUFyZWFJbnNldEJvdHRvbSIsIl9kIiwic2FmZUFyZWFJbnNldFRvcCIsIkJlaGF2aW9yIiwicHJvcGVydGllcyIsInR5cGUiLCJCb29sZWFuIiwiY3JlYXRlZCIsIl90aGlzIiwidGhlbiIsInNldCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLFFBQVEsSUFBWjtBQUNBLFNBQVNDLFdBQVQsR0FBdUI7QUFDbkIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDMUMsWUFBSUosU0FBUyxJQUFiLEVBQW1CO0FBQ2ZHLG9CQUFRSCxLQUFSO0FBQ0gsU0FGRCxNQUdLO0FBQ0RLLGVBQUdDLGFBQUgsQ0FBaUI7QUFDYkMseUJBQVMsaUJBQVVDLEVBQVYsRUFBYztBQUNuQix3QkFBSUMsUUFBUUQsR0FBR0MsS0FBZjtBQUFBLHdCQUFzQkMsZUFBZUYsR0FBR0UsWUFBeEM7QUFBQSx3QkFBc0RDLGtCQUFrQkgsR0FBR0csZUFBM0U7QUFDQSx3QkFBSUMsVUFBVSxZQUFZQyxJQUFaLENBQWlCSixLQUFqQixDQUFkO0FBQ0Esd0JBQUlLLFlBQVksWUFBWUQsSUFBWixDQUFpQkosS0FBakIsS0FBMkJDLGlCQUFpQixHQUE1RDtBQUNBViw0QkFBUTtBQUNKZSxtQ0FBV0gsV0FBV0UsU0FEbEI7QUFFSkgseUNBQWlCQTtBQUZiLHFCQUFSO0FBSUFSLDRCQUFRSCxLQUFSO0FBQ0gsaUJBVlk7QUFXYmdCLHNCQUFNWjtBQVhPLGFBQWpCO0FBYUg7QUFDSixLQW5CTSxDQUFQO0FBb0JIO0FBQ0ROLFFBQVFtQixRQUFSLEdBQW1CLFVBQVVULEVBQVYsRUFBYztBQUM3QixRQUFJVSxLQUFLVixPQUFPLEtBQUssQ0FBWixHQUFnQixFQUFoQixHQUFxQkEsRUFBOUI7QUFBQSxRQUFrQ1csS0FBS0QsR0FBR0UsbUJBQTFDO0FBQUEsUUFBK0RBLHNCQUFzQkQsT0FBTyxLQUFLLENBQVosR0FBZ0IsSUFBaEIsR0FBdUJBLEVBQTVHO0FBQUEsUUFBZ0hFLEtBQUtILEdBQUdJLGdCQUF4SDtBQUFBLFFBQTBJQSxtQkFBbUJELE9BQU8sS0FBSyxDQUFaLEdBQWdCLEtBQWhCLEdBQXdCQSxFQUFyTDtBQUNBLFdBQU9FLFNBQVM7QUFDWkMsb0JBQVk7QUFDUkYsOEJBQWtCO0FBQ2RHLHNCQUFNQyxPQURRO0FBRWQzQix1QkFBT3VCO0FBRk8sYUFEVjtBQUtSRixpQ0FBcUI7QUFDakJLLHNCQUFNQyxPQURXO0FBRWpCM0IsdUJBQU9xQjtBQUZVO0FBTGIsU0FEQTtBQVdaTyxpQkFBUyxtQkFBWTtBQUNqQixnQkFBSUMsUUFBUSxJQUFaO0FBQ0EzQiwwQkFBYzRCLElBQWQsQ0FBbUIsVUFBVXJCLEVBQVYsRUFBYztBQUM3QixvQkFBSU8sWUFBWVAsR0FBR08sU0FBbkI7QUFBQSxvQkFBOEJKLGtCQUFrQkgsR0FBR0csZUFBbkQ7QUFDQWlCLHNCQUFNRSxHQUFOLENBQVUsRUFBRWYsV0FBV0EsU0FBYixFQUF3QkosaUJBQWlCQSxlQUF6QyxFQUFWO0FBQ0gsYUFIRDtBQUlIO0FBakJXLEtBQVQsQ0FBUDtBQW1CSCxDQXJCRCIsImZpbGUiOiJzYWZlLWFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjYWNoZSA9IG51bGw7XG5mdW5jdGlvbiBnZXRTYWZlQXJlYSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoY2FjaGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzb2x2ZShjYWNoZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vZGVsID0gX2EubW9kZWwsIHNjcmVlbkhlaWdodCA9IF9hLnNjcmVlbkhlaWdodCwgc3RhdHVzQmFySGVpZ2h0ID0gX2Euc3RhdHVzQmFySGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXBob25lWCA9IC9pcGhvbmUgeC9pLnRlc3QobW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXBob25lTmV3ID0gL2lQaG9uZTExL2kudGVzdChtb2RlbCkgJiYgc2NyZWVuSGVpZ2h0ID09PSA4MTI7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNJUGhvbmVYOiBpcGhvbmVYIHx8IGlwaG9uZU5ldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogc3RhdHVzQmFySGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5zYWZlQXJlYSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBfYyA9IF9iLnNhZmVBcmVhSW5zZXRCb3R0b20sIHNhZmVBcmVhSW5zZXRCb3R0b20gPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IF9iLnNhZmVBcmVhSW5zZXRUb3AsIHNhZmVBcmVhSW5zZXRUb3AgPSBfZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZDtcbiAgICByZXR1cm4gQmVoYXZpb3Ioe1xuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBzYWZlQXJlYUluc2V0VG9wOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2FmZUFyZWFJbnNldFRvcFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhZmVBcmVhSW5zZXRCb3R0b206IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzYWZlQXJlYUluc2V0Qm90dG9tXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBnZXRTYWZlQXJlYSgpLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzSVBob25lWCA9IF9hLmlzSVBob25lWCwgc3RhdHVzQmFySGVpZ2h0ID0gX2Euc3RhdHVzQmFySGVpZ2h0O1xuICAgICAgICAgICAgICAgIF90aGlzLnNldCh7IGlzSVBob25lWDogaXNJUGhvbmVYLCBzdGF0dXNCYXJIZWlnaHQ6IHN0YXR1c0JhckhlaWdodCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuIl19