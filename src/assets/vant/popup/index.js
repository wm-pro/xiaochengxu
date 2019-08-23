"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var transition_1 = require('./../mixins/transition.js');
var safe_area_1 = require('./../mixins/safe-area.js');
component_1.VantComponent({
    classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class'],
    mixins: [transition_1.transition(false), safe_area_1.safeArea()],
    props: {
        transition: {
            type: String,
            observer: 'observeClass'
        },
        customStyle: String,
        overlayStyle: String,
        zIndex: {
            type: Number,
            value: 100
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'center',
            observer: 'observeClass'
        }
    },
    created: function created() {
        this.observeClass();
    },
    methods: {
        onClickOverlay: function onClickOverlay() {
            this.$emit('click-overlay');
            if (this.data.closeOnClickOverlay) {
                this.$emit('close');
            }
        },
        observeClass: function observeClass() {
            var _a = this.data,
                transition = _a.transition,
                position = _a.position;
            this.updateClasses(transition || position);
            if (transition === 'none') {
                this.set({ duration: 0 });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidHJhbnNpdGlvbl8xIiwic2FmZV9hcmVhXzEiLCJWYW50Q29tcG9uZW50IiwiY2xhc3NlcyIsIm1peGlucyIsInRyYW5zaXRpb24iLCJzYWZlQXJlYSIsInByb3BzIiwidHlwZSIsIlN0cmluZyIsIm9ic2VydmVyIiwiY3VzdG9tU3R5bGUiLCJvdmVybGF5U3R5bGUiLCJ6SW5kZXgiLCJOdW1iZXIiLCJvdmVybGF5IiwiQm9vbGVhbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJwb3NpdGlvbiIsImNyZWF0ZWQiLCJvYnNlcnZlQ2xhc3MiLCJtZXRob2RzIiwib25DbGlja092ZXJsYXkiLCIkZW1pdCIsImRhdGEiLCJfYSIsInVwZGF0ZUNsYXNzZXMiLCJzZXQiLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxlQUFlRCxRQUFRLHNCQUFSLENBQW5CO0FBQ0EsSUFBSUUsY0FBY0YsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZSSxhQUFaLENBQTBCO0FBQ3RCQyxhQUFTLENBQ0wsYUFESyxFQUVMLG9CQUZLLEVBR0wsZ0JBSEssRUFJTCxhQUpLLEVBS0wsb0JBTEssRUFNTCxnQkFOSyxDQURhO0FBU3RCQyxZQUFRLENBQUNKLGFBQWFLLFVBQWIsQ0FBd0IsS0FBeEIsQ0FBRCxFQUFpQ0osWUFBWUssUUFBWixFQUFqQyxDQVRjO0FBVXRCQyxXQUFPO0FBQ0hGLG9CQUFZO0FBQ1JHLGtCQUFNQyxNQURFO0FBRVJDLHNCQUFVO0FBRkYsU0FEVDtBQUtIQyxxQkFBYUYsTUFMVjtBQU1IRyxzQkFBY0gsTUFOWDtBQU9ISSxnQkFBUTtBQUNKTCxrQkFBTU0sTUFERjtBQUVKakIsbUJBQU87QUFGSCxTQVBMO0FBV0hrQixpQkFBUztBQUNMUCxrQkFBTVEsT0FERDtBQUVMbkIsbUJBQU87QUFGRixTQVhOO0FBZUhvQiw2QkFBcUI7QUFDakJULGtCQUFNUSxPQURXO0FBRWpCbkIsbUJBQU87QUFGVSxTQWZsQjtBQW1CSHFCLGtCQUFVO0FBQ05WLGtCQUFNQyxNQURBO0FBRU5aLG1CQUFPLFFBRkQ7QUFHTmEsc0JBQVU7QUFISjtBQW5CUCxLQVZlO0FBbUN0QlMsYUFBUyxtQkFBWTtBQUNqQixhQUFLQyxZQUFMO0FBQ0gsS0FyQ3FCO0FBc0N0QkMsYUFBUztBQUNMQyx3QkFBZ0IsMEJBQVk7QUFDeEIsaUJBQUtDLEtBQUwsQ0FBVyxlQUFYO0FBQ0EsZ0JBQUksS0FBS0MsSUFBTCxDQUFVUCxtQkFBZCxFQUFtQztBQUMvQixxQkFBS00sS0FBTCxDQUFXLE9BQVg7QUFDSDtBQUNKLFNBTkk7QUFPTEgsc0JBQWMsd0JBQVk7QUFDdEIsZ0JBQUlLLEtBQUssS0FBS0QsSUFBZDtBQUFBLGdCQUFvQm5CLGFBQWFvQixHQUFHcEIsVUFBcEM7QUFBQSxnQkFBZ0RhLFdBQVdPLEdBQUdQLFFBQTlEO0FBQ0EsaUJBQUtRLGFBQUwsQ0FBbUJyQixjQUFjYSxRQUFqQztBQUNBLGdCQUFJYixlQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCLHFCQUFLc0IsR0FBTCxDQUFTLEVBQUVDLFVBQVUsQ0FBWixFQUFUO0FBQ0g7QUFDSjtBQWJJO0FBdENhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciB0cmFuc2l0aW9uXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL3RyYW5zaXRpb25cIik7XG52YXIgc2FmZV9hcmVhXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL3NhZmUtYXJlYVwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFtcbiAgICAgICAgJ2VudGVyLWNsYXNzJyxcbiAgICAgICAgJ2VudGVyLWFjdGl2ZS1jbGFzcycsXG4gICAgICAgICdlbnRlci10by1jbGFzcycsXG4gICAgICAgICdsZWF2ZS1jbGFzcycsXG4gICAgICAgICdsZWF2ZS1hY3RpdmUtY2xhc3MnLFxuICAgICAgICAnbGVhdmUtdG8tY2xhc3MnXG4gICAgXSxcbiAgICBtaXhpbnM6IFt0cmFuc2l0aW9uXzEudHJhbnNpdGlvbihmYWxzZSksIHNhZmVfYXJlYV8xLnNhZmVBcmVhKCldLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnb2JzZXJ2ZUNsYXNzJ1xuICAgICAgICB9LFxuICAgICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgICAgICBvdmVybGF5U3R5bGU6IFN0cmluZyxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnY2VudGVyJyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAnb2JzZXJ2ZUNsYXNzJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZUNsYXNzKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2tPdmVybGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljay1vdmVybGF5Jyk7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNsb3NlT25DbGlja092ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvYnNlcnZlQ2xhc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgdHJhbnNpdGlvbiA9IF9hLnRyYW5zaXRpb24sIHBvc2l0aW9uID0gX2EucG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzZXModHJhbnNpdGlvbiB8fCBwb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAodHJhbnNpdGlvbiA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoeyBkdXJhdGlvbjogMCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19