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
      <div className="mb-4 mt-2 flex items-center gap-1">
        <ToolIcon fill="#37352f" width={20} />
        <span>Tool</span>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {TOOLS_LIST.map(({ name, src }) => (
          <div
            key={name}
            className="flex items-center gap-2 border border-solid border-[#37352f29] px-2 py-3 hover:bg-[#37352f0a]"
          >
            <img src={src} className="size-5" />
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}
