# React Child State

_aka How React share state between components -- parent-child, peer-components and how do  state traversal in component tree_ 

```
yarn install
yarn dev
```

### Pattern: Parent Command Child

- [How to change the state of a child component from its parent in React](https://www.freecodecamp.org/news/react-changing-state-of-child-component-from-parent-8ab547436271/)

```
Landing
    >>> SuperHero
```

### Pattern: Parental Control Prop and Callback

- [Passing Data Between React Components — Parent, Children, Siblings](https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf)

```
Parent 
    >>> Child1
    >>> Child2
```

### Pattern: Contextual Parent

- Continue from above 👆 article

```
CtxProvider <> CtxStore
    >>> CtxChild1
    >>> CtxChild2
```

HOC _(now consider "Legacy")_
- https://legacy.reactjs.org/docs/context.html
- https://www.toptal.com/react/react-context-api

FC
- https://react.dev/learn/passing-data-deeply-with-context
- https://react.dev/reference/react/useContext

### Pattern: Redux!

Oh yeah!
