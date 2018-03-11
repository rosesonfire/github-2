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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL3dyaXRlRGF0YVNlcnZpY2UuanMiXSwibmFtZXMiOlsib2RtIiwid3JpdGVEYXRhIiwiZGF0YUxpc3QiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiY3JlYXRlIiwia2V5IiwiZGF0YSIsImF1dGhvciIsInVyaSIsInNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO2tCQUNlO0FBQUEsTUFBR0EsR0FBSCxRQUFHQSxHQUFIO0FBQUEsU0FBYztBQUMzQkMsZUFBVyxtQkFBQ0MsUUFBRDtBQUFBLGFBQWNDLFFBQVFDLEdBQVIsQ0FDdkJGLFNBQVNHLEdBQVQsQ0FBYTtBQUFBLGVBQVFMLElBQUlNLE1BQUosQ0FBVyxFQUFFQyxLQUFLQyxLQUFLQyxNQUFMLENBQVlDLEdBQW5CLEVBQXdCRixVQUF4QixFQUFYLEVBQTJDRyxJQUEzQyxFQUFSO0FBQUEsT0FBYixDQUR1QixDQUFkO0FBQUE7QUFEZ0IsR0FBZDtBQUFBLEMiLCJmaWxlIjoid3JpdGVEYXRhU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEVUTCdzIHJlcXVpcmVkIGRhdGEgZnJvbSBlbmRwb2ludCB0byBwZXJzaXN0ZW5jZVxuZXhwb3J0IGRlZmF1bHQgKHsgb2RtIH0pID0+ICh7XG4gIHdyaXRlRGF0YTogKGRhdGFMaXN0KSA9PiBQcm9taXNlLmFsbChcbiAgICBkYXRhTGlzdC5tYXAoZGF0YSA9PiBvZG0uY3JlYXRlKHsga2V5OiBkYXRhLmF1dGhvci51cmksIGRhdGEgfSkuc2F2ZSgpKSlcbn0pXG4iXX0=