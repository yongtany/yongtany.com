import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Pagination = ({page, lastPage, tag, canSearch }) => {
  const createPagePath = (page) => {
    return tag ? `/tag/${tag}/${page}` : `/page/${page}`;
  }

  return (
    <div className={cx('pagination')}>
      <Button disabled={page === 1} to={createPagePath(page -1)}>
        NEWER
      </Button>
      <div className={cx('number')}>
        PAGE {page}
      </div>
      <Button disabled={page===lastPage || !canSearch} to={createPagePath(page+1)}>
        OLDER
      </Button>
    </div>
  );
};

export default Pagination;
