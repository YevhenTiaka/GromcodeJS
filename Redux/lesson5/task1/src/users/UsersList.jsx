import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';

const UsersList = ({ users, currentPage, prevPage, nextPage }) => {
  const itemsPerPage = 3;
  const pageNumber = currentPage + 1;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToRender = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        goPrev={prevPage}
        goNext={nextPage}
        totalItems={users.length}
        currentPage={pageNumber}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToRender.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  users: usersListSelector(state),
  currentPage: currentPageSelector(state),
});

const mapDispatch = {
  prevPage: usersActions.prevPage,
  nextPage: usersActions.nextPage,
};

const connector = connect(mapStateToProps, mapDispatch);

export default connector(UsersList);
