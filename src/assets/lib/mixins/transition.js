"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require('./../common/utils.js');
var getClassNames = function getClassNames(name) {
    return {
        enter: "van-" + name + "-enter van-" + name + "-enter-active enter-class enter-active-class",
        'enter-to': "van-" + name + "-enter-to van-" + name + "-enter-active enter-to-class enter-active-class",
        leave: "van-" + name + "-leave van-" + name + "-leave-active leave-class leave-active-class",
        'leave-to': "van-" + name + "-leave-to van-" + name + "-leave-active leave-to-class leave-active-class"
    };
};
var nextTick = function nextTick() {
    return new Promise(function (resolve) {
        return setTimeout(resolve, 1000 / 30);
    });
};
exports.transition = function (showDefaultValue) {
    return Behavior({
        properties: {
            customStyle: String,
            show: {
                type: Boolean,
                value: showDefaultValue,
                observer: 'observeShow'
            },
            duration: {
                type: [Number, Object],
                value: 300,
                observer: 'observeDuration'
            },
            name: {
                type: String,
                value: 'fade',
                observer: 'updateClasses'
            }
        },
        data: {
            type: '',
            inited: false,
            display: false,
            classNames: getClassNames('fade')
        },
        attached: function attached() {
            if (this.data.show) {
                this.show();
            }
        },
        methods: {
            observeShow: function observeShow(value) {
                if (value) {
                    this.show();
                } else {
                    this.leave();
                }
            },
            updateClasses: function updateClasses(name) {
                this.set({
                    classNames: getClassNames(name)
                });
            },
            show: function show() {
                var _this = this;
                var _a = this.data,
                    classNames = _a.classNames,
                    duration = _a.duration;
                var currentDuration = utils_1.isObj(duration) ? duration.leave : duration;
                Promise.resolve().then(nextTick).then(function () {
                    return _this.set({
                        inited: true,
                        display: true,
                        classes: classNames.enter,
                        currentDuration: currentDuration
                    });
                }).then(nextTick).then(function () {
                    return _this.set({
                        classes: classNames['enter-to']
                    });
                });
            },
            leave: function leave() {
                var _this = this;
                var _a = this.data,
                    classNames = _a.classNames,
                    duration = _a.duration;
                var currentDuration = utils_1.isObj(duration) ? duration.leave : duration;
                if (+currentDuration === 0) {
                    this.onTransitionEnd();
                    return;
                }
                Promise.resolve().then(nextTick).then(function () {
                    return _this.set({
                        classes: classNames.leave,
                        currentDuration: currentDuration
                    });
                }).then(nextTick).then(function () {
                    return _this.set({
                        classes: classNames['leave-to']
                    });
                });
            },
            onTransitionEnd: function onTransitionEnd() {
                if (!this.data.show) {
                    this.set({ display: false });
                    this.$emit('transitionEnd');
                }
            }
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaXRpb24uanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJ1dGlsc18xIiwicmVxdWlyZSIsImdldENsYXNzTmFtZXMiLCJuYW1lIiwiZW50ZXIiLCJsZWF2ZSIsIm5leHRUaWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidHJhbnNpdGlvbiIsInNob3dEZWZhdWx0VmFsdWUiLCJCZWhhdmlvciIsInByb3BlcnRpZXMiLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsInNob3ciLCJ0eXBlIiwiQm9vbGVhbiIsIm9ic2VydmVyIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJkYXRhIiwiaW5pdGVkIiwiZGlzcGxheSIsImNsYXNzTmFtZXMiLCJhdHRhY2hlZCIsIm1ldGhvZHMiLCJvYnNlcnZlU2hvdyIsInVwZGF0ZUNsYXNzZXMiLCJzZXQiLCJfdGhpcyIsIl9hIiwiY3VycmVudER1cmF0aW9uIiwiaXNPYmoiLCJ0aGVuIiwiY2xhc3NlcyIsIm9uVHJhbnNpdGlvbkVuZCIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsVUFBVUMsUUFBUSxpQkFBUixDQUFkO0FBQ0EsSUFBSUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxJQUFWLEVBQWdCO0FBQUUsV0FBUTtBQUMxQ0MsZUFBTyxTQUFTRCxJQUFULEdBQWdCLGFBQWhCLEdBQWdDQSxJQUFoQyxHQUF1Qyw4Q0FESjtBQUUxQyxvQkFBWSxTQUFTQSxJQUFULEdBQWdCLGdCQUFoQixHQUFtQ0EsSUFBbkMsR0FBMEMsaURBRlo7QUFHMUNFLGVBQU8sU0FBU0YsSUFBVCxHQUFnQixhQUFoQixHQUFnQ0EsSUFBaEMsR0FBdUMsOENBSEo7QUFJMUMsb0JBQVksU0FBU0EsSUFBVCxHQUFnQixn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LFFBRFYsRUFFSzZCLElBRkwsQ0FFVSxZQUFZO0FBQ2xCLDJCQUFPSixNQUFNRCxHQUFOLENBQVU7QUFDYk0saUNBQVNYLFdBQVdwQixLQURQO0FBRWI0Qix5Q0FBaUJBO0FBRkoscUJBQVYsQ0FBUDtBQUlILGlCQVBELEVBUUtFLElBUkwsQ0FRVTdCLFFBUlYsRUFTSzZCLElBVEwsQ0FTVSxZQUFZO0FBQ2xCLDJCQUFPSixNQUFNRCxHQUFOLENBQVU7QUFDYk0saUNBQVNYLFdBQVcsVUFBWDtBQURJLHFCQUFWLENBQVA7QUFHSCxpQkFiRDtBQWNILGFBekRJO0FBMERMWSw2QkFBaUIsMkJBQVk7QUFDekIsb0JBQUksQ0FBQyxLQUFLZixJQUFMLENBQVVOLElBQWYsRUFBcUI7QUFDakIseUJBQUtjLEdBQUwsQ0FBUyxFQUFFTixTQUFTLEtBQVgsRUFBVDtBQUNBLHlCQUFLYyxLQUFMLENBQVcsZUFBWDtBQUNIO0FBQ0o7QUEvREk7QUE5QkcsS0FBVCxDQUFQO0FBZ0dILENBakdEIiwiZmlsZSI6InRyYW5zaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlsc1wiKTtcbnZhciBnZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICh7XG4gICAgZW50ZXI6IFwidmFuLVwiICsgbmFtZSArIFwiLWVudGVyIHZhbi1cIiArIG5hbWUgKyBcIi1lbnRlci1hY3RpdmUgZW50ZXItY2xhc3MgZW50ZXItYWN0aXZlLWNsYXNzXCIsXG4gICAgJ2VudGVyLXRvJzogXCJ2YW4tXCIgKyBuYW1lICsgXCItZW50ZXItdG8gdmFuLVwiICsgbmFtZSArIFwiLWVudGVyLWFjdGl2ZSBlbnRlci10by1jbGFzcyBlbnRlci1hY3RpdmUtY2xhc3NcIixcbiAgICBsZWF2ZTogXCJ2YW4tXCIgKyBuYW1lICsgXCItbGVhdmUgdmFuLVwiICsgbmFtZSArIFwiLWxlYXZlLWFjdGl2ZSBsZWF2ZS1jbGFzcyBsZWF2ZS1hY3RpdmUtY2xhc3NcIixcbiAgICAnbGVhdmUtdG8nOiBcInZhbi1cIiArIG5hbWUgKyBcIi1sZWF2ZS10byB2YW4tXCIgKyBuYW1lICsgXCItbGVhdmUtYWN0aXZlIGxlYXZlLXRvLWNsYXNzIGxlYXZlLWFjdGl2ZS1jbGFzc1wiXG59KTsgfTtcbnZhciBuZXh0VGljayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDAgLyAzMCk7IH0pOyB9O1xuZXhwb3J0cy50cmFuc2l0aW9uID0gZnVuY3Rpb24gKHNob3dEZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gQmVoYXZpb3Ioe1xuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgICAgICAgICAgc2hvdzoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNob3dEZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXI6ICdvYnNlcnZlU2hvdydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIE9iamVjdF0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IDMwMCxcbiAgICAgICAgICAgICAgICBvYnNlcnZlcjogJ29ic2VydmVEdXJhdGlvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAnZmFkZScsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDbGFzc2VzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgICAgIGluaXRlZDogZmFsc2UsXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IGdldENsYXNzTmFtZXMoJ2ZhZGUnKVxuICAgICAgICB9LFxuICAgICAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5zaG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9ic2VydmVTaG93OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlYXZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZUNsYXNzZXM6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzOiBnZXRDbGFzc05hbWVzKG5hbWUpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBjbGFzc05hbWVzID0gX2EuY2xhc3NOYW1lcywgZHVyYXRpb24gPSBfYS5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudER1cmF0aW9uID0gdXRpbHNfMS5pc09iaihkdXJhdGlvbikgPyBkdXJhdGlvbi5sZWF2ZSA6IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG5leHRUaWNrKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXMuZW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHVyYXRpb246IGN1cnJlbnREdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXNbJ2VudGVyLXRvJ11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgY2xhc3NOYW1lcyA9IF9hLmNsYXNzTmFtZXMsIGR1cmF0aW9uID0gX2EuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnREdXJhdGlvbiA9IHV0aWxzXzEuaXNPYmooZHVyYXRpb24pID8gZHVyYXRpb24ubGVhdmUgOiBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAoK2N1cnJlbnREdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG5leHRUaWNrKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NOYW1lcy5sZWF2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREdXJhdGlvbjogY3VycmVudER1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG5leHRUaWNrKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NOYW1lc1snbGVhdmUtdG8nXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KHsgZGlzcGxheTogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4iXX0=