const fs = require("fs");

// ---------------------------Templates----------------------------------

//public folder
const indexHtml =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Title</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`;

//src/common_styles folder
const fontsScss =
`//@font-face {
//  src: url('../fonts/woff/OpenSans-SemiBold.woff') format('woff'),
//    url('../fonts/woff2/OpenSans-SemiBold.woff2') format('woff2');
//  font-family: 'Open Sans';
//  font-weight: 600;
//  font-style: normal;
//}
`;

const mixinsScss =
`@import './variables.scss';

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}`;

const resetScss =
`/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img,
ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center,
dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure,
figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, 
section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
  color: #000;
}

* {
  box-sizing: border-box;
}

img {
  width: 100%;
}
`;

const variablesScss =
`//colors
$darkorange: darkorange;

//sizes
$half-rem: 0.5rem;
`;

// src
const indexJs =
`import React from 'react';
import { render } from 'react-dom';
import { App } from 'Containers';

import './common_styles/reset.scss';
import './common_styles/fonts.scss';

render(<App />, document.getElementById('root'));
module.hot.accept();
`;

//src/components folder
const indexComponents =
`export { default as Header } from './Header/Header';
`;

const headerJs =
`import React from 'react';
import { string } from 'prop-types';
import { headerCenter } from './Header.scss';

const Header = (props) => {
  return (
    <header className={headerCenter}>
      {'Welcome to '+props.name+ ' working environment'}
    </header>
  );
};

Header.propTypes = {
  name: string.isRequired,
};

export default Header;
`;

const headerScss =
`@import '../../common_styles/variables.scss';
@import '../../common_styles/mixins.scss';

.header-center {
  @include flex-column-center;
  color: $darkorange;
  margin-top: 20px;
}
`;

//src/containers folder
const indexContainers =
`export { default as App } from './App/App';
`;

const appJs =
`import React, { Component, StrictMode } from 'react';
import { Header } from 'Components';
// import { app } from "./App.scss";

class App extends Component {
  render() {
    return (
      <StrictMode>
        <Header name="Sergey" />
      </StrictMode>
    );
  }
}

