import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'

function PostDetail() {
    const router = useRouter();
    const routerData = router.query;

    console.log('routerData', routerData)
    return (
    <div>
      <div className="bg-white p-8 border-b-2 rounded-lg">
        <div className="flex items-center gap-2">
          <Image
            src={routerData.avatar as any}
            className="w-10 rounded-full"
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <h2>{routerData.username}</h2>
        </div>
        <div className="py-4">
          <p>{routerData.description}</p>
        </div>
        {/* {children} */}
      </div>
    </div>
    )
}

export default PostDetail;