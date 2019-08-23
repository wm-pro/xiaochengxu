"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
function isSimple(columns) {
    return columns.length && !columns[0].values;
}
component_1.VantComponent({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: {
        title: String,
        loading: Boolean,
        showToolbar: Boolean,
        confirmButtonText: String,
        cancelButtonText: String,
        visibleItemCount: {
            type: Number,
            value: 5
        },
        valueKey: {
            type: String,
            value: 'text'
        },
        itemHeight: {
            type: Number,
            value: 44
        },
        columns: {
            type: Array,
            value: [],
            observer: function observer(columns) {
                if (columns === void 0) {
                    columns = [];
                }
                this.simple = isSimple(columns);
                this.children = this.selectAllComponents('.van-picker__column');
                if (Array.isArray(this.children) && this.children.length) {
                    this.setColumns().catch(function () {});
                }
            }
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },
    methods: {
        noop: function noop() {},
        setColumns: function setColumns() {
            var _this = this;
            var data = this.data;
            var columns = this.simple ? [{ values: data.columns }] : data.columns;
            var stack = columns.map(function (column, index) {
                return _this.setColumnValues(index, column.values);
            });
            return Promise.all(stack);
        },
        emit: function emit(event) {
            var type = event.currentTarget.dataset.type;
            if (this.simple) {
                this.$emit(type, {
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit(type, {
                    value: this.getValues(),
                    index: this.getIndexes()
                });
            }
        },
        onChange: function onChange(event) {
            if (this.simple) {
                this.$emit('change', {
                    picker: this,
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit('change', {
                    picker: this,
                    value: this.getValues(),
                    index: event.currentTarget.dataset.index
                });
            }
        },
        // get column instance by index
        getColumn: function getColumn(index) {
            return this.children[index];
        },
        // get column value by index
        getColumnValue: function getColumnValue(index) {
            var column = this.getColumn(index);
            return column && column.getValue();
        },
        // set column value by index
        setColumnValue: function setColumnValue(index, value) {
            var column = this.getColumn(index);
            if (column == null) {
                return Promise.reject('setColumnValue: 对应列不存在');
            }
            return column.setValue(value);
        },
        // get column option index by column index
        getColumnIndex: function getColumnIndex(columnIndex) {
            return (this.getColumn(columnIndex) || {}).data.currentIndex;
        },
        // set column option index by column index
        setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
            var column = this.getColumn(columnIndex);
            if (column == null) {
                return Promise.reject('setColumnIndex: 对应列不存在');
            }
            return column.setIndex(optionIndex);
        },
        // get options of column by index
        getColumnValues: function getColumnValues(index) {
            return (this.children[index] || {}).data.options;
        },
        // set options of column by index
        setColumnValues: function setColumnValues(index, options, needReset) {
            if (needReset === void 0) {
                needReset = true;
            }
            var column = this.children[index];
            if (column == null) {
                return Promise.reject('setColumnValues: 对应列不存在');
            }
            var isSame = JSON.stringify(column.data.options) === JSON.stringify(options);
            if (isSame) {
                return Promise.resolve();
            }
            return column.set({ options: options }).then(function () {
                if (needReset) {
                    column.setIndex(0);
                }
            });
        },
        // get values of all columns
        getValues: function getValues() {
            return this.children.map(function (child) {
                return child.getValue();
            });
        },
        // set values of all columns
        setValues: function setValues(values) {
            var _this = this;
            var stack = values.map(function (value, index) {
                return _this.setColumnValue(index, value);
            });
            return Promise.all(stack);
        },
        // get indexes of all columns
        getIndexes: function getIndexes() {
            return this.children.map(function (child) {
                return child.data.currentIndex;
            });
        },
        // set indexes of all columns
        setIndexes: function setIndexes(indexes) {
            var _this = this;
            var stack = indexes.map(function (optionIndex, columnIndex) {
                return _this.setColumnIndex(columnIndex, optionIndex);
            });
            return Promise.all(stack);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiaXNTaW1wbGUiLCJjb2x1bW5zIiwibGVuZ3RoIiwidmFsdWVzIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwibG9hZGluZyIsIkJvb2xlYW4iLCJzaG93VG9vbGJhciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInZpc2libGVJdGVtQ291bnQiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWVLZXkiLCJpdGVtSGVpZ2h0IiwiQXJyYXkiLCJvYnNlcnZlciIsInNpbXBsZSIsImNoaWxkcmVuIiwic2VsZWN0QWxsQ29tcG9uZW50cyIsImlzQXJyYXkiLCJzZXRDb2x1bW5zIiwiY2F0Y2giLCJiZWZvcmVDcmVhdGUiLCJtZXRob2RzIiwibm9vcCIsIl90aGlzIiwiZGF0YSIsInN0YWNrIiwibWFwIiwiY29sdW1uIiwiaW5kZXgiLCJzZXRDb2x1bW5WYWx1ZXMiLCJQcm9taXNlIiwiYWxsIiwiZW1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCIkZW1pdCIsImdldENvbHVtblZhbHVlIiwiZ2V0Q29sdW1uSW5kZXgiLCJnZXRWYWx1ZXMiLCJnZXRJbmRleGVzIiwib25DaGFuZ2UiLCJwaWNrZXIiLCJnZXRDb2x1bW4iLCJnZXRWYWx1ZSIsInNldENvbHVtblZhbHVlIiwicmVqZWN0Iiwic2V0VmFsdWUiLCJjb2x1bW5JbmRleCIsImN1cnJlbnRJbmRleCIsInNldENvbHVtbkluZGV4Iiwib3B0aW9uSW5kZXgiLCJzZXRJbmRleCIsImdldENvbHVtblZhbHVlcyIsIm9wdGlvbnMiLCJuZWVkUmVzZXQiLCJpc1NhbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzb2x2ZSIsInNldCIsInRoZW4iLCJjaGlsZCIsInNl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cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmZ1bmN0aW9uIGlzU2ltcGxlKGNvbHVtbnMpIHtcbiAgICByZXR1cm4gY29sdW1ucy5sZW5ndGggJiYgIWNvbHVtbnNbMF0udmFsdWVzO1xufVxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogWydhY3RpdmUtY2xhc3MnLCAndG9vbGJhci1jbGFzcycsICdjb2x1bW4tY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgICAgICBzaG93VG9vbGJhcjogQm9vbGVhbixcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFN0cmluZyxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogU3RyaW5nLFxuICAgICAgICB2aXNpYmxlSXRlbUNvdW50OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNVxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZUtleToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd0ZXh0J1xuICAgICAgICB9LFxuICAgICAgICBpdGVtSGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNDRcbiAgICAgICAgfSxcbiAgICAgICAgY29sdW1uczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKGNvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSBbXTsgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2ltcGxlID0gaXNTaW1wbGUoY29sdW1ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuc2VsZWN0QWxsQ29tcG9uZW50cygnLnZhbi1waWNrZXJfX2NvbHVtbicpO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRyZW4pICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1ucygpLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBub29wOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIHNldENvbHVtbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5zaW1wbGUgPyBbeyB2YWx1ZXM6IGRhdGEuY29sdW1ucyB9XSA6IGRhdGEuY29sdW1ucztcbiAgICAgICAgICAgIHZhciBzdGFjayA9IGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldENvbHVtblZhbHVlcyhpbmRleCwgY29sdW1uLnZhbHVlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQodHlwZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRDb2x1bW5WYWx1ZSgwKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0Q29sdW1uSW5kZXgoMClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQodHlwZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRWYWx1ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0SW5kZXhlcygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRDb2x1bW5WYWx1ZSgwKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0Q29sdW1uSW5kZXgoMClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRWYWx1ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBnZXQgY29sdW1uIGluc3RhbmNlIGJ5IGluZGV4XG4gICAgICAgIGdldENvbHVtbjogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltpbmRleF07XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCBjb2x1bW4gdmFsdWUgYnkgaW5kZXhcbiAgICAgICAgZ2V0Q29sdW1uVmFsdWU6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4gJiYgY29sdW1uLmdldFZhbHVlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCBjb2x1bW4gdmFsdWUgYnkgaW5kZXhcbiAgICAgICAgc2V0Q29sdW1uVmFsdWU6IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihpbmRleCk7XG4gICAgICAgICAgICBpZiAoY29sdW1uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3NldENvbHVtblZhbHVlOiDlr7nlupTliJfkuI3lrZjlnKgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4uc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBnZXQgY29sdW1uIG9wdGlvbiBpbmRleCBieSBjb2x1bW4gaW5kZXhcbiAgICAgICAgZ2V0Q29sdW1uSW5kZXg6IGZ1bmN0aW9uIChjb2x1bW5JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmdldENvbHVtbihjb2x1bW5JbmRleCkgfHwge30pLmRhdGEuY3VycmVudEluZGV4O1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgY29sdW1uIG9wdGlvbiBpbmRleCBieSBjb2x1bW4gaW5kZXhcbiAgICAgICAgc2V0Q29sdW1uSW5kZXg6IGZ1bmN0aW9uIChjb2x1bW5JbmRleCwgb3B0aW9uSW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihjb2x1bW5JbmRleCk7XG4gICAgICAgICAgICBpZiAoY29sdW1uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3NldENvbHVtbkluZGV4OiDlr7nlupTliJfkuI3lrZjlnKgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4uc2V0SW5kZXgob3B0aW9uSW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBnZXQgb3B0aW9ucyBvZiBjb2x1bW4gYnkgaW5kZXhcbiAgICAgICAgZ2V0Q29sdW1uVmFsdWVzOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5jaGlsZHJlbltpbmRleF0gfHwge30pLmRhdGEub3B0aW9ucztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gc2V0IG9wdGlvbnMgb2YgY29sdW1uIGJ5IGluZGV4XG4gICAgICAgIHNldENvbHVtblZhbHVlczogZnVuY3Rpb24gKGluZGV4LCBvcHRpb25zLCBuZWVkUmVzZXQpIHtcbiAgICAgICAgICAgIGlmIChuZWVkUmVzZXQgPT09IHZvaWQgMCkgeyBuZWVkUmVzZXQgPSB0cnVlOyB9XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gdGhpcy5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICBpZiAoY29sdW1uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3NldENvbHVtblZhbHVlczog5a+55bqU5YiX5LiN5a2Y5ZyoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaXNTYW1lID0gSlNPTi5zdHJpbmdpZnkoY29sdW1uLmRhdGEub3B0aW9ucykgPT09IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGlzU2FtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4uc2V0KHsgb3B0aW9uczogb3B0aW9ucyB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAobmVlZFJlc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zZXRJbmRleCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZ2V0IHZhbHVlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBnZXRWYWx1ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLmdldFZhbHVlKCk7IH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgdmFsdWVzIG9mIGFsbCBjb2x1bW5zXG4gICAgICAgIHNldFZhbHVlczogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBzdGFjayA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRDb2x1bW5WYWx1ZShpbmRleCwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spO1xuICAgICAgICB9LFxuICAgICAgICAvLyBnZXQgaW5kZXhlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBnZXRJbmRleGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5kYXRhLmN1cnJlbnRJbmRleDsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCBpbmRleGVzIG9mIGFsbCBjb2x1bW5zXG4gICAgICAgIHNldEluZGV4ZXM6IGZ1bmN0aW9uIChpbmRleGVzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHN0YWNrID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24gKG9wdGlvbkluZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRDb2x1bW5JbmRleChjb2x1bW5JbmRleCwgb3B0aW9uSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=