export default App;
`;

const appScss =
`.app {

}
`;

// src/images folder
const indexImages =
`// export { default as image } from './image.jpg';
`;

// .babelrc
const babelrc =
`{
  "presets": [
    "@babel/preset-react",
    "@babel/preset-env"
  ],
  "plugins": [
    "react-hot-loader/babel",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties"
  ]
}
`;

// .eslintrc
const eslintrc =
`{
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true
  },

  "plugins": [
    "jsx-a11y",
    "react",
    "import"
  ],

  "rules": {
    "accessor-pairs": "off",

    "array-callback-return": ["error", { "allowImplicit": true }],

    "block-scoped-var": "error",

    "complexity": ["off", 11],

    "consistent-return": "error",

    "curly": ["error", "multi-line"],

    "default-case": ["error", { "commentPattern": "^no default$" }],

    "dot-notation": ["error", { "allowKeywords": true }],

    "dot-location": ["error", "property"],

    "eqeqeq": ["error", "always", { "null": "ignore" }],

    "guard-for-in": "error",

    "max-classes-per-file": ["off", 1],

    "no-alert": "warn",

    "no-caller": "error",

    "no-case-declarations": "error",

    "no-div-regex": "off",

    "no-else-return": ["error", { "allowElseIf": false }],

    "no-empty-function": ["error", {
      "allow": [
        "arrowFunctions",
        "functions",
        "methods"
      ]
    }],

    "no-empty-pattern": "error",

    "no-eq-null": "off",

    "no-eval": "error",

    "no-extend-native": "error",

    "no-extra-bind": "error",

    "no-extra-label": "error",

    "no-fallthrough": "error",

    "no-floating-decimal": "error",

    "no-global-assign": ["error", { "exceptions": [] }],

    "no-native-reassign": "off",

    "no-implicit-coercion": ["off", {
      "boolean": false,
      "number": true,
      "string": true,
      "allow": []
    }],

    "no-implicit-globals": "off",

    "no-implied-eval": "error",

    "no-invalid-this": "off",

    "no-iterator": "error",

    "no-labels": ["error", { "allowLoop": false, "allowSwitch": false }],

    "no-lone-blocks": "error",

    "no-loop-func": "error",

    "no-magic-numbers": ["off", {
      "ignore": [],
      "ignoreArrayIndexes": true,
      "enforceConst": true,
      "detectObjects": false
    }],

    "no-multi-spaces": ["error", {
      "ignoreEOLComments": false
    }],

    "no-multi-str": "error",

    "no-new": "error",

    "no-new-func": "error",

    "no-new-wrappers": "error",

    "no-octal": "error",

    "no-octal-escape": "error",

    "no-param-reassign": ["error", {
      "props": true,
      "ignorePropertyModificationsFor": [
        "acc",
        "accumulator",
        "e",
        "ctx",
        "req",
        "request",
        "res",
        "response",
        "$scope"
      ]
    }],

    "no-proto": "error",

    "no-redeclare": "error",

    "no-restricted-properties": ["error", {
      "object": "arguments",
      "property": "callee",
      "message": "arguments.callee is deprecated"
    }, {
      "object": "global",
      "property": "isFinite",
      "message": "Please use Number.isFinite instead"
    }, {
      "object": "self",
      "property": "isFinite",
      "message": "Please use Number.isFinite instead"
    }, {
      "object": "window",
      "property": "isFinite",
      "message": "Please use Number.isFinite instead"
    }, {
      "object": "global",
      "property": "isNaN",
      "message": "Please use Number.isNaN instead"
    }, {
      "object": "self",
      "property": "isNaN",
      "message": "Please use Number.isNaN instead"
    }, {
      "object": "window",
      "property": "isNaN",
      "message": "Please use Number.isNaN instead"
    }, {
      "property": "__defineGetter__",
      "message": "Please use Object.defineProperty instead."
    }, {
      "property": "__defineSetter__",
      "message": "Please use Object.defineProperty instead."
    }, {
      "object": "Math",
      "property": "pow",
      "message": "Use the exponentiation operator (**) instead."
    }],

    "no-return-assign": ["error", "always"],

    "no-return-await": "error",

    "no-script-url": "error",

    "no-self-assign": ["error", {
      "props": false
    }],

    "no-self-compare": "error",

    "no-sequences": "error",

    "no-throw-literal": "error",

    "no-unmodified-loop-condition": "off",

    "no-unused-expressions": ["error", {
      "allowShortCircuit": false,
      "allowTernary": false,
      "allowTaggedTemplates": false
    }],

    "no-unused-labels": "error",

    "no-useless-call": "off",

    "no-useless-concat": "error",

    "no-useless-escape": "error",

    "no-useless-return": "error",

    "no-void": "error",

    "no-warning-comments": ["off", {
      "terms": ["todo", "fixme", "xxx"],
      "location": "start"
    }],

    "no-with": "error",

    "prefer-promise-reject-errors": ["error", { "allowEmptyReject": true }],

    "radix": "error",

    "require-await": "off",

    "vars-on-top": "error",

    "wrap-iife": ["error", "outside", { "functionPrototypeMethods": false }],

    "yoda": "error",

    "for-direction": "error",


    "getter-return": ["error", { "allowImplicit": true }],

    "no-await-in-loop": "error",

    "no-compare-neg-zero": "error",

    "no-cond-assign": ["error", "always"],

    "no-console": "warn",

    "no-constant-condition": "warn",

    "no-control-regex": "error",

    "no-debugger": "error",

    "no-dupe-args": "error",

    "no-dupe-keys": "error",

    "no-duplicate-case": "error",

    "no-empty": "error",

    "no-empty-character-class": "error",

    "no-ex-assign": "error",

    "no-extra-boolean-cast": "error",

    "no-extra-parens": ["off", "all", {
      "conditionalAssign": true,
      "nestedBinaryExpressions": false,
      "returnAssign": false,
      "enforceForArrowConditionals": false
    }],

    "no-extra-semi": "error",

    "no-func-assign": "error",

    "no-inner-declarations": "error",

    "no-invalid-regexp": "error",

    "no-irregular-whitespace": "error",

    "no-obj-calls": "error",

    "no-prototype-builtins": "error",

    "no-regex-spaces": "error",

    "no-sparse-arrays": "error",

    "no-template-curly-in-string": "error",

    "no-unexpected-multiline": "error",

    "no-unreachable": "error",

    "no-unsafe-finally": "error",

    "no-unsafe-negation": "error",

    "no-negated-in-lhs": "off",

    "use-isnan": "error",

    "valid-jsdoc": "off",

    "valid-typeof": ["error", { "requireStringLiterals": true }],

    "arrow-body-style": ["error", "always"],

    "arrow-parens": ["error", "as-needed", {
      "requireForBlockBody": true
    }],

    "arrow-spacing": ["error", { "before": true, "after": true }],

    "constructor-super": "error",

    "generator-star-spacing": ["error", { "before": false, "after": true }],

    "no-class-assign": "error",

    "no-confusing-arrow": ["error", {
      "allowParens": true
    }],

    "no-const-assign": "error",

    "no-dupe-class-members": "error",

    "no-duplicate-imports": "off",

    "no-new-symbol": "error",

    "no-restricted-imports": ["off", {
      "paths": [],
      "patterns": []
    }],

    "no-this-before-super": "error",

    "no-useless-computed-key": "error",

    "no-useless-constructor": "error",

    "no-useless-rename": ["error", {
      "ignoreDestructuring": false,
      "ignoreImport": false,
      "ignoreExport": false
    }],

    "no-var": "error",

    "object-shorthand": ["error", "always", {
      "ignoreConstructors": false,
      "avoidQuotes": true
    }],

    "prefer-arrow-callback": ["error", {
      "allowNamedFunctions": false,
      "allowUnboundThis": true
    }],

    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true
    }],

    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": true,
        "object": true
      }
    }, {
      "enforceForRenamedProperties": false
    }],

    "prefer-numeric-literals": "error",

    "prefer-reflect": "off",

    "prefer-rest-params": "error",

    "prefer-spread": "error",

    "prefer-template": "error",

    "require-yield": "error",

    "rest-spread-spacing": ["error", "never"],

    "sort-imports": ["off", {
      "ignoreCase": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],

    "symbol-description": "error",

    "template-curly-spacing": "error",

    "yield-star-spacing": ["error", "after"],

    "import/named": "error",

    "import/default": "off",

    "import/namespace": "off",

    "import/export": "error",

    "import/no-named-as-default": "error",

    "import/no-named-as-default-member": "error",

    "import/no-deprecated": "off",

    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": [
        "test/**",
        "tests/**",
        "spec/**",
        "**/__tests__/**",
        "**/__mocks__/**",
        "test.{js,jsx}",
        "test-*.{js,jsx}",
        "**/*{.,_}{test,spec}.{js,jsx}",
        "**/jest.config.js",
        "**/vue.config.js",
        "**/webpack.config.js",
        "**/webpack.config.*.js",
        "**/rollup.config.js",
        "**/rollup.config.*.js",
        "**/gulpfile.js",
        "**/gulpfile.*.js",
        "**/Gruntfile{,.js}",
        "**/protractor.conf.js",
        "**/protractor.conf.*.js"
      ],
      "optionalDependencies": false
    }],

    "import/no-mutable-exports": "error",

    "import/no-commonjs": "off",

    "import/no-amd": "error",

    "import/no-nodejs-modules": "off",

    "import/first": "error",

    "import/imports-first": "off",

    "import/no-duplicates": "error",

    "import/no-namespace": "off",

    "import/extensions": ["error", "ignorePackages", {
      "js": "never",
      "mjs": "never",
      "jsx": "never"
    }],

    "import/order": ["error", {
      "groups": [["builtin", "external", "internal"]]
    }],


    "import/no-restricted-paths": "off",

    "import/max-dependencies": ["off", { "max": 10 }],

    "import/no-absolute-path": "error",

    "import/no-dynamic-require": "error",

    "import/no-internal-modules": ["off", {
      "allow": []
    }],

    "import/unambiguous": "off",

    "import/no-webpack-loader-syntax": "error",

    "import/no-unassigned-import": "off",

    "import/no-named-default": "error",

    "import/no-anonymous-default-export": ["off", {
      "allowArray": false,
      "allowArrowFunction": false,
      "allowAnonymousClass": false,
      "allowAnonymousFunction": false,
      "allowLiteral": false,
      "allowObject": false
    }],

    "import/exports-last": "off",

    "import/group-exports": "off",

    "import/no-default-export": "off",

    "import/no-self-import": "error",

    "import/no-useless-path-segments": "error",

    "import/dynamic-import-chunkname": ["off", {
      "importFunctions": [],
      "webpackChunknameFormat": "[0-9a-zA-Z-_/.]+"
    }],

    "import/no-relative-parent-imports": "off",

    "callback-return": "off",

    "global-require": "error",

    "handle-callback-err": "off",

    "no-buffer-constructor": "error",

    "no-mixed-requires": ["off", false],

    "no-new-require": "error",

    "no-path-concat": "error",

    "no-process-env": "off",

    "no-process-exit": "off",

    "no-restricted-modules": "off",

    "no-sync": "off",


    "strict": ["error", "never"],


    "array-bracket-newline": ["off", "consistent"],

    "array-element-newline": ["off", { "multiline": true, "minItems": 3 }],

    "array-bracket-spacing": ["error", "never"],

    "block-spacing": ["error", "always"],

    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],

    "camelcase": ["error", { "properties": "never" }],

    "capitalized-comments": ["off", "never", {
      "line": {
        "ignorePattern": ".*",
        "ignoreInlineComments": true,
        "ignoreConsecutiveComments": true
      },
      "block": {
        "ignorePattern": ".*",
        "ignoreInlineComments": true,
        "ignoreConsecutiveComments": true
      }
    }],

    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline"
    }],

    "comma-spacing": ["error", { "before": false, "after": true }],

    "comma-style": ["error", "last", {
      "exceptions": {
        "ArrayExpression": false,
        "ArrayPattern": false,
        "ArrowFunctionExpression": false,
        "CallExpression": false,
        "FunctionDeclaration": false,
        "FunctionExpression": false,
        "ImportDeclaration": false,
        "ObjectExpression": false,
        "ObjectPattern": false,
        "VariableDeclaration": false,
        "NewExpression": false
      }
    }],

    "computed-property-spacing": ["error", "never"],

    "consistent-this": "off",

    "eol-last": ["error", "always"],

    "func-call-spacing": ["error", "never"],

    "func-name-matching": ["off", "always", {
      "includeCommonJSModuleExports": false
    }],

    "func-names": "warn",

    "func-style": ["off", "expression"],

    "function-paren-newline": ["error", "consistent"],

    "id-blacklist": "off",

    "id-length": "off",

    "id-match": "off",

    "implicit-arrow-linebreak": ["error", "beside"],

    "indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "FunctionDeclaration": {
        "parameters": 1,
        "body": 1
      },
      "FunctionExpression": {
        "parameters": 1,
        "body": 1
      },
      "CallExpression": {
        "arguments": 1
      },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      "ignoredNodes": [
        "JSXElement",
        "JSXElement > *",
        "JSXAttribute",
        "JSXIdentifier",
        "JSXNamespacedName",
        "JSXMemberExpression",
        "JSXSpreadAttribute",
        "JSXExpressionContainer",
        "JSXOpeningElement",
        "JSXClosingElement",
        "JSXText",
        "JSXEmptyExpression",
        "JSXSpreadChild"
      ],
      "ignoreComments": false
    }],

    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],

    "keyword-spacing": ["error", {
      "before": true,
      "after": true,
      "overrides": {
        "return": { "after": true },
        "throw": { "after": true },
        "case": { "after": true }
      }
    }],

    "line-comment-position": ["off", {
      "position": "above",
      "ignorePattern": "",
      "applyDefaultPatterns": true
    }],

    "linebreak-style": ["error", "unix"],

    "lines-between-class-members": ["error", "always", {
      "exceptAfterSingleLine": false
    }],

    "lines-around-comment": "off",

    "lines-around-directive": ["error", {
      "before": "always",
      "after": "always"
    }],

    "max-depth": ["off", 4],

    "max-len": ["error", 100, 2, {
      "ignoreUrls": true,
      "ignoreComments": false,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true
    }],

    "max-lines": ["off", {
      "max": 300,
      "skipBlankLines": true,
      "skipComments": true
    }],

    "max-lines-per-function": ["off", {
      "max": 50,
      "skipBlankLines": true,
      "skipComments": true,
      "IIFEs": true
    }],

    "max-nested-callbacks": "off",

    "max-params": ["off", 3],

    "max-statements": ["off", 10],

    "max-statements-per-line": ["off", { "max": 1 }],

    "multiline-comment-style": ["off", "starred-block"],

    "multiline-ternary": ["off", "never"],

    "new-cap": ["error", {
      "newIsCap": true,
      "newIsCapExceptions": [],
      "capIsNew": false,
      "capIsNewExceptions": ["Immutable.Map", "Immutable.Set", "Immutable.List"]
    }],

    "new-parens": "error",

    "newline-after-var": "off",

    "newline-before-return": "off",

    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 4 }],

    "no-array-constructor": "error",

    "no-bitwise": "error",

    "no-continue": "error",

    "no-inline-comments": "off",

    "no-lonely-if": "error",

    "no-mixed-operators": ["error", {
      "groups": [
        ["%", "**"],
        ["%", "+"],
        ["%", "-"],
        ["%", "*"],
        ["%", "/"],
        ["**", "+"],
        ["**", "-"],
        ["**", "*"],
        ["**", "/"],
        ["&", "|", "^", "~", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      "allowSamePrecedence": false
    }],

    "no-mixed-spaces-and-tabs": "error",

    "no-multi-assign": ["error"],

    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],

    "no-negated-condition": "off",

    "no-nested-ternary": "error",

    "no-new-object": "error",

    "no-plusplus": "error",

    "no-restricted-syntax": [
      "error",
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
      },
      {
        "selector": "ForOfStatement",
        "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations."
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        "selector": "WithStatement",
        "message": "'with' is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],

    "no-spaced-func": "error",

    "no-tabs": "error",

    "no-ternary": "off",

    "no-trailing-spaces": ["error", {
      "skipBlankLines": false,
      "ignoreComments": false
    }],

    "no-underscore-dangle": ["error", {
      "allow": [],
      "allowAfterThis": false,
      "allowAfterSuper": false,
      "enforceInMethodNames": false
    }],

    "no-unneeded-ternary": ["error", { "defaultAssignment": false }],

    "no-whitespace-before-property": "error",

    "nonblock-statement-body-position": ["error", "beside", { "overrides": {} }],

    "object-curly-spacing": ["error", "always"],

    "object-curly-newline": ["error", {
      "ObjectExpression": {
        "minProperties": 4,
        "multiline": true,
        "consistent": true
      },
      "ObjectPattern": {
        "minProperties": 4,
        "multiline": true,
        "consistent": true
      },
      "ImportDeclaration": {
        "minProperties": 4,
        "multiline": true,
        "consistent": true
      },
      "ExportDeclaration": {
        "minProperties": 4,
        "multiline": true,
        "consistent": true
      }
    }],

    "object-property-newline": ["error", {
      "allowAllPropertiesOnSameLine": true
    }],

    "one-var": ["error", "never"],

    "one-var-declaration-per-line": ["error", "always"],

    "operator-assignment": ["error", "always"],

    "operator-linebreak": ["error", "before", { "overrides": { "=": "none" } }],

    "padded-blocks": ["error", {
      "blocks": "never",
      "classes": "never",
      "switches": "never"
    }],

    "padding-line-between-statements": "off",

    "prefer-object-spread": "off",

    "quote-props": ["error", "as-needed", {
      "keywords": false,
      "unnecessary": true,
      "numbers": false
    }],

    "quotes": ["error", "single", { "avoidEscape": true }],

    "require-jsdoc": "off",

    "semi": ["error", "always"],

    "semi-spacing": ["error", { "before": false, "after": true }],

    "semi-style": ["error", "last"],

    "sort-keys": ["off", "asc", { "caseSensitive": false, "natural": true }],

    "sort-vars": "off",

    "space-before-blocks": "error",

    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],

    "space-in-parens": ["error", "never"],

    "space-infix-ops": "error",

    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false,
      "overrides": {
      }
    }],

    "spaced-comment": ["error", "always", {
      "line": {
        "exceptions": ["-", "+"],
        "markers": ["=", "!"]
      },
      "block": {
        "exceptions": ["-", "+"],
        "markers": ["=", "!"],
        "balanced": true
      }
    }],

    "switch-colon-spacing": ["error", { "after": true, "before": false }],

    "template-tag-spacing": ["error", "never"],

    "unicode-bom": ["error", "never"],

    "wrap-regex": "off",

    "init-declarations": "off",

    "no-catch-shadow": "off",

    "no-delete-var": "error",

    "no-label-var": "error",

    "no-shadow": "error",

    "no-shadow-restricted-names": "error",

    "no-undef": "error",

    "no-undef-init": "error",

    "no-undefined": "off",

    "no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": true
    }],

    "no-use-before-define": ["error", {
      "functions": true,
      "classes": true,
      "variables": true
    }],


    "jsx-a11y/anchor-has-content": ["error", { "components": [] }],

    "jsx-a11y/aria-role": ["error", { "ignoreNonDom": false }],

    "jsx-a11y/aria-props": "error",

    "jsx-a11y/aria-proptypes": "error",

    "jsx-a11y/aria-unsupported-elements": "error",

    "jsx-a11y/alt-text": ["error", {
      "elements": ["img", "object", "area", "input[type='image']"],
      "img": [],
      "object": [],
      "area": [],
      "input[type='image']": []
    }],

    "jsx-a11y/img-redundant-alt": "error",

    "jsx-a11y/label-has-for": ["error", {
      "components": [],
      "required": {
        "every": ["nesting", "id"]
      },
      "allowChildren": false
    }],

    "jsx-a11y/label-has-associated-control": ["error", {
      "labelComponents": [],
      "labelAttributes": [],
      "controlComponents": [],
      "assert": "both",
      "depth": 25
    }],

    "jsx-a11y/mouse-events-have-key-events": "error",

    "jsx-a11y/no-access-key": "error",

    "jsx-a11y/no-onchange": "off",

    "jsx-a11y/interactive-supports-focus": "error",

    "jsx-a11y/role-has-required-aria-props": "error",

    "jsx-a11y/role-supports-aria-props": "error",

    "jsx-a11y/tabindex-no-positive": "error",

    "jsx-a11y/heading-has-content": ["error", { "components": [""] }],

    "jsx-a11y/html-has-lang": "error",

    "jsx-a11y/lang": "error",

    "jsx-a11y/no-distracting-elements": ["error", {
      "elements": ["marquee", "blink"]
    }],

    "jsx-a11y/scope": "error",

    "jsx-a11y/click-events-have-key-events": "error",

    "jsx-a11y/no-static-element-interactions": ["error", {
      "handlers": [
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp"
      ]
    }],

    "jsx-a11y/no-noninteractive-element-interactions": ["error", {
      "handlers": [
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp"
      ]
    }],

    "jsx-a11y/accessible-emoji": "error",

    "jsx-a11y/aria-activedescendant-has-tabindex": "error",

    "jsx-a11y/iframe-has-title": "error",

    "jsx-a11y/no-autofocus": ["error", { "ignoreNonDOM": true }],

    "jsx-a11y/no-redundant-roles": "error",

    "jsx-a11y/media-has-caption": ["error", {
      "audio": [],
      "video": [],
      "track": []
    }],

    "jsx-a11y/no-interactive-element-to-noninteractive-role": ["error", {
      "tr": ["none", "presentation"]
    }],

    "jsx-a11y/no-noninteractive-element-to-interactive-role": ["error", {
      "ul": [
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "tablist",
        "tree",
        "treegrid"
      ],
      "ol": [
        "listbox",
        "menu",
        "menubar",
        "radiogroup",
        "tablist",
        "tree",
        "treegrid"
      ],
      "li": ["menuitem", "option", "row", "tab", "treeitem"],
      "table": ["grid"],
      "td": ["gridcell"]
    }],

    "jsx-a11y/no-noninteractive-tabindex": ["error", {
      "tags": [],
      "roles": ["tabpanel"]
    }],

    "jsx-a11y/anchor-is-valid": ["error", {
      "components": ["Link"],
      "specialLink": ["to"],
      "aspects": ["noHref", "invalidHref", "preferButton"]
    }],


    "jsx-quotes": ["error", "prefer-double"],

    "class-methods-use-this": ["error", {
      "exceptMethods": [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentWillMount",
        "UNSAFE_componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "UNSAFE_componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "UNSAFE_componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "componentDidCatch",
        "getSnapshotBeforeUpdate"
      ]
    }],

    "react/display-name": ["off", { "ignoreTranspilerName": false }],

    "react/forbid-prop-types": ["error", {
      "forbid": ["any", "array", "object"],
      "checkContextTypes": true,
      "checkChildContextTypes": true
    }],

    "react/forbid-dom-props": ["off", { "forbid": [] }],

    "react/jsx-boolean-value": ["error", "never", { "always": [] }],

    "react/jsx-closing-bracket-location": ["error", "line-aligned"],

    "react/jsx-closing-tag-location": "error",

    "react/jsx-curly-spacing": ["error", "never", { "allowMultiline": true }],

    "react/jsx-handler-names": ["off", {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on"
    }],

    "react/jsx-indent-props": ["error", 2],

    "react/jsx-key": "off",

    "react/jsx-max-props-per-line": ["error", {
      "maximum": 1,
      "when": "multiline"
    }],

    "react/jsx-no-bind": ["error", {
      "ignoreRefs": true,
      "allowArrowFunctions": true,
      "allowBind": false
    }],

    "react/jsx-no-duplicate-props": ["error", { "ignoreCase": true }],

    "react/jsx-no-literals": ["off", { "noStrings": true }],

    "react/jsx-no-undef": "error",

    "react/jsx-pascal-case": ["error", {
      "allowAllCaps": true,
      "ignore": []
    }],

    "react/sort-prop-types": ["off", {
      "ignoreCase": true,
      "callbacksLast": false,
      "requiredFirst": false,
      "sortShapeProp": true
    }],

    "react/jsx-sort-prop-types": "off",

    "react/jsx-sort-props": ["off", {
      "ignoreCase": true,
      "callbacksLast": false,
      "shorthandFirst": false,
      "shorthandLast": false,
      "noSortAlphabetically": false,
      "reservedFirst": true
    }],

    "react/jsx-sort-default-props": ["off", {
      "ignoreCase": true
    }],

    "react/jsx-uses-react": ["error"],

    "react/jsx-uses-vars": "error",

    "react/no-danger": "warn",

    "react/no-deprecated": ["error"],

    "react/no-did-mount-set-state": "off",

    "react/no-did-update-set-state": "error",

    "react/no-will-update-set-state": "error",

    "react/no-direct-mutation-state": "off",

    "react/no-is-mounted": "error",

    "react/no-multi-comp": ["error", { "ignoreStateless": true }],

    "react/no-set-state": "off",

    "react/no-string-refs": "error",

    "react/no-unknown-property": "error",

    "react/prefer-es6-class": ["error", "always"],

    "react/prefer-stateless-function": ["error", {
      "ignorePureComponents": true
    }],

    "react/prop-types": ["error", {
      "ignore": [],
      "customValidators": [],
      "skipUndeclared": false
    }],

    "react/react-in-jsx-scope": "error",

    "react/require-render-return": "error",

    "react/self-closing-comp": "error",

    "react/sort-comp": ["error", {
      "order": [
        "static-methods",
        "instance-variables",
        "lifecycle",
        "/^on.+$/",
        "getters",
        "setters",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "instance-methods",
        "everything-else",
        "rendering"
      ],
      "groups": {
        "lifecycle": [
          "displayName",
          "propTypes",
          "contextTypes",
          "childContextTypes",
          "mixins",
          "statics",
          "defaultProps",
          "constructor",
          "getDefaultProps",
          "getInitialState",
          "state",
          "getChildContext",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
        ],
        "rendering": [
          "/^render.+$/",
          "render"
        ]
      }
    }],

    "react/jsx-wrap-multilines": ["error", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "parens-new-line"
    }],

    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],

    "react/jsx-equals-spacing": ["error", "never"],

    "react/jsx-indent": ["error", 2],

    "react/jsx-no-target-blank": ["error", { "enforceDynamicLinks": "always" }],

    "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],

    "react/jsx-no-comment-textnodes": "error",

    "react/no-render-return-value": "error",

    "react/require-optimization": ["off", { "allowDecorators": [] }],

    "react/no-find-dom-node": "error",

    "react/forbid-component-props": ["off", { "forbid": [] }],

    "react/forbid-elements": ["off", { "forbid": [] }],

    "react/no-danger-with-children": "error",

    "react/no-unused-prop-types": ["error", {
      "customValidators": [
      ],
      "skipShapeProps": true
    }],

    "react/style-prop-object": "error",

    "react/no-unescaped-entities": "error",

    "react/no-children-prop": "error",

    "react/jsx-tag-spacing": ["error", {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never"
    }],

    "react/jsx-space-before-closing": ["off", "always"],

    "react/no-array-index-key": "error",

    "react/require-default-props": ["error", {
      "forbidDefaultForRequired": true
    }],

    "react/forbid-foreign-prop-types": ["warn", { "allowInPropTypes": true }],

    "react/void-dom-elements-no-children": "error",

    "react/default-props-match-prop-types": ["error", {
      "allowRequiredDefaults": false
    }],

    "react/no-redundant-should-component-update": "error",

    "react/no-unused-state": "error",

    "react/boolean-prop-naming": ["off", {
      "propTypeNames": ["bool", "mutuallyExclusiveTrueProps"],
      "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
      "message": ""
    }],

    "react/no-typos": "error",

    "react/jsx-curly-brace-presence": ["error", {
      "props": "never",
      "children": "never"
    }],

    "react/jsx-one-expression-per-line": "off",

    "react/destructuring-assignment": ["off", "always"],

    "react/no-access-state-in-setstate": "error",

    "react/button-has-type": ["error", {
      "button": true,
      "submit": true,
      "reset": false
    }],

    "react/jsx-child-element-spacing": "off",

    "react/no-this-in-sfc": "error",

    "react/jsx-max-depth": "off",

    "react/jsx-props-no-multi-spaces": "error",

    "react/no-unsafe": "off"
  }
}
`;

// .gitignore
const gitignore =
`node_modules
yarn.lock
package-lock.json
`;

// package.json
const packageJson =
`{
  "name": "environment",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "browserslist": [
    "last 4 version",
    "ie >= 11"
  ],
  "scripts": {
    "prod": "webpack --env.mode production",
    "dev": "webpack-dev-server --env.mode development"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,json,scss,md}": [
      "prettier --write",
      "git add"
    ]
  },
  "dependencies": {
    "autoprefixer": "^9.0.1",
    "prop-types": "^15.6.2",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-hot-loader": "^4.3.4",
    "react-router-dom": "^4.3.1"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0-beta.54",
    "@babel/plugin-proposal-class-properties": "^7.0.0-beta.54",
    "@babel/plugin-proposal-object-rest-spread": "^7.0.0-beta.54",
    "@babel/preset-env": "^7.0.0-beta.54",
    "@babel/preset-react": "^7.0.0-beta.54",
    "babel-eslint": "^8.2.6",
    "babel-loader": "^8.0.0-beta",
    "clean-webpack-plugin": "^0.1.19",
    "css-loader": "^1.0.0",
    "eslint": "^5.2.0",
    "eslint-plugin-import": "^2.13.0",
    "eslint-plugin-jsx-a11y": "^6.1.1",
    "eslint-plugin-react": "^7.10.0",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "husky": "^1.0.0-rc.13",
    "lint-staged": "^7.2.0",
    "mini-css-extract-plugin": "^0.4.1",
    "node-sass": "^4.9.2",
    "postcss-loader": "^2.1.6",
    "postcss-scss": "^2.0.0",
    "prettier": "^1.13.7",
    "sass-loader": "^7.0.3",
    "style-loader": "^0.21.0",
    "webpack": "^4.16.3",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.5"
  }
}
`;

// postcss.config.js
const postcssConfig =
`const autoprefixer = require('autoprefixer');

