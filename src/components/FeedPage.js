import React from "react";

class FeedPage extends React.Component {
  render() {
    return (
      <div id="feedPage" className="mode-page">
        <h1 className="mode-page-header">This page is under construction.</h1>
        <button
          type="submit"
          id="logoutBtn"
          className="btn btn-primary fm-primary-btn"
          onClick={this.props.updatePage}
        >
          Log Out
        </button>
      </div>
    );
  }
}

export default FeedPage;