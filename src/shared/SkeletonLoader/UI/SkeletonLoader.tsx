import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonLoader = (props: any) => (
  <ContentLoader
    speed={3}
    width={280}
    height={467}
    viewBox="0 0 280 467"
    backgroundColor="#ebebeb"
    foregroundColor="#b8b8b8"
    {...props}
  >
    <rect x="497" y="255" rx="0" ry="0" width="139" height="378" />
    <rect x="483" y="461" rx="0" ry="0" width="139" height="118" />
    <rect x="475" y="449" rx="0" ry="0" width="139" height="118" />
    <rect x="551" y="474" rx="0" ry="0" width="139" height="118" />
    <rect x="489" y="454" rx="0" ry="0" width="546" height="163" />
    <rect x="474" y="432" rx="0" ry="0" width="339" height="155" />
    <rect x="-52" y="-21" rx="0" ry="0" width="387" height="397" />
    <rect x="-10" y="384" rx="0" ry="0" width="290" height="98" />
  </ContentLoader>
)

export default SkeletonLoader
