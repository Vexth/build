/**
 * @desc webpack打包入口文件
 */
// Array
const arrayEqual = require('./Array/arrayEqual')
const group = require('./Array/group')
const arrayUnique = require('./Array/arrayUnique')
const isFilter = require('./Array/isFilter')
const isForEach = require('./Array/isForEach')
const isMap = require('./Array/isMap')

// Class
const addClass = require('./Class/addClass')
const hasClass = require('./Class/hasClass')
const removeClass = require('./Class/removeClass')

// Cookie
const getCookie = require('./Cookie/getCookie')
const removeCookie = require('./Cookie/removeCookie')
const setCookie = require('./Cookie/setCookie')

// Device
const getOS = require('./Device/getOS')
const getExplore = require('./Device/getExplore')

// Dom
const getScrollTop = require('./Dom/getScrollTop')
const offset = require('./Dom/offset')
const scrollTo = require('./Dom/scrollTo')
const setScrollTop = require('./Dom/setScrollTop')
const windowResize = require('./Dom/windowResize')

// Function
const debounce = require('./Function/debounce')
const throttle = require('./Function/throttle')

// Keycode
const getKeyName = require('./Keycode/getKeyName')

// Object
const deepClone = require('./Object/deepClone')
const isEmptyObject = require('./Object/isEmptyObject')

// Random
const randomColor = require('./Random/randomColor')
const randomNum = require('./Random/randomNum')

// Regexp
const isEmail = require('./Regexp/isEmail')
const isIdCard = require('./Regexp/isIdCard')
const isPhoneNum = require('./Regexp/isPhoneNum')
const isUrl = require('./Regexp/isUrl')
const {
    isArray,
    isJSON,
    isFunction,
    isString,
    isNumber,
    isUndefined,
    isNull
} = require('./Regexp/isType')
const isNative = require('./Regexp/isNative')


// String
const digitUppercase = require('./String/digitUppercase')
const trim = require('./String/Trim')

// Support
const isSupportWebP = require('./Support/isSupportWebP')

// Time
const formatPassTime = require('./Time/formatPassTime')
const formatRemainTime = require('./Time/formatRemainTime')
const isSameDay = require('./Time/isSameDay')
const formatDate = require('./Time/formatDate')

// Url
const parseQueryString = require('./Url/parseQueryString')
const stringfyQueryString = require('./Url/stringfyQueryString')
const getQueryString = require('./Url/getQueryString')

// Promise
const isPromise = require('./Promise/isPromise')

module.exports = {
    arrayEqual,
    group,
    isFilter,
    arrayUnique,
    isForEach,
    isMap,

    addClass,
    hasClass,
    removeClass,

    getCookie,
    removeCookie,
    setCookie,

    getOS,
    getExplore,

    getScrollTop,
    offset,
    scrollTo,
    setScrollTop,
    windowResize,

    debounce,
    throttle,

    getKeyName,

    deepClone,
    isEmptyObject,

    randomColor,
    randomNum,

    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,
    isArray,
    isJSON,
    isFunction,
    isString,
    isNumber,
    isUndefined,
    isNull,
    isNative,

    digitUppercase,
    trim,

    isSupportWebP,

    formatPassTime,
    formatRemainTime,
    isSameDay,
    formatDate,

    parseQueryString,
    stringfyQueryString,
    getQueryString,

    isPromise,
}