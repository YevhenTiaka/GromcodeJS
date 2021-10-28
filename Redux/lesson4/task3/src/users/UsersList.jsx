import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from './users.actions';

const UsersList = ({ users, currentPage, handlePrev, handleNext }) => {
  const itemsPerPage = 3;
  const pageNumber = currentPage + 1;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToRender = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        totalItems={users.length}
        currentPage={currentPage}
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

const mapState = state => ({
  users: state.usersList,
  currentPage: state.currentPage,
});

const mapDispatch = {
  handlePrev: usersActions.handlePrev,
  handleNext: usersActions.handleNext,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
