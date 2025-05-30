import { useGetIdentity, useOne } from "@refinedev/core"
import { Profile } from "../components"
import { User } from "../components/common/user";

const MyProfile = () => {
  const {data:user} = useGetIdentity();
  const users = user as User
  const {data, isLoading, isError} = useOne({
    resource:'users',
    id:users?.userid,
  });
  const myProfile = data?.data ?? [];
  if(isLoading) return <div>Loading...</div>
  if(isError)return <div>Error</div>

  return (
    <Profile
      type='My'
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  )
}

export default MyProfile