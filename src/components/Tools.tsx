import Separator from './Separator'
import ToolIcon from '@/assets/images/tools.svg?react'
import wordpressSrc from '@/assets/images/wp.png'
import jotformSrc from '@/assets/images/jotform.png'
import strapiSrc from '@/assets/images/strapi.png'
import figmaSrc from '@/assets/images/figma.png'

const TOOLS_LIST = [
  { name: 'Wordpress', src: wordpressSrc },
  { name: 'Jotform', src: jotformSrc },
  { name: 'Strapi', src: strapiSrc },
  { name: 'Figma', src: figmaSrc }
]
export default function Tools() {
  return (
    <div>
      <h2>Tool</h2>
      <Separator />
      <div className="flex gap-1 items-center mt-2 mb-4">
        <ToolIcon fill="#37352f" width={20} />
        <span>Tool</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {TOOLS_LIST.map(({ name, src }) => (
          <div className="border-[#37352f29] border-solid border-[1px] px-2 py-3 flex gap-2 items-center">
            <img src={src} className="w-5 h-5" />
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}
