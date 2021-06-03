import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY, useUser } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignOut() {
  const user = useUser();

  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <button
      type="button"
      onClick={() => {
        console.log('3- SignOut the current user from backend::', user);
        signout();
      }}
    >
      Sign Out
    </button>
  );
}
