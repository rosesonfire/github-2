"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// ETL's required data from endpoint to persistence
exports.default = function (_ref) {
  var odm = _ref.odm;
  return {
    writeData: function writeData(dataList) {
      return Promise.all(dataList.map(function (data) {
        return odm.create({ key: data.author.uri, data: data }).save();
      }));
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL2RhdGFTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIm9kbSIsIndyaXRlRGF0YSIsImRhdGFMaXN0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImtleSIsImRhdGEiLCJhdXRob3IiLCJ1cmkiLCJzYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtrQkFDZTtBQUFBLE1BQUdBLEdBQUgsUUFBR0EsR0FBSDtBQUFBLFNBQWM7QUFDM0JDLGVBQVcsbUJBQUNDLFFBQUQ7QUFBQSxhQUFjQyxRQUFRQyxHQUFSLENBQ3ZCRixTQUFTRyxHQUFULENBQWE7QUFBQSxlQUFRTCxJQUFJTSxNQUFKLENBQVcsRUFBRUMsS0FBS0MsS0FBS0MsTUFBTCxDQUFZQyxHQUFuQixFQUF3QkYsVUFBeEIsRUFBWCxFQUEyQ0csSUFBM0MsRUFBUjtBQUFBLE9BQWIsQ0FEdUIsQ0FBZDtBQUFBO0FBRGdCLEdBQWQ7QUFBQSxDIiwiZmlsZSI6ImRhdGFTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRVRMJ3MgcmVxdWlyZWQgZGF0YSBmcm9tIGVuZHBvaW50IHRvIHBlcnNpc3RlbmNlXG5leHBvcnQgZGVmYXVsdCAoeyBvZG0gfSkgPT4gKHtcbiAgd3JpdGVEYXRhOiAoZGF0YUxpc3QpID0+IFByb21pc2UuYWxsKFxuICAgIGRhdGFMaXN0Lm1hcChkYXRhID0+IG9kbS5jcmVhdGUoeyBrZXk6IGRhdGEuYXV0aG9yLnVyaSwgZGF0YSB9KS5zYXZlKCkpKVxufSlcbiJdfQ==