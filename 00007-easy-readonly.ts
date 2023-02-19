// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}


// ============= Your Code Here =============
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

// ============= JS Code =============
function MyReadonlyJS (obj) {
  let result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result["readonly " + key]= obj[key];
    }
  }
  return result
}
