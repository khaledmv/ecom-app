import React, { useEffect } from 'react'

export const useTitle = (title) => {

 useEffect(() => {
        document.title = `${title} - ReactApp`
 }, [title])
  return null;
}
