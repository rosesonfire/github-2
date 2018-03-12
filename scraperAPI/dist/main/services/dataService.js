"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// ETL's required data from endpoint to persistence
exports.default = function (_ref) {
  var odm = _ref.odm;
  return {
    // TODO: promise.all will fail even if some data gets persisted
    //       so this needs to be fixed
    writeData: function writeData(dataList) {
      return Promise.all(dataList.map(function (data) {
        return odm.create({ key: data.author.uri, data: data }).save();
      }));
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL2RhdGFTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIm9kbSIsIndyaXRlRGF0YSIsImRhdGFMaXN0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImtleSIsImRhdGEiLCJhdXRob3IiLCJ1cmkiLCJzYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtrQkFDZTtBQUFBLE1BQUdBLEdBQUgsUUFBR0EsR0FBSDtBQUFBLFNBQWM7QUFDM0I7QUFDQTtBQUNBQyxlQUFXLG1CQUFDQyxRQUFEO0FBQUEsYUFBY0MsUUFBUUMsR0FBUixDQUN2QkYsU0FBU0csR0FBVCxDQUFhO0FBQUEsZUFBUUwsSUFBSU0sTUFBSixDQUFXLEVBQUVDLEtBQUtDLEtBQUtDLE1BQUwsQ0FBWUMsR0FBbkIsRUFBd0JGLFVBQXhCLEVBQVgsRUFBMkNHLElBQTNDLEVBQVI7QUFBQSxPQUFiLENBRHVCLENBQWQ7QUFBQTtBQUhnQixHQUFkO0FBQUEsQyIsImZpbGUiOiJkYXRhU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEVUTCdzIHJlcXVpcmVkIGRhdGEgZnJvbSBlbmRwb2ludCB0byBwZXJzaXN0ZW5jZVxuZXhwb3J0IGRlZmF1bHQgKHsgb2RtIH0pID0+ICh7XG4gIC8vIFRPRE86IHByb21pc2UuYWxsIHdpbGwgZmFpbCBldmVuIGlmIHNvbWUgZGF0YSBnZXRzIHBlcnNpc3RlZFxuICAvLyAgICAgICBzbyB0aGlzIG5lZWRzIHRvIGJlIGZpeGVkXG4gIHdyaXRlRGF0YTogKGRhdGFMaXN0KSA9PiBQcm9taXNlLmFsbChcbiAgICBkYXRhTGlzdC5tYXAoZGF0YSA9PiBvZG0uY3JlYXRlKHsga2V5OiBkYXRhLmF1dGhvci51cmksIGRhdGEgfSkuc2F2ZSgpKSlcbn0pXG4iXX0=