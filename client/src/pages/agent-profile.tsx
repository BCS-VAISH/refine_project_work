import {useOne } from '@refinedev/core';
import { useParams } from 'react-router';
import { User } from '../components/common/user';
import { Profile } from '../components';

const AgentProfile = () => {
  const {id} = useParams();
  const {data, isLoading, isError} = useOne({
    resource:'users',
    id:id,
  });
  const agentDetails = data?.data ?? [];
  if(isLoading) return <div>Loading...</div>
  if(isError)return <div>Error</div>

  return (
    <Profile
    type='Agent'
    name={agentDetails.name}
    email={agentDetails.email}
    avatar={agentDetails.avatar}
    properties={agentDetails.allProperties}
  />
  )
}

export default AgentProfile