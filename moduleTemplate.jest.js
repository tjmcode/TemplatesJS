// #region  H E A D E R
// <copyright file="moduleTemplate.jest.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Common Jest Test Template
 *      Module:   Modules (./moduleTemplate.test.js)
 *      Project:  MicroCODE Common Library
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     March 2022
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
 *      This module implements the MicroCODE's Common Jest Test Template.
 *      This file is copied to start all MicroCODE Jest Test files.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MicroCODE JavaScript Style Guide
 *         Local File: MCX-S02 (Internal JS Style Guide).docx
 *         https://github.com/MicroCODEIncorporated/JavaScriptSG
 *
 *      2. JEST Web Site Documentation
 *         https://jestjs.io/
 *
 *      3. ...
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:     Description:
 *
 *  01-Mar-2022   TJM-MCODE  {0001}    New module for common reusable JEST Test Template.
 *
 *
 */
"use strict";

// #endregion
// #endregion
// #endregion

var utils = require('course-utilities');

// #region  O B J E C T S

var object1 = utils.load('./object1.js', 'object1');

describe('object1', () =>
{
    test('object1 properties present', () =>
    {
        expect(object).toHaveProperty('property1');
        expect(object).toHaveProperty('property2');
        expect(object).toHaveProperty('property3');
        expect(object).toHaveProperty('property4');
        expect(object).toHaveProperty('property5');
    });

    test('object1.property1 Test #1 description...', () =>
    {
        expect(object.property1).toContain('property1_value');
    });

    test('object1.property2 Test #1 description...', () =>
    {
        expect(object.property2).toContain('property2_value1');
        expect(object.property2).toContain('property2_value2');
    });

    test('object1.property2 Test #2 description...', () =>
    {
        expect(object.property2).toBe('');
    });

    test('object1.property3 Test #1 description...', () =>
    {
        expect(object.property3).toBeGreaterThanOrEqual('property3_min');
        expect(object.property3).toBeLessThanOrEqual('property3_max');
    });

    test('object1.property4 Test #1 description...', () =>
    {
        expect(object.property4).toContain('property4_value');
    });

    test('object1.property5 Test #1 description...', () =>
    {
        expect(object.property5).toContain('property5_value');
    });
});

// #endregion

// #region  J A V A S C R I P T

describe('methodName1', () =>
{
    const methodName = require('./moduleName.js');  // *must* export 'methodName'

    test('methodName1() Test #1 description...', () =>
    {
        expect(methodName(parameter1, parameter2)).toBe(result1);
    });

    test('methodName1() Test #2 description...', () =>
    {
        expect(methodName(parameter1, parameter2)).toBe(result2);
    });

    test('methodName1() Test #3 description...', () =>
    {
        expect(methodName(parameter1, parameter2)).toBe(result3);
    });

    test('methodName1() Test #4 description...', () =>
    {
        expect(methodName(parameter1, parameter2)).toBe(result4);
    });
});

describe('methodName2', () =>
{
    const methodName = require('./methodName2');

    test('methodName2() Test #1 description...', () =>
    {
        expect(methodName(parameter1, parameter2)).toBe(result1);
    });

    test('methodName2() Test #2 description...', () =>
    {
        expect(methodName(parameter1, parameter2)).toBe(result2);
    });

    test('methodName2() Test #3 description...', () =>
    {
        expect(methodName(parameter1, parameter2)).toBe(result3);
    });

    test('methodName2() Test #4 description...', () =>
    {
        expect(methodName(parameter1, parameter2)).toBe(result4);
    });
});

// #endregion
