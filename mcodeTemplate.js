// #region  H E A D E R
// <copyright file="mcodeTemplate.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE Incorporated Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Common JavaScript Class Template
 *      Module:   Modules (MicroCODE:mcodeTemplate.js)
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
 *      This module implements the MicroCODE's Common JavaScript Class Template.
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
 *      1. MicroCODE JavaScript Style Guide
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
 *  02-Feb-2022   TJM-MCODE  {0001}    New module for common reusable Javascript Classes for code files.
 *  06-Feb-2022   TJM-MCODE  {0002}    Moved @api tag under method description and before @param and @return.
 *  08-Feb-2022   TJM-MCODE  {0003}    Aded @constructor, @property, @class, @enum,
 *
 *
 */
"use strict";

// #endregion
// #endregion
// #endregion

// #region  C L A S S

/**
 * @class mcodeTemplate Class to represent a specific...
 *
 */
class mcodeTemplate
{
    // #region  C O N S T A N T S

    static MIN_VALUE = 1;
    static MAX_VALUE = 999;
    static CLASS_TYPE = 'Example';

    // #endregion

    // #region  P R I V A T E   F I E L D S
    #property1 = 0.00;
    #property2 = '';

    // #endregion

    // #region  C O N S T R U C T O R

    /**
     * @constructor mcodeTemplate class constructor.
     *
     * @param {string} objectName the name of the object.
     */
    constructor (objectName)
    {
        this.type = CLASS_TYPE;
        this.name = objectName;
        this.enums = [];

        // ...
    }

    // #endregion

    // #region  E N U M E R A T I O N S

    /**
     * @enum namedEnum1 - a description of this enum, its use, and meaning.
     */
    static namedEnum1 = Object.freeze
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

    // #region  P R O P E R T I E S

    /**
     * @property {type} property1 a description of this property, its use, and meaning.
     */
    get property1()
    {
        return this.#property1;
    }
    set property1(value)
    {
        this.#property1 = value;
    }

    /**
     * @property {type} property2 a description of this property, its use, and meaning.
     */
    get property2()
    {
        return this.#property2;
    }
    set property2(value)
    {
        this.#property2 = value;
    }

    // #endregion

    // #region  S Y M B O L S

    /**
     * iterator1 - a description of this iterator, its use, and meaning.
     */
    [Symbol.iterator1]()
    {
        // method with computed name (symbol here)
    }

    // #endregion

    // #region  M E T H O D S – S T A T I C

    /**
     * static1() – description of public static method, called by prototype not object.
     *             This does not operate on a specific copy of a Class object.
     * @api public
     *
     * @param {type} param1 description of param1.
     * @returns {type} description of return value.
     *
     * @example
     *
     *      static1('param1');
     */
    static static1(param1)
    {
        // ...

        return value;
    }

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
    method1(param1)
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
    method2(param1, param2)
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
    method3(param1, param2, param3)
    {
        // ...

        return value;
    }

    // #endregion

    // #region  M E T H O D S - G E N E R A T O R S

    /**
     * getValue() - returns all values in 'enums'.
     *
     */
    *getValue()
    {
        for (const enumValue of this.enums)
        {
            yield value;
        }
    }

    // #endregion

    // #region  M E T H O D S – P R I V A T E

    /**
     * _method1() – description of private method.    NOTE: Method headers are *optional* are private meothds.
     *
     * @api private
     *
     * @param {type} param1 description of param1.
     * @returns {type} description of return value.
     */
    _method1(param1)
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
     * @returns {type} description of return value.
     */
    _method2(param1)
    {
        // ...

        return value;
    }

    // #endregion
}

module.exports = mcodeTemplate.static1;

// #endregion

// #region  E X T E N D E D   C L A S S E S

/**
 * @class mcodeExtended Class extending mcodeTemplate...
 *
 */
class mcodeExtended extends mcodeTemplate
{
    // #region  C O N S T R U C T O R

    constructor (name)
    {
        super(name); // call the super class constructor and pass in the name parameter
    }

    // #endregion

    // #region  M E T H O D S – P U B L I C

    /**
     * method9() -- ouptuts the extended name of the Class.
     *
     */
    method9()
    {
        console.log(`${ this.name } communicates.`);
    }

    // #endregion
}

// #endregion
