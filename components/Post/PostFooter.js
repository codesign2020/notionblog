import BLOG from '@/blog.config'
import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

import WechatPay from '@/components/Post/WechatPay'
import { MailIcon, ThumbUpIcon } from '@heroicons/react/outline'

const PostFooter = () => {
  const [showPay, setShowPay] = useState(false)
  const { locale } = useRouter()
  const router = useRouter()
  const t = lang[locale]

  return (
    <div className='w-full pb-12 justify-between font-medium text-gray-500 dark:text-gray-400'>
      {showPay && <WechatPay />}
    </div>
  )
}

export default PostFooter
