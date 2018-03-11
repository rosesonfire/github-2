'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Helper function for creating ioc's
 * @param {function} instanceConstructor the constructor for creating the
 *   dependency instance
 * @param {Object} configurations the constructor arguments of primitive types.
 *   Structure:
 *     {
 *       <config1_name>: <config1_value>,
 *       <config2_name>: <config2_value>,
 *       ....
 *     }
 * @param {Object} dependencyInstances constructor the constructor arguments
 *   which are passed directly. Structure:
 *     {
 *       <dependency1_name>: <dependency1_instance>,
 *       <dependency2_name>: <dependency2_instance>,
 *       ....
 *     }
 * @param {Object} dependencyConfig the dependency paths which are used to
 *   resolve the the dependencies through electrolyte. constructor arguments
 *   which are passed directly. Structure:
 *     {
 *       <dependency1_name>: <dependency1_path>,
 *       <dependency2_name>: <dependency2_path>,
 *       ....
 *     }
 * @param {boolean} isSingleton if the dependency is a singleton
 */
var createNewInstance = exports.createNewInstance = function createNewInstance(_ref) {
  var instanceConstructor = _ref.instanceConstructor,
      _ref$configuration = _ref.configuration,
      configuration = _ref$configuration === undefined ? {} : _ref$configuration,
      _ref$dependencyInstan = _ref.dependencyInstances,
      dependencyInstances = _ref$dependencyInstan === undefined ? {} : _ref$dependencyInstan,
      _ref$dependencyConfig = _ref.dependencyConfig,
      dependencyConfig = _ref$dependencyConfig === undefined ? {} : _ref$dependencyConfig,
      _ref$isSingleton = _ref.isSingleton,
      isSingleton = _ref$isSingleton === undefined ? true : _ref$isSingleton;

  var dependencyNames = Object.keys(dependencyConfig);
  var dependencyPaths = Object.values(dependencyConfig);
  var constructorArguments = Object.assign(Object.assign({}, configuration), dependencyInstances);
  var newInstance = null;
  // This is the module.exports of the caller
  // iocDependencyInstances is injected by electrolyte
  var callerModuleExports = function callerModuleExports() {
    for (var _len = arguments.length, iocDependencyInstances = Array(_len), _key = 0; _key < _len; _key++) {
      iocDependencyInstances[_key] = arguments[_key];
    }

    dependencyNames.forEach(function (dependencyName, index) {
      constructorArguments[dependencyName] = iocDependencyInstances[index];
    });
    newInstance = instanceConstructor(constructorArguments);

    return newInstance;
  };

  // Export the dependency paths
  callerModuleExports['@require'] = dependencyPaths;
  // Export if the ioc is a singleton
  callerModuleExports['@singleton'] = isSingleton;

  return callerModuleExports;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pb2MvaW9jSGVscGVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZU5ld0luc3RhbmNlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImNvbmZpZ3VyYXRpb24iLCJkZXBlbmRlbmN5SW5zdGFuY2VzIiwiZGVwZW5kZW5jeUNvbmZpZyIsImlzU2luZ2xldG9uIiwiZGVwZW5kZW5jeU5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImRlcGVuZGVuY3lQYXRocyIsInZhbHVlcyIsImNvbnN0cnVjdG9yQXJndW1lbnRzIiwiYXNzaWduIiwibmV3SW5zdGFuY2UiLCJjYWxsZXJNb2R1bGVFeHBvcnRzIiwiaW9jRGVwZW5kZW5jeUluc3RhbmNlcyIsImZvckVhY2giLCJkZXBlbmRlbmN5TmFtZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJPLElBQU1BLGdEQUFvQixTQUFwQkEsaUJBQW9CLE9BQzJDO0FBQUEsTUFEeENDLG1CQUN3QyxRQUR4Q0EsbUJBQ3dDO0FBQUEsZ0NBRG5CQyxhQUNtQjtBQUFBLE1BRG5CQSxhQUNtQixzQ0FESCxFQUNHO0FBQUEsbUNBQTFFQyxtQkFBMEU7QUFBQSxNQUExRUEsbUJBQTBFLHlDQUFwRCxFQUFvRDtBQUFBLG1DQUFoREMsZ0JBQWdEO0FBQUEsTUFBaERBLGdCQUFnRCx5Q0FBN0IsRUFBNkI7QUFBQSw4QkFBekJDLFdBQXlCO0FBQUEsTUFBekJBLFdBQXlCLG9DQUFYLElBQVc7O0FBQzFFLE1BQU1DLGtCQUFrQkMsT0FBT0MsSUFBUCxDQUFZSixnQkFBWixDQUF4QjtBQUNBLE1BQU1LLGtCQUFrQkYsT0FBT0csTUFBUCxDQUFjTixnQkFBZCxDQUF4QjtBQUNBLE1BQU1PLHVCQUNKSixPQUFPSyxNQUFQLENBQWNMLE9BQU9LLE1BQVAsQ0FBYyxFQUFkLEVBQWtCVixhQUFsQixDQUFkLEVBQWdEQyxtQkFBaEQsQ0FERjtBQUVBLE1BQUlVLGNBQWMsSUFBbEI7QUFDQTtBQUNBO0FBQ0EsTUFBTUMsc0JBQXNCLFNBQXRCQSxtQkFBc0IsR0FBK0I7QUFBQSxzQ0FBM0JDLHNCQUEyQjtBQUEzQkEsNEJBQTJCO0FBQUE7O0FBQ3pEVCxvQkFBZ0JVLE9BQWhCLENBQXdCLFVBQUNDLGNBQUQsRUFBaUJDLEtBQWpCLEVBQTJCO0FBQ2pEUCwyQkFBcUJNLGNBQXJCLElBQXVDRix1QkFBdUJHLEtBQXZCLENBQXZDO0FBQ0QsS0FGRDtBQUdBTCxrQkFBY1osb0JBQW9CVSxvQkFBcEIsQ0FBZDs7QUFFQSxXQUFPRSxXQUFQO0FBQ0QsR0FQRDs7QUFTQTtBQUNBQyxzQkFBb0IsVUFBcEIsSUFBa0NMLGVBQWxDO0FBQ0E7QUFDQUssc0JBQW9CLFlBQXBCLElBQW9DVCxXQUFwQzs7QUFFQSxTQUFPUyxtQkFBUDtBQUNELENBeEJNIiwiZmlsZSI6ImlvY0hlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBjcmVhdGluZyBpb2Mnc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gaW5zdGFuY2VDb25zdHJ1Y3RvciB0aGUgY29uc3RydWN0b3IgZm9yIGNyZWF0aW5nIHRoZVxuICogICBkZXBlbmRlbmN5IGluc3RhbmNlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlndXJhdGlvbnMgdGhlIGNvbnN0cnVjdG9yIGFyZ3VtZW50cyBvZiBwcmltaXRpdmUgdHlwZXMuXG4gKiAgIFN0cnVjdHVyZTpcbiAqICAgICB7XG4gKiAgICAgICA8Y29uZmlnMV9uYW1lPjogPGNvbmZpZzFfdmFsdWU+LFxuICogICAgICAgPGNvbmZpZzJfbmFtZT46IDxjb25maWcyX3ZhbHVlPixcbiAqICAgICAgIC4uLi5cbiAqICAgICB9XG4gKiBAcGFyYW0ge09iamVjdH0gZGVwZW5kZW5jeUluc3RhbmNlcyBjb25zdHJ1Y3RvciB0aGUgY29uc3RydWN0b3IgYXJndW1lbnRzXG4gKiAgIHdoaWNoIGFyZSBwYXNzZWQgZGlyZWN0bHkuIFN0cnVjdHVyZTpcbiAqICAgICB7XG4gKiAgICAgICA8ZGVwZW5kZW5jeTFfbmFtZT46IDxkZXBlbmRlbmN5MV9pbnN0YW5jZT4sXG4gKiAgICAgICA8ZGVwZW5kZW5jeTJfbmFtZT46IDxkZXBlbmRlbmN5Ml9pbnN0YW5jZT4sXG4gKiAgICAgICAuLi4uXG4gKiAgICAgfVxuICogQHBhcmFtIHtPYmplY3R9IGRlcGVuZGVuY3lDb25maWcgdGhlIGRlcGVuZGVuY3kgcGF0aHMgd2hpY2ggYXJlIHVzZWQgdG9cbiAqICAgcmVzb2x2ZSB0aGUgdGhlIGRlcGVuZGVuY2llcyB0aHJvdWdoIGVsZWN0cm9seXRlLiBjb25zdHJ1Y3RvciBhcmd1bWVudHNcbiAqICAgd2hpY2ggYXJlIHBhc3NlZCBkaXJlY3RseS4gU3RydWN0dXJlOlxuICogICAgIHtcbiAqICAgICAgIDxkZXBlbmRlbmN5MV9uYW1lPjogPGRlcGVuZGVuY3kxX3BhdGg+LFxuICogICAgICAgPGRlcGVuZGVuY3kyX25hbWU+OiA8ZGVwZW5kZW5jeTJfcGF0aD4sXG4gKiAgICAgICAuLi4uXG4gKiAgICAgfVxuICogQHBhcmFtIHtib29sZWFufSBpc1NpbmdsZXRvbiBpZiB0aGUgZGVwZW5kZW5jeSBpcyBhIHNpbmdsZXRvblxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3SW5zdGFuY2UgPSAoeyBpbnN0YW5jZUNvbnN0cnVjdG9yLCBjb25maWd1cmF0aW9uID0ge30sXG4gIGRlcGVuZGVuY3lJbnN0YW5jZXMgPSB7fSwgZGVwZW5kZW5jeUNvbmZpZyA9IHt9LCBpc1NpbmdsZXRvbiA9IHRydWUgfSkgPT4ge1xuICBjb25zdCBkZXBlbmRlbmN5TmFtZXMgPSBPYmplY3Qua2V5cyhkZXBlbmRlbmN5Q29uZmlnKVxuICBjb25zdCBkZXBlbmRlbmN5UGF0aHMgPSBPYmplY3QudmFsdWVzKGRlcGVuZGVuY3lDb25maWcpXG4gIGNvbnN0IGNvbnN0cnVjdG9yQXJndW1lbnRzID1cbiAgICBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ3VyYXRpb24pLCBkZXBlbmRlbmN5SW5zdGFuY2VzKVxuICBsZXQgbmV3SW5zdGFuY2UgPSBudWxsXG4gIC8vIFRoaXMgaXMgdGhlIG1vZHVsZS5leHBvcnRzIG9mIHRoZSBjYWxsZXJcbiAgLy8gaW9jRGVwZW5kZW5jeUluc3RhbmNlcyBpcyBpbmplY3RlZCBieSBlbGVjdHJvbHl0ZVxuICBjb25zdCBjYWxsZXJNb2R1bGVFeHBvcnRzID0gKC4uLmlvY0RlcGVuZGVuY3lJbnN0YW5jZXMpID0+IHtcbiAgICBkZXBlbmRlbmN5TmFtZXMuZm9yRWFjaCgoZGVwZW5kZW5jeU5hbWUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdHJ1Y3RvckFyZ3VtZW50c1tkZXBlbmRlbmN5TmFtZV0gPSBpb2NEZXBlbmRlbmN5SW5zdGFuY2VzW2luZGV4XVxuICAgIH0pXG4gICAgbmV3SW5zdGFuY2UgPSBpbnN0YW5jZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yQXJndW1lbnRzKVxuXG4gICAgcmV0dXJuIG5ld0luc3RhbmNlXG4gIH1cblxuICAvLyBFeHBvcnQgdGhlIGRlcGVuZGVuY3kgcGF0aHNcbiAgY2FsbGVyTW9kdWxlRXhwb3J0c1snQHJlcXVpcmUnXSA9IGRlcGVuZGVuY3lQYXRoc1xuICAvLyBFeHBvcnQgaWYgdGhlIGlvYyBpcyBhIHNpbmdsZXRvblxuICBjYWxsZXJNb2R1bGVFeHBvcnRzWydAc2luZ2xldG9uJ10gPSBpc1NpbmdsZXRvblxuXG4gIHJldHVybiBjYWxsZXJNb2R1bGVFeHBvcnRzXG59XG4iXX0=