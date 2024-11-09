# The significance of union and intersection types in Typescript

### Union Types

When you need to choose a type among multiple available types, we can use union types.

Example 1:

```sh
    type ValueType = string | number | boolean;
    let value: ValueType;
    value = "Hi";
    value = 33;
```

### Intersection Types

It allows us to combine multiple types into one.

Example 1:

```sh
    type D = { name: string };
    type E = { age: number };
    type F = D & E; //{name: string, age: number}
```

Both are useful depends on needs. In both cases we don't need to declare multiple types and functions. In just one type or function we can use it dynamically.
