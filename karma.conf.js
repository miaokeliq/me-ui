// karma 主要是用来打开浏览器的，然后打开测试用例， 运行测试用例需要用浏览器
//   然后引入 mocha   然后就有 describe 和 it 两个函数，这两个函数是mocha提供的 ， 直接挂在window上的全局函数
//   sinon-chai    sinon用于做fake用的，测试回调   ，  chai提供 expect断言 ，     sinon-chai 会在chai上面添加 callback  、 callbackWith 等api
//   然后引入测试用例， 就是*.test.js *.css.js
//  然后需要用reporter  ，就是 终端的打印 样式

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns(eg. files, exclude)
    basePath: "",
    //frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha", "sinon-chai"],
    client: {
      chai: {
        includeStack: true,
      },
    },

    // list of files / patterns to load in the browser
    files: ["dist/**/*.test.js", "dist/**/*.test.css"],

    // list of files / patterns to exclude
    exclud: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available preprocessors: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browser
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["ChromeHeadless"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
