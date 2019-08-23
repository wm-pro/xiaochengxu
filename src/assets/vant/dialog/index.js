"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
component_1.VantComponent({
    mixins: [button_1.button, open_type_1.openType],
    props: {
        show: Boolean,
        title: String,
        message: String,
        useSlot: Boolean,
        asyncClose: Boolean,
        messageAlign: String,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        zIndex: {
            type: Number,
            value: 2000
        },
        confirmButtonText: {
            type: String,
            value: '确认'
        },
        cancelButtonText: {
            type: String,
            value: '取消'
        },
        showConfirmButton: {
            type: Boolean,
            value: true
        },
        overlay: {
            type: Boolean,
            value: true
        },
        transition: {
            type: String,
            value: 'scale'
        }
    },
    data: {
        loading: {
            confirm: false,
            cancel: false
        }
    },
    watch: {
        show: function show(_show) {
            !_show && this.stopLoading();
        }
    },
    methods: {
        onConfirm: function onConfirm() {
            this.handleAction('confirm');
        },
        onCancel: function onCancel() {
            this.handleAction('cancel');
        },
        onClickOverlay: function onClickOverlay() {
            this.onClose('overlay');
        },
        handleAction: function handleAction(action) {
            var _a;
            if (this.data.asyncClose) {
                this.set((_a = {}, _a["loading." + action] = true, _a));
            }
            this.onClose(action);
        },
        close: function close() {
            this.set({
                show: false
            });
        },
        stopLoading: function stopLoading() {
            this.set({
                loading: {
                    confirm: false,
                    cancel: false
                }
            });
        },
        onClose: function onClose(action) {
            if (!this.data.asyncClose) {
                this.close();
            }
            this.$emit('close', action);
            //把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
            this.$emit(action, { dialog: this });
            var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];
            if (callback) {
                callback(this);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsIlZhbnRDb21wb25lbnQiLCJtaXhpbnMiLCJidXR0b24iLCJvcGVuVHlwZSIsInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJ0aXRsZSIsIlN0cmluZyIsIm1lc3NhZ2UiLCJ1c2VTbG90IiwiYXN5bmNDbG9zZSIsIm1lc3NhZ2VBbGlnbiIsInNob3dDYW5jZWxCdXR0b24iLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwiY29uZmlybUJ1dHRvbk9wZW5UeXBlIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInNob3dDb25maXJtQnV0dG9uIiwib3ZlcmxheSIsInRyYW5zaXRpb24iLCJkYXRhIiwibG9hZGluZyIsImNvbmZpcm0iLCJjYW5jZWwiLCJ3YXRjaCIsInN0b3BMb2FkaW5nIiwibWV0aG9kcyIsIm9uQ29uZmlybSIsImhhbmRsZUFjdGlvbiIsIm9uQ2FuY2VsIiwib25DbGlja092ZXJsYXkiLCJvbkNsb3NlIiwiYWN0aW9uIiwiX2EiLCJzZXQiLCJjbG9zZSIsIiRlbWl0IiwiZGlhbG9nIiwiY2FsbGJhY2siXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsV0FBV0QsUUFBUSxrQkFBUixDQUFmO0FBQ0EsSUFBSUUsY0FBY0YsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZSSxhQUFaLENBQTBCO0FBQ3RCQyxZQUFRLENBQUNILFNBQVNJLE1BQVYsRUFBa0JILFlBQVlJLFFBQTlCLENBRGM7QUFFdEJDLFdBQU87QUFDSEMsY0FBTUMsT0FESDtBQUVIQyxlQUFPQyxNQUZKO0FBR0hDLGlCQUFTRCxNQUhOO0FBSUhFLGlCQUFTSixPQUpOO0FBS0hLLG9CQUFZTCxPQUxUO0FBTUhNLHNCQUFjSixNQU5YO0FBT0hLLDBCQUFrQlAsT0FQZjtBQVFIUSw2QkFBcUJSLE9BUmxCO0FBU0hTLCtCQUF1QlAsTUFUcEI7QUFVSFEsZ0JBQVE7QUFDSkMsa0JBQU1DLE1BREY7QUFFSnZCLG1CQUFPO0FBRkgsU0FWTDtBQWNId0IsMkJBQW1CO0FBQ2ZGLGtCQUFNVCxNQURTO0FBRWZiLG1CQUFPO0FBRlEsU0FkaEI7QUFrQkh5QiwwQkFBa0I7QUFDZEgsa0JBQU1ULE1BRFE7QUFFZGIsbUJBQU87QUFGTyxTQWxCZjtBQXNCSDBCLDJCQUFtQjtBQUNmSixrQkFBTVgsT0FEUztBQUVmWCxtQkFBTztBQUZRLFNBdEJoQjtBQTBCSDJCLGlCQUFTO0FBQ0xMLGtCQUFNWCxPQUREO0FBRUxYLG1CQUFPO0FBRkYsU0ExQk47QUE4Qkg0QixvQkFBWTtBQUNSTixrQkFBTVQsTUFERTtBQUVSYixtQkFBTztBQUZDO0FBOUJULEtBRmU7QUFxQ3RCNkIsVUFBTTtBQUNGQyxpQkFBUztBQUNMQyxxQkFBUyxLQURKO0FBRUxDLG9CQUFRO0FBRkg7QUFEUCxLQXJDZ0I7QUEyQ3RCQyxXQUFPO0FBQ0h2QixjQUFNLGNBQVVBLEtBQVYsRUFBZ0I7QUFDbEIsYUFBQ0EsS0FBRCxJQUFTLEtBQUt3QixXQUFMLEVBQVQ7QUFDSDtBQUhFLEtBM0NlO0FBZ0R0QkMsYUFBUztBQUNMQyxtQkFBVyxxQkFBWTtBQUNuQixpQkFBS0MsWUFBTCxDQUFrQixTQUFsQjtBQUNILFNBSEk7QUFJTEMsa0JBQVUsb0JBQVk7QUFDbEIsaUJBQUtELFlBQUwsQ0FBa0IsUUFBbEI7QUFDSCxTQU5JO0FBT0xFLHdCQUFnQiwwQkFBWTtBQUN4QixpQkFBS0MsT0FBTCxDQUFhLFNBQWI7QUFDSCxTQVRJO0FBVUxILHNCQUFjLHNCQUFVSSxNQUFWLEVBQWtCO0FBQzVCLGdCQUFJQyxFQUFKO0FBQ0EsZ0JBQUksS0FBS2IsSUFBTCxDQUFVYixVQUFkLEVBQTBCO0FBQ3RCLHFCQUFLMkIsR0FBTCxFQUFVRCxLQUFLLEVBQUwsRUFDTkEsR0FBRyxhQUFhRCxNQUFoQixJQUEwQixJQURwQixFQUVOQyxFQUZKO0FBR0g7QUFDRCxpQkFBS0YsT0FBTCxDQUFhQyxNQUFiO0FBQ0gsU0FsQkk7QUFtQkxHLGVBQU8saUJBQVk7QUFDZixpQkFBS0QsR0FBTCxDQUFTO0FBQ0xqQyxzQkFBTTtBQURELGFBQVQ7QUFHSCxTQXZCSTtBQXdCTHdCLHFCQUFhLHVCQUFZO0FBQ3JCLGlCQUFLUyxHQUFMLENBQVM7QUFDTGIseUJBQVM7QUFDTEMsNkJBQVMsS0FESjtBQUVMQyw0QkFBUTtBQUZIO0FBREosYUFBVDtBQU1ILFNBL0JJO0FBZ0NMUSxpQkFBUyxpQkFBVUMsTUFBVixFQUFrQjtBQUN2QixnQkFBSSxDQUFDLEtBQUtaLElBQUwsQ0FBVWIsVUFBZixFQUEyQjtBQUN2QixxQkFBSzRCLEtBQUw7QUFDSDtBQUNELGlCQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkosTUFBcEI7QUFDQTtBQUNBLGlCQUFLSSxLQUFMLENBQVdKLE1BQVgsRUFBbUIsRUFBRUssUUFBUSxJQUFWLEVBQW5CO0FBQ0EsZ0JBQUlDLFdBQVcsS0FBS2xCLElBQUwsQ0FBVVksV0FBVyxTQUFYLEdBQXVCLFdBQXZCLEdBQXFDLFVBQS9DLENBQWY7QUFDQSxnQkFBSU0sUUFBSixFQUFjO0FBQ1ZBLHlCQUFTLElBQVQ7QUFDSDtBQUNKO0FBM0NJO0FBaERhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciBidXR0b25fMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvYnV0dG9uXCIpO1xudmFyIG9wZW5fdHlwZV8xID0gcmVxdWlyZShcIi4uL21peGlucy9vcGVuLXR5cGVcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBtaXhpbnM6IFtidXR0b25fMS5idXR0b24sIG9wZW5fdHlwZV8xLm9wZW5UeXBlXSxcbiAgICBwcm9wczoge1xuICAgICAgICBzaG93OiBCb29sZWFuLFxuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBtZXNzYWdlOiBTdHJpbmcsXG4gICAgICAgIHVzZVNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIGFzeW5jQ2xvc2U6IEJvb2xlYW4sXG4gICAgICAgIG1lc3NhZ2VBbGlnbjogU3RyaW5nLFxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiBCb29sZWFuLFxuICAgICAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiBCb29sZWFuLFxuICAgICAgICBjb25maXJtQnV0dG9uT3BlblR5cGU6IFN0cmluZyxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMjAwMFxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICfnoa7orqQnXG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAn5Y+W5raIJ1xuICAgICAgICB9LFxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3NjYWxlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgICAgIGNvbmZpcm06IGZhbHNlLFxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBzaG93OiBmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICAgICAgIXNob3cgJiYgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBY3Rpb24oJ2NvbmZpcm0nKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWN0aW9uKCdjYW5jZWwnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja092ZXJsYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgnb3ZlcmxheScpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVBY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYXN5bmNDbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KChfYSA9IHt9LFxuICAgICAgICAgICAgICAgICAgICBfYVtcImxvYWRpbmcuXCIgKyBhY3Rpb25dID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgX2EpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25DbG9zZShhY3Rpb24pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcExvYWRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm06IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScsIGFjdGlvbik7XG4gICAgICAgICAgICAvL+aKiiBkaWFsb2cg5a6e5L6L5Lyg6YCS5Ye65Y6777yM5Y+v5Lul6YCa6L+HIHN0b3BMb2FkaW5nKCkg5Zyo5aSW6YOo5YWz6Zet5oyJ6ZKu55qEIGxvYWRpbmdcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoYWN0aW9uLCB7IGRpYWxvZzogdGhpcyB9KTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuZGF0YVthY3Rpb24gPT09ICdjb25maXJtJyA/ICdvbkNvbmZpcm0nIDogJ29uQ2FuY2VsJ107XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19