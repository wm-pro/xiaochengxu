"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var touch_1 = require('./../mixins/touch.js');
var THRESHOLD = 0.3;
component_1.VantComponent({
    props: {
        disabled: Boolean,
        leftWidth: {
            type: Number,
            value: 0
        },
        rightWidth: {
            type: Number,
            value: 0
        },
        asyncClose: Boolean
    },
    mixins: [touch_1.touch],
    data: {
        catchMove: true
    },
    created: function created() {
        this.offset = 0;
    },
    methods: {
        open: function open(position) {
            var _a = this.data,
                leftWidth = _a.leftWidth,
                rightWidth = _a.rightWidth;
            var offset = position === 'left' ? leftWidth : -rightWidth;
            this.swipeMove(offset);
        },
        close: function close() {
            this.swipeMove(0);
        },
        swipeMove: function swipeMove(offset) {
            if (offset === void 0) {
                offset = 0;
            }
            this.offset = offset;
            var transform = "translate3d(" + offset + "px, 0, 0)";
            var transition = this.draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)';
            this.set({
                wrapperStyle: "\n        -webkit-transform: " + transform + ";\n        -webkit-transition: " + transition + ";\n        transform: " + transform + ";\n        transition: " + transition + ";\n      "
            });
        },
        swipeLeaveTransition: function swipeLeaveTransition() {
            var _a = this.data,
                leftWidth = _a.leftWidth,
                rightWidth = _a.rightWidth;
            var offset = this.offset;
            if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
                this.open('right');
            } else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
                this.open('left');
            } else {
                this.swipeMove(0);
            }
        },
        startDrag: function startDrag(event) {
            if (this.data.disabled) {
                return;
            }
            this.draging = true;
            this.startOffset = this.offset;
            this.firstDirection = '';
            this.touchStart(event);
        },
        noop: function noop() {},
        onDrag: function onDrag(event) {
            if (this.data.disabled) {
                return;
            }
            this.touchMove(event);
            if (!this.firstDirection) {
                this.firstDirection = this.direction;
                this.set({ catchMove: this.firstDirection === 'horizontal' });
            }
            if (this.firstDirection === 'vertical') {
                return;
            }
            var _a = this.data,
                leftWidth = _a.leftWidth,
                rightWidth = _a.rightWidth;
            var offset = this.startOffset + this.deltaX;
            if (rightWidth > 0 && -offset > rightWidth || leftWidth > 0 && offset > leftWidth) {
                return;
            }
            this.swipeMove(offset);
        },
        endDrag: function endDrag() {
            if (this.data.disabled) {
                return;
            }
            this.draging = false;
            this.swipeLeaveTransition();
        },
        onClick: function onClick(event) {
            var _a = event.currentTarget.dataset.key,
                position = _a === void 0 ? 'outside' : _a;
            this.$emit('click', position);
            if (!this.offset) {
                return;
            }
            if (this.data.asyncClose) {
                this.$emit('close', { position: position, instance: this });
            } else {
                this.swipeMove(0);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidG91Y2hfMSIsIlRIUkVTSE9MRCIsIlZhbnRDb21wb25lbnQiLCJwcm9wcyIsImRpc2FibGVkIiwiQm9vbGVhbiIsImxlZnRXaWR0aCIsInR5cGUiLCJOdW1iZXIiLCJyaWdodFdpZHRoIiwiYXN5bmNDbG9zZSIsIm1peGlucyIsInRvdWNoIiwiZGF0YSIsImNhdGNoTW92ZSIsImNyZWF0ZWQiLCJvZmZzZXQiLCJtZXRob2RzIiwib3BlbiIsInBvc2l0aW9uIiwiX2EiLCJzd2lwZU1vdmUiLCJjbG9zZSIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJkcmFnaW5nIiwic2V0Iiwid3JhcHBlclN0eWxlIiwic3dpcGVMZWF2ZVRyYW5zaXRpb24iLCJzdGFydERyYWciLCJldmVudCIsInN0YXJ0T2Zmc2V0IiwiZmlyc3REaXJlY3Rpb24iLCJ0b3VjaFN0YXJ0Iiwibm9vcCIsIm9uRHJhZyIsInRvdWNoTW92ZSIsImRpcmVjdGlvbiIsImRlbHRhWCIsImVuZERyYWciLCJvbkNsaWNrIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJrZXkiLCIkZW1pdCIsImluc3RhbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLFVBQVVELFFBQVEsaUJBQVIsQ0FBZDtBQUNBLElBQUlFLFlBQVksR0FBaEI7QUFDQUgsWUFBWUksYUFBWixDQUEwQjtBQUN0QkMsV0FBTztBQUNIQyxrQkFBVUMsT0FEUDtBQUVIQyxtQkFBVztBQUNQQyxrQkFBTUMsTUFEQztBQUVQWCxtQkFBTztBQUZBLFNBRlI7QUFNSFksb0JBQVk7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QlAsWUFBWWMsR0FBR2QsU0FBbkM7QUFBQSxnQkFBOENHLGFBQWFXLEdBQUdYLFVBQTlEO0FBQ0EsZ0JBQUlPLFNBQVMsS0FBS2UsV0FBTCxHQUFtQixLQUFLTyxNQUFyQztBQUNBLGdCQUFLN0IsYUFBYSxDQUFiLElBQWtCLENBQUNPLE1BQUQsR0FBVVAsVUFBN0IsSUFDQ0gsWUFBWSxDQUFaLElBQWlCVSxTQUFTVixTQUQvQixFQUMyQztBQUN2QztBQUNIO0FBQ0QsaUJBQUtlLFNBQUwsQ0FBZUwsTUFBZjtBQUNILFNBOURJO0FBK0RMdUIsaUJBQVMsbUJBQVk7QUFDakIsZ0JBQUksS0FBSzFCLElBQUwsQ0FBVVQsUUFBZCxFQUF3QjtBQUNwQjtBQUNIO0FBQ0QsaUJBQUtxQixPQUFMLEdBQWUsS0FBZjtBQUNBLGlCQUFLRyxvQkFBTDtBQUNILFNBckVJO0FBc0VMWSxpQkFBUyxpQkFBVVYsS0FBVixFQUFpQjtBQUN0QixnQkFBSVYsS0FBS1UsTUFBTVcsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJDLEdBQXJDO0FBQUEsZ0JBQTBDeEIsV0FBV0MsT0FBTyxLQUFLLENBQVosR0FBZ0IsU0FBaEIsR0FBNEJBLEVBQWpGO0FBQ0EsaUJBQUt3QixLQUFMLENBQVcsT0FBWCxFQUFvQnpCLFFBQXBCO0FBQ0EsZ0JBQUksQ0FBQyxLQUFLSCxNQUFWLEVBQWtCO0FBQ2Q7QUFDSDtBQUNELGdCQUFJLEtBQUtILElBQUwsQ0FBVUgsVUFBZCxFQUEwQjtBQUN0QixxQkFBS2tDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLEVBQUV6QixVQUFVQSxRQUFaLEVBQXNCMEIsVUFBVSxJQUFoQyxFQUFwQjtBQUNILGFBRkQsTUFHSztBQUNELHFCQUFLeEIsU0FBTCxDQUFlLENBQWY7QUFDSDtBQUNKO0FBbEZJO0FBcEJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciB0b3VjaF8xID0gcmVxdWlyZShcIi4uL21peGlucy90b3VjaFwiKTtcbnZhciBUSFJFU0hPTEQgPSAwLjM7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgbGVmdFdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICByaWdodFdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICBhc3luY0Nsb3NlOiBCb29sZWFuXG4gICAgfSxcbiAgICBtaXhpbnM6IFt0b3VjaF8xLnRvdWNoXSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGNhdGNoTW92ZTogdHJ1ZVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9wZW46IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBsZWZ0V2lkdGggPSBfYS5sZWZ0V2lkdGgsIHJpZ2h0V2lkdGggPSBfYS5yaWdodFdpZHRoO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHBvc2l0aW9uID09PSAnbGVmdCcgPyBsZWZ0V2lkdGggOiAtcmlnaHRXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKG9mZnNldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnN3aXBlTW92ZSgwKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3dpcGVNb3ZlOiBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIHsgb2Zmc2V0ID0gMDsgfVxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIG9mZnNldCArIFwicHgsIDAsIDApXCI7XG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IHRoaXMuZHJhZ2luZ1xuICAgICAgICAgICAgICAgID8gJ25vbmUnXG4gICAgICAgICAgICAgICAgOiAnLjZzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxKSc7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlOiBcIlxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IFwiICsgdHJhbnNmb3JtICsgXCI7XFxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IFwiICsgdHJhbnNpdGlvbiArIFwiO1xcbiAgICAgICAgdHJhbnNmb3JtOiBcIiArIHRyYW5zZm9ybSArIFwiO1xcbiAgICAgICAgdHJhbnNpdGlvbjogXCIgKyB0cmFuc2l0aW9uICsgXCI7XFxuICAgICAgXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzd2lwZUxlYXZlVHJhbnNpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBsZWZ0V2lkdGggPSBfYS5sZWZ0V2lkdGgsIHJpZ2h0V2lkdGggPSBfYS5yaWdodFdpZHRoO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICAgICAgaWYgKHJpZ2h0V2lkdGggPiAwICYmIC1vZmZzZXQgPiByaWdodFdpZHRoICogVEhSRVNIT0xEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCdyaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGVmdFdpZHRoID4gMCAmJiBvZmZzZXQgPiBsZWZ0V2lkdGggKiBUSFJFU0hPTEQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oJ2xlZnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdGFydERyYWc6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhZ2luZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLmZpcnN0RGlyZWN0aW9uID0gJyc7XG4gICAgICAgICAgICB0aGlzLnRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBub29wOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIG9uRHJhZzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50b3VjaE1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpcnN0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdERpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHsgY2F0Y2hNb3ZlOiB0aGlzLmZpcnN0RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdERpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgbGVmdFdpZHRoID0gX2EubGVmdFdpZHRoLCByaWdodFdpZHRoID0gX2EucmlnaHRXaWR0aDtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5kZWx0YVg7XG4gICAgICAgICAgICBpZiAoKHJpZ2h0V2lkdGggPiAwICYmIC1vZmZzZXQgPiByaWdodFdpZHRoKSB8fFxuICAgICAgICAgICAgICAgIChsZWZ0V2lkdGggPiAwICYmIG9mZnNldCA+IGxlZnRXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN3aXBlTW92ZShvZmZzZXQpO1xuICAgICAgICB9LFxuICAgICAgICBlbmREcmFnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmFnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN3aXBlTGVhdmVUcmFuc2l0aW9uKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF9hID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmtleSwgcG9zaXRpb24gPSBfYSA9PT0gdm9pZCAwID8gJ291dHNpZGUnIDogX2E7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5vZmZzZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScsIHsgcG9zaXRpb246IHBvc2l0aW9uLCBpbnN0YW5jZTogdGhpcyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=