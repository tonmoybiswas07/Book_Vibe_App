import React from 'react';
import BannerPage from './components/Banner/page';
import BooksPage from './components/Shared/Books/page';

const page = () => {
  return (
    <div>
      <BannerPage/>
      <BooksPage></BooksPage>
    </div>
  );
};

export default page;