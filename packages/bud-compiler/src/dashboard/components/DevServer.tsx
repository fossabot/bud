import React, {useEffect} from 'react'
import {Box, Text, useFocus} from 'ink'

const DevServer = ({build, actions, bud}) => {
  const {isFocused} = useFocus({autoFocus: false})
  useEffect(() => {
    actions?.setFocus({devServer: isFocused})
  }, [isFocused])

  return (
    <Box display={isFocused ? 'flex' : 'none'} flexDirection="column">
      <Box paddingLeft={1} paddingRight={1} flexDirection="column">
        <Text color="green">Server</Text>
        <Text wrap="wrap">{''}</Text>
      </Box>
    </Box>
  )
}

export {DevServer}
