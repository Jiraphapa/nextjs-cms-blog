import moment from 'moment'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import { getRecentPosts } from '../services'
import { getSimilarPosts } from '../services'

const PostWidget: React.FC<any> = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug){
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
      .then((result) => setRelatedPosts(result))
    }
  
    console.log(relatedPosts);
    
  }, [slug])

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3>
        {slug? 'Related Posts' : 'Recent Posts'}
      </h3>
    </div>
  )
  
  
}

export default PostWidget