import LuggageIcon from '@/assets/images/lugguage.svg?react'
import Separator from './Separator'
export default function Header() {
  return (
    <header className="p-4">
      <LuggageIcon className="pb-3" width={78} />
      <h1>Louise Longsze</h1>
      <Separator />
    </header>
  )
}
