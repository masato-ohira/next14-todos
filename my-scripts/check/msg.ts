const checkCommitMessage = () => {
  if ( process.env.M ) {
    return true
  } else {
    console.error('commitメッセージは必須です')
    process.exit(1)
  }
}
checkCommitMessage()
