// #region  H E A D E R
// <copyright file="mcodeTemplate.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Common JavaScript Template
 *      Module:   Modules (./mcodeTemplate.js)
 *      Project:  MicroCODE Common Library
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     February 2022
 *      Author:   Timothy J McGuire
 *
 *      Designed and Coded: 2022 MicroCODE Incorporated
 *
 *      This software and related materials are the property of
 *      MicroCODE Incorporated and contain confidential and proprietary
 *      information. This software and related materials shall not be
 *      duplicated, disclosed to others, or used in any way without the
 *      written of MicroCODE Incorported.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *
 *      This module implements the MicroCODE's Common JavaScript Template.
 *      This file is copied to start all MicroCODE JavaScript code files.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MIT xPRO Style Guide
 *         https://student.emeritus.org/courses/3291/files/2554233/download?wrap=1
 *
 *      2. AirBnB JavaScript Style Guide
 *         https://github.com/airbnb/javascript
 *
 *      3. Turing School Style Guide
 *         https://github.com/turingschool-examples/javascript/tree/main/es5
 *
 *      4. MDN Web Docs - JavaScript Classes
 *         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 *      5. JSDoc - How to properly document JavaScript Code.
 *         https://
 *
 *      6. MicroCODE JavaScript Style Guide
 *         Local File: MCX-S02 (Internal JS Style Guide).docx
 *         https://github.com/MicroCODEIncorporated/JavaScriptSG
 *
 *
 *      DEMONSTRATION VIDEOS:
 *      --------------------
 *
 *      1. ...
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:     Description:
 *
 *  07-Mar-2022   TJM-MCODE  {0001}    New module for common reusable Javascript files for web pages.
 *  09-Apr-2022   TJM-MCODE  {0002}    Renamed to "moduleTemplate.js"
 *
 *
 */
"use strict";

// #endregion
// #endregion
// #endregion

// #region  J A V A S C R I P T
// #region  F U N C T I O N S

// #region  C O N S T A N T S

const MIN_VALUE = 1;
const MAX_VALUE = 999;
const CLASS_TYPE = 'Example';

// #endregion

// #region  P R I V A T E   F I E L D S

var field1 = 0.00;
var field2 = '';

// #endregion

// #region  E N U M E R A T I O N S

/**
 * @enum namedEnum1 - a description of this enum, its use, and meaning.
 */
const namedEnum1 = Object.freeze
    ({
        name1: 0,
        name2: 1,
        name3: 2,
        name4: 3,
        name5: 4,
        name6: 5,
        name7: 6
    });

// #endregion

// #region  M E T H O D S – P U B L I C

/**
 * method1() – description of public method.
 *
 * @api public
 *
 * @param {type} param1 1st method parameter.
 * @returns method result.
 *
 * @example
 *
 *      method1('param1');
 *
 */
function method1(param1)
{
    // ...

    return value;
}

/**
 * method2() – description of public method.
 *
 * @api public
 *
 * @param {type} param1 1st method parameter.
 * @param {type} param2 2nd method parameter.
 * @returns method result.
 *
 * @example
 *
 *      method2('param1', 'param2');
 */
function method2(param1, param2)
{
    // ...

    return value;
}

/**
 * method3() – description of public method.
 *
 * @api public
 *
 * @param {type} param1 1st method parameter.
 * @param {type} param2 2nd method parameter.
 * @param {type} param3 3rd method parameter.
 * @returns {type} method result.
 *
 * @example
 *
 *      method3('param1', 'param2');
 */
function method3(param1, param2, param3)
{
    // ...

    return value;
}

// #endregion

// #region  M E T H O D S – P R I V A T E

/**
 * _method1() – description of private method.    NOTE: Method headers are *optional* are private meothds.
 *
 * @api private
 *
 * @param {type} param1 description of param1.
 */
function _method1(param1)
{
    // ...

    return value;
}

/**
 * _method2() – description of private method.
 *
 * @api private
 *
 * @param {type} param1 description of param1.
 */
function _method2(param1)
{
    // ...

    return value;
}

// #endregion

// #region  M E T H O D - E X P O R T S

if (typeof module !== 'undefined')
{
    module.exports = {method1, method2, method3};
}

// #endregion

// #endregion
// #endregion