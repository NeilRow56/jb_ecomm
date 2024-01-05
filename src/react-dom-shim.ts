// file: react-dom-shim.ts
import {
  //@ts-expect-error
  experimental_useFormState,
  //@ts-expect-error
  experimental_useFormStatus,
  // types are defined, but exports are not :(
  useFormState as undefined_useFormState,
  useFormStatus as undefined_useFormStatus,
} from 'react-dom'
