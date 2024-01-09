import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center gap-x-2  transition hover:opacity-75 md:flex">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <p className="pb-1 pt-1 text-lg text-neutral-700 dark:text-slate-200">
          Taskify
        </p>
      </div>
    </Link>
  )
}
