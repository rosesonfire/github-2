'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

/**
 * A wrapper for the axios http library
 * @param {object} axios the core axios library
 * @param {object} Rx the Rx library
 * @param {number} maxPollTries the maximum polls to try to get the response
  * @param {number} pollingInterval time interval between polling requests
 */
exports.default = function (_ref) {
  var axios = _ref.axios,
      Rx = _ref.Rx,
      maxPollTries = _ref.maxPollTries,
      pollingInterval = _ref.pollingInterval;
  return {

    get: axios.get.bind(axios),

    postWithPolling: function postWithPolling(url, data) {
      return (0, _utils.createDefensivePromise)(async function (resolve, reject) {
        var postResponse = await axios.post(url, data).catch(function (e) {
          return e.response || e;
        });

        if (postResponse.status === 202) {
          // Request has been accepted for processing
          var requestToken = postResponse.data.requestToken;
          var _pollResult = {
            requestToken: requestToken,
            locked: false,
            completed: false,
            succeeded: false,
            error: null
          };

          Rx.Observable.interval(pollingInterval).take(maxPollTries).map(function (_) {
            return _pollResult;
          }).map(function (pollResult) {
            if (!pollResult.locked && !pollResult.completed) {
              pollResult.locked = true;
              axios.post(url, { requestToken: requestToken }).catch(function (e) {
                return e.response || e;
              }).then(function (pollResponse) {
                if (pollResponse.status === 200) {
                  // successfully posted data
                  pollResult.completed = true;
                  pollResult.succeeded = true;
                } else if (pollResponse.status === 202) {
                  // still processing
                  pollResult.completed = false;
                  pollResult.locked = true;
                } else if (pollResponse.status === 500) {
                  // failed to post data
                  pollResult.completed = true;
                  pollResult.succeeded = false;
                  pollResult.error = new Error('Failed: ' + pollResponse.data);
                } else if (pollResponse.status === 404) {
                  // requestToken not found
                  pollResult.completed = true;
                  pollResult.succeeded = false;
                  pollResult.error = new Error('RequestID (' + requestToken + ') not found');
                } else {
                  // unknown error
                  pollResult.completed = true;
                  pollResult.succeeded = false;
                  pollResult.error = new Error(pollResponse.status + ': ' + pollResponse.data);
                }
              }).catch(function (err) {
                pollResult.completed = true;
                pollResult.succeeded = false;
                pollResult.error = err;
              });
            }

            return pollResult;
          }).takeWhile(function (pollResult) {
            return !pollResult.completed;
          }).takeLast(1).map(function (pollResult) {
            return resolve({
              requestToken: pollResult.requestToken,
              succeeded: pollResult.succeeded,
              error: pollResult.error });
          })
          // unknown errors
          .catch(function (err) {
            return reject(err);
          })
          // This can happen if maxPollTries are exhausted
          .finally(function (_) {
            return reject('Failed to poll back response');
          }).subscribe();
        } else if (postResponse.status === 503) {
          // Request queue is overloaded
          reject(new Error('Request queue is overloaded'));
        } else {
          // Unknown error
          reject(new Error(postResponse));
        }
      });
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi93cmFwcGVycy9heGlvc1dyYXBwZXIuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJSeCIsIm1heFBvbGxUcmllcyIsInBvbGxpbmdJbnRlcnZhbCIsImdldCIsImJpbmQiLCJwb3N0V2l0aFBvbGxpbmciLCJ1cmwiLCJkYXRhIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3RSZXNwb25zZSIsInBvc3QiLCJjYXRjaCIsImUiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlcXVlc3RUb2tlbiIsIl9wb2xsUmVzdWx0IiwibG9ja2VkIiwiY29tcGxldGVkIiwic3VjY2VlZGVkIiwiZXJyb3IiLCJPYnNlcnZhYmxlIiwiaW50ZXJ2YWwiLCJ0YWtlIiwibWFwIiwicG9sbFJlc3VsdCIsInRoZW4iLCJwb2xsUmVzcG9uc2UiLCJFcnJvciIsImVyciIsInRha2VXaGlsZSIsInRha2VMYXN0IiwiZmluYWxseSIsInN1YnNjcmliZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7a0JBT2U7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxFQUFWLFFBQVVBLEVBQVY7QUFBQSxNQUFjQyxZQUFkLFFBQWNBLFlBQWQ7QUFBQSxNQUE0QkMsZUFBNUIsUUFBNEJBLGVBQTVCO0FBQUEsU0FBbUQ7O0FBRWhFQyxTQUFLSixNQUFNSSxHQUFOLENBQVVDLElBQVYsQ0FBZUwsS0FBZixDQUYyRDs7QUFJaEVNLHFCQUFpQix5QkFBQ0MsR0FBRCxFQUFNQyxJQUFOO0FBQUEsYUFDZixtQ0FBdUIsZ0JBQU9DLE9BQVAsRUFBZ0JDLE1BQWhCLEVBQTJCO0FBQ2hELFlBQU1DLGVBQWUsTUFBTVgsTUFBTVksSUFBTixDQUFXTCxHQUFYLEVBQWdCQyxJQUFoQixFQUN4QkssS0FEd0IsQ0FDbEI7QUFBQSxpQkFBS0MsRUFBRUMsUUFBRixJQUFjRCxDQUFuQjtBQUFBLFNBRGtCLENBQTNCOztBQUdBLFlBQUlILGFBQWFLLE1BQWIsS0FBd0IsR0FBNUIsRUFBaUM7QUFDL0I7QUFDQSxjQUFNQyxlQUFlTixhQUFhSCxJQUFiLENBQWtCUyxZQUF2QztBQUNBLGNBQU1DLGNBQWM7QUFDbEJELHNDQURrQjtBQUVsQkUsb0JBQVEsS0FGVTtBQUdsQkMsdUJBQVcsS0FITztBQUlsQkMsdUJBQVcsS0FKTztBQUtsQkMsbUJBQU87QUFMVyxXQUFwQjs7QUFRQXJCLGFBQUdzQixVQUFILENBQ0dDLFFBREgsQ0FDWXJCLGVBRFosRUFFR3NCLElBRkgsQ0FFUXZCLFlBRlIsRUFHR3dCLEdBSEgsQ0FHTztBQUFBLG1CQUFLUixXQUFMO0FBQUEsV0FIUCxFQUlHUSxHQUpILENBSU8sc0JBQWM7QUFDakIsZ0JBQUksQ0FBRUMsV0FBV1IsTUFBYixJQUF3QixDQUFFUSxXQUFXUCxTQUF6QyxFQUFxRDtBQUNuRE8seUJBQVdSLE1BQVgsR0FBb0IsSUFBcEI7QUFDQW5CLG9CQUFNWSxJQUFOLENBQVdMLEdBQVgsRUFBZ0IsRUFBRVUsMEJBQUYsRUFBaEIsRUFBa0NKLEtBQWxDLENBQXdDO0FBQUEsdUJBQUtDLEVBQUVDLFFBQUYsSUFBY0QsQ0FBbkI7QUFBQSxlQUF4QyxFQUNHYyxJQURILENBQ1Esd0JBQWdCO0FBQ3BCLG9CQUFJQyxhQUFhYixNQUFiLEtBQXdCLEdBQTVCLEVBQWlDO0FBQy9CO0FBQ0FXLDZCQUFXUCxTQUFYLEdBQXVCLElBQXZCO0FBQ0FPLDZCQUFXTixTQUFYLEdBQXVCLElBQXZCO0FBQ0QsaUJBSkQsTUFJTyxJQUFJUSxhQUFhYixNQUFiLEtBQXdCLEdBQTVCLEVBQWlDO0FBQ3RDO0FBQ0FXLDZCQUFXUCxTQUFYLEdBQXVCLEtBQXZCO0FBQ0FPLDZCQUFXUixNQUFYLEdBQW9CLElBQXBCO0FBQ0QsaUJBSk0sTUFJQSxJQUFJVSxhQUFhYixNQUFiLEtBQXdCLEdBQTVCLEVBQWlDO0FBQ3RDO0FBQ0FXLDZCQUFXUCxTQUFYLEdBQXVCLElBQXZCO0FBQ0FPLDZCQUFXTixTQUFYLEdBQXVCLEtBQXZCO0FBQ0FNLDZCQUFXTCxLQUFYLEdBQW1CLElBQUlRLEtBQUosY0FBcUJELGFBQWFyQixJQUFsQyxDQUFuQjtBQUNELGlCQUxNLE1BS0EsSUFBSXFCLGFBQWFiLE1BQWIsS0FBd0IsR0FBNUIsRUFBaUM7QUFDdEM7QUFDQVcsNkJBQVdQLFNBQVgsR0FBdUIsSUFBdkI7QUFDQU8sNkJBQVdOLFNBQVgsR0FBdUIsS0FBdkI7QUFDQU0sNkJBQVdMLEtBQVgsR0FDRSxJQUFJUSxLQUFKLGlCQUF3QmIsWUFBeEIsaUJBREY7QUFFRCxpQkFOTSxNQU1BO0FBQ0w7QUFDQVUsNkJBQVdQLFNBQVgsR0FBdUIsSUFBdkI7QUFDQU8sNkJBQVdOLFNBQVgsR0FBdUIsS0FBdkI7QUFDQU0sNkJBQVdMLEtBQVgsR0FDRSxJQUFJUSxLQUFKLENBQWFELGFBQWFiLE1BQTFCLFVBQXFDYSxhQUFhckIsSUFBbEQsQ0FERjtBQUVEO0FBQ0YsZUE1QkgsRUE2QkdLLEtBN0JILENBNkJTLGVBQU87QUFDWmMsMkJBQVdQLFNBQVgsR0FBdUIsSUFBdkI7QUFDQU8sMkJBQVdOLFNBQVgsR0FBdUIsS0FBdkI7QUFDQU0sMkJBQVdMLEtBQVgsR0FBbUJTLEdBQW5CO0FBQ0QsZUFqQ0g7QUFrQ0Q7O0FBRUQsbUJBQU9KLFVBQVA7QUFDRCxXQTVDSCxFQTZDR0ssU0E3Q0gsQ0E2Q2E7QUFBQSxtQkFBYyxDQUFFTCxXQUFXUCxTQUEzQjtBQUFBLFdBN0NiLEVBOENHYSxRQTlDSCxDQThDWSxDQTlDWixFQStDR1AsR0EvQ0gsQ0ErQ087QUFBQSxtQkFBY2pCLFFBQVE7QUFDekJRLDRCQUFjVSxXQUFXVixZQURBO0FBRXpCSSx5QkFBV00sV0FBV04sU0FGRztBQUd6QkMscUJBQU9LLFdBQVdMLEtBSE8sRUFBUixDQUFkO0FBQUEsV0EvQ1A7QUFtREU7QUFuREYsV0FvREdULEtBcERILENBb0RTO0FBQUEsbUJBQU9ILE9BQU9xQixHQUFQLENBQVA7QUFBQSxXQXBEVDtBQXFERTtBQXJERixXQXNER0csT0F0REgsQ0FzRFc7QUFBQSxtQkFBS3hCLE9BQU8sOEJBQVAsQ0FBTDtBQUFBLFdBdERYLEVBdURHeUIsU0F2REg7QUF3REQsU0FuRUQsTUFtRU8sSUFBSXhCLGFBQWFLLE1BQWIsS0FBd0IsR0FBNUIsRUFBaUM7QUFDdEM7QUFDQU4saUJBQU8sSUFBSW9CLEtBQUosQ0FBVSw2QkFBVixDQUFQO0FBQ0QsU0FITSxNQUdBO0FBQ0w7QUFDQXBCLGlCQUFPLElBQUlvQixLQUFKLENBQVVuQixZQUFWLENBQVA7QUFDRDtBQUNGLE9BOUVELENBRGU7QUFBQTtBQUorQyxHQUFuRDtBQUFBLEMiLCJmaWxlIjoiYXhpb3NXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSB9IGZyb20gJy4vLi4vLi4vdXRpbHMnXG5cbi8qKlxuICogQSB3cmFwcGVyIGZvciB0aGUgYXhpb3MgaHR0cCBsaWJyYXJ5XG4gKiBAcGFyYW0ge29iamVjdH0gYXhpb3MgdGhlIGNvcmUgYXhpb3MgbGlicmFyeVxuICogQHBhcmFtIHtvYmplY3R9IFJ4IHRoZSBSeCBsaWJyYXJ5XG4gKiBAcGFyYW0ge251bWJlcn0gbWF4UG9sbFRyaWVzIHRoZSBtYXhpbXVtIHBvbGxzIHRvIHRyeSB0byBnZXQgdGhlIHJlc3BvbnNlXG4gICogQHBhcmFtIHtudW1iZXJ9IHBvbGxpbmdJbnRlcnZhbCB0aW1lIGludGVydmFsIGJldHdlZW4gcG9sbGluZyByZXF1ZXN0c1xuICovXG5leHBvcnQgZGVmYXVsdCAoeyBheGlvcywgUngsIG1heFBvbGxUcmllcywgcG9sbGluZ0ludGVydmFsIH0pID0+ICh7XG5cbiAgZ2V0OiBheGlvcy5nZXQuYmluZChheGlvcyksXG5cbiAgcG9zdFdpdGhQb2xsaW5nOiAodXJsLCBkYXRhKSA9PlxuICAgIGNyZWF0ZURlZmVuc2l2ZVByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgIC5jYXRjaChlID0+IGUucmVzcG9uc2UgfHwgZSlcblxuICAgICAgaWYgKHBvc3RSZXNwb25zZS5zdGF0dXMgPT09IDIwMikge1xuICAgICAgICAvLyBSZXF1ZXN0IGhhcyBiZWVuIGFjY2VwdGVkIGZvciBwcm9jZXNzaW5nXG4gICAgICAgIGNvbnN0IHJlcXVlc3RUb2tlbiA9IHBvc3RSZXNwb25zZS5kYXRhLnJlcXVlc3RUb2tlblxuICAgICAgICBjb25zdCBfcG9sbFJlc3VsdCA9IHtcbiAgICAgICAgICByZXF1ZXN0VG9rZW4sXG4gICAgICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIHN1Y2NlZWRlZDogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIFJ4Lk9ic2VydmFibGVcbiAgICAgICAgICAuaW50ZXJ2YWwocG9sbGluZ0ludGVydmFsKVxuICAgICAgICAgIC50YWtlKG1heFBvbGxUcmllcylcbiAgICAgICAgICAubWFwKF8gPT4gX3BvbGxSZXN1bHQpXG4gICAgICAgICAgLm1hcChwb2xsUmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmICghKHBvbGxSZXN1bHQubG9ja2VkKSAmJiAhKHBvbGxSZXN1bHQuY29tcGxldGVkKSkge1xuICAgICAgICAgICAgICBwb2xsUmVzdWx0LmxvY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgYXhpb3MucG9zdCh1cmwsIHsgcmVxdWVzdFRva2VuIH0pLmNhdGNoKGUgPT4gZS5yZXNwb25zZSB8fCBlKVxuICAgICAgICAgICAgICAgIC50aGVuKHBvbGxSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAocG9sbFJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NmdWxseSBwb3N0ZWQgZGF0YVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmNvbXBsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5zdWNjZWVkZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvbGxSZXNwb25zZS5zdGF0dXMgPT09IDIwMikge1xuICAgICAgICAgICAgICAgICAgICAvLyBzdGlsbCBwcm9jZXNzaW5nXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuY29tcGxldGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5sb2NrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvbGxSZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWlsZWQgdG8gcG9zdCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuY29tcGxldGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LnN1Y2NlZWRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuZXJyb3IgPSBuZXcgRXJyb3IoYEZhaWxlZDogJHtwb2xsUmVzcG9uc2UuZGF0YX1gKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwb2xsUmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdFRva2VuIG5vdCBmb3VuZFxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmNvbXBsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5zdWNjZWVkZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID1cbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJlcXVlc3RJRCAoJHtyZXF1ZXN0VG9rZW59KSBub3QgZm91bmRgKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5rbm93biBlcnJvclxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmNvbXBsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5zdWNjZWVkZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID1cbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYCR7cG9sbFJlc3BvbnNlLnN0YXR1c306ICR7cG9sbFJlc3BvbnNlLmRhdGF9YClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5jb21wbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LnN1Y2NlZWRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBvbGxSZXN1bHRcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50YWtlV2hpbGUocG9sbFJlc3VsdCA9PiAhKHBvbGxSZXN1bHQuY29tcGxldGVkKSlcbiAgICAgICAgICAudGFrZUxhc3QoMSlcbiAgICAgICAgICAubWFwKHBvbGxSZXN1bHQgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICByZXF1ZXN0VG9rZW46IHBvbGxSZXN1bHQucmVxdWVzdFRva2VuLFxuICAgICAgICAgICAgc3VjY2VlZGVkOiBwb2xsUmVzdWx0LnN1Y2NlZWRlZCxcbiAgICAgICAgICAgIGVycm9yOiBwb2xsUmVzdWx0LmVycm9yIH0pKVxuICAgICAgICAgIC8vIHVua25vd24gZXJyb3JzXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSlcbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgbWF4UG9sbFRyaWVzIGFyZSBleGhhdXN0ZWRcbiAgICAgICAgICAuZmluYWxseShfID0+IHJlamVjdCgnRmFpbGVkIHRvIHBvbGwgYmFjayByZXNwb25zZScpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICAgfSBlbHNlIGlmIChwb3N0UmVzcG9uc2Uuc3RhdHVzID09PSA1MDMpIHtcbiAgICAgICAgLy8gUmVxdWVzdCBxdWV1ZSBpcyBvdmVybG9hZGVkXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1JlcXVlc3QgcXVldWUgaXMgb3ZlcmxvYWRlZCcpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVW5rbm93biBlcnJvclxuICAgICAgICByZWplY3QobmV3IEVycm9yKHBvc3RSZXNwb25zZSkpXG4gICAgICB9XG4gICAgfSlcbn0pXG4iXX0=