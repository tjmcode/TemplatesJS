// <copyright file="mcodeTemplate.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE Incorporated Troy, MI</copyright><author>Timothy J. McGuire</author>

/*
 *      Title:    MicroCODE Common JavaScript Class Template
 *      Module:   Modules (MicroCODE:McodeTemplate.js)
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
 *      4. MicroCODE MCX-S02 (Internal JS Style Guide).docx
 *
 *
 *      VIDEOS:
 *      -------
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
 *
 *
 *
 */
"use strict";

class McodeTemplate
{
    // C O N S T A N T S
    static MIN_VALUE = 1;
    static MAX_VALUE = 999;
    static CLASS_TYPE = 'Example';

    // P R I V A T E   F I E L D S
    #property1 = 0.00;
    #property2 = '';

    // C O N S T R U C T O R
    constructor(objectName)
    {
        this.type = CLASS_TYPE;
        this.name = objectName;
        this.enums = [];

        // ...
    }

    // E N U M E R A T I O N S
    /**
     * namedEnum1 - a description of this enum, its use, and meaning.
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

    // P R O P E R T I E S
    /**
     * property1 - a description of this property, its use, and meaning.
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
     * property2 - a description of this property, its use, and meaning.
     */
    get property2()
    {
        return this.#property2;
    }
    set property2(value)
    {
        this.#property2 = value;
    }

    // S Y M B O L S
    /**
     * iterator1 - a description of this iterator, its use, and meaning.
     */
    [Symbol.iterator1]()
    {
        // method with computed name (symbol here)
    }

    // M E T H O D S – S T A T I C
    /**
     * static1() – description of public static method, called by prototype not object.
     *             This does not operate on a specific copy of a Class object.
     *
     * @param {type} param1 description of param1.
     * @returns {type} description of return value.
     * @api public
     */
    static static1(param1)
    {
        // ...

        return value;
    }

    // M E T H O D S – P U B L I C
    /**
     * method1() – description of public method.
     *
     * @param {type} param1 1st method parameter.
     * @returns method result.
     * @api public
     */
    method1(param1)
    {
        // ...

        return value;
    }

    /**
     * method2() – description of public method.
     *
     * @param {type} param1 1st method parameter.
     * @param {type} param2 2nd method parameter.
     * @returns method result.
     * @api public
     */
    method2(param1, param2)
    {
        // ...

        return value;
    }

    /**
     * method2() – description of public method.
     *
     * @param {type} param1 1st method parameter.
     * @param {type} param2 2nd method parameter.
     * @param {type} param3 3rd method parameter.
     * @returns method result.
     * @api public
     */
    method3(param1, param2, param3)
    {
        // ...

        return value;
    }

    // M E T H O D S - G E N E R A T O R S
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

    // M E T H O D S – P R I V A T E
    /**
     * _method1() – description of private method.
     *
     * @param {type} param1 description of param1.
     * @returns {type} description of return value.
     * @api private
     */

    /**
     * _method1() – description of private method.
     *
     * @param {type} param1 description of param1.
     * @returns {type} description of return value.
     * @api private
     */
    _method1(param1)
    {
        // ...

        return value;
    }

    /**
     * _method2() – description of private method.
     *
     * @param {type} param1 description of param1.
     * @returns {type} description of return value.
     * @api private
     */
    _method2(param1)
    {
        // ...

        return value;
    }
}

// E X T E N D E D   C L A S S E S
class Extended extends McodeTemplate
{
    // C O N S T R U C T O R
    constructor(name)
    {
        super(name); // call the super class constructor and pass in the name parameter
    }

    // M E T H O D S – P U B L I C
    /**
     * method9() -- ouptuts the extended name of the Class.
     *
     */
    method9()
    {
        console.log(`${this.name} communicates.`);
    }
}

// end of mcodeTemplate.js