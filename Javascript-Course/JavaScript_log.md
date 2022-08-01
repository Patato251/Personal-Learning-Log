# Javascript Learning Log

---

## Purpose

**The following log is to track and record my overall knowledge, understanding and development around the JS language and anything noteworthy to remember for it. This log is not a complete formal guide and will only detail what is necessary for me to rememeber etc.**

---

# Javscript Basics 101 Notes (only things not known):

## Hello World Examples

- Able to do this inside the google chrome developer tools console
- Ways to print or have things shown from the console:
  - print()
  - alert()
  - Defining prop/variable and then passing into the print/alert functions to show or print something

## What is JS at a high level

- Considered as a high level language, object oriented development language, multi-paradigmed
- No memory management, object based storage system of variables, several different styles of programming possible

_Role of JS in web pages:_

- Functionaliuty of a webpage
- Add the dynamic elements to any web application
- Manipulate HTML or CSS, load data from servers or run an entire web application

_Examples:_

- Loading spinners on websites during loading of data etc
- Able to replace these elements and have them shown the data that was being loaded instead

- Many frameworks and tools exist to help assist in making web application development easier such as:

  - Angular
  - React
  - Vue

- Can also use Javascript on a web server to help create backend applications for web servers etc

  - This is usually using Node.js

- Can also use to build mobile tools and native desktop applications through :
  - React Native
  - Electron
  - Ionic

## Linking a JS file from HTML to the JS file itself

- Able to use`<script>` tag to implement simple js commands or js integration with a random HTML

  - This is done through direct coding in the HTML with the script tag
  - We can then print in the console with typical console logs or through showing in alerts etc
  - This is usually called inline scripting

- Linking external file, we just need to:
  - Create the external Javascript file
  - Go into the HTML page
  - Insert the `<script>` again into the code, and add the `src` attribute to load it into the page (similar to how we usually load src's for other images etc in HTML)

## Values and Variables

- Value given as any given piece of data or information, passed and used as requried such as strings, numbers etc
- Storing values makes them into a variable
- **Remember camelCase is recommended for variable naming**
- Cannot have number be start of variable names. Cannot have special chars in the name as well. Can also not use JS conventions/keywords for JS language

## Data Types

- 7 specified types of data types:
  1. Number - floating point numbers, used for decimals and ints
  2. String - Use for text/sequence of text
  3. Boolean - True or False
  4. Undefined - Value given to a vairable that is not defined (empty)
  5. Null - Empty value
  6. Symbol (ES2015) - Value is unique and cannot be changed
  7. BigInt (ES2020) - Larger integers than the Number type can store
- JS has dynamic type definition for values (although not always useful)
- Remember we can check the type of something by using the `typeOf` keyword/function
- Note that typeof for null will produce an object result rather than a null result (not fixed due to legacy reasons)

## Variable Declaration Methods

- 3 types of variable declaration:
  - let
  - const
  - var
- Should always declare variables cause it will create a global scale object to be used instead if not declared in the scope of a file

**_let_**

- Makes the variable that is initially created be a mutable object, and can therefore convert it's type, value etc whenever required

**_const_**

- Usually makes it immutable, not allowing change to occur to it
- Will spit error when trying to convert
- Cannot declare empty const variables then

**_var_**

- Usually avoided due to legacy reasons
- Old way of defining variables pre ES2015
- Works same way as let essentially, so should be avoided

## Basic Operators and operator precedence

- Standard math operators
  - `+ , - , *, /, (), =, +=, -=, *=, --, ++`
  - Also able to have power by `**`
- Can join strings with +
  - This will concat strings
- `Typeof` is classified as an operator

- Standard comparator operators

  - `>, <, >=, <= ===, !==`

- Operator precedence
  - Follows the standard operator procedence from MDN
  - Just check mdn operator precedence when we need to check the overall precedence of the various operators

## Strings and template literals

- Concatination of strings can auto convert or string conversion any type to match into a string (number etc)
- Template literals allow for inserting of variables into string easily rather than concatting all string variables required
- Need to use the `` keys
- Example:

```
`I'm a ${variableName}`
```

where variableName is the name of whichever variable needs to be inserted

## If/Else statements

- Referred to as control structures
- Syntax is standard

## Type conversion and coercion

- Conversion = manual conversion of one type to another
- Coercion = auto conversion, happens implicitly
- Use specific type conversion functions to perform specific mathematical actions
- For coercion:
  - `+` converts into string all types
  - `-, * and /` converts into numbers for correct types

## Truthy and Falsy values

- Conversion of values/statements when checked and produce a boolean style value of either truthy or falsy
- Five main falsy values:
  - `0, '', undefined, null or NaN`
- Most values like this will be due to type coercion
- Two main scenarios for type coercion to determine boolean value such as this is:
  - Logical context
  - Logic operators

## Equality Operators

- Single `=` is assignment
- Double `=` is equality operation with type coercion (so auto converts strings and numbers before comparing)
- Triple `=` is eqaulity operation
- Consider them as loose and strict comparators

## Boolean logic

- Usage of truth table and the way we can compare booleans to output a total boolean value calculation
- Essentially either && or || operations

## Switch Statements
- We use breaks to limit it cycling through all options in a switch case statement
- This means, if we don't insert break after each option, it will iterate through the code for each switch case statement afterwards

## Statements and expressions

- Expression = Produces a values  
- Statement = Larger chunk that doesnt produce a value

- Strings are expressions technically
- Some places that only expect expressions:
  - Template literal

## Ternary Operator
- Can assign a const with a conditional/ternary operator
- Example:
  - `const testVar = sampleCondition ? true return : false return`
- Can also use them inside a template literal where statements usually can't be used, and take advantage of this 
- This is because this spits out a pure value so similar to an expression and produces a value rather than define/assign one

## Differences between each JS version
- 