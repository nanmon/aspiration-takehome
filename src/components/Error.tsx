import { ApolloError } from "@apollo/client";
import { isBadCredentialsNetworkError, BadCredentialsNetworkError } from "../graphql/errors";

interface Props {
  error: ApolloError
}
function Error({ error }: Props) {
  if (!error) return null;
  if (error.message === 'NetworkError when attempting to fetch resource.')
    return <NetworkError/>
  if (isBadCredentialsNetworkError(error.networkError))
    return <UnauthorizedError error={error.networkError}/>
  return <UnknownError/>
}

export default Error;

function NetworkError() {
  return (
    <>
      <h1>Network Error</h1>
      <p>Cannot reach github.com</p>
    </>
  )
}

function UnauthorizedError({ error }: { error: BadCredentialsNetworkError }) {
  const { message, documentation_url } = error.result;
  return (
    <>
      <h1>Unauthorized Error</h1>
      <p>{message}, Visit {documentation_url} for more info</p>
    </>
  )
}

function UnknownError() {
  return (
    <>
      <h1>Unknown Error</h1>
      <p>idk :c</p>
    </>
  )
}