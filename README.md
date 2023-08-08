# React-Components-Lifecycle

This repository overviews the React.js component lifecycle and its relation to the `useEffect` hook.

## Overview

In React.js, components have a lifecycle that consists of different phases, which occur when a component is created, updated, or destroyed. The component lifecycle includes the following phases:

1. **Mounting**: This phase occurs when a component is initialized and inserted into the DOM.

2. **Updating**: This phase occurs when a component is re-rendered due to changes in props or state.

3. **Unmounting**: This phase occurs when a component is removed from the DOM.

## Using useEffect
Since we're using functional components we no longer need methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` or any other class component methods.

1. **Mounting**: If you pass an empty dependency array, the effect function passed to the useEffect will be run once the component gets mounted.

2. **Updating**: If you have any elements in your dependency array, the effect function passed to the useEffect will be run once the component gets mounted, and every time any props or state that the dependency array includes gets updated.

4. **Unmounting**: If any function gets returned by the effect function, it will be called when the component gets unmounted.

***Cleanup***: If any function gets returned by the effect function used in useEffect with a non-empty dependency array, that will be called before the updating phase with the previous values of the dependencies.

(Note that the cleanup function will also be called whenever the component gets unmounted, before the unmounting phase).