module.exports = {
  parser: 'postcss-scss',
  plugins: [autoprefixer()],
}
`;

// prettier.config.js
const prettierConfig =
`module.exports = {
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'always',
};
`;

// readmy.md
const readmy =
`#  Installation
* Install [Node.js](https://nodejs.org/).
* Install [Git](https://git-scm.com/).
* Install [Yarn](https://yarnpkg.com/en/docs/install#debian-stable).
* Download this project or run the following command in terminal or bash
\`\`\`git clone https://github.com/sergey0602/Working-Environment.git\`\`\`.
  * Open terminal or bash in folder with package.json file and run the following command \`\`\`yarn install\`\`\` to install the project dependencies.
* After install the project dependencies, run the project in development mode with the command \`\`\`yarn run dev\`\`\` or in production mode with the command \`\`\`yarn run prod\`\`\`.
`;

// webpack.config.js
const webpackConfig =
`const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  const isCssExtractPlugin = env.mode === 'production'
    ? { loader: MiniCssExtractPlugin.loader }
    : { loader: 'style-loader' };
  const isSourceMap = env.mode === 'production' ? false : 'inline-source-map';

  const config = {
    mode: env.mode,
    entry: './src/index.js',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool: isSourceMap,

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss/,
          use: [
            isCssExtractPlugin,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                camelCase: true,
                modules: true,
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
      ],
    },

    devServer: {
      compress: true,
      open: true,
      port: 6289,
      historyApiFallback: true,
      hot: true,
      progress: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',

        // favicon: 'public/logo.ico',
      }),
      new CleanWebpackPlugin(['dist']),
      new MiniCssExtractPlugin({
        filename: 'main.css',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],

    resolve: {
      alias: {
        Components: resolve(__dirname, 'src/components/'),
        Containers: resolve(__dirname, 'src/containers/'),
        images: resolve(__dirname, 'src/images/'),
      },
    },
  };

  return config;
};
`;

const getArguments = (flag) => {
  const index = process.argv.indexOf(flag);
  return index !== -1 ? process.argv[index + 1] : null;
}

const projectName = getArguments('--project-name') ?
  getArguments('--project-name') :
  'myProject';

const rootDirectory = getArguments('--path') ?
  getArguments('--path') :
  __dirname;

const newFoldersPath = [
  projectName,
  `${projectName}/public`,
  `${projectName}/src`,
  `${projectName}/src/common_styles`,
  `${projectName}/src/components`,
  `${projectName}/src/containers`,
  `${projectName}/src/fonts`,
  `${projectName}/src/images`,
  `${projectName}/src/components/Header`,
  `${projectName}/src/containers/App`,
  `${projectName}/src/fonts/woff`,
  `${projectName}/src/fonts/woff2`,
];

const templates = [
  { path: `${projectName}/public/index.html`, template: indexHtml },
  { path: `${projectName}/src/common_styles/fonts.scss`, template: fontsScss },
  { path: `${projectName}/src/common_styles/mixins.scss`, template: mixinsScss },
  { path: `${projectName}/src/common_styles/reset.scss`, template: resetScss },
  { path: `${projectName}/src/common_styles/variables.scss`, template: variablesScss },
  { path: `${projectName}/src/components/index.js`, template: indexComponents },
  { path: `${projectName}/src/components/Header/Header.js`, template: headerJs },
  { path: `${projectName}/src/components/Header/Header.scss`, template: headerScss },
  { path: `${projectName}/src/containers/index.js`, template: indexContainers },
  { path: `${projectName}/src/containers/App/App.js`, template: appJs },
  { path: `${projectName}/src/containers/App/App.scss`, template: appScss },
  { path: `${projectName}/src/images/index.js`, template: indexImages },
  { path: `${projectName}/src/index.js`, template: indexJs },
  { path: `${projectName}/.babelrc`, template: babelrc },
  { path: `${projectName}/.eslintrc`, template: eslintrc },
  { path: `${projectName}/.gitignore`, template: gitignore },
  { path: `${projectName}/package.json`, template: packageJson },
  { path: `${projectName}/postcss.config.js`, template: postcssConfig },
  { path: `${projectName}/prettier.config.js`, template: prettierConfig },
  { path: `${projectName}/README.md`, template: readmy },
  { path: `${projectName}/webpack.config.js`, template: webpackConfig },
];

const createFolders = (pathArray) => {
  if (!Array.isArray(pathArray)) {
    throw new Error('Incorrect folder create data type')
  }

  pathArray.forEach(path => {
    fs.mkdirSync(`${rootDirectory}/${path}`)
    console.log(`${path} folder has been successfully created`);
  });
}

const createFiles = (files) => {
  if (!Array.isArray(files)) {
    throw new Error('Incorrect files data type')
  }

  templates.forEach(file => {
    fs.writeFile(
      `${rootDirectory}/${file.path}`,
      file.template,
      (error) => {
        error ?
          console.log(error) :
          console.log(`${file.path} has been successfully created`);
      }
    );
  });
}

const createEnvironment = () => {
  createFolders(newFoldersPath);
  createFiles(templates);
}

createEnvironment();
