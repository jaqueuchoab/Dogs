import React from 'react';
import UserHeader from './UserHeader';
import {Routes, Route} from  'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStatis from './UserStatis';
import { UserContext } from '../../UserContext';

const User = () => {
  const {data} = React.useContext(UserContext);
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>}/>
        <Route path='post' element={<UserPhotoPost />}/>
        <Route path='statistics' element={<UserStatis />}/>
      </Routes>
    </section>
  )
}

export default User;
