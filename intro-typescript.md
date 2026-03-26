# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06-alternative-to-enum.ts
This file demonstrates how to use literal types as an alternative to enums. Instead of creating an enum, specific string values like 'admin', 'guess', 'teacher', and 'student' are directly assigned as allowed values.

## 07-custom-type-role.ts
This file introduces type aliases (custom types) using the type keyword. A Role type is created to define allowed user roles, and a User object type is also defined with properties like name, age, role, and permission. 

## 08-functions.ts
This file explains function types and return types in TypeScript. It shows how to explicitly define return types like number, void, and never. It also demonstrates how to use functions as types (especially for callbacks), ensuring that functions receive and return the correct data types.

## 09-special-types.ts
This file focuses on special types like null and undefined. It shows how variables can be strictly assigned these values or combined with other types using union types (e.g., string | null).

## 10-form.html and 10-type-narrowing.ts
These files demonstrate type narrowing in the DOM. The HTML file provides a simple form with an input field, while the TypeScript file safely accesses that input element. Since getElementById can return null, type narrowing (using instanceof HTMLInputElement) ensures the element exists and is the correct type before accessing value.

## 11-optional.ts
This file explains optional values and modern operators in TypeScript. It covers optional function parameters with default values, optional object properties using ?, and the use of the nullish coalescing operator (??).