import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Username</label>
      <input type="text" name="username"/>
      <button>Update user</button>
      <button className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
