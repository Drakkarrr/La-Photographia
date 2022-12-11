import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../services/client'
import { feedQuery, searchQuery } from '../utils/helpers/data'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'

const Feed: React.FC = () => {
  const [pins, setPins] = useState<null | any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId) {
      setLoading(true)
      const query = searchQuery(categoryId)
      client.fetch(query).then(data => {
        setPins(data)
        setLoading(false)
      })
    } else {
      setLoading(true)
      client.fetch(feedQuery).then(data => {
        setPins(data)
        setLoading(false)
      })
    }
  }, [categoryId])
  const ideaName = categoryId || 'new'
  if (loading) {
    return <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>
}

export default Feed
