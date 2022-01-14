import React, { Component } from 'react';
import '../Style/Category.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const { category } = this.props;

    const categoryName = category[0].toUpperCase()
      + category.substr(1, category.length - 1);

    return (
      <article className="category-container">
        <h1 data-testid="category-name">
          { categoryName }
        </h1>
      </article>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.categoryReducer.category,
});

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Category);