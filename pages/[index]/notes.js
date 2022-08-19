import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Loader from '../../components/Loader';
import NoData from '../../components/NoData';
import Note from '../../components/Note';
import { GET_NOTES } from '../../utils/graphql';

export default function Notes() {
  const router = useRouter();

  const path = router.asPath.split('/');

  console.log(path);

  const { loading, error, data } = useQuery(GET_NOTES, {
    variables: { categoryId: path[1] },
  });

  console.log(data);

  if (loading) return <Loader />;
  if (error) return <h1>error</h1>;

  return (
    <div className='p-5'>
      <Breadcrumb />
      {data.getNotes.length ? (
        <div className='grid lg:grid-cols-4 gap-5'>
          {data.getNotes.map((item) => (
            <Note key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <NoData>note</NoData>
      )}
    </div>
  );
}
