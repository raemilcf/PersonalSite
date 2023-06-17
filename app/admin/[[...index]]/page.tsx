'use client'

import config from '@/sanity.config';

import { NextStudio } from 'next-sanity/studio';

//next 13 move everything to the server 


const AdminPage = () =>  {

    return <NextStudio config={config} />
}

export default AdminPage;
