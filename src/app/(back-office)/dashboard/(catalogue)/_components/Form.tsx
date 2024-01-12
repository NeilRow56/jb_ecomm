import { useFormState } from 'react-dom'
import FormInput from './FormInput'
import FormButton from './FormButton'
import { State, create } from '@/actions/create-category'

const Form = () => {
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

export default Form
