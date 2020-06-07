function getLength(input: number | string): number {
  if ((<string>input).length) {
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}

type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n;
  }
  return n();
}