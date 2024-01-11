import { RegisterForm } from '@/app/(back-office)/_components/shared/CreateForm'

type Props = {}

const NewCatageoryPage = (props: Props) => {
  return (
    <div className="flex h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <RegisterForm />
    </div>
  )
}

export default NewCatageoryPage
