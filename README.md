## Client

To use pre commit prettier check etc:

```
npm i
```

### Developing on macOS

#### Possible issues

- Getting redirects or any other cache errors?
  - Delete the folder at `/Users/Yourname/Library/Application Support/AppName`

### Code style conventions

-- to be improved --

File names: camelCase

React components: PascalCase

folders mostly camal but with only react components pascal case?

For comments use TSDoc:

```
export class Statistics {
  /**
   * Returns the average of two numbers.
   *
   * @remarks
   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The arithmetic mean of `x` and `y`
   *
   * @beta
   */
  public static getAverage(x: number, y: number): number {
    return (x + y) / 2.0;
  }
}
```

Will be using `pnpm`

Using [react-icons](https://github.com/react-icons/react-icons) for the icons
