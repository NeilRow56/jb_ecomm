'use client'

import { State, create } from '@/actions/createCategory'
import { useFormState } from '@/react-dom-shim'
import { FormInput } from './form-input'
import { FormButton } from './form-buton'

export const Form = () => {
  const initialState = { message: null, errors: {} }
  const [state, dispatch] = useFormState<State, FormData>(create, initialState)
  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>

      <FormButton />
    </form>
  )
}
