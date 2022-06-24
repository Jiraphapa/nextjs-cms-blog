import React, {useRef, useState, useEffect} from 'react'

const CommentsForm: React.FC<any> = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setlocalStorage] = useState(null)
  const [showSuccessMessage, setshowSuccessMessage] = useState(false)
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h1>CommentsForm</h1>
    </div>
  )
}

export default CommentsForm